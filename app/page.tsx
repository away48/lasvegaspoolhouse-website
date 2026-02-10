'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('4');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) return;
    const checkInFormatted = checkIn.replace(/-/g, '');
    const checkOutFormatted = checkOut.replace(/-/g, '');
    router.push(`/book?checkIn=${checkInFormatted}&checkOut=${checkOutFormatted}&guests=${guests}`);
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Vegas lights effect */}
        <div className="absolute inset-0 bg-[url('https://media.xmlcal.com/pic/p0001/7759/33.png')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50" />
        
        {/* Animated glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/20 rounded-full blur-[120px] animate-pulse" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-300 text-sm font-medium backdrop-blur-sm">
              ✨ Private Pool House in Las Vegas
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent">
              Las Vegas Pool House
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light max-w-2xl mx-auto">
            Your Private Oasis Minutes from the Strip
          </p>
          
          {/* Search Form */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl max-w-3xl mx-auto border border-white/20">
            <form onSubmit={handleSearch} className="grid md:grid-cols-4 gap-6">
              <div className="text-left">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Check In
                </label>
                <input 
                  type="date" 
                  min={minDate}
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Check Out
                </label>
                <input 
                  type="date"
                  min={checkIn || minDate}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Guests
                </label>
                <select 
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                >
                  {[2,3,4,5,6,7,8,10,12].map(n => (
                    <option key={n} value={n} className="bg-slate-900">{n} Guests</option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-900 font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/30"
                >
                  Check Availability
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Property Highlights */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your Private <span className="text-amber-500">Vegas Retreat</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Escape the crowds and enjoy your own private pool house, 
              just minutes from all the action
            </p>
          </div>
          
          {/* Main property card */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-200 to-slate-300 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <p className="text-amber-400 font-medium mb-1">Featured Property</p>
                <h3 className="text-3xl font-bold">The Pool House</h3>
              </div>
              <div className="w-full h-full bg-[url('https://media.xmlcal.com/pic/p0001/7759/02.png')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500" />
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-6">Luxury Meets Location</h3>
              <p className="text-slate-600 text-lg mb-8">
                Our stunning pool house offers the perfect blend of Vegas excitement 
                and peaceful retreat. With a private pool, modern amenities, and 
                space for groups up to 12, it&apos;s ideal for bachelor/bachelorette parties, 
                family reunions, or a getaway with friends.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: '🏊', label: 'Private Pool' },
                  { icon: '🛏️', label: 'Sleeps 8-12' },
                  { icon: '🚗', label: 'Free Parking' },
                  { icon: '📍', label: '10 min to Strip' },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-slate-900">From $299</span>
                <span className="text-slate-500">/night</span>
              </div>
              
              <Link 
                href="/book"
                className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 font-bold py-4 px-8 rounded-xl hover:from-amber-400 hover:to-yellow-400 transition-all shadow-lg shadow-amber-500/25"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Everything You Need</h2>
          <p className="text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            Premium amenities for the ultimate Vegas experience
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏊', title: 'Private Pool', desc: 'Your own heated pool with lounge area' },
              { icon: '🍳', title: 'Full Kitchen', desc: 'Gourmet kitchen for group meals' },
              { icon: '📺', title: 'Entertainment', desc: 'Smart TVs, sound system, game room' },
              { icon: '❄️', title: 'Climate Control', desc: 'AC throughout for desert comfort' },
              { icon: '🛋️', title: 'Spacious Living', desc: 'Open floor plan for gatherings' },
              { icon: '🧺', title: 'Washer/Dryer', desc: 'In-unit laundry facilities' },
              { icon: '📶', title: 'Fast WiFi', desc: 'High-speed internet for streaming' },
              { icon: '🔒', title: 'Secure Entry', desc: 'Keyless entry, gated community' },
            ].map((feature) => (
              <div key={feature.title} className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Prime Vegas Location</h2>
              <p className="text-slate-600 text-lg mb-8">
                Located in a quiet residential neighborhood yet just minutes from 
                everything Vegas has to offer. The best of both worlds.
              </p>
              
              <ul className="space-y-4">
                {[
                  '🎰 Las Vegas Strip — 10 minutes',
                  '✈️ Harry Reid Airport — 15 minutes',
                  '🎪 Fremont Street — 12 minutes',
                  '🛒 Shopping & Dining — 5 minutes',
                  '⛳ Golf Courses — 10 minutes',
                  '🏜️ Red Rock Canyon — 25 minutes',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl bg-slate-200">
              <div className="w-full h-full bg-[url('https://media.xmlcal.com/pic/p0001/7759/05.png')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://media.xmlcal.com/pic/p0001/7759/04.png')] bg-cover bg-center opacity-20" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Experience <span className="text-amber-400">Vegas Your Way?</span>
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Skip the hotel crowds. Book your private pool house retreat today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/book"
              className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 font-bold py-4 px-8 rounded-xl hover:from-amber-400 hover:to-yellow-400 transition-all shadow-lg"
            >
              Book Your Stay
            </Link>
            <a 
              href="tel:+17025551234"
              className="inline-block bg-white/10 backdrop-blur text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-amber-400">Las Vegas Pool House</h3>
            <p className="text-slate-400 text-sm">
              Las Vegas, NV<br />
              <a href="mailto:info@lasvegaspoolhouse.com" className="hover:text-white transition-colors">
                info@lasvegaspoolhouse.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/book" className="hover:text-white transition-colors">Book Now</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Photo Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Policies</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cancellation" className="hover:text-white transition-colors">Cancellation Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} ATW Properties, LLC. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
