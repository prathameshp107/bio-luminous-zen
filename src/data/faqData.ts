export interface FaqItem {
  category: string;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    category: "General",
    question: "What services do you offer?",
    answer:
      "We provide a wide range of preclinical research services including toxicology testing, biocompatibility evaluation, histopathology, microbiology analysis, and custom research protocols. We also supply laboratory animal models.",
  },
  {
    category: "General",
    question: "Are your facilities accredited?",
    answer:
      "Yes. Our laboratory is NABL accredited (ISO/IEC 17025:2017) and CCSEA approved. We also operate under GLP compliance principles.",
  },
  {
    category: "General",
    question: "How do I request a quote?",
    answer:
      "You can request a quotation through our contact form, by emailing us at enquiry@crystbio.com, or by calling our team directly.",
  },
  {
    category: "Animal Models",
    question: "What animal models are available?",
    answer:
      "We provide Wistar Rats, Sprague Dawley Rats, Swiss Albino Mice, BALB/c Mice, C57BL/6 Mice, NZW Rabbits, and Dunkin-Hartley Guinea Pigs.",
  },
  {
    category: "Services",
    question: "Can you perform custom studies?",
    answer:
      "Yes. Our scientists design customized research protocols tailored to your regulatory and scientific requirements.",
  },
  {
    category: "Quality & Compliance",
    question: "What quality standards do you follow?",
    answer:
      "Our studies follow international standards including OECD guidelines, GLP compliance, and CCSEA animal welfare regulations.",
  },
];
