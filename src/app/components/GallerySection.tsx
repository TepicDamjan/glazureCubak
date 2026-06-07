"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { galleryData } from "@/app/data/galleryData";
import GalleryItem from "@/app/components/GalleryItem";
import GalleryLightbox from "@/app/components/GalleryLightbox";
import { getFadeInView } from "@/app/lib/motion";

export default function GallerySection() {
  const reduceMotion = useReducedMotion();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedItem = selectedIndex !== null ? galleryData[selectedIndex] : null;

  return (
    <section id="gallery" className="mt-24 md:mt-40 w-full py-16 md:py-24 bg-[#F7FCF7]">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        <motion.h2
          {...getFadeInView(reduceMotion)}
          className="text-3xl md:text-4xl font-bold text-center text-spaceIndigo mb-4"
        >
          Galerija završenih projekata
        </motion.h2>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.2 }}
          className="text-lg md:text-xl text-center text-bronze mb-12 md:mb-16 font-bold max-w-2xl mx-auto"
        >
          Jedan od većih projekata je i Nova Bolnica u Trebinju
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: reduceMotion ? 0 : 0.8 }}
          className="flex overflow-x-auto gap-4 md:gap-8 pb-8 scroll-smooth no-scrollbar snap-x snap-mandatory px-2"
        >
          {galleryData.map((image, index) => (
            <div key={image.id} className="snap-center">
              <GalleryItem
                item={image}
                onClick={() => setSelectedIndex(index)}
              />
            </div>
          ))}
        </motion.div>
      </div>

      <GalleryLightbox
        item={selectedItem}
        onClose={() => setSelectedIndex(null)}
        onPrev={() => setSelectedIndex((i) => (i !== null && i > 0 ? i - 1 : i))}
        onNext={() =>
          setSelectedIndex((i) =>
            i !== null && i < galleryData.length - 1 ? i + 1 : i
          )
        }
        hasPrev={selectedIndex !== null && selectedIndex > 0}
        hasNext={selectedIndex !== null && selectedIndex < galleryData.length - 1}
      />
    </section>
  );
}
