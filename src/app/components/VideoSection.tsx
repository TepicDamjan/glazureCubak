"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { videoData } from "@/app/data/videoData";
import VideoItem from "@/app/components/VideoItem";
import VideoLightbox from "@/app/components/VideoLightbox";
import { getFadeInView } from "@/app/lib/motion";

export default function VideoSection() {
  const reduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentVideo = videoData[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < videoData.length - 1;

  const goPrev = () => setCurrentIndex((i) => (i > 0 ? i - 1 : i));
  const goNext = () =>
    setCurrentIndex((i) => (i < videoData.length - 1 ? i + 1 : i));

  return (
    <section id="videos" className="w-full py-16 md:py-24 bg-[#F7FCF7]">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        <motion.h2
          {...getFadeInView(reduceMotion)}
          className="text-3xl md:text-4xl font-bold text-center text-spaceIndigo mb-4"
        >
          Video snimci
        </motion.h2>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.2 }}
          className="text-lg md:text-xl text-center text-bronze mb-12 md:mb-16 font-bold max-w-2xl mx-auto"
        >
          Pogledajte naše radove u akciji
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: reduceMotion ? 0 : 0.8 }}
          className="relative flex items-center justify-center gap-3 md:gap-6 px-2"
        >
          {videoData.length > 1 && (
            <button
              type="button"
              onClick={goPrev}
              disabled={!hasPrev}
              aria-label="Prethodni video"
              className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-granite/20 bg-white text-spaceIndigo text-2xl flex items-center justify-center shadow-sm transition-colors hover:border-bronze/40 hover:text-bronze disabled:opacity-30 disabled:pointer-events-none"
            >
              &#8249;
            </button>
          )}

          <VideoItem
            key={currentVideo.id}
            item={currentVideo}
            onClick={() => setLightboxOpen(true)}
          />

          {videoData.length > 1 && (
            <button
              type="button"
              onClick={goNext}
              disabled={!hasNext}
              aria-label="Sljedeći video"
              className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-granite/20 bg-white text-spaceIndigo text-2xl flex items-center justify-center shadow-sm transition-colors hover:border-bronze/40 hover:text-bronze disabled:opacity-30 disabled:pointer-events-none"
            >
              &#8250;
            </button>
          )}
        </motion.div>

        {videoData.length > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {videoData.map((video, index) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Prikaži video ${index + 1}`}
                aria-current={index === currentIndex ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-bronze"
                    : "w-2.5 bg-granite/30 hover:bg-granite/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <VideoLightbox
        item={lightboxOpen ? currentVideo : null}
        onClose={() => setLightboxOpen(false)}
        onPrev={goPrev}
        onNext={goNext}
        hasPrev={hasPrev}
        hasNext={hasNext}
      />
    </section>
  );
}
