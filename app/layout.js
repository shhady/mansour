import { Geist, Geist_Mono } from "next/font/google";
import { Heebo } from "next/font/google";
import "./globals.css";
import MainLayout from "./components/layout/MainLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
});

export const metadata = {
  title: "Dr. Muhammad & Dr. Ahmad Mansour - Medical Specialists",
  description: "Professional medical services by Dr. Muhammad Mansour (Plastic Surgery) and Dr. Ahmad Mansour (Ophthalmology & Oculoplastic Surgery)",
  keywords: "plastic surgery, ophthalmology, oculoplastic surgery, medical specialists, Dr. Muhammad Mansour, Dr. Ahmad Mansour",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${heebo.variable} antialiased light bg-white text-black`}
      >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
