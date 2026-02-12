import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-6">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-sm hover:underline mb-2 block">&larr; Back to Home</Link>
          <h1 className="text-4xl font-bold">Terms of Service</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">
        <p className="text-lg text-slate-600 mb-8">
          Last updated: February 11, 2026
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using this website or booking a property through Stay Anchorage (operated by ATW Properties, LLC), 
          you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2>2. Booking and Reservations</h2>
        <h3>2.1 Booking Confirmation</h3>
        <p>
          A booking is confirmed only upon receipt of payment and written confirmation from ATW Properties. 
          All bookings are subject to availability.
        </p>

        <h3>2.2 Guest Requirements</h3>
        <ul>
          <li>Guests must be at least 21 years of age to book</li>
          <li>Valid government-issued photo ID required at check-in</li>
          <li>Guest name on booking must match ID presented</li>
          <li>Maximum occupancy limits must be respected</li>
          <li><strong>Incidentals deposit required prior to check-in</strong> (amount varies by property, typically $200-$500)</li>
        </ul>

        <div className="my-6 p-4 bg-blue-50 border-l-4 border-blue-500">
          <p className="text-sm text-blue-900 mb-2"><strong>📋 Pre-Check-In Requirements:</strong></p>
          <p className="text-sm text-blue-800 mb-0">
            Before check-in, you will be required to provide a valid government-issued photo ID and authorize an 
            incidentals deposit. The deposit covers potential damages, excessive cleaning, missing items, or policy violations. 
            It will be refunded within 7-14 days after checkout if no issues are found.
          </p>
        </div>

        <h2>3. Payment Terms</h2>
        <h3>3.1 Payment Methods</h3>
        <p>We accept credit cards (Visa, Mastercard, American Express, Discover) and ACH bank transfers.</p>

        <h3>3.2 Payment Schedule</h3>
        <ul>
          <li><strong>Short-term stays (&lt;30 nights):</strong> Full payment due at booking</li>
          <li><strong>Extended stays (30+ nights):</strong> First month due at booking, subsequent months charged monthly</li>
        </ul>

        <h3>3.3 Processing Fees</h3>
        <ul>
          <li>Short-term stays: No credit card fees</li>
          <li>Extended stays (30+ nights): 3% credit card processing fee applies (ACH transfers have no fees)</li>
        </ul>

        <h2>4. Cancellation and Refund Policy</h2>
        <p>See our <Link href="/cancellation" className="text-blue-600 hover:underline">Cancellation Policy</Link> for full details.</p>

        <h2>5. House Rules</h2>
        <ul>
          <li>No smoking inside any property</li>
          <li>No parties or events without prior written approval</li>
          <li>Quiet hours: 10 PM - 8 AM</li>
          <li>Pets: Contact us for pet-friendly units and fees</li>
          <li>Guest must maintain cleanliness and report any damages immediately</li>
        </ul>

        <h2>6. Liability and Damages</h2>
        <h3>6.1 Security Deposit</h3>
        <p>
          A security deposit may be required and will be refunded within 14 days after checkout, 
          minus any deductions for damages or violations.
        </p>

        <h3>6.2 Guest Responsibility</h3>
        <p>
          Guests are responsible for any damage to the property beyond normal wear and tear. 
          ATW Properties reserves the right to charge for damages, excessive cleaning, or violations of house rules.
        </p>

        <h3>6.3 Limitation of Liability</h3>
        <p>
          ATW Properties is not liable for any injury, loss, damage, or theft of personal property during your stay. 
          We recommend obtaining travel or renter's insurance.
        </p>

        <h2>7. Privacy</h2>
        <p>
          Your privacy is important to us. See our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> for 
          how we collect, use, and protect your personal information.
        </p>

        <h2>8. Modifications</h2>
        <p>
          ATW Properties reserves the right to modify these terms at any time. Changes will be effective immediately upon posting. 
          Continued use of our services constitutes acceptance of the modified terms.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These terms shall be governed by and construed in accordance with the laws of the State of Alaska, United States, 
          without regard to its conflict of law provisions.
        </p>

        <h2>10. Contact Information</h2>
        <p>
          For questions about these Terms of Service, please contact us:
        </p>
        <ul>
          <li><strong>Company:</strong> ATW Properties, LLC</li>
          <li><strong>Email:</strong> <a href="mailto:info@atwproperties.com">info@atwproperties.com</a></li>
          <li><strong>Phone:</strong> <a href="tel:+19073123456">(907) 312-3456</a></li>
          <li><strong>Address:</strong> Anchorage, AK 99501</li>
        </ul>

        <div className="mt-12 p-6 bg-slate-50 rounded-xl">
          <p className="text-sm text-slate-600 mb-0">
            By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>
        </div>
      </div>
    </main>
  );
}
