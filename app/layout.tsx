// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StayHub",
  description: "Book your desired luxury room seamlessly",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.className} bg-gray-800 flex justify-center min-h-screen`}>
        
        {/* The Mobile App Container - This keeps it narrow even on desktop monitors */}
        <main className="w-full max-w-[400px] bg-white min-h-screen relative shadow-2xl overflow-y-auto overflow-x-hidden flex flex-col">
          {children}
        </main>

      </body>
    </html>
  );
}