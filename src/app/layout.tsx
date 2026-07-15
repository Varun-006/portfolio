import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne, Outfit } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Varun D — AI & Full Stack Developer",
  description:
    "Portfolio of Varun D, an Information Science Engineering Student, Full Stack Developer, and Machine Learning enthusiast crafting premium web products and intelligent systems.",
  keywords: [
    "Varun D",
    "Full Stack Developer",
    "AI Developer",
    "Machine Learning",
    "React Developer",
    "Next.js Portfolio",
    "Awwwards Portfolio",
    "Information Science Student",
  ],
  authors: [{ name: "Varun D" }],
  metadataBase: new URL("https://varun-d.dev"),
  openGraph: {
    title: "Varun D — AI & Full Stack Developer",
    description:
      "Redesigned premium digital space showing selected works, technical capabilities, and intelligent projects.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Varun D — AI & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varun D — AI & Full Stack Developer",
    description: "Premium portfolio of Varun D — Full Stack & AI Engineer.",
    images: ["/profile.jpg"],
  },
};

export const viewport = {
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-white overflow-x-hidden relative selection:bg-indigo-500/20 selection:text-white">
        {/* Preloader counter */}
        <Preloader />

        {/* Global FX Overlay */}
        <div className="grain-overlay" />
        <div className="glow-bg glow-bg-1" />
        <div className="glow-bg glow-bg-2" />

        {/* Custom interactive mouse cursor */}
        <CustomCursor />

        {/* Smooth Scrolling Wrapper */}
        <LenisProvider>
          <Navbar />
          <main className="flex-grow flex flex-col relative z-10">
            {children}
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}
