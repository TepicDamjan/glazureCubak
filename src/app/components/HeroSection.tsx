"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import PhoneSvg from "@/app/components/PhoneSvg";
import { getFadeUp, getHoverTap } from "@/app/lib/motion";

const trustSignals = [
  "Besplatna procjena",
  "Mašinska izrada",
  "Banja Luka i regija",
];

const stats = [
  { value: "20+", label: "Godina iskustva" },
  { value: "100%", label: "Mašinska izrada" },
  { value: "5+", label: "Gradova u regiji" },
];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const hoverTap = getHoverTap(reduceMotion);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-gradient-to-b from-mintGrand via-white to-mintGrand/40"
    >
      <div
        className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-bronze/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-granite/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto w-full px-4 py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            {...getFadeUp(reduceMotion, 0.1)}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <span className="inline-flex items-center rounded-full border border-bronze/30 bg-bronze/10 px-4 py-1.5 text-sm font-semibold text-bronze">
              Preko 20 godina iskustva
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-spaceIndigo leading-[1.1] tracking-tight">
              Vaš partner za{" "}
              <span className="text-bronze">savršeno ravne</span> podove
            </h1>

            <p className="mt-5 text-lg md:text-xl text-granite max-w-xl leading-relaxed">
              Mašinska izrada podnih glazura i estriha za domove, poslovne prostore
              i velike projekte u Banja Luci i široj regiji.
            </p>

            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2">
              {trustSignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-granite/15 bg-white/80 px-3 py-1.5 text-sm font-medium text-spaceIndigo shadow-sm"
                >
                  {signal}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <motion.a
                {...hoverTap}
                href="#contact"
                className="inline-flex items-center justify-center min-h-12 px-6 py-3 text-base md:text-lg font-semibold text-mintGrand bg-granite rounded-xl shadow-md hover:bg-granite/90 transition-colors"
              >
                Besplatna procjena
              </motion.a>
              <motion.a
                {...hoverTap}
                href="#gallery"
                className="inline-flex items-center justify-center min-h-12 px-6 py-3 text-base md:text-lg font-semibold text-spaceIndigo border-2 border-granite/25 bg-white/70 rounded-xl hover:border-bronze/40 hover:bg-white transition-colors"
              >
                Pogledaj radove
              </motion.a>
            </div>

            <motion.a
              {...getFadeUp(reduceMotion, 0.3)}
              href="tel:+38765921847"
              className="mt-6 inline-flex items-center gap-2 text-spaceIndigo font-medium hover:text-bronze transition-colors"
              aria-label="Pozovite nas na 065 921 847"
            >
              <PhoneSvg className="w-5 h-5 shrink-0" />
              <span className="text-lg">065 921 847</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.25 }}
            className="relative w-full max-w-xl mx-auto lg:max-w-none"
          >
            <div className="relative rounded-3xl border border-granite/10 bg-white/70 p-6 md:p-8 shadow-xl shadow-granite/10 backdrop-blur-sm">
              <div
                className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-bronze/40 to-transparent"
                aria-hidden="true"
              />
              <div className="relative w-full max-w-md lg:max-w-xl mx-auto">
                <Image
                  src="/Masina.svg"
                  alt="Mašina za izradu podnih glazura"
                  width={718}
                  height={524}
                  priority
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.45 }}
          className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-granite/10 bg-white/80 px-6 py-5 text-center shadow-sm"
            >
              <p className="text-3xl md:text-4xl font-bold text-bronze">{stat.value}</p>
              <p className="mt-1 text-sm md:text-base font-medium text-spaceIndigo">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
