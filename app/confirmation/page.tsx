'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get('bookingId');
  const paymentIntent = searchParams.get('payment_intent');

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-xl font-bold">Stay Anchorage</Link>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-white p-12 rounded-2xl shadow-sm">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
          <p className="text-slate-600 mb-8">
            Thank you for your reservation at Stay Anchorage. You'll receive a confirmation email shortly with all the details.
          </p>

          {(bookingId || paymentIntent) && (
            <div className="bg-slate-50 p-4 rounded-xl mb-8 text-sm">
              {bookingId && <p><strong>Booking ID:</strong> {bookingId}</p>}
              {paymentIntent && <p className="text-slate-500 text-xs mt-1">Payment: {paymentIntent}</p>}
            </div>
          )}

          <div className="space-y-3">
            <p className="text-sm text-slate-600">
              Questions? Contact us at <a href="tel:+19073123456" className="text-blue-600 hover:underline">(907) 312-3456</a>
            </p>
            <Link
              href="/rooms"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Book Another Stay
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ConfirmationContent />
    </Suspense>
  );
}
