import React from 'react';
import { GalleryImage } from '../data/galleryData';

import Image from 'next/image';

interface GalleryItemProps {
  item: GalleryImage;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ item }) => {
  return (
    <div className="flex-shrink-0 w-64 md:w-80 h-96 relative rounded-2xl overflow-hidden bg-[#5F6F6F] shadow-md transition-transform hover:scale-105 flex items-center justify-center">
       <Image 
         src={item.src} 
         alt={item.alt} 
         fill 
         className="object-cover"
       /> 
    </div>
  );
};

export default GalleryItem;
