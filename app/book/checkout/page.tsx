"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CheckoutForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill out all fields.");
      return;
    }
    router.push("/book/payment");
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#EAF2F8] pb-28 mx-auto w-full max-w-lg relative border-x border-gray-200">
      <div className="flex items-center px-5 pt-12 pb-6 relative">
        <button onClick={() => router.back()} className="active-press p-2.5 bg-transparent border border-gray-800 rounded-full hover:bg-gray-100 transition-colors z-10">
          <ArrowLeft className="w-5 h-5 text-gray-900" />
        </button>
        <h1 className="absolute left-0 right-0 text-center text-sm font-semibold text-gray-800">Booking Summary</h1>
      </div>

      <div className="px-5">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Who's checking in?</h2>

        <form id="checkout-form" onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Full name</label>
            <input type="text" required placeholder="Enter your full name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3.5 rounded-xl border border-gray-400 bg-transparent focus:outline-none focus:border-[#1E64B3] text-sm text-gray-800 placeholder-gray-500" />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Email address</label>
            <input type="email" required placeholder="Enter your email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3.5 rounded-xl border border-gray-400 bg-transparent focus:outline-none focus:border-[#1E64B3] text-sm text-gray-800 placeholder-gray-500" />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Phone number</label>
            <input type="tel" required placeholder="Enter your phone number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3.5 rounded-xl border border-gray-400 bg-transparent focus:outline-none focus:border-[#1E64B3] text-sm text-gray-800 placeholder-gray-500" />
          </div>
        </form>
      </div>

      <div className="mt-16 px-5">
        <p className="text-center text-xs text-gray-600 mb-4">Secured by <span className="font-bold">paystack</span></p>
        <div className="bg-white rounded-xl border border-gray-200 py-4 px-6 flex justify-between items-center shadow-sm">
          <div className="active-press cursor-pointer text-blue-800 font-bold italic text-lg tracking-tighter">VISA</div>
          <div className="active-press cursor-pointer flex space-x-1">
            <div className="w-5 h-5 bg-red-500 rounded-full"></div>
            <div className="w-5 h-5 bg-yellow-500 rounded-full -ml-3"></div>
          </div>
          <div className="active-press cursor-pointer text-blue-500 font-bold italic text-lg tracking-tighter">PayPal</div>
          <div className="active-press cursor-pointer w-8 h-5 bg-blue-900 rounded-sm"></div>
          <div className="active-press cursor-pointer w-8 h-5 bg-black rounded-sm"></div>
        </div>
      </div>

      {/* FIXED BUTTON LAYOUT */}
      <div className="fixed bottom-0 left-0 right-0 mx-auto w-full max-w-lg bg-[#EAF2F8] px-5 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50">
        <button type="submit" form="checkout-form" className="active-press w-full bg-[#0B1A33] text-white font-semibold text-sm py-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors">
          Reserve and continue to payment
        </button>
      </div>
    </div>
  );
}