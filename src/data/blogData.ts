import serviceToxicology from "@/assets/service-toxicology.jpg";
import serviceBiocompat from "@/assets/service-biocompat.jpg";
import serviceAgrochem from "@/assets/service-agrochem.jpg";
import serviceResearch from "@/assets/service-research.jpg";
import subBioCytotoxicity from "@/assets/sub-bio-cytotoxicity.jpg";
import subBioImplantation from "@/assets/sub-bio-implantation.jpg";
import subToxGenotox from "@/assets/sub-tox-genotox.jpg";
import heroLab from "@/assets/hero-lab.jpg";
import aboutLab from "@/assets/about-lab.jpg";
import facilitiesImg from "@/assets/facilities.jpg";
import animalFacilityImg from "@/assets/animal-facility.jpg";
import animalGuineaPig from "@/assets/animal-guinea-pig.jpg";
import animalRat from "@/assets/animal-rat.jpg";
import animalMouse from "@/assets/animal-mice.jpg";
import animalHamster from "@/assets/animal-hamster.jpg";

export interface BlogContentSection {
  type: "paragraph" | "heading" | "list" | "callout";
  text?: string;
  level?: 2 | 3;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: BlogContentSection[];
  category: "Regulatory Deep-Dives" | "Service Guides" | "Animal Model Selection" | "Industry News" | "Case Studies" | "Quality & Compliance";
  tags: string[];
  date: string;
  authorId: string;
  readTime: number;
  image?: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  // ─── Category: Regulatory Deep-Dives ─────────────────────────────
  {
    slug: "oecd-407-vs-408-repeated-dose-toxicity",
    title: "OECD 407 vs 408: Choosing the Right Repeated-Dose Toxicity Study for Your Compound",
    excerpt:
      "A detailed comparison of 28-day and 90-day repeated-dose toxicity studies under OECD guidelines — when to use each, regulatory requirements, and study design considerations.",
    image: serviceToxicology,
    content: [
      {
        type: "paragraph",
        text: "Repeated-dose toxicity studies form the backbone of preclinical safety assessment. Regulatory agencies worldwide require these studies to evaluate the cumulative effects of test compounds over extended exposure periods. Two of the most commonly requested guidelines are OECD 407 (28-day) and OECD 408 (90-day). Understanding the differences between these study designs is critical for planning your regulatory strategy, budgeting, and timelines.",
      },
      {
        type: "heading",
        text: "What is OECD 407?",
        level: 2,
      },
      {
        type: "paragraph",
        text: "OECD Test Guideline 407 describes a 28-day repeated-dose oral toxicity study in rodents. It is designed to provide information on the major toxic effects, identify target organs, and determine the no-observed-adverse-effect level (NOAEL) for sub-acute exposure. The study involves daily oral administration of the test substance at three dose levels plus a control group, with a minimum of 5 animals per sex per group.",
      },
      {
        type: "heading",
        text: "What is OECD 408?",
        level: 2,
      },
      {
        type: "paragraph",
        text: "OECD 408 is a 90-day repeated-dose oral toxicity study in rodents. It is more comprehensive than OECD 407, designed to detect the effects of longer-term exposure. The extended duration allows for the detection of effects that may not manifest within 28 days, such as cumulative toxicity, delayed effects, and adaptive responses. Like OECD 407, it requires three dose levels plus a control, with a minimum of 10 animals per sex per group.",
      },
      {
        type: "heading",
        text: "Key Differences at a Glance",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Duration: 28 days (OECD 407) vs 90 days (OECD 408)",
          "Animal numbers: 5/sex/group (OECD 407) vs 10/sex/group (OECD 408)",
          "Regulatory use: OECD 407 for early screening and range-finding; OECD 408 for pivotal regulatory submissions",
          "Parameters assessed: OECD 408 adds ophthalmoscopy, additional clinical pathology, and more detailed histopathology",
          "Cost: OECD 408 is typically 2–3× more expensive due to longer housing and more extensive analyses",
        ],
      },
      {
        type: "heading",
        text: "When to Choose Each Study Type",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Choose OECD 407 when you need early toxicity screening, dose range-finding for longer studies, or when regulatory requirements for your product class only mandate sub-acute data. Choose OECD 408 when you are preparing for IND/NDA submissions, conducting pivotal registration studies, or when earlier studies have indicated potential cumulative toxicity. Many regulatory packages require both, with OECD 407 results informing the dose selection for OECD 408.",
      },
      {
        type: "callout",
        text: "At Cryst Bio Solutions, our NABL-accredited facility conducts both OECD 407 and 408 studies under GLP conditions. Our scientists can help you design the most appropriate study strategy for your compound's development stage and regulatory pathway.",
      },
    ],
    category: "Regulatory Deep-Dives",
    tags: ["OECD 407", "OECD 408", "Repeated-Dose Toxicity", "GLP Studies", "Preclinical Safety"],
    date: "June 10, 2026",
    authorId: "aniket-joshi",
    readTime: 8,
    featured: true,
  },
  {
    slug: "iso-10993-5-cytotoxicity-testing-guide",
    title: "ISO 10993-5 Cytotoxicity Testing: Methods, Interpretation, and Common Pitfalls",
    excerpt:
      "A complete guide to in-vitro cytotoxicity testing per ISO 10993-5 — covering direct contact, agar overlay, and extract methods with practical tips for medical device manufacturers.",
    image: subBioCytotoxicity,
    content: [
      {
        type: "paragraph",
        text: "Cytotoxicity testing is the first step in the biological evaluation of medical devices under ISO 10993. As the most sensitive and widely used biocompatibility test, it serves as an initial screening tool to determine whether a device or its extracts contain toxic leachables that could harm living cells.",
      },
      {
        type: "heading",
        text: "The Three Test Methods",
        level: 2,
      },
      {
        type: "paragraph",
        text: "ISO 10993-5 describes three primary methods for cytotoxicity testing. The choice of method depends on the physical form of the device, the nature of the test material, and the specific information needed.",
      },
      {
        type: "list",
        items: [
          "Direct Contact Method: The test material is placed directly onto a monolayer of L-929 mouse fibroblast cells. Best for high-density materials like silicone, metals, and rigid plastics.",
          "Agar Overlay Method: The test material is placed on an agar layer that separates it from the cell monolayer. Suitable for elastomers, films, and materials that might physically damage cells.",
          "Extract Method: The test material is extracted in culture media or saline, and the extract is applied to the cell monolayer. Recommended for porous materials, absorbent materials, and when you need to test leachables specifically.",
        ],
      },
      {
        type: "heading",
        text: "Interpreting Results",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Results are reported as a reactivity grade from 0 to 4, where Grade 0 indicates no cytotoxicity (no cell lysis or growth inhibition) and Grade 4 indicates severe cytotoxicity (>70% cell lysis or growth inhibition). For most medical devices, a reactivity grade of 2 or less is considered acceptable. However, the final acceptance criteria should be established based on the device's intended use and risk assessment.",
      },
      {
        type: "heading",
        text: "Common Pitfalls to Avoid",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Inadequate extraction: Using insufficient extraction medium or incorrect extraction conditions can mask cytotoxic effects",
          "Cell passage number: Using cells beyond passage 20 may lead to inconsistent results due to genetic drift",
          "Positive control failure: Always include a positive control to validate the sensitivity of the test system",
          "Sample preparation: Improper sterilization or handling can introduce artifacts that affect test results",
        ],
      },
      {
        type: "callout",
        text: "Our ISO 10993-5 cytotoxicity testing at Cryst Bio Solutions follows strict GLP and ISO/IEC 17025:2017 standards, ensuring reliable, regulatory-accepted results for your medical device submissions.",
      },
    ],
    category: "Regulatory Deep-Dives",
    tags: ["ISO 10993-5", "Cytotoxicity", "Medical Devices", "Biocompatibility", "In-Vitro Testing"],
    date: "May 28, 2026",
    authorId: "sneha-mehta",
    readTime: 10,
  },
  {
    slug: "eu-reach-vs-indian-cibrc",
    title: "EU REACH vs Indian CIBRC: Agrochemical Registration Pathways Compared",
    excerpt:
      "A head-to-head comparison of the EU REACH and Indian CIBRC regulatory frameworks for agrochemical product registration — data requirements, timelines, and strategic considerations.",
    image: serviceAgrochem,
    content: [
      {
        type: "paragraph",
        text: "For agrochemical manufacturers seeking to register products in both European and Indian markets, understanding the differences between EU REACH and Indian CIBRC regulatory pathways is essential. While both frameworks aim to ensure safety, their data requirements, study acceptance criteria, and submission processes differ significantly.",
      },
      {
        type: "heading",
        text: "EU REACH: The Gold Standard",
        level: 2,
      },
      {
        type: "paragraph",
        text: "EU REACH (Registration, Evaluation, Authorisation and Restriction of Chemicals) requires comprehensive toxicology and ecotoxicology data packages organized by tonnage band. Higher production volumes trigger more extensive data requirements. Studies must be GLP-compliant and follow OECD test guidelines. The European Chemicals Agency (ECHA) manages the registration process.",
      },
      {
        type: "heading",
        text: "Indian CIBRC: The Emerging Framework",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The Central Insecticides Board & Registration Committee (CIBRC) governs agrochemical registration in India. While increasingly aligned with international standards, CIBRC has specific requirements including local studies on Indian animal models and consideration of Indian climatic conditions for ecotoxicology data. The registration process involves multiple committees and can take 12–24 months.",
      },
      {
        type: "heading",
        text: "Strategic Recommendations",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Design your data package to meet both requirements simultaneously — using OECD guidelines satisfies both frameworks",
          "Include additional species-specific data for Indian registration (e.g., studies on local goat or cattle breeds if required)",
          "Plan for longer timelines in India — factor in committee review periods",
          "Consider parallel submissions to maximize market access speed",
        ],
      },
      {
        type: "callout",
        text: "Cryst Bio Solutions has extensive experience generating agrochemical registration data packages for both EU REACH and Indian CIBRC submissions. Contact our team to discuss your registration strategy.",
      },
    ],
    category: "Regulatory Deep-Dives",
    tags: ["EU REACH", "CIBRC", "Agrochemical Registration", "Pesticide Regulation", "Ecotoxicology"],
    date: "May 15, 2026",
    authorId: "aniket-joshi",
    readTime: 7,
  },

  // ─── Category: Service Guides ────────────────────────────────────
  {
    slug: "complete-guide-to-biocompatibility-testing",
    title: "What is Biocompatibility Testing? A Complete Guide to ISO 10993",
    excerpt:
      "Everything you need to know about medical device biocompatibility testing — from ISO 10993 standards and test selection to submission strategies and common challenges.",
    image: serviceBiocompat,
    content: [
      {
        type: "paragraph",
        text: "Biocompatibility testing is the evaluation of a medical device's compatibility with living tissue. Under ISO 10993, manufacturers must demonstrate that their devices do not produce unacceptable local or systemic effects when in contact with the body. This guide provides a comprehensive overview of the testing process, from initial risk assessment through to regulatory submission.",
      },
      {
        type: "heading",
        text: "Understanding ISO 10993",
        level: 2,
      },
      {
        type: "paragraph",
        text: "ISO 10993 is a series of international standards that provides a framework for the biological evaluation of medical devices. The standard covers everything from cytotoxicity and sensitization to systemic toxicity, implantation, and carcinogenicity. The key principle is that testing should be based on the nature and duration of body contact, as outlined in ISO 10993-1.",
      },
      {
        type: "heading",
        text: "The Biological Evaluation Process",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Step 1 — Characterize your material: Chemical composition, manufacturing process, and sterilization method",
          "Step 2 — Conduct a risk assessment per ISO 10993-1 to identify required tests",
          "Step 3 — Perform in-vitro tests: Cytotoxicity (ISO 10993-5), genotoxicity (ISO 10993-3)",
          "Step 4 — Perform in-vivo tests: Sensitization, irritation, systemic toxicity, implantation",
          "Step 5 — Compile the biological evaluation report",
        ],
      },
      {
        type: "heading",
        text: "Common Test Categories",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The most commonly required biocompatibility tests include cytotoxicity, sensitization, irritation/intracutaneous reactivity, acute systemic toxicity, sub-chronic toxicity, genotoxicity, implantation, and hemocompatibility. The specific test battery depends on the device category and duration of patient contact.",
      },
      {
        type: "callout",
        text: "Cryst Bio Solutions offers the full range of ISO 10993 biocompatibility tests at our NABL-accredited laboratory. Our scientific team provides expert guidance on test selection and regulatory strategy for EU MDR, FDA, and Health Canada submissions.",
      },
    ],
    category: "Service Guides",
    tags: ["Biocompatibility", "ISO 10993", "Medical Devices", "EU MDR", "Cytotoxicity"],
    date: "June 5, 2026",
    authorId: "sneha-mehta",
    readTime: 12,
    featured: true,
  },
  {
    slug: "genotoxicity-testing-battery-ames-chromosome-micronucleus",
    title: "Genotoxicity Testing Battery: Ames, Chromosome Aberration & Micronucleus Tests Explained",
    excerpt:
      "An in-depth guide to the standard genotoxicity test battery — bacterial reverse mutation, in-vitro chromosome aberration, and in-vivo micronucleus assays.",
    image: subToxGenotox,
    content: [
      {
        type: "paragraph",
        text: "Genotoxicity testing is a critical component of preclinical safety assessment for pharmaceuticals, chemicals, and medical devices. The standard genotoxicity battery, recommended by ICH and OECD guidelines, typically includes three complementary assays: the bacterial reverse mutation test (Ames), the in-vitro chromosome aberration test, and the in-vivo micronucleus test.",
      },
      {
        type: "heading",
        text: "The Ames Test (OECD 471)",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The Ames test uses Salmonella typhimurium and Escherichia coli bacterial strains to detect point mutations. The test is rapid, cost-effective, and highly sensitive for detecting DNA-reactive mutagens. Results are reported as the mutagenic index and fold-increase over background.",
      },
      {
        type: "heading",
        text: "Chromosome Aberration Test (OECD 473)",
        level: 2,
      },
      {
        type: "paragraph",
        text: "This in-vitro test detects structural chromosomal abnormalities in cultured mammalian cells. It is essential for detecting clastogenic compounds that may be missed by the Ames test. The test evaluates both numerical and structural aberrations in metaphase cells.",
      },
      {
        type: "heading",
        text: "In-Vivo Micronucleus Test (OECD 474)",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The micronucleus test in rodent bone marrow or peripheral blood provides an in-vivo assessment of chromosomal damage. It is often the definitive in-vivo component of the genotoxicity battery and is required for most regulatory submissions.",
      },
      {
        type: "callout",
        text: "Cryst Bio Solutions performs the complete genotoxicity battery under GLP conditions. Our experienced toxicologists can help you select and design the appropriate test strategy for your compound.",
      },
    ],
    category: "Service Guides",
    tags: ["Genotoxicity", "Ames Test", "Micronucleus", "Chromosome Aberration", "OECD 471", "OECD 473", "OECD 474"],
    date: "May 20, 2026",
    authorId: "priya-sharma",
    readTime: 9,
  },
  {
    slug: "skin-sensitization-gpmt-vs-llna",
    title: "Skin Sensitization Testing: GPMT vs LLNA — Which Method Should You Choose?",
    excerpt:
      "A detailed comparison of the Guinea Pig Maximization Test and the Local Lymph Node Assay for skin sensitization testing under OECD and ISO guidelines.",
    image: animalGuineaPig,
    content: [
      {
        type: "paragraph",
        text: "Skin sensitization testing is required for medical devices, chemicals, cosmetics, and agrochemicals to evaluate allergic contact dermatitis potential. Two major test methods are accepted by regulatory authorities: the Guinea Pig Maximization Test (GPMT) and the Local Lymph Node Assay (LLNA).",
      },
      {
        type: "heading",
        text: "Guinea Pig Maximization Test (OECD 406)",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The GPMT uses intradermal and topical induction followed by a challenge phase in Dunkin Hartley guinea pigs. It provides a qualitative assessment of sensitization potential. The guinea pig is the preferred model because of its well-characterized immune response to skin sensitizers.",
      },
      {
        type: "heading",
        text: "Local Lymph Node Assay (OECD 429)",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The LLNA is a more modern, quantitative method that measures lymphocyte proliferation in the draining lymph nodes of mice following topical exposure. It offers the advantage of providing a dose-response relationship and using fewer animals.",
      },
      {
        type: "heading",
        text: "Which to Choose?",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Choose GPMT when regulatory guidelines specifically require guinea pig data, when testing strong irritants that may interfere with LLNA, or when your product classification mandates GPMT. Choose LLNA when you need quantitative potency data, when animal welfare considerations are prioritized, or when you are following modern regulatory frameworks that accept LLNA as a stand-alone alternative.",
      },
      {
        type: "callout",
        text: "Cryst Bio Solutions offers both GPMT and LLNA at our CPCSEA-approved facility. Our team can advise on the most appropriate method for your specific regulatory requirements.",
      },
    ],
    category: "Service Guides",
    tags: ["Skin Sensitization", "GPMT", "LLNA", "OECD 406", "OECD 429", "ISO 10993-10"],
    date: "June 1, 2026",
    authorId: "priya-sharma",
    readTime: 7,
  },

  // ─── Category: Animal Model Selection ────────────────────────────
  {
    slug: "rat-vs-mouse-toxicology-studies",
    title: "Rat vs Mouse for Toxicology Studies: Choosing the Right Rodent Model",
    excerpt:
      "A comprehensive comparison of rat and mouse models in preclinical toxicology — covering strain characteristics, regulatory preferences, and study-specific considerations.",
    image: animalRat,
    content: [
      {
        type: "paragraph",
        text: "The choice between rat and mouse models is one of the most common decisions in preclinical study design. While both species are rodents, they differ significantly in physiology, metabolism, behavior, and regulatory acceptance. Understanding these differences is crucial for generating meaningful, regulatory-accepted data.",
      },
      {
        type: "heading",
        text: "Why Rats Are the Gold Standard",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Rats, particularly Wistar and Sprague Dawley strains, are the preferred rodent model for most regulatory toxicology studies. Their larger size allows for easier blood collection, surgical manipulation, and detailed clinical observations. Regulatory guidelines including OECD 407, 408, and 451 specifically recommend rats as the primary rodent species.",
      },
      {
        type: "heading",
        text: "When Mice Excel",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Mice are the model of choice for immunological studies, cancer research, genetic models, and certain infectious disease studies. Their shorter lifespan makes them ideal for carcinogenicity studies (2-year studies in mice vs 2.5 years in rats). Strains like BALB/c and C57BL/6 offer well-characterized immune systems and extensive genetic tools.",
      },
      {
        type: "heading",
        text: "Selection Guide",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Choose Rats for: Regulatory toxicology, repeated-dose studies, safety pharmacology, reproductive toxicity, surgical models",
          "Choose Mice for: Oncology research, immunological studies, genetic models, preliminary screening, infectious disease research",
          "Both species are typically required: Most regulatory packages include both a rodent (rat) and non-rodent (dog or minipig) species",
        ],
      },
      {
        type: "callout",
        text: "Cryst Bio Solutions provides both Wistar and Sprague Dawley rats, as well as Swiss Albino, BALB/c, and C57BL/6 mice from our CPCSEA-approved breeding facility. Contact us to discuss the best model for your study.",
      },
    ],
    category: "Animal Model Selection",
    tags: ["Rat Models", "Mouse Models", "Toxicology", "Wistar Rat", "Sprague Dawley", "BALB/c", "C57BL/6"],
    date: "June 8, 2026",
    authorId: "vikram-patil",
    readTime: 8,
    featured: true,
  },
  {
    slug: "balbc-vs-c57bl6-mouse-strain-selection",
    title: "BALB/c vs C57BL/6: A Practical Guide to Mouse Strain Selection",
    excerpt:
      "Learn the key differences between BALB/c and C57BL/6 mouse strains — immune response characteristics, research applications, and best-fit scenarios for your preclinical studies.",
    image: animalMouse,
    content: [
      {
        type: "paragraph",
        text: "BALB/c and C57BL/6 are two of the most widely used inbred mouse strains in biomedical research. Despite both being mice, they exhibit profound differences in immune function, behavior, metabolism, and disease susceptibility. Choosing the wrong strain can compromise study results and waste valuable resources.",
      },
      {
        type: "heading",
        text: "BALB/c: The Antibody Producer",
        level: 2,
      },
      {
        type: "paragraph",
        text: "BALB/c mice are characterized by a strong Th2-biased immune response, making them ideal for antibody production, parasitic infection models, and studies requiring robust humoral immunity. They are also more susceptible to carcinogens and develop lung tumours, making them valuable for cancer research. Their calm temperament makes them easier to handle than C57BL/6 mice.",
      },
      {
        type: "heading",
        text: "C57BL/6: The Metabolic Model",
        level: 2,
      },
      {
        type: "paragraph",
        text: "C57BL/6 mice have a naturally occurring mutation in the Nicotinamide Nucleotide Transhydrogenase (NNT) gene, which affects glucose metabolism and makes them the preferred model for diet-induced obesity, type-2 diabetes, and metabolic syndrome research. They exhibit a Th1-biased immune response and are extensively used in infectious disease models and immunological research.",
      },
      {
        type: "heading",
        text: "Quick Decision Guide",
        level: 2,
      },
      {
        type: "list",
        items: [
          "BALB/c: Monoclonal antibody production, parasitic infections, carcinogenicity studies, anti-plasmodial research",
          "C57BL/6: Diet-induced obesity, diabetes research, T-cell and B-lymphocyte development studies, inflammation and fibrosis models, infectious disease screening",
          "Consider both strains for: Comparative immunology studies, vaccine development, autoimmune disease models",
        ],
      },
      {
        type: "callout",
        text: "Cryst Bio Solutions maintains high-quality colonies of both BALB/c and C57BL/6 mice in our controlled, CPCSEA-approved facility. Our animal health monitoring program ensures consistent, reproducible research outcomes.",
      },
    ],
    category: "Animal Model Selection",
    tags: ["BALB/c", "C57BL/6", "Mouse Strains", "Immunology", "Animal Models"],
    date: "May 25, 2026",
    authorId: "vikram-patil",
    readTime: 7,
  },
  {
    slug: "golden-syrian-hamster-infectious-disease",
    title: "The Golden Syrian Hamster: Unique Advantages in Infectious Disease Research",
    excerpt:
      "Why the Golden Syrian hamster is becoming an increasingly valuable model for COVID-19, influenza, and other infectious disease studies.",
    image: animalHamster,
    content: [
      {
        type: "paragraph",
        text: "The Golden Syrian hamster (Mesocricetus auratus) has emerged as a critically important animal model for infectious disease research, particularly since the COVID-19 pandemic. Its unique susceptibility to a wide range of human pathogens, combined with its immunologically privileged cheek pouch, makes it an extraordinarily versatile research tool.",
      },
      {
        type: "heading",
        text: "Why Hamsters for COVID-19 Research?",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Golden Syrian hamsters are naturally susceptible to SARS-CoV-2 infection and develop clinical signs remarkably similar to human COVID-19, including weight loss, respiratory distress, and lung pathology. Unlike mice, which require transgenic modification to become susceptible, hamsters express the ACE2 receptor in a pattern similar to humans.",
      },
      {
        type: "heading",
        text: "Additional Research Applications",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Beyond COVID-19, Golden Syrian hamsters are valuable models for influenza research, dental research (their cheek pouch provides easy access to oral tissues), cardiovascular studies, teratogenicity testing, and transplantation research using the immunologically privileged cheek pouch site.",
      },
      {
        type: "callout",
        text: "Cryst Bio Solutions breeds and maintains Golden Syrian hamsters in our CPCSEA-approved facility. Our experienced team can support your infectious disease, toxicology, and transplantation research with high-quality, health-monitored animals.",
      },
    ],
    category: "Animal Model Selection",
    tags: ["Golden Syrian Hamster", "Infectious Disease", "COVID-19", "Animal Models", "Transplantation"],
    date: "May 18, 2026",
    authorId: "vikram-patil",
    readTime: 6,
  },
  // ─── Category: Industry News ────────────────────────────────
  {
    slug: "oecd-guideline-updates-2026",
    title: "OECD Guideline Updates 2026: Key Changes Impacting Preclinical Safety Testing",
    excerpt:
      "An overview of the latest OECD guideline revisions and new test methods adopted in 2026 — what they mean for toxicology study design and regulatory submissions.",
    image: heroLab,
    content: [
      {
        type: "paragraph",
        text: "The OECD Test Guideline Programme continues to evolve, with 2026 bringing several important updates that preclinical laboratories and sponsors need to be aware of. From new approach methodologies (NAMs) to revised study designs, these changes reflect the ongoing shift toward more humane, efficient, and scientifically advanced testing strategies.",
      },
      {
        type: "heading",
        text: "New and Revised Guidelines in 2026",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The most significant update is the formal adoption of several in-vitro and in-silico methods as standalone replacements for traditional animal tests in specific contexts. OECD TG 497 (Defined Approaches for Skin Sensitisation) has been expanded, and new guidance on integrated approaches to testing and assessment (IATA) has been published for repeated-dose toxicity.",
      },
      {
        type: "list",
        items: [
          "OECD TG 497 update: Expanded defined approaches for skin sensitisation with new in-silico models",
          "OECD TG 442D/E revisions: Updated in-vitro skin sensitisation methods with improved sensitivity",
          "New IATA guidance for repeated-dose toxicity: Integrated approaches combining computational, in-vitro, and targeted in-vivo data",
          "OECD TG 236 (FET) expansion: Fish embryo acute toxicity test now accepted for additional regulatory endpoints",
          "Updated TG 443: Extended one-generation reproductive toxicity study with additional endocrine disruption endpoints",
        ],
      },
      {
        type: "heading",
        text: "Impact on Study Design",
        level: 2,
      },
      {
        type: "paragraph",
        text: "For CROs and sponsors, these updates mean several important considerations. First, the expanded acceptance of NAMs allows for reduced animal use in early-stage screening, but requires careful validation and historical data collection. Second, the new IATA frameworks demand more sophisticated data integration capabilities from testing laboratories. Third, the expanded endocrine disruption screening requirements in TG 443 add complexity to reproductive toxicity studies.",
      },
      {
        type: "callout",
        text: "Cryst Bio Solutions stays current with all OECD guideline revisions. Our study directors incorporate the latest regulatory expectations into study designs, ensuring your submissions meet the most up-to-date requirements. Contact us to discuss how the 2026 changes may affect your testing programme.",
      },
    ],
    category: "Industry News",
    tags: ["OECD Guidelines", "Regulatory Updates", "NAMs", "Skin Sensitisation", "IATA"],
    date: "June 14, 2026",
    authorId: "aniket-joshi",
    readTime: 9,
  },
  {
    slug: "eu-mdr-745-medical-device-compliance",
    title: "EU MDR 2017/745: What Medical Device Manufacturers Need to Know About Biocompatibility",
    excerpt:
      "The EU Medical Device Regulation demands more rigorous biocompatibility evaluation. Learn about the key requirements, transition timelines, and how to prepare your technical documentation.",
    image: aboutLab,
    content: [
      {
        type: "paragraph",
        text: "The EU Medical Device Regulation (MDR) 2017/745 has fundamentally changed the biocompatibility landscape for medical device manufacturers. With stricter requirements for clinical evaluation, enhanced scrutiny of biological safety, and the involvement of Notified Bodies in reviewing biocompatibility data, manufacturers must adopt a more comprehensive approach to ISO 10993 evaluation.",
      },
      {
        type: "heading",
        text: "Key Changes Under EU MDR",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Enhanced clinical evaluation requirements: Biocompatibility data must be integrated with clinical evaluation reports (CERs)",
          "Stricter scrutiny of biological safety: Notified Bodies are increasingly requesting additional testing beyond the minimum ISO 10993 battery",
          "Chemical characterisation emphasis: ISO 10993-18 and 10993-17 requirements are being enforced more strictly as part of the biological evaluation plan",
          "Legacy devices: Existing devices with MDD certification must now meet MDR biocompatibility requirements for recertification",
          "Post-market surveillance: Ongoing biological safety monitoring is now a regulatory requirement, not just a recommendation",
        ],
      },
      {
        type: "heading",
        text: "Transition Timeline",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The original May 2024 deadline was extended, but manufacturers should not delay. Notified Body capacity remains constrained, and the review of biocompatibility dossiers is taking 6–12 months. Companies still using MDD certificates should initiate their MDR transition immediately, with particular attention to gap analysis of existing biocompatibility data against current ISO 10993 requirements and MDR Annex II expectations.",
      },
      {
        type: "callout",
        text: "Our biocompatibility team at Cryst Bio Solutions has extensive experience supporting EU MDR transitions. We offer gap analysis, additional testing services, and expert report writing to help manufacturers meet Notified Body expectations efficiently.",
      },
    ],
    category: "Industry News",
    tags: ["EU MDR", "Medical Devices", "Biocompatibility", "ISO 10993", "Notified Body"],
    date: "June 12, 2026",
    authorId: "sneha-mehta",
    readTime: 11,
  },

  // ─── Category: Case Studies ─────────────────────────────────
  {
    slug: "biotech-ind-enabling-toxicology-package",
    title: "IND-Enabling Toxicology in 12 Weeks: A Biotech Startup's Success Story",
    excerpt:
      "How we helped a Cambridge-based biotech startup complete their full IND-enabling toxicology package — including repeated-dose, genotoxicity, and safety pharmacology studies — in just 12 weeks.",
    image: serviceResearch,
    content: [
      {
        type: "paragraph",
        text: "When a Cambridge-based biotech startup developing a novel kinase inhibitor for oncology needed to complete their IND-enabling toxicology package within an aggressive timeline, they turned to Cryst Bio Solutions. The challenge was formidable: a full battery of GLP-compliant studies including 28-day repeated-dose toxicology in two species, genotoxicity battery, safety pharmacology core battery, and toxicokinetic analysis — all within 12 weeks.",
      },
      {
        type: "heading",
        text: "The Challenge",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The startup had secured Series A funding and needed to file an IND within 6 months to meet investor milestones. Their previous CRO had scheduling conflicts that would have pushed the timeline to 20 weeks. They needed a partner who could accommodate the full study package without compromising GLP compliance or data quality.",
      },
      {
        type: "heading",
        text: "Our Approach",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Dedicated project manager assigned for single-point coordination across all study streams",
          "Staggered study initiation: genotoxicity battery started in week 1 while dose range-finding ran in parallel",
          "Accelerated histopathology processing with dedicated pathology team",
          "Real-time data sharing via secure portal with weekly progress reviews",
          "Integrated toxicokinetic analysis with bioanalytical team working in parallel",
        ],
      },
      {
        type: "heading",
        text: "Results",
        level: 2,
      },
      {
        type: "paragraph",
        text: "All studies were completed within 11.5 weeks — ahead of schedule. The final integrated toxicology report was delivered in week 12, enabling the startup to file their IND on time. The NDA was accepted by the FDA, and the company has since advanced to Phase I clinical trials. The total cost was 30% below their previous CRO's quote, thanks to integrated study management and reduced administrative overhead.",
      },
      {
        type: "callout",
        text: "Cryst Bio Solutions specialises in accelerated IND-enabling programmes for biotech and pharmaceutical sponsors. Our integrated facilities and dedicated project management allow us to compress timelines without compromising quality. Contact us to discuss your development timeline.",
      },
    ],
    category: "Case Studies",
    tags: ["IND Filing", "Toxicology Package", "Biotech", "GLP Studies", "Rapid Timeline"],
    date: "June 7, 2026",
    authorId: "aniket-joshi",
    readTime: 10,
  },
  {
    slug: "cardiac-stent-biocompatibility-case-study",
    title: "Cardiac Stent Biocompatibility: Guiding a Medical Device Through ISO 10993 to CE Marking",
    excerpt:
      "A detailed case study of how we completed a full ISO 10993 biocompatibility evaluation for a next-generation drug-eluting cardiac stent system, supporting the manufacturer's CE Mark submission under EU MDR.",
    image: subBioImplantation,
    content: [
      {
        type: "paragraph",
        text: "A European medical device manufacturer developing a next-generation drug-eluting stent (DES) system needed a comprehensive ISO 10993 biocompatibility evaluation to support their CE Mark application under the new EU MDR. The device — a cobalt-chromium stent with a biodegradable polymer coating eluting an anti-restenotic drug — required evaluation across multiple biological endpoints.",
      },
      {
        type: "heading",
        text: "The Challenge",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The manufacturer faced several challenges: the biodegradable polymer coating introduced complex degradation products that required additional chemical characterisation; the 180-day implantation study needed a large animal model with specialised histopathology; and the Notified Body required enhanced biocompatibility data under the new MDR requirements, including assessment of the degraded polymer components.",
      },
      {
        type: "heading",
        text: "Our Solution",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Conducted chemical characterisation (ISO 10993-18) of the polymer coating and its degradation products",
          "Completed the full biological evaluation plan: cytotoxicity, sensitisation, irritation, acute and sub-chronic systemic toxicity, genotoxicity (Ames, chromosome aberration, micronucleus)",
          "Performed 180-day implantation study in a porcine model with histopathological evaluation at 30, 90, and 180 days",
          "Conducted hemocompatibility testing (ISO 10993-4) including hemolysis, thrombogenicity, and complement activation",
          "Compiled the complete biological evaluation report (BER) in compliance with EU MDR Annex II and IX requirements",
        ],
      },
      {
        type: "heading",
        text: "Results",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The full biocompatibility package was completed within 8 months, including the long-term implantation study. The manufacturer successfully submitted their CE Mark application with a comprehensive BER that addressed all Notified Body queries during the review process. The device received CE Mark approval under EU MDR in 2026.",
      },
      {
        type: "callout",
        text: "Cryst Bio Solutions offers complete ISO 10993 biocompatibility testing and expert biological evaluation report compilation for medical device manufacturers. Our team has supported over 50 CE Mark and FDA submissions. Contact us to discuss your device evaluation needs.",
      },
    ],
    category: "Case Studies",
    tags: ["Medical Device", "Cardiac Stent", "ISO 10993", "Implantation Study", "EU MDR"],
    date: "May 30, 2026",
    authorId: "sneha-mehta",
    readTime: 12,
  },

  // ─── Category: Quality & Compliance ─────────────────────────
  {
    slug: "glp-compliance-preclinical-data-integrity",
    title: "GLP Compliance in Preclinical Research: Ensuring Data Integrity for Regulatory Submissions",
    excerpt:
      "A comprehensive overview of Good Laboratory Practice (GLP) standards in preclinical research — covering quality systems, data integrity, facility requirements, and audit readiness.",
    image: facilitiesImg,
    content: [
      {
        type: "paragraph",
        text: "Good Laboratory Practice (GLP) is the foundation of reliable, reproducible preclinical research. For pharmaceutical, agrochemical, and medical device companies, GLP-compliant studies are not just best practice — they are a regulatory requirement for submissions to agencies worldwide including the FDA, EMA, CDSCO, and EPA.",
      },
      {
        type: "heading",
        text: "What is GLP?",
        level: 2,
      },
      {
        type: "paragraph",
        text: "GLP is a quality system covering the organisational processes and conditions under which non-clinical health and environmental safety studies are planned, performed, monitored, recorded, archived, and reported. The OECD Principles of GLP (as revised in 1997 and updated in subsequent consensus documents) form the internationally accepted standard. GLP ensures that study data are traceable, auditable, and reconstructable.",
      },
      {
        type: "heading",
        text: "Key GLP Requirements",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Study Director responsibility: Each study must have a designated Study Director who is the single point of control",
          "Quality Assurance (QA) programme: Independent QA unit monitors study conduct through inspections and audits",
          "Standard Operating Procedures (SOPs): All critical processes must be documented in approved SOPs",
          "Facility requirements: Proper housing, separation of functions, environmental control, and equipment maintenance",
          "Data integrity: Raw data must be recorded promptly, accurately, and legibly with corrections traceable",
          "Archiving: All study data, specimens, and documentation must be archived for specified retention periods",
        ],
      },
      {
        type: "heading",
        text: "Why GLP Matters for Your Submission",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Regulatory agencies review not just the study results, but the quality systems under which the data were generated. A single GLP deviation can trigger questions about the entire study package, potentially delaying approvals. Choosing a CRO with robust GLP systems, documented QA procedures, and a strong audit trail is essential for successful regulatory submissions.",
      },
      {
        type: "callout",
        text: "Cryst Bio Solutions operates a comprehensive GLP quality system in our NABL-accredited (ISO/IEC 17025:2017) facility. Our QA unit monitors all regulatory studies, and we welcome sponsor audits. Contact us to schedule a facility tour or audit.",
      },
    ],
    category: "Quality & Compliance",
    tags: ["GLP", "Good Laboratory Practice", "Data Integrity", "Quality Assurance", "Regulatory Compliance"],
    date: "June 3, 2026",
    authorId: "aniket-joshi",
    readTime: 8,
  },
  {
    slug: "data-integrity-alcoa-principles",
    title: "Data Integrity in Regulated Laboratories: ALCOA+ Principles for Preclinical Studies",
    excerpt:
      "Understand the ALCOA+ framework for data integrity in GLP and GMP environments — Attributable, Legible, Contemporaneous, Original, Accurate, plus Complete, Consistent, Enduring, and Available.",
    image: animalFacilityImg,
    content: [
      {
        type: "paragraph",
        text: "Data integrity is the cornerstone of regulatory confidence in preclinical study results. Regulators worldwide — including the FDA, EMA, MHRA, and WHO — have increasingly focused on data integrity as a critical element of GLP and GMP compliance. The ALCOA+ framework provides a comprehensive set of principles for ensuring that data throughout the research lifecycle meet the highest standards of quality and reliability.",
      },
      {
        type: "heading",
        text: "The ALCOA+ Principles",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The core ALCOA principles were first described by the FDA and have been expanded to ALCOA+ by regulators worldwide. They apply to both paper and electronic records and cover the entire data lifecycle from initial generation through archiving and destruction.",
      },
      {
        type: "list",
        items: [
          "Attributable: Who performed the action and when? All data entries must be traceable to an individual",
          "Legible: Data must be permanently readable. Illegible entries are equivalent to missing data",
          "Contemporaneous: Data must be recorded at the time the activity occurs, not reconstructed later",
          "Original: The first capture of data is the source record. Copies must be verified as accurate",
          "Accurate: Data must be correct, complete, and free from errors. Corrections must not obscure original entries",
          "Complete: All data, including repeats, re-tests, and out-of-specification results, must be retained",
          "Consistent: Data across related activities must be logically coherent and chronologically ordered",
          "Enduring: Records must be maintained on media that last throughout the required retention period",
          "Available: Data must be accessible for review and audit throughout the retention period",
        ],
      },
      {
        type: "heading",
        text: "Implementing ALCOA+ in Practice",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Implementation requires a combination of training, system design, and oversight. Electronic systems should enforce user identification, maintain audit trails, and prevent data deletion. Paper records require strict controlled document systems. Regular self-inspections and mock audits help identify and correct data integrity gaps before regulatory inspections.",
      },
      {
        type: "callout",
        text: "At Cryst Bio Solutions, data integrity is embedded in our quality management system. Our NABL-accredited laboratory maintains robust ALCOA+ compliant processes for both electronic and paper records. We welcome regulatory inspections and sponsor audits of our data management systems.",
      },
    ],
    category: "Quality & Compliance",
    tags: ["Data Integrity", "ALCOA+", "GLP", "GMP", "Regulatory Compliance", "Quality Systems"],
    date: "May 22, 2026",
    authorId: "vikram-patil",
    readTime: 9,
  },
];

export const blogCategories = [
  "Regulatory Deep-Dives",
  "Service Guides",
  "Animal Model Selection",
  "Industry News",
  "Case Studies",
  "Quality & Compliance",
] as const;

export const getBlogBySlug = (slug: string) => blogPosts.find((post) => post.slug === slug);

export const getRecentPosts = (count: number = 3) => blogPosts.slice(0, count);

export const getRelatedPosts = (currentSlug: string, count: number = 3) =>
  blogPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, count);
