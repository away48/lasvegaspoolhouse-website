'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function BookingContent() {
  const searchParams = useSearchParams();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('4');
  const [loading, setLoading] = useState(false);
  const [availability, setAvailability] = useState<any>(null);

  useEffect(() => {
    const ci = searchParams.get('checkIn');
    const co = searchParams.get('checkOut');
    const g = searchParams.get('guests');
    
    if (ci) setCheckIn(formatDateForInput(ci));
    if (co) setCheckOut(formatDateForInput(co));
    if (g) setGuests(g);
    
    if (ci && co) {
      checkAvailability(ci, co, g || '4');
    }
  }, [searchParams]);

  const formatDateForInput = (date: string) => {
    if (date.length === 8) {
      return `${date.slice(0,4)}-${date.slice(4,6)}-${date.slice(6,8)}`;
    }
    return date;
  };

  const formatDateForApi = (date: string) => date.replace(/-/g, '');

  const checkAvailability = async (ci: string, co: string, g: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/availability?checkIn=${ci}&checkOut=${co}&guests=${g}`);
      const data = await res.json();
      setAvailability(data);
    } catch (err) {
      console.error('Availability check failed:', err);
    }
    setLoading(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (checkIn && checkOut) {
      checkAvailability(formatDateForApi(checkIn), formatDateForApi(checkOut), guests);
    }
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-amber-400">
            Las Vegas Pool House
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <Link href="/book" className="text-amber-400">Book</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Book Your Stay</h1>
        
        {/* Search Form */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <form onSubmit={handleSearch} className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Check In</label>
              <input 
                type="date" 
                min={minDate}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Check Out</label>
              <input 
                type="date"
                min={checkIn || minDate}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Guests</label>
              <select 
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                {[2,3,4,5,6,7,8,10,12].map(n => (
                  <option key={n} value={n}>{n} Guests</option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 font-bold py-3 px-6 rounded-xl hover:from-amber-400 hover:to-yellow-400 transition-all disabled:opacity-50"
              >
                {loading ? 'Checking...' : 'Check Availability'}
              </button>
            </div>
          </form>
        </div>

        {/* Results */}
        {availability && (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {availability.available ? (
              <>
                <div className="flex items-center gap-2 text-green-600 mb-6">
                  <span className="text-2xl">✓</span>
                  <span className="text-xl font-semibold">Available!</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">The Pool House</h3>
                    <ul className="space-y-2 text-slate-600 mb-6">
                      <li>✓ Private heated pool</li>
                      <li>✓ Sleeps up to 12 guests</li>
                      <li>✓ Full kitchen & BBQ</li>
                      <li>✓ Game room & entertainment</li>
                      <li>✓ Free parking</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-50 rounded-xl p-6">
                    <div className="text-sm text-slate-600 mb-2">Total for your stay</div>
                    <div className="text-4xl font-bold text-slate-900 mb-4">
                      ${availability.price || 'TBD'}
                    </div>
                    <div className="text-sm text-slate-500 mb-6">
                      {availability.nights} nights × ${availability.pricePerNight || '299'}/night
                    </div>
                    
                    <a 
                      href={availability.bookingUrl || '#'}
                      className="block w-full text-center bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 font-bold py-4 px-6 rounded-xl hover:from-amber-400 hover:to-yellow-400 transition-all"
                    >
                      Continue to Checkout
                    </a>
                    
                    <p className="text-xs text-slate-500 mt-4 text-center">
                      Secure payment via Stripe
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">{availability.minNights && availability.nights < availability.minNights ? '📅' : '😔'}</div>
                <h3 className="text-xl font-semibold mb-2">
                  {availability.minNights && availability.nights < availability.minNights 
                    ? `${availability.minNights}-Night Minimum Required` 
                    : 'Not Available'}
                </h3>
                <p className="text-slate-600">
                  {availability.minNights && availability.nights < availability.minNights 
                    ? `This property requires a minimum stay of ${availability.minNights} nights. You selected ${availability.nights} night${availability.nights === 1 ? '' : 's'}.`
                    : 'Sorry, the property is not available for your selected dates. Try different dates or contact us for alternatives.'}
                </p>
              </div>
            )}
          </div>
        )}

        {!availability && !loading && (
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="text-5xl mb-4">🏊</div>
            <h3 className="text-xl font-semibold mb-2">Select Your Dates</h3>
            <p className="text-slate-600">
              Choose your check-in and check-out dates to see availability and pricing.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <BookingContent />
    </Suspense>
  );
}
