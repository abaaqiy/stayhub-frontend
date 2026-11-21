import Link from "next/link";
import Image from "next/image";

export default function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-between h-[100dvh] bg-brand-dark pt-32 pb-12 px-6">
      
      {/* Logo Area */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="relative w-[85%] h-[350px]">
          <Image
            src="/logo.png" 
            alt="StayHub Logo"
            fill
            className="object-contain"
            priority // Tells Next.js to load this image immediately
          />
        </div>
      </div>

      {/* Button */}
      <Link href="/home" className="w-full mb-8">
        <button className="active-press w-full bg-white text-brand-dark font-semibold text-lg py-4 rounded-full hover:bg-gray-100 transition-colors">
          Get Started
        </button>
      </Link>
    </div>
  );
}