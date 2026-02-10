# Las Vegas Pool House - Website Spec

## Overview
A luxury-focused booking website for Las Vegas Pool House vacation rental, designed for groups and special occasions.

## Goals
- **Direct bookings** to avoid OTA fees
- **Premium Vegas vibe** - gold/purple/dark theme
- **Group-focused** - emphasize pool, space, party-friendly
- **Mobile-first** for travelers

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Backend:** Beds24 API (JSON API v2)
- **Payments:** Stripe + Forte (via Beds24)
- **Hosting:** Vercel
- **Domain:** lasvegaspoolhouse.com

## Current Status
- ✅ Homepage created (Vegas-themed)
- ✅ Booking page with availability check
- ✅ Beds24 API client (placeholder config)
- ⏳ Needs Beds24 property ID
- ⏳ Needs real photos
- ⏳ Needs Vercel deployment

## TODO for Alex

### 1. Beds24 Property ID
I couldn't find the Las Vegas Pool House property ID in Beds24. Please provide:
- Property ID (similar to 17757 for Rewak, 5780 for Stay Anchorage)
- Room IDs if there are multiple room types

Add to `.env.local`:
```
BEDS24_PROP_ID=xxxxx
```

### 2. Property Photos
Need real photos for:
- Hero background (pool/exterior)
- Main property showcase
- Amenities/interior shots
- Location/neighborhood

Upload to `/public/images/` or provide URLs to pull from existing listing.

### 3. Property Details
Please confirm:
- Exact address (for map)
- Max guests
- Number of bedrooms/bathrooms
- Nightly rate range
- Contact phone number
- Any specific house rules

### 4. Deploy to Vercel
Once property ID is set:
```bash
cd projects/lasvegaspoolhouse-website
npm install
vercel --prod
```

### 5. Connect Domain
In Vercel dashboard → Domains → Add lasvegaspoolhouse.com

## Design
- **Primary:** Gold/Amber (#c9a962, #f59e0b)
- **Background:** Dark purple/slate gradients
- **Accent:** Vegas neon vibes
- **Font:** Inter (clean, modern)

## File Structure
```
lasvegaspoolhouse-website/
├── app/
│   ├── page.tsx           # Homepage
│   ├── book/page.tsx      # Booking flow
│   ├── api/availability/  # Beds24 API proxy
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Tailwind styles
├── lib/
│   └── beds24.ts          # API client
├── public/images/         # Property photos (TBD)
├── .env.local             # Environment config
└── package.json
```

## Reused Components
Structure mirrors Stay Anchorage and Rewak Studios sites for consistency.

---
*Created 2026-02-10 by Kit while Alex sleeps 🌙*
