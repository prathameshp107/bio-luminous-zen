import strainSwissAlbino from "@/assets/strain-swiss-albino.jpg";
import strainBalbc from "@/assets/strain-balbc.jpg";
import strainC57bl6 from "@/assets/strain-c57bl6.jpg";
import strainWistar from "@/assets/strain-wistar.jpg";
import strainSpragueDawley from "@/assets/strain-sprague-dawley.jpg";
import strainNzwRabbit from "@/assets/strain-nzw-rabbit.jpg";
import strainDunkinHartley from "@/assets/strain-dunkin-hartley.jpg";
import strainGoldenSyrian from "@/assets/strain-golden-syrian.jpg";
import animalMice from "@/assets/animal-mice.jpg";
import animalRat from "@/assets/animal-rat.jpg";
import animalRabbit from "@/assets/animal-rabbit.jpg";
import animalGuineaPig from "@/assets/animal-guinea-pig.jpg";
import animalHamster from "@/assets/animal-hamster.jpg";

export interface Strain {
  name: string;
  image: string;
  description: string;
  bestStudyModel: string[];
}

export interface AnimalModel {
  slug: string;
  name: string;
  heroImage: string;
  shortDesc: string;
  strains: Strain[];
}

export const animalModels: AnimalModel[] = [
  {
    slug: "rats",
    name: "Rats",
    heroImage: animalRat,
    shortDesc: "High-quality rats bred under controlled conditions for toxicology, pharmacology, and general safety studies.",
    strains: [
      {
        name: "Wistar",
        image: strainWistar,
        description: "The Wistar rat is one of the most popular rat strains used for laboratory research. It is an outbred albino rat developed at the Wistar Institute in 1906. Wistar rats are characterized by their wide head, long ears, and a tail length that is always less than their body length. They are docile and easy to handle, making them ideal for a wide range of studies.",
        bestStudyModel: [
          "General toxicology studies",
          "Pharmacokinetic studies",
          "Safety pharmacology",
          "Reproductive toxicology",
          "Carcinogenicity studies",
          "Nutritional research",
        ],
      },
      {
        name: "Sprague Dawley",
        image: strainSpragueDawley,
        description: "Sprague Dawley rats are an outbred multipurpose breed of albino rat used extensively in medical research. They are calm and easy to handle with good reproductive performance. Known for their growth rate, they are larger in size compared to other strains, making them suitable for surgical procedures and long-term studies.",
        bestStudyModel: [
          "Acute & chronic toxicity studies",
          "Safety assessment",
          "Oncology research",
          "Surgical models",
          "Cardiovascular studies",
          "Behavioral research",
        ],
      },
    ],
  },
  {
    slug: "mice",
    name: "Mice",
    heroImage: animalMice,
    shortDesc: "Laboratory mice available in multiple strains for diverse research and immunological applications.",
    strains: [
      {
        name: "Swiss Albino",
        image: strainSwissAlbino,
        description: "Swiss albino mice are a widely used mouse strain for many research investigations due to their small size and short life span. An outbred albino for multipurpose use, they are robust, good breeders, and easy to handle. They are commonly used as a general-purpose model in pharmaceutical and biomedical research.",
        bestStudyModel: [
          "Toxicity models",
          "Efficacy studies",
          "Safety studies",
          "Multipurpose model",
          "Pharmacological screening",
        ],
      },
      {
        name: "BALB/c",
        image: strainBalbc,
        description: "BALB/c mice have body weight of male and female that is almost equivalent and are sensitive to carcinogens. They develop lung tumours, reticular neoplasms, renal tumours and other tumor variants, making them a good candidate for cancer recovery studies and immunological studies.",
        bestStudyModel: [
          "Cancer therapy studies",
          "Immunological studies",
          "Antibody production (Monoclonal)",
          "Viral defense studies",
          "DNA vaccine studies",
          "Anti-plasmodial studies",
          "Antifungal immune response studies",
        ],
      },
      {
        name: "C57BL/6 (Black 6)",
        image: strainC57bl6,
        description: "This strain has disrupted mitochondrial antioxidant enzyme, Nicotinamide Nucleotide Transhydrogenase (NNT) due to a natural deletion in the exons which completely disrupts protein expression. This mutation is responsible for the impaired glucose clearance and resting glucose levels.",
        bestStudyModel: [
          "Diet-induced obesity studies",
          "Safety & efficacy studies",
          "Immunological studies (T cell & B lymphocyte development)",
          "Inflammation responses",
          "Fibrosis and cardiomyopathy",
          "Heart failure models",
          "Diabetic studies (Obesity, type-2 diabetes)",
          "Infectious disease screening",
          "Acute gastrointestinal infection studies",
        ],
      },
    ],
  },
  {
    slug: "rabbits",
    name: "Rabbits",
    heroImage: animalRabbit,
    shortDesc: "Rabbits for dermal irritation, pyrogen testing, biocompatibility, and ocular studies.",
    strains: [
      {
        name: "New Zealand White",
        image: strainNzwRabbit,
        description: "The New Zealand White rabbit is the most widely used laboratory rabbit breed. They are large, docile, and easy to handle. Their large ear veins make them ideal for intravenous injections and blood sampling. They are the preferred model for dermal and ocular irritation studies as well as pyrogen testing.",
        bestStudyModel: [
          "Dermal irritation & corrosion testing",
          "Ocular irritation studies",
          "Pyrogen testing (Rabbit Pyrogen Test)",
          "Biocompatibility testing (ISO 10993)",
          "Skin sensitization studies",
          "Implantation studies",
          "Pharmacokinetic studies",
          "Antibody production (Polyclonal)",
        ],
      },
    ],
  },
  {
    slug: "guinea-pigs",
    name: "Guinea Pigs",
    heroImage: animalGuineaPig,
    shortDesc: "Guinea pigs for skin sensitization testing, immunological studies, and dermal assessments.",
    strains: [
      {
        name: "Dunkin Hartley",
        image: strainDunkinHartley,
        description: "Similar to dietary requirements of humans, Guinea pigs also require an external source of vitamin C. They serve as a good source of serum complement. A well-suited model for auditory and immunological research, Dunkin Hartley guinea pigs are outbred and commonly used in regulatory toxicology and safety pharmacology.",
        bestStudyModel: [
          "Otological research (Human complement)",
          "Immunological studies",
          "Allergic studies",
          "Multipurpose and surgical models",
          "Antibody production",
          "Skin sensitization (Guinea Pig Maximization Test)",
          "Dermal irritation studies",
        ],
      },
    ],
  },
  {
    slug: "hamsters",
    name: "Hamsters",
    heroImage: animalHamster,
    shortDesc: "Hamsters for specialized research protocols, toxicology, and infectious disease studies.",
    strains: [
      {
        name: "Golden Syrian",
        image: strainGoldenSyrian,
        description: "The Golden Syrian hamster is a widely used laboratory animal particularly valued for its cheek pouch — an immunologically privileged site that allows transplantation studies. They are susceptible to a variety of human pathogens, making them excellent models for infectious disease research including COVID-19 studies.",
        bestStudyModel: [
          "Infectious disease models (COVID-19, Influenza)",
          "Oncology — cheek pouch transplantation",
          "Oral toxicity studies",
          "Teratogenicity studies",
          "Dental research",
          "Cardiovascular research",
          "Metabolic studies",
        ],
      },
    ],
  },
];
