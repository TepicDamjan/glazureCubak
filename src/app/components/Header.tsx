"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { getHoverTap } from "@/app/lib/motion";

const navLinks = [
  { href: "#about", label: "O nama" },
  { href: "#process", label: "Kako radimo" },
  { href: "#qa", label: "FAQ" },
  { href: "#gallery", label: "Galerija" },
  { href: "#contact", label: "Kontakt" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const hoverTap = getHoverTap(reduceMotion);

  return (
    <header className="sticky top-0 z-50 w-full bg-mintGrand/95 backdrop-blur-sm border-b border-granite/10 shadow-sm">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2 md:gap-3 shrink-0">
          <Image src="/Logo.svg" alt="Glazure Cubak logo" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10" />
          <span className="text-base md:text-2xl text-spaceIndigo font-bold">Glazure Cubak</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-spaceIndigo font-medium hover:text-bronze transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <motion.a
            {...hoverTap}
            href="tel:+38765921847"
            className="hidden md:inline-flex text-sm md:text-lg text-mintGrand bg-granite rounded-lg px-3 py-2 md:px-4 md:py-3 hover:bg-opacity-90 transition-all"
          >
            Pozovi nas
          </motion.a>

          <button
            type="button"
            className="lg:hidden p-2 text-spaceIndigo"
            aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden border-t border-granite/10 bg-mintGrand px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-spaceIndigo font-medium py-2 hover:text-bronze transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
