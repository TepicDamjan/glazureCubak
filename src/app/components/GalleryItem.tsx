import React from 'react';
import { GalleryImage } from '../data/galleryData';
import Image from 'next/image';

interface GalleryItemProps {
  item: GalleryImage;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ item, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex-shrink-0 w-64 md:w-80 text-left group cursor-pointer"
      aria-label={`Otvori sliku: ${item.alt}`}
    >
      <div className="h-96 relative rounded-2xl overflow-hidden bg-[#5F6F6F] shadow-md transition-transform group-hover:scale-105 flex items-center justify-center">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 256px, 320px"
        />
      </div>
      {(item.title || item.alt) && (
        <p className="mt-2 text-sm md:text-base text-spaceIndigo font-medium text-center px-1">
          {item.title ?? item.alt}
        </p>
      )}
    </button>
  );
};

export default GalleryItem;
