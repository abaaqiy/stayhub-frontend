"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function PaymentProcessing() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/book/confirmed");
    }, 3000); 

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col min-h-screen bg-[#EAF2F8] mx-auto w-full max-w-lg shadow-2xl relative border-x border-gray-200">
      <div className="flex items-center px-5 pt-12 pb-6 relative">
        <button onClick={() => router.back()} className="active-press p-2.5 bg-transparent border border-gray-800 rounded-full hover:bg-gray-100 transition-colors z-10">
          <ArrowLeft className="w-5 h-5 text-gray-900" />
        </button>
        <h1 className="absolute left-0 right-0 text-center text-sm font-semibold text-gray-800">Payment Confirmation</h1>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-5">
        <div className="w-full bg-white rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center mb-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="relative mb-6">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="40" y="10" width="60" height="100" rx="10" stroke="#0B1A33" strokeWidth="6" fill="white"/>
              <rect x="50" y="90" width="40" height="10" rx="2" fill="#1E64B3"/>
              <rect x="10" y="40" width="70" height="45" rx="6" fill="#1E64B3" />
              <rect x="10" y="50" width="70" height="10" fill="#0B1A33" />
              <rect x="18" y="70" width="20" height="4" rx="2" fill="white" />
              <path d="M60 60 L75 75 L95 50" stroke="#1E64B3" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
            </svg>
          </div>

          <h2 className="text-lg font-bold text-[#0B1A33] mb-2">Payment Successful</h2>
          <p className="text-center text-xs text-gray-600 px-4">
            Your payment has been processed let's check you in!
          </p>
        </div>
      </div>
    </div>
  );
}