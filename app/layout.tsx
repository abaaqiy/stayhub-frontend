import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StayHub",
  description: "Book your desired luxury room seamlessly",
  icons: {
    icon: "/logo.png",         // Standard browser icon
    shortcut: "/logo.png",     // Older browsers
    apple: "/logo.png",        // Apple devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.className} bg-gray-800 flex justify-center min-h-screen`}>
        <main className="w-full max-w-[400px] bg-white min-h-screen relative shadow-2xl overflow-y-auto overflow-x-hidden flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}