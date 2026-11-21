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
      <body suppressHydrationWarning className={`${inter.className} bg-gray-800 flex justify-center min-h-[100dvh]`}>
        {/* Changed min-h-screen to min-h-[100dvh] */}
        <main className="w-full max-w-[400px] bg-[#EAF2F8] min-h-[100dvh] relative shadow-2xl overflow-y-auto overflow-x-hidden flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}