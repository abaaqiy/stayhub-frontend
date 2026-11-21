"use client";

import { useState, useEffect, Suspense } from "react";
import { ArrowLeft, Share2, Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useBookingStore } from "@/store/useBookingStore";
import { format, addDays } from "date-fns";

function CalendarContent({ range, setRange }: { range: DateRange | undefined, setRange: any }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex justify-center">
      <DayPicker
        mode="range"
        selected={range}
        onSelect={setRange}
        className="mx-auto"
        showOutsideDays={false}
        classNames={{
          month: "w-full",
          caption_label: "text-3xl font-serif text-[#0B1A33] mb-4 ml-2",
          nav: "hidden",
          weekday: "text-gray-400 font-normal text-xs w-full uppercase mb-2",
          day: "text-center text-sm p-0 focus-within:relative focus-within:z-20",
          day_button: "h-10 w-10 font-normal hover:bg-gray-100 rounded-full transition-colors active-press",
          selected: "bg-[#8CA6C4] text-white hover:bg-[#7A96B5]",
          range_middle: "bg-[#EAF2F8] text-gray-900 rounded-none",
          range_start: "bg-[#8CA6C4] text-white rounded-l-full",
          range_end: "bg-[#8CA6C4] text-white rounded-r-full",
          today: "text-[#1E64B3] font-bold",
        }}
      />
    </div>
  );
}

export default function DatePreferences() {
  const router = useRouter();
  const { checkIn, checkOut, guests, setDates, setGuests, calculateTotal } = useBookingStore();
  
  const [range, setRange] = useState<DateRange | undefined>(undefined);

  useEffect(() => {
    if (checkIn && checkOut) {
      setRange({ from: checkIn, to: checkOut });
    } else {
      const today = new Date();
      setRange({ from: today, to: addDays(today, 3) });
    }
  }, [checkIn, checkOut]);

  const [selectedTime, setSelectedTime] = useState("12:30 PM");
  const timeSlots = ["12:30 PM", "2:40 PM", "4:30 PM", "5:30 PM"];

  const handleGuestChange = (type: "increment" | "decrement") => {
    if (type === "increment" && guests < 8) setGuests(guests + 1);
    if (type === "decrement" && guests > 1) setGuests(guests - 1);
  };

  const handleContinue = () => {
    if (range?.from && range?.to) {
      setDates(range.from, range.to);
      calculateTotal();
      router.push("/book/summary");
    } else {
      alert("Please select both a check-in and check-out date on the calendar.");
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#EAF2F8] pb-28 mx-auto w-full max-w-lg relative border-x border-gray-200">
      
      <div className="flex items-center justify-between px-5 pt-12 pb-6">
        <button onClick={() => router.back()} className="active-press p-2.5 bg-transparent border border-gray-800 rounded-full hover:bg-gray-100 transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-900" />
        </button>
        <h1 className="text-sm font-semibold text-gray-800">Date & Preferences</h1>
        <button className="active-press p-2.5 bg-transparent border border-gray-800 rounded-full hover:bg-gray-100 transition-colors">
          <Share2 className="w-5 h-5 text-gray-900" />
        </button>
      </div>

      <div className="px-5 mb-6">
        <div className="flex items-center justify-between bg-white border border-gray-800 rounded-xl px-4 py-3 shadow-sm">
          <span className="font-bold text-sm text-gray-900">₦90,000/night</span>
          <div className="flex items-center space-x-4">
            <button onClick={() => handleGuestChange("decrement")} className="active-press text-gray-500 hover:text-gray-800"><Minus className="w-4 h-4" /></button>
            <span className="font-semibold text-sm w-4 text-center">{guests}</span>
            <button onClick={() => handleGuestChange("increment")} className="active-press text-gray-500 hover:text-gray-800"><Plus className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      <div className="px-5 mb-6">
        <Suspense fallback={<div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 h-[350px] flex items-center justify-center"><p className="text-gray-400 text-sm animate-pulse">Loading calendar...</p></div>}>
          <CalendarContent range={range} setRange={setRange} />
        </Suspense>
        
        <div className="flex justify-between items-center mt-3 px-2 text-xs text-gray-600">
          <div><span className="font-semibold text-gray-800">Check-in:</span> {range?.from ? format(range.from, "MMM do") : "Select"}</div>
          <div><span className="font-semibold text-gray-800">Check-out:</span> {range?.to ? format(range.to, "MMM do") : "Select"}</div>
        </div>
      </div>

      <div className="px-5 mb-8">
        <div className="flex justify-between bg-white border border-gray-800 rounded-xl p-1.5 shadow-sm">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`active-press flex-1 py-2.5 text-[11px] font-medium rounded-lg transition-colors ${selectedTime === time ? "bg-[#1E64B3] text-white" : "bg-transparent text-gray-600 hover:bg-gray-100"}`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="px-5">
        <p className="text-sm font-semibold text-gray-800 mb-3">Number of Guests</p>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <button
              key={num}
              onClick={() => setGuests(num)}
              className={`active-press w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium border transition-colors ${guests === num ? "bg-[#1E64B3] border-[#1E64B3] text-white" : "bg-white border-gray-300 text-gray-700 hover:border-gray-500"}`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* FIXED BUTTON LAYOUT */}
      <div className="fixed bottom-0 left-0 right-0 mx-auto w-full max-w-lg bg-[#EAF2F8] px-5 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50">
        <button onClick={handleContinue} className="active-press w-full bg-[#0B1A33] text-white font-semibold text-sm py-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
}