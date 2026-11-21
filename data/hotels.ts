// data/hotels.ts
export interface Hotel {
  id: string;
  name: string;
  location: string;
  pricePerNight: number;
  formattedPrice: string; // e.g., "₦90,000/night"
  rating: string;
  image: string;
  description: string;
  roomNumber: string;
}

export const hotelsData: Hotel[] = [
  {
    id: "1",
    name: "Rockview Hotel Classic",
    location: "Wuse 2, Abuja",
    pricePerNight: 90000,
    formattedPrice: "₦90,000/night",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    description: "470 square meter indoor and outdoor space with magnificent pool view. Room 202.",
    roomNumber: "202",
  },
  {
    id: "2",
    name: "Transcorp Hilton",
    location: "Maitama, Abuja",
    pricePerNight: 150000,
    formattedPrice: "₦150,000/night",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    description: "Luxury suite with panoramic city views. Includes complimentary breakfast and access to the executive lounge.",
    roomNumber: "305",
  },
];