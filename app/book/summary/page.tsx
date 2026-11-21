"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useBookingStore } from "@/store/useBookingStore";
import { format } from "date-fns";

export default function BookingSummary() {
  const router = useRouter();
  const { hotel, checkIn, checkOut, guests, roomNumber, totalPrice } = useBookingStore();

  useEffect(() => {
    if (!hotel || !checkIn || !checkOut) router.push("/home");
  }, [hotel, checkIn, checkOut, router]);

  if (!hotel || !checkIn || !checkOut) return null;

  const nights = Math.max(1, Math.round((checkOut.getTime() - checkIn.getTime()) / (1000 * 3600 * 24)));

  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#EAF2F8] pb-28 mx-auto w-full max-w-lg relative border-x border-gray-200">
      <div className="flex items-center px-5 pt-12 pb-6 relative">
        <button onClick={() => router.back()} className="active-press p-2.5 bg-transparent border border-gray-800 rounded-full hover:bg-gray-100 transition-colors z-10">
          <ArrowLeft className="w-5 h-5 text-gray-900" />
        </button>
        <h1 className="absolute left-0 right-0 text-center text-lg font-bold text-[#0B1A33]">STAYHUB</h1>
      </div>

      <div className="px-5 mb-5">
        <div className="bg-[#2263A5] rounded-xl p-5 text-white shadow-md">
          <div className="flex justify-between mb-3 text-sm"><span className="text-blue-100">Check - In</span><span className="font-medium">{format(checkIn, "do MMMM, yyyy")}</span></div>
          <div className="flex justify-between mb-3 text-sm"><span className="text-blue-100">Check - Out</span><span className="font-medium">{format(checkOut, "do MMMM, yyyy")}</span></div>
          <div className="flex justify-between mb-3 text-sm"><span className="text-blue-100">Guests</span><span className="font-medium">{guests}</span></div>
          <div className="flex justify-between text-sm"><span className="text-blue-100">Room Number</span><span className="font-medium">{roomNumber}</span></div>
        </div>
      </div>

      <div className="px-5">
        <div className="bg-[#2263A5] rounded-xl p-5 text-white shadow-md">
          <h3 className="text-sm font-medium text-blue-100 mb-4">Price Breakdown</h3>
          <div className="flex justify-between mb-3 text-sm"><span>{nights} nights x ₦{hotel.pricePerNight.toLocaleString()}</span><span className="font-medium">₦{totalPrice.toLocaleString()}</span></div>
          <div className="flex justify-between mb-4 text-sm"><span>Taxes and fees</span><span className="font-medium">₦0</span></div>
          <div className="border-t border-blue-400/50 pt-3 flex justify-between text-sm font-bold"><span>Total</span><span>₦{totalPrice.toLocaleString()}</span></div>
        </div>
      </div>

      {/* FIXED BUTTON LAYOUT */}
      <div className="fixed bottom-0 left-0 right-0 mx-auto w-full max-w-lg bg-[#EAF2F8] px-5 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50">
        <button onClick={() => router.push("/book/checkout")} className="active-press w-full bg-[#0B1A33] text-white font-semibold text-sm py-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors">
          Reserve and continue to payment
        </button>
      </div>
    </div>
  );
}