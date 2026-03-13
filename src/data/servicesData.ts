import { Leaf, ShieldCheck, TestTube, FlaskConical, Stethoscope, Bug } from "lucide-react";
import serviceAgrochem from "@/assets/service-agrochem.jpg";
import serviceBiocompat from "@/assets/service-biocompat.jpg";
import serviceToxicology from "@/assets/service-toxicology.jpg";
import serviceResearch from "@/assets/service-research.jpg";
import serviceHistopath from "@/assets/service-histopath.jpg";
import serviceMicro from "@/assets/service-micro.jpg";

export interface SubService {
  title: string;
  description: string;
  guidelines?: string[];
}

export interface ServiceProject {
  title: string;
  client: string;
  scope: string;
}

export interface ServiceData {
  slug: string;
  icon: typeof Leaf;
  title: string;
  shortDesc: string;
  img: string;
  features: string[];
  heroDescription: string;
  overview: string;
  subServices: SubService[];
  projects: ServiceProject[];
  standards: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "agrochemical-testing",
    icon: Leaf,
    title: "Agrochemical Testing",
    img: serviceAgrochem,
    shortDesc: "Comprehensive agrochemical testing services including acute toxicity, sub-acute and sub-chronic studies, reproductive toxicity, and environmental impact assessments as per regulatory guidelines.",
    features: ["Acute Toxicity Studies", "Sub-Chronic Studies", "Environmental Assessment", "Regulatory Compliance"],
    heroDescription: "We deliver comprehensive agrochemical testing solutions that meet global regulatory standards, helping manufacturers bring safe and effective products to market.",
    overview: "Our agrochemical testing division provides a full suite of toxicological and ecotoxicological evaluations for pesticides, herbicides, fungicides, and other crop protection products. We follow internationally recognized guidelines from OECD, US EPA, EU regulations, and BIS to ensure your products meet all registration requirements across global markets.",
    subServices: [
      { title: "Acute Oral Toxicity (LD50)", description: "Determination of median lethal dose via oral route in rats and mice following OECD 423 and 425 guidelines.", guidelines: ["OECD 423", "OECD 425", "EPA OPPTS 870.1100"] },
      { title: "Acute Dermal Toxicity", description: "Assessment of toxic effects through skin contact, critical for products with potential dermal exposure during handling and application.", guidelines: ["OECD 402", "EPA OPPTS 870.1200"] },
      { title: "Acute Inhalation Toxicity", description: "Evaluation of respiratory toxicity using nose-only or whole-body exposure chambers under controlled conditions.", guidelines: ["OECD 403", "OECD 436"] },
      { title: "Eye & Skin Irritation/Corrosion", description: "Determination of irritation and corrosion potential for product labeling and safety classification.", guidelines: ["OECD 404", "OECD 405"] },
      { title: "Skin Sensitization", description: "Assessment of allergenic potential using Guinea Pig Maximization Test (GPMT) or Local Lymph Node Assay (LLNA).", guidelines: ["OECD 406", "OECD 429"] },
      { title: "Sub-Acute & Sub-Chronic Toxicity", description: "28-day and 90-day repeated dose studies to evaluate cumulative toxicity and establish no-observed-adverse-effect levels (NOAEL).", guidelines: ["OECD 407", "OECD 408"] },
      { title: "Reproductive & Developmental Toxicity", description: "Multi-generational studies assessing effects on fertility, pregnancy outcomes, and offspring development.", guidelines: ["OECD 414", "OECD 421", "OECD 422"] },
      { title: "Ecotoxicology Studies", description: "Environmental risk assessment including studies on aquatic organisms, birds, bees, earthworms, and soil microorganisms." },
    ],
    projects: [
      { title: "Herbicide Registration Package", client: "Leading Agrochemical Company", scope: "Complete toxicology and ecotoxicology data package for new herbicide active ingredient registration across India and EU." },
      { title: "Biopesticide Safety Evaluation", client: "Biotech Startup", scope: "Full acute toxicity battery and environmental safety assessment for a novel microbial biopesticide." },
      { title: "Re-registration Data Generation", client: "Multinational Crop Protection", scope: "Updated toxicology studies for re-registration of legacy insecticide products under new regulatory requirements." },
    ],
    standards: ["OECD Guidelines", "US EPA OPPTS", "EU Regulation 1107/2009", "BIS Standards", "CIBRC Guidelines"],
  },
  {
    slug: "biocompatibility-testing",
    icon: ShieldCheck,
    title: "Biocompatibility Testing",
    img: serviceBiocompat,
    shortDesc: "Medical device biocompatibility testing per ISO 10993 standards including cytotoxicity, sensitization, irritation, systemic toxicity, and implantation studies.",
    features: ["ISO 10993 Compliance", "Cytotoxicity Testing", "Sensitization Studies", "Implantation Studies"],
    heroDescription: "ISO 10993 compliant biocompatibility testing for medical devices, ensuring your products are safe for human use and meet global regulatory requirements.",
    overview: "Our biocompatibility testing laboratory provides the full range of biological evaluation tests required under ISO 10993 for medical devices. From initial screening through to implantation studies, we help medical device manufacturers navigate the complex regulatory landscape and bring safe, effective products to market faster.",
    subServices: [
      { title: "Cytotoxicity Testing (ISO 10993-5)", description: "In-vitro evaluation of cellular toxicity using direct contact, agar overlay, and extract methods with L929 mouse fibroblast cells.", guidelines: ["ISO 10993-5", "USP <87>"] },
      { title: "Sensitization Testing (ISO 10993-10)", description: "Assessment of delayed-type hypersensitivity using Guinea Pig Maximization Test or murine Local Lymph Node Assay.", guidelines: ["ISO 10993-10", "OECD 406", "OECD 429"] },
      { title: "Irritation & Intracutaneous Reactivity", description: "Evaluation of local tissue irritation potential through intracutaneous injection or direct application in rabbit models.", guidelines: ["ISO 10993-10", "ISO 10993-23"] },
      { title: "Acute Systemic Toxicity", description: "Assessment of systemic toxic effects from single-dose exposure via intravenous and intraperitoneal routes.", guidelines: ["ISO 10993-11", "USP <88>"] },
      { title: "Sub-Chronic Systemic Toxicity", description: "Repeated-dose studies to evaluate cumulative systemic effects over 28 to 90 day exposure periods.", guidelines: ["ISO 10993-11"] },
      { title: "Genotoxicity Testing", description: "Battery of tests including Ames test, chromosomal aberration, and mouse micronucleus assay to assess mutagenic potential.", guidelines: ["ISO 10993-3", "OECD 471", "OECD 473", "OECD 474"] },
      { title: "Implantation Studies", description: "Long-term tissue response evaluation for implantable devices using subcutaneous, intramuscular, or bone implantation models.", guidelines: ["ISO 10993-6"] },
      { title: "Hemocompatibility Testing", description: "Assessment of blood-contacting device compatibility including hemolysis, thrombogenicity, and complement activation.", guidelines: ["ISO 10993-4"] },
    ],
    projects: [
      { title: "Cardiac Stent Biocompatibility", client: "Medical Device OEM", scope: "Complete ISO 10993 biocompatibility package for a next-generation drug-eluting cardiac stent system." },
      { title: "Surgical Mesh Evaluation", client: "Surgical Implant Manufacturer", scope: "Long-term implantation and systemic toxicity studies for a novel hernia repair mesh." },
      { title: "Dental Implant Testing", client: "Dental Products Company", scope: "Cytotoxicity, sensitization, genotoxicity and implantation studies for titanium dental implant system." },
    ],
    standards: ["ISO 10993 Series", "USP <87> & <88>", "FDA Guidance Documents", "EU MDR 2017/745", "ASTM Standards"],
  },
  {
    slug: "toxicology-testing",
    icon: TestTube,
    title: "Toxicology Testing",
    img: serviceToxicology,
    shortDesc: "Full-spectrum toxicology services following OECD and FDA guidelines including acute, sub-acute, chronic toxicity, genotoxicity, and carcinogenicity studies.",
    features: ["OECD Guidelines", "FDA Compliance", "Genotoxicity", "Carcinogenicity"],
    heroDescription: "Full-spectrum toxicology testing services supporting pharmaceutical, chemical, and consumer product safety evaluation with internationally harmonized methods.",
    overview: "Our toxicology services encompass the complete range of safety assessments required for pharmaceuticals, industrial chemicals, consumer products, and food additives. With state-of-the-art facilities and experienced toxicologists, we design and execute studies that meet the most stringent regulatory requirements worldwide.",
    subServices: [
      { title: "Single-Dose Acute Toxicity", description: "Determination of acute toxic potential through oral, dermal, and inhalation routes with full clinical observation and necropsy.", guidelines: ["OECD 401–403", "ICH M3(R2)"] },
      { title: "Repeated-Dose Toxicity (28/90-day)", description: "Comprehensive sub-acute and sub-chronic studies with full hematology, clinical chemistry, urinalysis, organ weights, and histopathology.", guidelines: ["OECD 407/408", "ICH S4"] },
      { title: "Chronic Toxicity & Carcinogenicity", description: "Long-term 12-month toxicity and 24-month carcinogenicity studies in rodent and non-rodent species.", guidelines: ["OECD 451/452/453", "ICH S1A/S1B"] },
      { title: "Genotoxicity Battery", description: "Standard and extended genotoxicity testing including bacterial reverse mutation (Ames), in-vitro chromosome aberration, and in-vivo micronucleus.", guidelines: ["OECD 471/473/474", "ICH S2(R1)"] },
      { title: "Reproductive & Developmental Toxicity", description: "Segment I (fertility), Segment II (teratology), and Segment III (peri/postnatal) studies per ICH guidelines.", guidelines: ["ICH S5(R3)", "OECD 414/416"] },
      { title: "Safety Pharmacology", description: "Core battery studies evaluating cardiovascular (hERG, telemetry), respiratory, and central nervous system safety.", guidelines: ["ICH S7A/S7B"] },
      { title: "Toxicokinetics / ADME", description: "Absorption, distribution, metabolism, and excretion studies to support toxicology data interpretation.", guidelines: ["ICH S3A/S3B", "OECD 417"] },
      { title: "Local Tolerance Studies", description: "Assessment of irritation at the site of application for topical, injectable, and ocular formulations." },
    ],
    projects: [
      { title: "NCE Preclinical Package", client: "Pharma R&D Company", scope: "Complete IND-enabling toxicology package including repeated-dose, genotoxicity, safety pharmacology, and reproductive toxicity." },
      { title: "Industrial Chemical REACH Dossier", client: "Chemical Manufacturer", scope: "Full toxicological data package for EU REACH registration of high-volume industrial chemical." },
      { title: "Cosmetic Ingredient Safety", client: "Personal Care Brand", scope: "Safety evaluation of novel botanical ingredient including acute toxicity, genotoxicity, and repeated-dose studies." },
    ],
    standards: ["OECD Test Guidelines", "ICH Guidelines", "FDA 21 CFR", "EU REACH", "Schedule Y (India)"],
  },
  {
    slug: "research-projects",
    icon: FlaskConical,
    title: "Research Projects",
    img: serviceResearch,
    shortDesc: "Custom preclinical research solutions including study design, protocol development, data analysis, and regulatory submission support.",
    features: ["Custom Study Design", "Protocol Development", "Data Analysis", "Regulatory Support"],
    heroDescription: "Tailored preclinical research partnerships that transform your scientific questions into actionable data, from concept through regulatory submission.",
    overview: "We collaborate with pharmaceutical companies, biotech startups, academic institutions, and CROs to design and execute custom preclinical research programs. Our team of experienced scientists brings deep expertise in study design, GLP compliance, and regulatory strategy to help you achieve your development milestones efficiently.",
    subServices: [
      { title: "Custom Study Design & Protocol Development", description: "Expert-designed study protocols tailored to your compound's mechanism of action, target indication, and regulatory pathway." },
      { title: "Pilot / Dose Range-Finding Studies", description: "Preliminary studies to establish dose ranges, identify target organs, and optimize study parameters before pivotal studies." },
      { title: "Efficacy & Pharmacology Models", description: "Disease-specific animal models for proof-of-concept studies in oncology, inflammation, metabolic disorders, and infectious diseases." },
      { title: "PK/PD Studies", description: "Pharmacokinetic and pharmacodynamic evaluations to characterize compound behavior, bioavailability, and dose-response relationships." },
      { title: "Formulation Development Support", description: "In-vivo formulation screening and optimization studies to support pharmaceutical development." },
      { title: "Bioanalytical Method Development", description: "Development and validation of bioanalytical methods for compound quantification in biological matrices." },
      { title: "Regulatory Submission Support", description: "Data compilation, report writing, and regulatory dossier preparation for IND, NDA, ANDA, and 510(k) submissions." },
      { title: "Academic & Grant-Funded Research", description: "Collaborative research programs with universities and institutions, supporting grant-funded preclinical investigations." },
    ],
    projects: [
      { title: "Anticancer Drug Efficacy Study", client: "Biotech Startup", scope: "Xenograft tumor models in nude mice to evaluate novel kinase inhibitor efficacy and determine optimal dosing regimen." },
      { title: "Herbal Drug Development", client: "Ayurvedic Pharma Company", scope: "Complete preclinical evaluation of polyherbal formulation including acute toxicity, sub-chronic toxicity, and pharmacological activity." },
      { title: "Vaccine Immunogenicity Study", client: "Vaccine Developer", scope: "Multi-species immunogenicity and challenge studies for novel recombinant vaccine candidate." },
    ],
    standards: ["GLP Compliance", "ICH Guidelines", "CDSCO Requirements", "FDA Guidance", "Institutional Ethics"],
  },
  {
    slug: "histopathology-clinical-pathology",
    icon: Stethoscope,
    title: "Histopathology & Clinical Pathology",
    img: serviceHistopath,
    shortDesc: "Expert histopathology and clinical pathology services including tissue processing, staining, microscopic examination, and comprehensive reporting.",
    features: ["Tissue Processing", "Microscopic Exam", "Clinical Chemistry", "Hematology"],
    heroDescription: "Precision histopathology and clinical pathology services delivered by board-certified pathologists, providing the diagnostic backbone for all preclinical studies.",
    overview: "Our pathology division serves as the diagnostic core for all preclinical studies conducted at our facility and also accepts external samples. Equipped with automated tissue processors, microtomes, and advanced microscopy systems, we deliver high-quality histopathological and clinical pathological evaluations with expert interpretation by experienced veterinary pathologists.",
    subServices: [
      { title: "Tissue Processing & Embedding", description: "Automated tissue processing using standardized protocols for consistent, high-quality paraffin-embedded tissue blocks." },
      { title: "Sectioning & Staining", description: "Precision microtomy and routine H&E staining along with a comprehensive panel of special stains (PAS, Masson's Trichrome, Giemsa, etc.).", guidelines: ["H&E", "PAS", "Masson's Trichrome", "Oil Red O"] },
      { title: "Immunohistochemistry (IHC)", description: "Targeted protein detection in tissue sections using validated antibody panels for biomarker identification and tumor characterization." },
      { title: "Microscopic Examination & Peer Review", description: "Systematic organ-by-organ microscopic evaluation with peer review by senior pathologists ensuring accuracy and consistency." },
      { title: "Hematology Analysis", description: "Complete blood count, differential leukocyte count, reticulocyte count, and coagulation parameters using automated analyzers.", guidelines: ["CBC", "DLC", "PT/APTT"] },
      { title: "Clinical Chemistry", description: "Comprehensive serum chemistry panels including liver function, kidney function, lipid profile, and electrolytes on state-of-the-art analyzers." },
      { title: "Urinalysis", description: "Complete urinalysis including physical, chemical, and microscopic examination of urine samples." },
      { title: "Digital Pathology & Image Analysis", description: "Whole slide imaging and quantitative image analysis for precise morphometric measurements and archival purposes." },
    ],
    projects: [
      { title: "Outsourced Pathology for CRO", client: "Contract Research Organization", scope: "Histopathology slide preparation and peer-reviewed pathology reports for a 90-day repeated dose study in rats." },
      { title: "Tumor Characterization Study", client: "Oncology Biotech", scope: "IHC panel and histopathological evaluation of xenograft tumors for biomarker validation in drug efficacy study." },
      { title: "Clinical Pathology for GLP Study", client: "Pharmaceutical Company", scope: "Full clinical pathology support including hematology, chemistry, coagulation, and urinalysis for regulatory submission study." },
    ],
    standards: ["GLP Standards", "ASCP Guidelines", "STP Best Practices", "INHAND Nomenclature", "ISO 15189"],
  },
  {
    slug: "microbiology-services",
    icon: Bug,
    title: "Microbiology Services",
    img: serviceMicro,
    shortDesc: "Comprehensive microbiology testing including sterility testing, bacterial endotoxin testing, antimicrobial effectiveness, and environmental monitoring.",
    features: ["Sterility Testing", "Endotoxin Testing", "Antimicrobial Testing", "Environmental Monitoring"],
    heroDescription: "Comprehensive microbiology testing solutions ensuring product sterility, safety, and compliance with pharmacopeial standards.",
    overview: "Our microbiology laboratory provides critical testing services for pharmaceutical, medical device, and cosmetic manufacturers. From sterility assurance to environmental monitoring, we help clients maintain the highest standards of microbiological quality and regulatory compliance using validated methods per USP, EP, IP, and ISO standards.",
    subServices: [
      { title: "Sterility Testing", description: "Membrane filtration and direct inoculation methods for sterility testing of pharmaceutical products, medical devices, and raw materials.", guidelines: ["USP <71>", "IP", "EP 2.6.1"] },
      { title: "Bacterial Endotoxin Testing (LAL)", description: "Limulus Amebocyte Lysate (LAL) testing using gel-clot, turbidimetric, and chromogenic methods for endotoxin detection.", guidelines: ["USP <85>", "EP 2.6.14"] },
      { title: "Microbial Limit Testing", description: "Enumeration and identification of total aerobic microbial count (TAMC) and total yeast/mold count (TYMC) in non-sterile products.", guidelines: ["USP <61> & <62>", "IP"] },
      { title: "Antimicrobial Effectiveness Testing", description: "Preservative efficacy testing to validate antimicrobial preservation systems in multi-dose pharmaceutical and cosmetic products.", guidelines: ["USP <51>", "EP 5.1.3"] },
      { title: "Disinfectant Efficacy Testing", description: "Validation of disinfectants and sanitizers used in cleanroom and manufacturing environments." },
      { title: "Environmental Monitoring", description: "Comprehensive environmental monitoring programs including air sampling, surface sampling, and personnel monitoring for classified areas.", guidelines: ["ISO 14644", "EU GMP Annex 1"] },
      { title: "Water Testing", description: "Microbiological analysis of purified water, WFI, and process water systems including endotoxin and bioburden testing.", guidelines: ["USP <1231>", "WHO Guidelines"] },
      { title: "Bioburden Testing", description: "Pre-sterilization bioburden determination for medical devices and pharmaceutical products.", guidelines: ["ISO 11737-1"] },
    ],
    projects: [
      { title: "Pharma Facility Qualification", client: "Injectable Drug Manufacturer", scope: "Complete environmental monitoring validation and sterility testing protocol for new aseptic manufacturing facility." },
      { title: "Medical Device Sterility Validation", client: "Surgical Device Manufacturer", scope: "Bioburden testing and sterility assurance program for ETO-sterilized surgical instruments." },
      { title: "Cosmetic Preservative Study", client: "Cosmetic Brand", scope: "Antimicrobial effectiveness testing and microbial limit testing for new skincare product line." },
    ],
    standards: ["USP Chapters", "European Pharmacopoeia", "Indian Pharmacopoeia", "ISO 11737", "ISO 14644"],
  },
];
