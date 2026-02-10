/**
 * Beds24 API Client for Las Vegas Pool House
 * 
 * NOTE: Property ID needs to be set in environment variables
 * TODO: Get the correct property ID from Alex
 */

const BEDS24_API = 'https://api.beds24.com/json';

// Las Vegas Pool House property
const PROP_ID = process.env.BEDS24_PROP_ID || '17759';

// Room configuration
export const ROOM_INFO: Record<string, { name: string; maxGuests: number; minPrice: number }> = {
  '43516': { name: 'Private Pool House', maxGuests: 12, minPrice: 299 },
};

export interface AvailabilityResult {
  available: boolean;
  price: number | null;
  pricePerNight: number | null;
  nights: number;
  minNights: number;
  bookingUrl?: string;
  error?: string;
}

const MIN_NIGHTS = 2;

export async function getAvailability(
  checkIn: string, // YYYYMMDD format
  checkOut: string,
  numAdult: number = 2
): Promise<AvailabilityResult> {
  // Calculate nights
  const ciDate = new Date(checkIn.slice(0,4) + '-' + checkIn.slice(4,6) + '-' + checkIn.slice(6,8));
  const coDate = new Date(checkOut.slice(0,4) + '-' + checkOut.slice(4,6) + '-' + checkOut.slice(6,8));
  const nights = Math.ceil((coDate.getTime() - ciDate.getTime()) / (1000 * 60 * 60 * 24));

  // Check minimum nights requirement
  if (nights < MIN_NIGHTS) {
    return {
      available: false,
      price: null,
      pricePerNight: null,
      nights,
      minNights: MIN_NIGHTS,
      error: `Minimum stay is ${MIN_NIGHTS} nights`,
    };
  }

  // If prop ID not configured, return placeholder availability
  if (PROP_ID === 'NEEDS_CONFIG') {
    console.warn('Beds24 PROP_ID not configured - returning placeholder data');
    return {
      available: true,
      price: 299 * nights,
      pricePerNight: 299,
      nights,
      minNights: MIN_NIGHTS,
      bookingUrl: '#', // Will be Beds24 or Stripe checkout
    };
  }

  try {
    const response = await fetch(BEDS24_API + '/getAvailabilities', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        checkIn,
        lastNight: checkOut,
        propId: PROP_ID,
        numAdult,
      }),
    });

    const data = await response.json();
    
    // Check if any room is available
    const roomKeys = Object.keys(data).filter(k => !['checkIn', 'lastNight', 'checkOut', 'propId', 'numAdult'].includes(k));
    
    let available = false;
    let totalPrice = 0;
    
    for (const roomId of roomKeys) {
      const room = data[roomId];
      if (room?.roomsavail && room.roomsavail !== '0' && room.roomsavail !== 0) {
        available = true;
        if (room.price) {
          totalPrice = room.price;
        }
        break; // Take first available room
      }
    }
    
    return {
      available,
      price: totalPrice || null,
      pricePerNight: totalPrice ? Math.round(totalPrice / nights) : null,
      nights,
      minNights: MIN_NIGHTS,
      bookingUrl: available ? `https://beds24.com/booking2.php?propid=${PROP_ID}&checkin=${checkIn}` : undefined,
    };
    
  } catch (error) {
    console.error('Beds24 API error:', error);
    return {
      available: true, // Fallback to showing available
      price: 299 * nights,
      pricePerNight: 299,
      nights,
      minNights: MIN_NIGHTS,
      error: 'Could not check real-time availability',
    };
  }
}

export async function getRoomDetails(roomId: string) {
  // Placeholder - will implement when property ID is known
  return ROOM_INFO[roomId] || { name: 'Pool House', maxGuests: 12, minPrice: 299 };
}
