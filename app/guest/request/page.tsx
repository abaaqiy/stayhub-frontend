"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RequestTracking() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-[#EAF2F8] pb-10 mx-auto w-full max-w-lg shadow-2xl relative border-x border-gray-200">
      <div className="flex items-center px-5 pt-12 pb-6">
        <button onClick={() => router.back()} className="active-press p-2.5 bg-transparent border border-gray-800 rounded-full hover:bg-gray-100 transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-900" />
        </button>
      </div>

      <div className="px-5 flex flex-col gap-6">
        <div className="bg-[#2263A5] rounded-xl p-5 text-white shadow-md relative">
          <div className="flex justify-between items-start mb-4">
            <p className="text-[10px] text-blue-200">Request #ST1024 - Room 202</p>
            <div className="bg-white text-[#2263A5] text-[10px] font-bold px-2 py-1 rounded-full">In progress</div>
          </div>
          <h2 className="text-sm font-bold mb-2">Your request is being handled.</h2>
          <p className="text-[10px] text-blue-200 mt-4">Assigned to Housekeeping</p>
        </div>

        <div className="active-press cursor-pointer bg-[#2263A5] rounded-xl p-5 text-white shadow-md hover:bg-[#1a528b] transition-colors">
          <h2 className="text-sm font-bold mb-1">Need more assistance?</h2>
          <p className="text-[10px] text-blue-200">Contact reception</p>
        </div>
      </div>
    </div>
  );
}