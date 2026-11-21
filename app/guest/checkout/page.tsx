"use client";

import { useRouter } from "next/navigation";

export default function GuestCheckout() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-[#EAF2F8] pb-28">
      
      {/* Header */}
      <div className="px-5 pt-12 pb-6">
        <h1 className="text-lg font-bold text-[#0B1A33] mb-1">Ready to check out?</h1>
        <p className="text-xs text-gray-600">Review your stay and final charges before completing checkout.</p>
      </div>

      {/* Bill Summary Card */}
      <div className="px-5 mb-6">
        <div className="bg-[#2263A5] rounded-xl p-5 text-white shadow-md">
          <h3 className="text-xs font-bold mb-4 uppercase tracking-wide">Stay summary</h3>
          
          <div className="flex justify-between mb-3 text-xs border-b border-blue-400/30 pb-3">
            <span className="text-blue-100">Room charges</span>
            <span className="font-medium">₦270,000</span>
          </div>
          <div className="flex justify-between mb-3 text-xs border-b border-blue-400/30 pb-3">
            <span className="text-blue-100">Additional services</span>
            <span className="font-medium">₦20,000</span>
          </div>
          <div className="flex justify-between mb-3 text-xs border-b border-blue-400/30 pb-3">
            <span className="text-blue-100">Payments received</span>
            <span className="font-medium">₦290,000</span>
          </div>
          
          <div className="flex justify-between text-xs font-bold mt-4">
            <span>Outstanding balance</span>
            <span>₦0</span>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="px-5">
        <div className="bg-[#2263A5] rounded-xl p-4 shadow-md">
           <textarea 
              placeholder="Share your experience..."
              className="w-full bg-white rounded-lg p-3 text-sm text-gray-800 placeholder-gray-400 outline-none resize-none h-32"
           ></textarea>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="absolute bottom-0 left-0 w-full bg-[#EAF2F8] px-5 pb-8 pt-4">
        <button 
          onClick={() => router.push("/")} // Go back to splash/home after checkout
          className="w-full bg-[#0B1A33] text-white font-semibold text-sm py-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        >
          Complete checkout
        </button>
      </div>

    </div>
  );
}