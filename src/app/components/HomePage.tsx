"use client";

import { motion, useReducedMotion } from "framer-motion";
import HeroSection from "@/app/components/HeroSection";
import { qaData } from "@/app/data/qaData";
import QAItem from "@/app/components/QAItem";
import GallerySection from "@/app/components/GallerySection";
import BeforeAfterSection from "@/app/components/BeforeAfterSection";
import VideoSection from "@/app/components/VideoSection";
import PhoneSvg from "@/app/components/PhoneSvg";
import ViberSvg from "@/app/components/ViberSvg";
import FacebookSvg from "@/app/components/FacebookSvg";
import WhatsAppSvg from "@/app/components/WhatsAppSvg";
import FloatingCallButton from "@/app/components/FloatingCallButton";
import { getFadeInView } from "@/app/lib/motion";

const processSteps = [
  {
    step: "1",
    title: "Besplatna procjena",
    description: "Dolazimo na lokaciju, pregledamo podlogu i dogovaramo detalje radova.",
  },
  {
    step: "2",
    title: "Priprema podloge",
    description: "Čistimo i pripremamo površinu za mašinsku izradu glazure ili estriha.",
  },
  {
    step: "3",
    title: "Mašinska izrada",
    description: "Postavljamo sloj visokog kvaliteta pomoću profesionalne opreme.",
  },
  {
    step: "4",
    title: "Sušenje i predaja",
    description: "Ostavljamo pod savršeno ravan, spreman za završne obloge nakon sušenja.",
  },
];

export default function HomePage() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <FloatingCallButton />

      <HeroSection />

      <section id="about" className="mt-12 md:mt-24 max-w-5xl mx-auto w-full flex flex-col justify-center items-center px-4">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: reduceMotion ? 0 : 0.8 }}
          className="w-full"
        >
          <h2 className="text-spaceIndigo text-2xl md:text-4xl text-center leading-relaxed font-bold">
            Izrada podnih glazura, estriha ili cementne košuljice sa više od 20 godina iskustva. Regija Banja Luka i dalje.
          </h2>
          <h3 className="text-spaceIndigo text-xl md:text-2xl text-center leading-relaxed font-semibold mt-6">
            Podne glazure u Banja Luci, Kotor Varošu, Čelincu i Laktašima
          </h3>
          <p className="text-bronze text-lg md:text-xl text-center mt-4">
            Pružamo usluge mašinskih glazura i estriha na području Banja Luke, Kotor Varoša, Kneževa, Čelinca, Laktaša i šire regije.
          </p>
        </motion.div>
      </section>

      <section id="process" className="mt-20 md:mt-32 max-w-5xl w-full mx-auto px-4">
        <motion.h2
          {...getFadeInView(reduceMotion)}
          className="text-3xl md:text-4xl font-bold text-center text-spaceIndigo mb-10 md:mb-16"
        >
          Kako radimo
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              {...getFadeInView(reduceMotion, index * 0.1)}
              className="p-6 border-l-4 border-bronze bg-gray-50 rounded-r-lg shadow-sm"
            >
              <span className="text-bronze font-bold text-2xl">{step.step}</span>
              <h3 className="text-xl font-bold text-spaceIndigo mt-2 mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="qa" className="mt-20 md:mt-32 max-w-4xl w-full mx-auto px-4">
        <motion.h2
          {...getFadeInView(reduceMotion)}
          className="text-3xl md:text-4xl font-bold text-center text-spaceIndigo mb-10 md:mb-16"
        >
          Često postavljana pitanja
        </motion.h2>
        <div className="flex flex-col gap-2">
          {qaData.map((item, index) => (
            <motion.div key={item.id} {...getFadeInView(reduceMotion, index * 0.1)}>
              <QAItem item={item} />
            </motion.div>
          ))}
        </div>
      </section>

      <GallerySection />

      <BeforeAfterSection />

      <VideoSection />

      <section id="contact" className="mt-24 md:mt-40 w-full py-16 md:py-24 px-4">
        <div className="flex flex-col justify-center items-center mt-3 gap-8 max-w-7xl mx-auto">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: reduceMotion ? 0 : 0.6 }}
            className="text-center flex flex-col justify-between gap-4"
          >
            <h2 className="text-3xl text-center text-bronze font-bold">Kontaktirajte nas</h2>
            <p className="text-2xl text-spaceIndigo">
              Za besplatnu procjenu ili dodatne informacije, slobodno nas kontaktirajte putem telefona, Vibera ili WhatsApp-a.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6 text-center items-start justify-center max-w-[350px]">
            <motion.div {...getFadeInView(reduceMotion, 0.1)}>
              <motion.a
                {...(reduceMotion ? {} : { whileHover: { scale: 1.05, x: 10 } })}
                href="tel:+38765921847"
                className="flex flex-row items-center justify-start gap-3 w-fit"
                aria-label="Pozovite nas na 065 921 847"
              >
                <PhoneSvg className="w-8 h-8 md:w-10 md:h-10" />
                <p className="text-xl md:text-2xl text-spaceIndigo">065 921 847</p>
              </motion.a>
            </motion.div>

            <motion.div {...getFadeInView(reduceMotion, 0.2)}>
              <motion.a
                {...(reduceMotion ? {} : { whileHover: { scale: 1.05, x: 10 } })}
                href="viber://chat?number=38765921847"
                className="flex flex-row items-center justify-start gap-3 w-fit"
                aria-label="Kontaktirajte nas putem Vibera"
              >
                <ViberSvg className="w-8 h-8 md:w-10 md:h-10" />
                <p className="text-xl md:text-2xl text-spaceIndigo">065 921 847</p>
              </motion.a>
            </motion.div>

            <motion.div {...getFadeInView(reduceMotion, 0.25)}>
              <motion.a
                {...(reduceMotion ? {} : { whileHover: { scale: 1.05, x: 10 } })}
                href="https://wa.me/38765921847"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center justify-start gap-3 w-fit"
                aria-label="Kontaktirajte nas putem WhatsApp-a"
              >
                <WhatsAppSvg className="w-8 h-8 md:w-10 md:h-10 text-spaceIndigo" />
                <p className="text-xl md:text-2xl text-spaceIndigo">065 921 847</p>
              </motion.a>
            </motion.div>

            <motion.div {...getFadeInView(reduceMotion, 0.3)}>
              <motion.a
                {...(reduceMotion ? {} : { whileHover: { scale: 1.05, x: 10 } })}
                href="https://www.facebook.com/glazureestrih.cubak/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center justify-start gap-3 w-fit"
                aria-label="Posjetite našu Facebook stranicu"
              >
                <FacebookSvg className="w-8 h-8 md:w-10 md:h-10" />
                <p className="text-xl md:text-2xl text-spaceIndigo">Glazure Estrich Cubak</p>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
