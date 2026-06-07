import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://glazurecubak.com"),
  title: "Glazure Cubak | Mašinska Izrada Podnih Glazura ili Estriha | Banja Luka",
  description: "Vrhunska izrada mašinskih podnih glazura ili estriha sa preko 20 godina iskustva. Profesionalni tim, savršeno ravni podovi za vaš dom ili poslovni prostor. Na području Banja Luke, Kotor Varoša, Čelinca, Laktaša i šire.",
  keywords: [
    "mašinske glazure", "glazure banja luka", "glazure Kotor Varos", "glazure Celinac", "glazure Laktasi",
    "estrih", "estrih banja luka", "podne glazure", "izravnavanje podova", "Glazure Cubak", "gradnja", "podovi",
    "hidroizolacija", "izolacija", "izrada podova", "mašinska izrada", "podovi za gradnju", "vrhunska izrada podova",
    "glazura Banja Luka", "glazura Kotor Varos", "glazura Celinac", "glazura Gradiška", "glazura Laktasi",
  ],
  alternates: {
    canonical: "https://glazurecubak.com",
  },
  openGraph: {
    title: "Glazure Cubak | Mašinska Izrada Podnih Glazura ili Estriha | Banja Luka",
    description: "Profesionalna izrada podnih glazura ili estriha sa preko 20 godina iskustva. Banja Luka, Kotor Varoš, Čelinac, Laktaši i šira regija.",
    url: "https://glazurecubak.com",
    siteName: "Glazure Cubak",
    locale: "sr_RS",
    type: "website",
    images: [
      {
        url: "/images/1.webp",
        width: 1200,
        height: 630,
        alt: "Podna glazura, Nova Bolnica Trebinje — Glazure Cubak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glazure Cubak | Mašinska Izrada Podnih Glazura",
    description: "Profesionalna izrada podnih glazura ili estriha sa preko 20 godina iskustva.",
    images: ["/images/1.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/Logo.svg",
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
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col w-full font-sans antialiased`}
      >
        <Header />
        <main className="flex-1 w-full flex flex-col items-center">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
