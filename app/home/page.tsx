"use client";

import { useState } from "react";
import { Search, MapPin, Star, Heart } from "lucide-react";
import Link from "next/link";
import { hotelsData } from "@/data/hotels";

export default function HomeScreen() {
  const [favorites, setFavorites] = useState<string[]>([]);
  
  // 1. Add state for the search query
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.preventDefault(); 
    setFavorites((prev) => 
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  // 2. Filter the hotels based on the search query
  const filteredHotels = hotelsData.filter((hotel) => {
    const query = searchQuery.toLowerCase();
    return (
      hotel.name.toLowerCase().includes(query) ||
      hotel.location.toLowerCase().includes(query)
    );
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#EAF2F8] pb-10">
      
      {/* Hero Section */}
      <div className="relative w-full h-[380px]">
        <img 
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80" 
          alt="Hotel Pool" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute top-16 w-full flex flex-col items-center text-white px-4">
          <h1 className="text-2xl font-bold tracking-widest mb-1">STAYHUB</h1>
          <p className="text-sm font-medium text-center">
            Book your desired luxury room seamlessly
          </p>
        </div>
        
        {/* Functional Search Bar */}
        <div className="absolute -bottom-6 left-0 right-0 px-4">
          <div className="bg-white rounded-full flex items-center px-4 py-3 shadow-lg">
            <Search className="text-gray-400 w-5 h-5 mr-3 shrink-0" />
            <input 
              type="text" 
              placeholder="Search hotels, houses, meeting points" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* Hotel List */}
      <div className="mt-12 px-4 flex flex-col gap-6">
        {/* 3. Handle Empty State */}
        {filteredHotels.length === 0 ? (
          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm">No hotels found for "{searchQuery}"</p>
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-2 text-[#1E64B3] text-sm font-medium hover:underline"
            >
              Clear search
            </button>
          </div>
        ) : (
          filteredHotels.map((hotel) => {
            const isFav = favorites.includes(hotel.id);
            return (
              <Link href={`/hotel/${hotel.id}`} key={hotel.id}>
                <div className="active-press relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  
                  <div className="relative h-48 w-full">
                    <img 
                      src={hotel.image} 
                      alt={hotel.name} 
                      className="w-full h-full object-cover"
                    />
                    <button 
                      onClick={(e) => toggleFavorite(e, hotel.id)}
                      className="active-press absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors"
                    >
                      <Heart 
                        className={`w-5 h-5 transition-colors ${
                          isFav ? "text-red-500 fill-red-500" : "text-gray-500"
                        }`} 
                      />
                    </button>
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-900 text-sm">{hotel.name}</h3>
                      <span className="font-bold text-gray-800 text-xs shrink-0 ml-2">
                        {hotel.formattedPrice}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-500 text-xs mb-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>{hotel.location}</span>
                    </div>
                    
                    <div className="flex items-center text-xs font-medium text-gray-700">
                      <Star className="w-3 h-3 text-gray-800 fill-current mr-1" />
                      <span>{hotel.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}