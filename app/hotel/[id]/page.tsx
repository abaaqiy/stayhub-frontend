"use client";

import { Suspense, useState } from "react";
import { ArrowLeft, Heart, Share2, Users, Maximize, BedDouble, Armchair, Bath, Wifi, ShieldCheck, MessageCircle } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { useBookingStore } from "@/store/useBookingStore";
import { hotelsData } from "@/data/hotels";

function PropertyDetailsContent() {
  const router = useRouter();
  const params = useParams(); 
  const setHotel = useBookingStore((state) => state.setHotel);
  
  const [isFavorite, setIsFavorite] = useState(false);
  // 1. Add state for the "Read More" functionality
  const [isExpanded, setIsExpanded] = useState(false);

  const hotel = hotelsData.find((h) => h.id === params.id);

  if (!hotel) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#EAF2F8]">
        <p>Hotel not found.</p>
      </div>
    );
  }

  const handleCheckAvailability = () => {
    setHotel({
      id: hotel.id,
      name: hotel.name,
      location: hotel.location,
      pricePerNight: hotel.pricePerNight,
      image: hotel.image,
    });
    router.push("/book/dates");
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: hotel.name,
          text: `Check out ${hotel.name} on StayHub!`,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share canceled", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  // The full description text (combining the mock data description with some extra text)
  const fullDescription = `${hotel.description} This luxurious space is designed to provide maximum comfort during your stay, featuring premium linens, a smart TV, and a fully stocked minibar. Guests also have complimentary access to the rooftop pool and the on-site fitness center.`;

  return (
    <div className="flex flex-col min-h-screen bg-[#EAF2F8] pb-24">
      
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between px-5 pt-12 pb-4">
        <button onClick={() => router.back()} className="active-press p-2.5 bg-transparent border border-gray-800 rounded-full hover:bg-gray-100 transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-900" />
        </button>
        <h1 className="text-sm font-semibold text-gray-800">Details</h1>
        <div className="flex space-x-3">
          <button onClick={() => setIsFavorite(!isFavorite)} className="active-press p-2.5 bg-transparent border border-gray-800 rounded-full hover:bg-gray-100 transition-colors">
            <Heart className={`w-5 h-5 transition-colors ${isFavorite ? "text-red-500 fill-red-500" : "text-gray-900"}`} />
          </button>
          <button onClick={handleShare} className="active-press p-2.5 bg-transparent border border-gray-800 rounded-full hover:bg-gray-100 transition-colors">
            <Share2 className="w-5 h-5 text-gray-900" />
          </button>
        </div>
      </div>

      {/* Header Info */}
      <div className="px-5 mb-5">
        <h2 className="text-xl font-bold text-gray-900 mb-1">{hotel.name}</h2>
        <div className="flex items-center space-x-6 text-gray-700 text-sm mt-2">
          <div className="flex items-center"><Users className="w-4 h-4 mr-1.5" /><span>2 Guest</span></div>
          <div className="flex items-center"><Maximize className="w-4 h-4 mr-1.5" /><span>470 sq meters</span></div>
        </div>
      </div>

      {/* Main Image */}
      <div className="px-5 mb-5">
        <div className="w-full h-[220px] rounded-2xl overflow-hidden shadow-sm">
          <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Price */}
      <div className="px-5 mb-5">
        <h3 className="text-lg font-bold text-gray-900">₦{hotel.pricePerNight.toLocaleString()}/night</h3>
      </div>

      {/* Amenities Grid */}
      <div className="px-5 mb-6">
        <div className="grid grid-cols-4 gap-2.5">
          <div className="bg-[#2263A5] rounded-xl flex flex-col items-center justify-center py-3 px-2 shadow-sm">
            <BedDouble className="w-6 h-6 text-white mb-2" />
            <span className="text-white text-[11px] font-medium tracking-tight whitespace-nowrap">2 Bed</span>
          </div>
          <div className="bg-[#2263A5] rounded-xl flex flex-col items-center justify-center py-3 px-2 shadow-sm">
            <Armchair className="w-6 h-6 text-white mb-2" />
            <span className="text-white text-[11px] font-medium tracking-tight whitespace-nowrap">2 Chairs</span>
          </div>
          <div className="bg-[#2263A5] rounded-xl flex flex-col items-center justify-center py-3 px-2 shadow-sm">
            <Bath className="w-6 h-6 text-white mb-2" />
            <span className="text-white text-[11px] font-medium tracking-tight whitespace-nowrap">Hot tub</span>
          </div>
          <div className="bg-[#2263A5] rounded-xl flex flex-col items-center justify-center py-3 px-2 shadow-sm">
            <Wifi className="w-6 h-6 text-white mb-2" />
            <span className="text-white text-[11px] font-medium tracking-tight whitespace-nowrap">Wifi</span>
          </div>
        </div>
      </div>

      {/* REMOVED THE CAROUSEL DOTS HERE */}

      {/* Host / Info Section with Functional Read More */}
      <div className="px-5 mb-8">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center space-x-3">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80" alt="Host" className="w-10 h-10 rounded-full object-cover" />
            <span className="font-semibold text-sm text-gray-900">John Victory</span>
          </div>
          <div className="flex space-x-2">
            <button className="active-press p-2 border border-gray-300 rounded-full bg-white shadow-sm"><ShieldCheck className="w-4 h-4 text-gray-700" /></button>
            <button className="active-press p-2 border border-gray-300 rounded-full bg-[#1E64B3] text-white shadow-sm"><MessageCircle className="w-4 h-4" /></button>
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {/* Display shortened text by default, full text when expanded */}
          {isExpanded ? fullDescription : `${fullDescription.substring(0, 115)}...`}
          
          {/* Toggle Button */}
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="text-[#1E64B3] font-medium ml-1 hover:underline"
          >
            {isExpanded ? "Show Less" : "...More"}
          </button>
        </p>
      </div>

      {/* Fixed Bottom Button */}
      <div className="absolute bottom-0 left-0 w-full bg-[#EAF2F8] px-5 pb-8 pt-4">
        <button onClick={handleCheckAvailability} className="active-press w-full bg-[#0B1A33] text-white font-semibold text-sm py-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors">
          Check Availability
        </button>
      </div>
    </div>
  );
}

export default function PropertyDetails() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center bg-[#EAF2F8]">Loading...</div>}>
      <PropertyDetailsContent />
    </Suspense>
  );
}