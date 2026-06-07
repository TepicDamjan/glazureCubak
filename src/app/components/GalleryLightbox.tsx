"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { GalleryImage } from "@/app/data/galleryData";

interface GalleryLightboxProps {
  item: GalleryImage | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export default function GalleryLightbox({
  item,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: GalleryLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    },
    [onClose, onPrev, onNext, hasPrev, hasNext]
  );

  useEffect(() => {
    if (!item) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, handleKeyDown]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute top-4 right-4 text-white text-3xl leading-none p-2 hover:text-bronze transition-colors"
        aria-label="Zatvori"
        onClick={onClose}
      >
        &times;
      </button>

      {hasPrev && (
        <button
          type="button"
          className="absolute left-2 md:left-6 text-white text-4xl p-2 hover:text-bronze transition-colors"
          aria-label="Prethodna slika"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
        >
          &#8249;
        </button>
      )}

      {hasNext && (
        <button
          type="button"
          className="absolute right-2 md:right-6 text-white text-4xl p-2 hover:text-bronze transition-colors"
          aria-label="Sljedeća slika"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          &#8250;
        </button>
      )}

      <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <div className="relative w-full h-[70vh]">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
        {(item.title || item.alt) && (
          <p className="mt-4 text-white text-center text-lg md:text-xl font-medium">
            {item.title ?? item.alt}
          </p>
        )}
      </div>
    </div>
  );
}
