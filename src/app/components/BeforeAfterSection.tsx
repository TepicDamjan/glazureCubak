"use client";

import { motion, useReducedMotion } from "framer-motion";
import BeforeAfterSlider from "@/app/components/BeforeAfterSlider";
import { getFadeInView } from "@/app/lib/motion";

const beforeAfterPairs = [
  {
    id: 1,
    beforeSrc: "/before-after/1before.jpg",
    afterSrc: "/before-after/1.jpg",
    beforeAlt: "Podloga prije izrade glazure",
    afterAlt: "Gotova mašinska glazura",
  },
  {
    id: 2,
    beforeSrc: "/before-after/2before.jpg",
    afterSrc: "/before-after/2.jpg",
    beforeAlt: "Podloga prije izrade glazure",
    afterAlt: "Gotova mašinska glazura",
  },
];

export default function BeforeAfterSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="before-after" className="mt-24 md:mt-40 w-full py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          {...getFadeInView(reduceMotion)}
          className="text-3xl md:text-4xl font-bold text-center text-spaceIndigo mb-4"
        >
          Prije i poslije
        </motion.h2>
        <motion.p
          {...getFadeInView(reduceMotion, 0.1)}
          className="text-lg md:text-xl text-center text-bronze mb-12 md:mb-16 font-bold max-w-2xl mx-auto"
        >
          Povucite klizač i pogledajte razliku prije i poslije mašinske glazure
        </motion.p>

        <div className="flex flex-col gap-12 md:gap-16">
          {beforeAfterPairs.map((pair, index) => (
            <motion.div key={pair.id} {...getFadeInView(reduceMotion, 0.1 * index)}>
              <BeforeAfterSlider
                beforeSrc={pair.beforeSrc}
                afterSrc={pair.afterSrc}
                beforeAlt={pair.beforeAlt}
                afterAlt={pair.afterAlt}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
