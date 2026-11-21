# 🏨 StayHub - Frontend

StayHub is a modern, mobile-first hotel booking web application. Users can search for hotels, view property details, select dates, and complete a seamless checkout flow. It also includes a post-check-in "Guest Concierge" dashboard.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first configuration)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/) (for booking flow state)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Date Handling:** [date-fns](https://date-fns.org/) & [react-day-picker](https://daypicker.dev/)

## 📁 Folder Structure

```text
├── app/                  # Next.js App Router pages
│   ├── book/             # Booking flow (dates, summary, checkout, payment)
│   ├── guest/            # Post-check-in guest dashboard and requests
│   ├── hotel/            # Dynamic hotel details page ([id])
│   ├── globals.css       # Tailwind v4 theme and global styles
│   └── layout.tsx        # Root layout (Mobile wrapper for desktop viewing)
├── data/                 # Mock data (to be replaced by API)
│   └── hotels.ts         # Hotel interfaces and mock array
├── public/               # Static assets (logos, images)
├── store/                # Global state management
│   └── useBookingStore.ts# Zustand store for hotel, dates, and total price
├── package.json
└── tailwind.config...    # (Note: Tailwind v4 uses globals.css for config)