// Las Vegas Pool House Pricing Logic
// Tax rules: Tax on FIRST 31 nights only, then tax-exempt for additional nights
// Payment: Credit card (Stripe) adds 3% fee ONLY for 30+ night stays
// Short-term stays: no CC fee (absorbed by property)

export interface PricingBreakdown {
  nights: number;
  nightlyRates: { date: string; rate: number }[];
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  totalBeforeFees: number;
  ccFeePercent: number;
  ccFeeAmount: number;
  totalWithCCFee: number;
  totalACH: number;
  isLongTerm: boolean;
  billingSchedule?: BillingPeriod[];
}

export interface BillingPeriod {
  periodNumber: number;
  startDate: string;
  endDate: string;
  nights: number;
  subtotal: number;
  taxAmount: number;
  total: number;
  totalWithCCFee: number;
  isFirstPayment: boolean;
  isProrated: boolean;
}

const LONG_TERM_THRESHOLD = 30;
const CC_FEE_PERCENT = 0.03;
const LAS_VEGAS_TAX_RATE = 0.13; // 13% transient occupancy tax
const TAX_EXEMPTION_THRESHOLD = 31; // Tax exempt after 31 nights

export function calculatePricing(
  nightlyRates: { date: string; rate: number }[],
  taxRateOverride?: number
): PricingBreakdown {
  const nights = nightlyRates.length;
  const isLongTerm = nights >= LONG_TERM_THRESHOLD;
  const taxRate = taxRateOverride ?? LAS_VEGAS_TAX_RATE;
  
  const subtotal = nightlyRates.reduce((sum, r) => sum + r.rate, 0);
  
  // Las Vegas: Tax on first 31 nights only
  let taxAmount = 0;
  if (nights <= TAX_EXEMPTION_THRESHOLD) {
    // All nights are taxed
    taxAmount = Math.round(subtotal * taxRate * 100) / 100;
  } else {
    // Only first 31 nights are taxed
    const taxableNights = nightlyRates.slice(0, TAX_EXEMPTION_THRESHOLD);
    const taxableSubtotal = taxableNights.reduce((sum, r) => sum + r.rate, 0);
    taxAmount = Math.round(taxableSubtotal * taxRate * 100) / 100;
  }
  
  const totalBeforeFees = subtotal + taxAmount;
  
  // CC fee only applies to long-term stays (30+ nights)
  const ccFeeAmount = isLongTerm ? Math.round(totalBeforeFees * CC_FEE_PERCENT * 100) / 100 : 0;
  
  const breakdown: PricingBreakdown = {
    nights,
    nightlyRates,
    subtotal,
    taxRate,
    taxAmount,
    totalBeforeFees,
    ccFeePercent: isLongTerm ? CC_FEE_PERCENT : 0,
    ccFeeAmount,
    totalWithCCFee: totalBeforeFees + ccFeeAmount,
    totalACH: totalBeforeFees,
    isLongTerm,
  };

  if (isLongTerm) {
    breakdown.billingSchedule = calculateBillingSchedule(nightlyRates, taxRate);
  }

  return breakdown;
}

function calculateBillingSchedule(
  nightlyRates: { date: string; rate: number }[],
  taxRate: number
): BillingPeriod[] {
  const periods: BillingPeriod[] = [];
  let periodStart = 0;
  let periodNumber = 1;
  let totalNightsProcessed = 0;

  while (periodStart < nightlyRates.length) {
    const periodEnd = Math.min(periodStart + 30, nightlyRates.length);
    const periodRates = nightlyRates.slice(periodStart, periodEnd);
    const periodNights = periodRates.length;
    const isProrated = periodNumber > 1 && periodNights < 30;
    
    const subtotal = periodRates.reduce((sum, r) => sum + r.rate, 0);
    
    // Calculate tax for this period
    let taxAmount = 0;
    const periodStartNight = totalNightsProcessed + 1;
    const periodEndNight = totalNightsProcessed + periodNights;
    
    if (periodStartNight <= TAX_EXEMPTION_THRESHOLD) {
      // Some or all nights in this period are taxable
      const taxableNightsInPeriod = Math.min(periodEndNight, TAX_EXEMPTION_THRESHOLD) - periodStartNight + 1;
      if (taxableNightsInPeriod > 0) {
        const taxableRates = periodRates.slice(0, taxableNightsInPeriod);
        const taxableSubtotal = taxableRates.reduce((sum, r) => sum + r.rate, 0);
        taxAmount = Math.round(taxableSubtotal * taxRate * 100) / 100;
      }
    }
    // else: All nights in this period are beyond 31st night, so tax = 0
    
    const total = subtotal + taxAmount;
    const ccFee = Math.round(total * CC_FEE_PERCENT * 100) / 100;

    periods.push({
      periodNumber,
      startDate: periodRates[0].date,
      endDate: periodRates[periodRates.length - 1].date,
      nights: periodNights,
      subtotal,
      taxAmount,
      total,
      totalWithCCFee: total + ccFee,
      isFirstPayment: periodNumber === 1,
      isProrated,
    });

    totalNightsProcessed += periodNights;
    periodStart = periodEnd;
    periodNumber++;
  }

  return periods;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}
