import { qaData } from "./qaData";

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Glazure Cubak",
  description: "Mašinska izrada podnih glazura sa preko 20 godina iskustva.",
  telephone: "+38765921847",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Banja Luka",
    addressCountry: "BA",
  },
  url: "https://glazurecubak.com",
  areaServed: [
    { "@type": "City", name: "Banja Luka" },
    { "@type": "City", name: "Kotor Varoš" },
    { "@type": "City", name: "Čelinac" },
    { "@type": "City", name: "Laktaši" },
  ],
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: qaData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};
