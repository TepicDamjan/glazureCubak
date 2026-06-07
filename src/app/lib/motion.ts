import type { Transition, Variants } from "framer-motion";

export function getFadeUp(reduceMotion: boolean | null, delay = 0) {
  if (reduceMotion) {
    return {
      initial: false as const,
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0 },
    };
  }

  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  };
}

export function getFadeInView(reduceMotion: boolean | null, delay = 0) {
  if (reduceMotion) {
    return {
      initial: false as const,
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" as const },
      transition: { duration: 0 },
    };
  }

  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" as const },
    transition: { duration: 0.5, delay },
  };
}

export function getHoverTap(reduceMotion: boolean | null) {
  if (reduceMotion) return {};
  return {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function reducedTransition(reduceMotion: boolean | null, transition: Transition): Transition {
  return reduceMotion ? { duration: 0 } : transition;
}
