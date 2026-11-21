"use client";

import { Bell, Check, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function GuestDashboard() {
  const router = useRouter();

  const services = [
    { name: "Housekeeping", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80" },
    { name: "Room service", img: "https://images.unsplash.com/photo-1621293954908-907159247fc8?w=400&q=80" }, 
    { name: "Laundry", img: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=400&q=80" },
    { name: "Maintenance", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80" },
    { name: "Transport", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&q=80" },
    { name: "Extra Amenities", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&q=80" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#EAF2F8] pb-10">
      <div className="px-5 pt-12 pb-6">
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm font-medium text-gray-700">Florence</p>
          <div className="flex space-x-2">
            <button onClick={() => router.push("/home")} className="active-press p-2 border border-gray-300 rounded-full bg-white shadow-sm hover:bg-gray-100 transition-colors" title="Back to Home">
              <Home className="w-4 h-4 text-gray-800" />
            </button>
            <button className="active-press p-2 border border-gray-300 rounded-full bg-white shadow-sm hover:bg-gray-100 transition-colors">
              <Bell className="w-4 h-4 text-gray-800" />
            </button>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-[#0B1A33] mb-1">Welcome!</h1>
        <p className="text-xs text-gray-600 mb-4">We hope you have comfortable and enjoyable stay.</p>
        
        <div className="active-press inline-flex items-center bg-[#0B1A33] text-white px-3 py-1.5 rounded-full text-xs font-medium">
          <Check className="w-3 h-3 mr-1.5" /> Check-in completed
        </div>
      </div>

      <div className="px-5 mb-8">
        <h2 className="text-sm font-semibold text-gray-900 mb-1">How can we help?</h2>
        <p className="text-[10px] text-gray-500 mb-4">Choose a service and we will connect you with the right team.</p>
        
        <div className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <Link href="/guest/request" key={service.name}>
              <div className="active-press flex flex-col group cursor-pointer">
                <div className="w-full h-24 rounded-xl overflow-hidden mb-2 border border-gray-200">
                  <img src={service.img} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                </div>
                <span className="text-xs font-medium text-gray-700">{service.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="px-5">
        <h2 className="text-sm font-semibold text-gray-900 mb-4">You might also like</h2>
        <div className="flex flex-col gap-3">
          <div className="active-press flex items-center bg-white p-2 rounded-xl border border-gray-100 shadow-sm cursor-pointer">
            <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=200&q=80" alt="Pool" className="w-14 h-14 rounded-lg object-cover mr-3"/>
            <div><h3 className="text-xs font-bold text-gray-900">Swimming Pool</h3><p className="text-[10px] text-gray-500">Enjoy a refreshing swim.</p></div>
          </div>
          
          <div className="active-press flex items-center bg-white p-2 rounded-xl border border-gray-100 shadow-sm cursor-pointer">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&q=80" alt="Gym" className="w-14 h-14 rounded-lg object-cover mr-3"/>
            <div><h3 className="text-xs font-bold text-gray-900">Fitness centre</h3><p className="text-[10px] text-gray-500">Explore the hotel's gym facilities.</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}