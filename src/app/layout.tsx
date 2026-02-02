import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glazure Cubak | Mašinska Izrada Podnih Glazura i Estriha",
  description: "Vrhunska izrada mašinskih podnih glazura i estriha sa preko 20 godina iskustva. Profesionalni tim, savršeno ravni podovi za vaš dom ili poslovni prostor.",
  keywords: ["mašinske glazure", "estrih", "podne glazure", "izravnavanje podova", "Glazure Cubak", "gradnja", "podovi","hidroizolacija", "izolacija", "izrada podova", "mašinska izrada", "podovi za gradnju", "vrhunska izrada podova"],
  openGraph: {
    title: "Glazure Cubak | Mašinska Izrada Podnih Glazura",
    description: "Profesionalna izrada podnih glazura sa preko 20 godina iskustva.",
    url: "https://glazurecubak.com",
    siteName: "Glazure Cubak",
    locale: "sr_RS",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
          className='flex flex-col justify-center items-center m-8'
      >
        {children}
        <Analytics/>
        <Footer/>
      </body>
    </html>
  );
}
