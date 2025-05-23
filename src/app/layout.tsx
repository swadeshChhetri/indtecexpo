
import type { Metadata } from "next";
import { Geist, Geist_Mono, Abril_Fatface } from "next/font/google";
import "./globals.css";
import RootWrapper from "./RootWrapper";
import { Toaster } from "react-hot-toast";


// Load fonts with variables
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-abril",
});

// Metadata
export const metadata: Metadata = {
  title: "Indtecexpo2025",
  description: "Generated by create next app",
};

// Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${abril.variable}  antialiased 
        bg-gradient-to-br from-gray-800 via-gray-900 to-black 
        text-white 
        min-h-screen`}
      >
        <RootWrapper>
          <Toaster />
          {children}
        </RootWrapper>
      </body>
    </html>
  );
}

