"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  /** Tailwind aspect-ratio klasa, npr. "aspect-[4/3]" */
  aspectClassName?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = "Prije",
  afterLabel = "Poslije",
  aspectClassName = "aspect-[4/3]",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const isDragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updateFromClientX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className={`relative w-full ${aspectClassName} overflow-hidden rounded-2xl shadow-md select-none touch-none cursor-ew-resize bg-[#5F6F6F]`}
    >
      {/* Poslije (baza) */}
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        className="object-cover pointer-events-none"
        sizes="(max-width: 768px) 100vw, 800px"
        draggable={false}
      />
      <span className="absolute top-3 right-3 z-10 rounded-full bg-spaceIndigo/80 px-3 py-1 text-sm font-semibold text-white pointer-events-none">
        {afterLabel}
      </span>

      {/* Prije (isti okvir, sečen clip-path-om — slika se ne rasteže) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
          draggable={false}
        />
        <span className="absolute top-3 left-3 z-10 rounded-full bg-bronze/90 px-3 py-1 text-sm font-semibold text-white">
          {beforeLabel}
        </span>
      </div>

      {/* Linija + ručica */}
      <div
        role="slider"
        tabIndex={0}
        aria-label="Klizač za poređenje prije i poslije"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        onKeyDown={handleKeyDown}
        className="absolute top-0 bottom-0 z-20 -ml-0.5 w-1 bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)] cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-bronze"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-spaceIndigo">
            <path d="M9 6L4 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 6L20 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
