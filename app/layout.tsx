import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calendra",
  description: "A high-performance scheduling platform built by Zubair. Book meetings, manage availability, and sync your calendar effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body 
          className={`${geistSans.variable} ${geistMono.variable} antialiased animate-fade-in flex flex-col min-h-screen`}
        >
          {/* flex-1 makes this area grow to fill the space, pushing the footer down */}
          <main className="flex-1">
            {children}
          </main>

          {/* This footer will now stay at the bottom forever */}
          <footer className="w-full py-6 text-center text-sm text-gray-500 border-t bg-white">
            Built by M Zubair
          </footer>

          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}