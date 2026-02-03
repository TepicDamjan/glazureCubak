import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glazure Cubak | Mašinska Izrada Podnih Glazura ili Estriha | Banja Luka",
  description: "Vrhunska izrada mašinskih podnih glazura ili estriha sa preko 20 godina iskustva. Profesionalni tim, savršeno ravni podovi za vaš dom ili poslovni prostor.Na regiji Banja Luke i dalje",
  keywords: ["mašinske glazure","glazure banja luka", "estrih","estrih banja luka", "podne glazure", "izravnavanje podova", "Glazure Cubak", "gradnja", "podovi","hidroizolacija", "izolacija", "izrada podova", "mašinska izrada", "podovi za gradnju", "vrhunska izrada podova","Glazure BanjaLuka" ,"glazura Kotor Varos","glazura Celinac","glazura Gradiska","glazura Laktasi"],
  openGraph: {
    title: "Glazure Cubak | Mašinska Izrada Podnih Glazura ili Estriha | Banja Luka",
    description: "Profesionalna izrada podnih glazura ili estriha sa preko 20 godina iskustva. Na regiji Banja Luke i dalje",
    url: "https://glazurecubak.com",
    siteName: "Glazure Cubak",
    locale: "sr_RS",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/Logo.svg"
  },
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
        <SpeedInsights/>
        <Footer/>
      </body>
    </html>
  );
}
