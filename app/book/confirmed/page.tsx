"use client";

import { useState } from "react";
import { ArrowLeft, CheckCircle2, Copy, Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BookingConfirmed() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const bookingRef = "SG-2026-001024";

  const handleCopy = () => {
    navigator.clipboard.writeText(bookingRef);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#EAF2F8] pb-10 mx-auto w-full max-w-lg shadow-2xl relative border-x border-gray-200">
      <div className="flex items-center px-5 pt-12 pb-6">
        <button onClick={() => router.push("/home")} className="active-press p-2.5 bg-transparent border border-gray-800 rounded-full hover:bg-gray-100 transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-900" />
        </button>
      </div>

      <div className="flex flex-col items-center px-5 mb-8">
        <CheckCircle2 className="w-16 h-16 text-[#1E64B3] mb-4" strokeWidth={1.5} />
        <h1 className="text-lg font-bold text-[#0B1A33] mb-1">Booking confirmed!</h1>
        <p className="text-center text-xs text-gray-600">
          Your reservation has been successfully confirmed,<br/>we look forward to welcoming you.
        </p>
      </div>

      <div className="px-5 mb-8">
        <div className="bg-[#2263A5] rounded-xl p-5 text-white shadow-md relative overflow-hidden">
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-blue-400/30">
            <div>
              <p className="text-[10px] text-blue-200 uppercase tracking-wider mb-1">Booking Reference</p>
              <p className="font-mono text-sm tracking-widest text-blue-100">{bookingRef}</p>
            </div>
            <button onClick={handleCopy} className="active-press p-2 hover:bg-white/10 rounded-full transition-colors">
              {copied ? <Check className="w-4 h-4 text-green-300" /> : <Copy className="w-4 h-4 text-white" />}
            </button>
          </div>

          <div className="mb-4">
            <h3 className="text-xs font-bold mb-1 uppercase tracking-wide">Rockview Hotel Classic</h3>
            <p className="text-xs text-blue-200">Wuse 2, Abuja</p>
          </div>

          <div className="flex justify-between items-end mt-6">
            <div>
              <p className="text-[10px] text-blue-200 uppercase mb-1">Check-In</p>
              <p className="text-xs font-medium">23 NOV 2026</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-blue-200 uppercase mb-1">Check-Out</p>
              <p className="text-xs font-medium">23 NOV 2026</p>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-6 pt-4 border-t border-blue-400/30">
            <p className="text-[10px] text-blue-200 uppercase">Amount paid</p>
            <p className="text-sm font-bold">₦270,000</p>
          </div>
        </div>
      </div>

      <div className="mt-auto px-5 flex flex-col items-center">
        <button onClick={() => router.push("/guest/dashboard")} className="active-press w-full bg-[#0B1A33] text-white font-semibold text-sm py-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors mb-4">
          View my booking
        </button>
        <button className="active-press text-xs text-gray-500 font-medium hover:text-gray-800 underline decoration-gray-400 underline-offset-4">
          Add to calendar
        </button>
        
        <p className="text-[10px] text-center text-gray-500 mt-6 px-4">
          A confirmation will also be sent to your registered email address
        </p>
      </div>
    </div>
  );
}