import { NextRequest, NextResponse } from 'next/server';
import { getAvailability } from '@/lib/beds24';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const checkIn = searchParams.get('checkIn');
  const checkOut = searchParams.get('checkOut');
  const guests = searchParams.get('guests') || '2';

  if (!checkIn || !checkOut) {
    return NextResponse.json(
      { error: 'checkIn and checkOut are required' },
      { status: 400 }
    );
  }

  try {
    const result = await getAvailability(checkIn, checkOut, parseInt(guests));
    return NextResponse.json(result);
  } catch (error) {
    console.error('Availability API error:', error);
    return NextResponse.json(
      { error: 'Failed to check availability' },
      { status: 500 }
    );
  }
}
