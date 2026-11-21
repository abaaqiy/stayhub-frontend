// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// 1. Metadata for SEO and browser tabs
export const metadata: Metadata = {
  title: "StayHub",
  description: "Book your desired luxury room seamlessly",
};

// 2. CRITICAL: Viewport config for iOS and mobile devices
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Prevents users from zooming in and breaking the layout
  userScalable: false,
  viewportFit: "cover", // Ensures the app goes edge-to-edge on notched iPhones
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 
        suppressHydrationWarning prevents errors from Grammarly/browser extensions.
        bg-gray-800 creates the dark desktop background.
      */}
      <body 
        suppressHydrationWarning 
        className={`${inter.className} bg-gray-800 flex justify-center min-h-[100dvh]`}
      >
        
        {/* The Mobile App Container */}
        <main className="w-full max-w-[400px] bg-[#EAF2F8] min-h-[100dvh] relative shadow-2xl overflow-y-auto overflow-x-hidden flex flex-col">
          {children}
        </main>

      </body>
    </html>
  );
}