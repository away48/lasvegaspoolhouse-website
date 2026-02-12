import Link from 'next/link';

export default function CancellationPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-6">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-sm hover:underline mb-2 block">&larr; Back to Home</Link>
          <h1 className="text-4xl font-bold">Cancellation Policy</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">
        <p className="text-lg text-slate-600 mb-8">
          Last updated: February 11, 2026
        </p>

        <p>
          We understand that plans change. This cancellation policy outlines the terms for modifying or canceling your reservation.
        </p>

        <h2>Short-Term Stays (Less than 30 Nights)</h2>

        <p>
          We offer two rate options for short-term stays. Choose the rate that best fits your travel plans:
        </p>

        <h3>Non-Refundable Rate (15% Discount)</h3>
        <ul>
          <li><strong>Save 15% on your stay</strong></li>
          <li><strong>No refunds for any reason</strong> (including cancellations, modifications, or early checkout)</li>
          <li><strong>No-show:</strong> Full payment charged</li>
          <li>Best for travelers with firm plans</li>
        </ul>

        <h3>Flexible Rate (Standard Pricing)</h3>
        <ul>
          <li>Cancel at least <strong>30 days before check-in:</strong> 100% refund</li>
          <li>Cancel <strong>7-29 days before check-in:</strong> 50% refund</li>
          <li>Cancel <strong>less than 7 days before check-in:</strong> No refund</li>
          <li><strong>No-show:</strong> No refund</li>
        </ul>

        <div className="my-6 p-4 bg-amber-50 border-l-4 border-amber-500">
          <p className="text-sm text-amber-900 mb-0">
            <strong>💡 Tip:</strong> We strongly recommend purchasing <strong>travel insurance</strong> to protect your investment, 
            especially with non-refundable rates. Travel insurance can cover cancellations due to illness, emergencies, 
            or other unforeseen circumstances.
          </p>
        </div>

        <h2>Extended Stays (30+ Nights)</h2>

        <h3>Before Check-In</h3>
        <ul>
          <li>Cancel at least <strong>30 days before check-in:</strong> Full refund minus $200 administrative fee</li>
          <li>Cancel <strong>15-29 days before check-in:</strong> First month payment forfeited</li>
          <li>Cancel <strong>less than 15 days before check-in:</strong> No refund</li>
        </ul>

        <h3>After Check-In</h3>
        <ul>
          <li><strong>30-day written notice required</strong> to terminate stay</li>
          <li>Rent charged through end of notice period</li>
          <li>No refunds for partial months</li>
        </ul>

        <h2>Modifications</h2>
        <p>
          Changes to your reservation are subject to availability and may incur fees:
        </p>
        <ul>
          <li><strong>Date changes:</strong> Subject to rate differences and $50 modification fee</li>
          <li><strong>Unit changes:</strong> Subject to availability and price differences</li>
          <li><strong>Guest changes:</strong> Must be approved; ID verification required</li>
        </ul>

        <h2>Early Checkout</h2>
        <p>
          Checking out earlier than your scheduled departure date does not entitle you to a refund for the unused nights. 
          For extended stays, 30-day notice is required.
        </p>

        <h2>Force Majeure</h2>
        <p>
          In cases of unforeseen circumstances beyond our control (natural disasters, government orders, etc.), 
          we will work with guests to find a reasonable solution, which may include:
        </p>
        <ul>
          <li>Rescheduling to future dates</li>
          <li>Credit toward a future stay</li>
          <li>Partial or full refund (at our discretion)</li>
        </ul>

        <h2>Property-Initiated Cancellations</h2>
        <p>
          In rare cases where we must cancel your reservation due to property damage, overbooking errors, or other unforeseen issues:
        </p>
        <ul>
          <li>Full refund of all payments</li>
          <li>Assistance finding comparable alternative accommodation (if available)</li>
          <li>Compensation for any documented direct expenses (at our discretion)</li>
        </ul>

        <h2>Violations and Eviction</h2>
        <p>
          Guests who violate our Terms of Service or House Rules may be asked to leave immediately with no refund. This includes:
        </p>
        <ul>
          <li>Unauthorized parties or events</li>
          <li>Excessive noise or disturbances</li>
          <li>Illegal activities</li>
          <li>Property damage</li>
          <li>Exceeding maximum occupancy</li>
        </ul>

        <h2>How to Cancel</h2>
        <p>To cancel or modify your reservation:</p>
        <ol>
          <li>Email: <a href="mailto:info@atwproperties.com">info@atwproperties.com</a></li>
          <li>Phone: <a href="tel:+19073123456">(907) 312-3456</a></li>
          <li>Include your booking confirmation number and full name</li>
        </ol>
        <p>
          <strong>Note:</strong> Cancellations are effective from the date we receive your written notice, not the date you decide to cancel.
        </p>

        <h2>Refund Processing</h2>
        <p>
          Approved refunds will be processed within 7-10 business days to the original payment method. 
          Please allow additional time for your bank to process the refund.
        </p>

        <h2>Contact Us</h2>
        <p>Questions about this cancellation policy? Contact us:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:info@atwproperties.com">info@atwproperties.com</a></li>
          <li><strong>Phone:</strong> <a href="tel:+19073123456">(907) 312-3456</a></li>
        </ul>

        <div className="mt-12 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-600">
          <p className="text-sm text-blue-900 font-semibold mb-2">Important</p>
          <p className="text-sm text-blue-800 mb-0">
            This cancellation policy is part of your booking agreement. By completing a reservation, 
            you acknowledge and accept these terms. We reserve the right to modify this policy; 
            changes apply to future bookings only.
          </p>
        </div>
      </div>
    </main>
  );
}
