import { create } from 'zustand';
import { differenceInDays } from 'date-fns';

interface Hotel {
  id: string;
  name: string;
  location: string;
  pricePerNight: number;
  image: string;
}

interface BookingState {
  hotel: Hotel | null;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  roomNumber: string;
  totalPrice: number;
  
  setHotel: (hotel: Hotel) => void;
  setDates: (checkIn: Date, checkOut: Date) => void;
  setGuests: (guests: number) => void;
  calculateTotal: () => void;
}

export const useBookingStore = create<BookingState>((set, get) => ({
  hotel: null,
  checkIn: null, // Removed new Date()
  checkOut: null, // Removed new Date()
  guests: 2,
  roomNumber: "202",
  totalPrice: 0,

  setHotel: (hotel) => set({ hotel }),
  setDates: (checkIn, checkOut) => set({ checkIn, checkOut }),
  setGuests: (guests) => set({ guests }),

  calculateTotal: () => {
    const { hotel, checkIn, checkOut } = get();
    if (hotel && checkIn && checkOut) {
      const nights = differenceInDays(checkOut, checkIn);
      const validNights = nights > 0 ? nights : 1;
      set({ totalPrice: hotel.pricePerNight * validNights });
    }
  }
}));