export interface QAData {
  id: number;
  question: string;
  answer: string;
}

export const qaData: QAData[] = [
  {
    id: 1,
    question: "Šta je mašinska glazura (estrih)?",
    answer: "Mašinska glazura je sloj betona koji se postavlja preko podloge kako bi se dobila savršeno ravna površina spremna za postavljanje završnih podnih obloga poput laminata, parketa ili pločica.",
  },
  {
    id: 2,
    question: "Koliko je vremena potrebno za sušenje?",
    answer: "Vrijeme sušenja zavisi od debljine sloja i vremenskih uslova, ali se obično preporučuje period od 7 do 10 dana po centimetru debljine prije postavljanja osjetljivih obloga.",
  },
  {
    id: 3,
    question: "Koje materijale koristite?",
    answer: "Koristimo visokokvalitetni cement, oprani pijesak određene granulacije i aditive za poboljšanje čvrstoće i elastičnosti glazure.",
  },
  {
    id: 4,
    question: "Kolika je cijena glazure po m²?",
    answer: "Cijena zavisi od debljine glazure, količine materijala i težine rada. Za detaljnije informacije najbolje da nas kontaktirate.",
  },
  {
    id: 5,
    question: "Koje usluge nudite?",
    answer: "Nudimo profesionalnu mašinsku izradu estriha i podnih glazura za stambene, poslovne i industrijske objekte, uključujući pripremu podloge i besplatnu procjenu na lokaciji.",
  },
];
