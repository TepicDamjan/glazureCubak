"use client";

import { motion, useReducedMotion } from "framer-motion";
import { getHoverTap } from "@/app/lib/motion";

export default function FloatingCallButton() {
  const reduceMotion = useReducedMotion();
  const hoverTap = getHoverTap(reduceMotion);

  return (
    <motion.a
      {...hoverTap}
      href="tel:+38765921847"
      aria-label="Pozovi nas: 065 921 847"
      className="fixed bottom-6 right-4 z-40 md:hidden flex items-center gap-2 bg-granite text-mintGrand font-bold rounded-full px-5 py-3 shadow-lg"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.2 2.22z" />
      </svg>
      Pozovi
    </motion.a>
  );
}
