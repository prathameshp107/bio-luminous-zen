import { motion } from "framer-motion";
import {
  Star,
  Quote,
  Award,
  FlaskConical,
  Globe,
  Heart,
  ArrowRight,
  TestTube,
  ShieldCheck,
  Leaf,
  Microscope,
  Building2,
  Users,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import ParallaxImage from "@/components/ParallaxImage";
import RevealText from "@/components/RevealText";
import FloatingText from "@/components/FloatingText";

// ── Images ──────────────────────────────────────────────────────────
import heroLabImg from "@/assets/hero-lab.jpg";
import serviceToxImg from "@/assets/service-toxicology.jpg";
import serviceBioImg from "@/assets/service-biocompat.jpg";
import serviceAgroImg from "@/assets/service-agrochem.jpg";
import serviceResImg from "@/assets/service-research.jpg";
import serviceMicroImg from "@/assets/service-micro.jpg";
import serviceHistoImg from "@/assets/service-histopath.jpg";
import whyTeamImg from "@/assets/why-team.jpg";
import whyStandardsImg from "@/assets/why-standards.jpg";
import whyEndtoendImg from "@/assets/why-endtoend.jpg";
import whyTurnaroundImg from "@/assets/why-turnaround.jpg";
import aboutLabImg from "@/assets/about-lab.jpg";
import facilitiesImg from "@/assets/facilities.jpg";

/* ─── Types ──────────────────────────────────────────────────── */
type AccentKey =
  | "primary"
  | "emerald"
  | "sky"
  | "amber"
  | "violet"
  | "rose"
  | "cyan";

const accentMap: Record<
  AccentKey,
  { text: string; bg: string; border: string; bar: string; avatar: string; glow: string }
> = {
  primary: {
    text: "text-primary",
    bg: "bg-primary/10 dark:bg-primary/15",
    border: "border-primary/30 dark:border-primary/40",
    bar: "bg-primary",
    avatar: "bg-primary/15 dark:bg-primary/20 text-primary",
    glow: "bg-primary/6",
  },
  emerald: {
    text: "text-emerald-700 dark:text-emerald-400",
    bg: "bg-emerald-600/8 dark:bg-emerald-500/15",
    border: "border-emerald-600/30 dark:border-emerald-500/35",
    bar: "bg-emerald-500",
    avatar: "bg-emerald-600/15 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400",
    glow: "bg-emerald-500/6",
  },
  sky: {
    text: "text-sky-700 dark:text-sky-400",
    bg: "bg-sky-600/8 dark:bg-sky-500/15",
    border: "border-sky-600/30 dark:border-sky-500/35",
    bar: "bg-sky-500",
    avatar: "bg-sky-600/15 dark:bg-sky-500/20 text-sky-700 dark:text-sky-400",
    glow: "bg-sky-500/6",
  },
  amber: {
    text: "text-amber-700 dark:text-amber-400",
    bg: "bg-amber-600/8 dark:bg-amber-500/15",
    border: "border-amber-600/30 dark:border-amber-500/35",
    bar: "bg-amber-500",
    avatar: "bg-amber-600/15 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400",
    glow: "bg-amber-500/6",
  },
  violet: {
    text: "text-violet-700 dark:text-violet-400",
    bg: "bg-violet-600/8 dark:bg-violet-500/15",
    border: "border-violet-600/30 dark:border-violet-500/35",
    bar: "bg-violet-500",
    avatar: "bg-violet-600/15 dark:bg-violet-500/20 text-violet-700 dark:text-violet-400",
    glow: "bg-violet-500/6",
  },
  rose: {
    text: "text-rose-700 dark:text-rose-400",
    bg: "bg-rose-600/8 dark:bg-rose-500/15",
    border: "border-rose-600/30 dark:border-rose-500/35",
    bar: "bg-rose-500",
    avatar: "bg-rose-600/15 dark:bg-rose-500/20 text-rose-700 dark:text-rose-400",
    glow: "bg-rose-500/6",
  },
  cyan: {
    text: "text-cyan-700 dark:text-cyan-400",
    bg: "bg-cyan-600/8 dark:bg-cyan-500/15",
    border: "border-cyan-600/30 dark:border-cyan-500/35",
    bar: "bg-cyan-500",
    avatar: "bg-cyan-600/15 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400",
    glow: "bg-cyan-500/6",
  },
};

/* ─── Data ───────────────────────────────────────────────────── */
const proofStats = [
  {
    value: "500+",
    label: "Studies Completed",
    icon: FlaskConical,
    gradient: "from-primary/20 via-primary/10 to-transparent",
    iconColor: "text-primary",
    border: "border-primary/30",
  },
  {
    value: "98%",
    label: "Client Retention",
    icon: Heart,
    gradient: "from-emerald-500/20 via-emerald-500/10 to-transparent",
    iconColor: "text-emerald-700 dark:text-emerald-400",
    border: "border-emerald-600/40 dark:border-emerald-500/30",
  },
  {
    value: "10+",
    label: "Countries Served",
    icon: Globe,
    gradient: "from-sky-500/20 via-sky-500/10 to-transparent",
    iconColor: "text-sky-700 dark:text-sky-400",
    border: "border-sky-600/40 dark:border-sky-500/30",
  },
  {
    value: "7+",
    label: "Years of Trust",
    icon: Award,
    gradient: "from-amber-500/20 via-amber-500/10 to-transparent",
    iconColor: "text-amber-700 dark:text-amber-400",
    border: "border-amber-600/40 dark:border-amber-500/30",
  },
];

const testimonials: {
  name: string;
  role: string;
  company: string;
  location: string;
  service: string;
  accent: AccentKey;
  rating: number;
  quote: string;
  initials: string;
  featured: boolean;
  img: string;
}[] = [
  {
    name: "Dr. Arun Mehta",
    role: "Head of Regulatory Affairs",
    company: "Sun Pharmaceutical Industries",
    location: "Mumbai, India",
    service: "Toxicology",
    accent: "amber",
    rating: 5,
    quote:
      "Cryst Bio's OECD-compliant toxicology studies were critical to our NDA submission. Their turnaround time was half of what we experienced with other CROs, and the data quality was exceptional. We've since partnered with them on four additional studies without hesitation.",
    initials: "AM",
    featured: true,
    img: serviceToxImg,
  },
  {
    name: "Dr. Priya Sharma",
    role: "R&D Director",
    company: "Biocon Biologics",
    location: "Bengaluru, India",
    service: "Biocompatibility",
    accent: "sky",
    rating: 5,
    quote:
      "We needed ISO 10993 biocompatibility testing under a tight regulatory deadline. Cryst Bio not only met the deadline but delivered a report that sailed through FDA review on the very first submission. A remarkable team.",
    initials: "PS",
    featured: false,
    img: serviceBioImg,
  },
  {
    name: "Dr. Harish Kulkarni",
    role: "Principal Scientist",
    company: "Bayer Crop Science",
    location: "Pune, India",
    service: "Agrochemical Testing",
    accent: "emerald",
    rating: 5,
    quote:
      "Our agrochemical product registration required a comprehensive toxicology package under OECD guidelines. Cryst Bio handled everything from study design to regulatory submission — a truly end-to-end partnership.",
    initials: "HK",
    featured: false,
    img: serviceAgroImg,
  },
  {
    name: "Mr. Rajeev Nair",
    role: "Chief Executive Officer",
    company: "MedTech Innovations Pvt. Ltd.",
    location: "Hyderabad, India",
    service: "Biocompatibility",
    accent: "violet",
    rating: 5,
    quote:
      "As a startup we needed a CRO that would treat us as a priority client, not a small account. Cryst Bio was responsive, collaborative, and guided us through the ISO 10993 framework for the very first time. Highly recommended.",
    initials: "RN",
    featured: false,
    img: serviceBioImg,
  },
  {
    name: "Dr. Fatima Al-Hassan",
    role: "Scientific Director",
    company: "Gulf BioResearch LLC",
    location: "Dubai, UAE",
    service: "Research Projects",
    accent: "violet",
    rating: 5,
    quote:
      "Cryst Bio conducted a complex PK/PD study with excellent animal model selection and data analysis. Their NABL-accredited reports are accepted without question by regulators across the Middle East and Europe.",
    initials: "FA",
    featured: false,
    img: serviceResImg,
  },
  {
    name: "Dr. Sarah Mitchell",
    role: "Global Head of Safety Assessment",
    company: "EuroCosmetics GmbH",
    location: "Frankfurt, Germany",
    service: "Toxicology",
    accent: "rose",
    rating: 5,
    quote:
      "We engaged Cryst Bio through their European consultation office for dermal sensitization and irritation studies. Their knowledge of both EU cosmetics regulations and OECD guidelines made the entire process completely seamless.",
    initials: "SM",
    featured: false,
    img: serviceToxImg,
  },
  {
    name: "Dr. Vijay Patil",
    role: "Quality Assurance Manager",
    company: "Lupin Limited",
    location: "Pune, India",
    service: "Microbiology",
    accent: "cyan",
    rating: 5,
    quote:
      "Cryst Bio's sterility testing and endotoxin services are consistently reliable. Their environmental monitoring program has been invaluable for our manufacturing facility validation and is always delivered on schedule.",
    initials: "VP",
    featured: false,
    img: serviceMicroImg,
  },
  {
    name: "Dr. Ananya Krishnan",
    role: "Research Scientist",
    company: "Tata Medical Research Institute",
    location: "New Delhi, India",
    service: "Histopathology",
    accent: "rose",
    rating: 5,
    quote:
      "The histopathology team's expertise is outstanding. Digital pathology reports with detailed annotations, clinical chemistry, and hematology — all within the committed timeline. Our academic publications have benefited greatly.",
    initials: "AK",
    featured: false,
    img: serviceHistoImg,
  },
  {
    name: "Mr. James Whitfield",
    role: "VP of Product Development",
    company: "BioNexus Medical Inc.",
    location: "Boston, USA",
    service: "Biocompatibility",
    accent: "primary",
    rating: 5,
    quote:
      "We needed a cost-effective alternative to US-based CROs for our 510(k) submission without compromising on quality. Cryst Bio's NABL accreditation and IAS recognition gave us the confidence, and the results delivered perfectly.",
    initials: "JW",
    featured: false,
    img: serviceBioImg,
  },
];

const industries = [
  { label: "Pharmaceutical", icon: FlaskConical, color: "text-primary bg-primary/10 border-primary/25" },
  { label: "Medical Devices", icon: ShieldCheck, color: "text-sky-700 dark:text-sky-400 bg-sky-600/8 dark:bg-sky-500/15 border-sky-600/30 dark:border-sky-500/30" },
  { label: "Biotechnology", icon: Microscope, color: "text-violet-700 dark:text-violet-400 bg-violet-600/8 dark:bg-violet-500/15 border-violet-600/30 dark:border-violet-500/30" },
  { label: "Agrochemicals", icon: Leaf, color: "text-emerald-700 dark:text-emerald-400 bg-emerald-600/8 dark:bg-emerald-500/15 border-emerald-600/30 dark:border-emerald-500/30" },
  { label: "Cosmetics & Personal Care", icon: Star, color: "text-rose-700 dark:text-rose-400 bg-rose-600/8 dark:bg-rose-500/15 border-rose-600/30 dark:border-rose-500/30" },
  { label: "Academic Research", icon: Building2, color: "text-amber-700 dark:text-amber-400 bg-amber-600/8 dark:bg-amber-500/15 border-amber-600/30 dark:border-amber-500/30" },
  { label: "CRO Collaboration", icon: Users, color: "text-cyan-700 dark:text-cyan-400 bg-cyan-600/8 dark:bg-cyan-500/15 border-cyan-600/30 dark:border-cyan-500/30" },
];

const caseHighlights = [
  {
    icon: TestTube,
    label: "Toxicology",
    title: "NDA Toxicology Package",
    client: "Top-5 Indian Pharma Company",
    metric: "First-attempt submission",
    detail: "Completed a 14-study acute & subchronic toxicology package in 18 weeks, enabling a successful IND/NDA filing with zero deficiencies raised.",
    accentText: "text-amber-700 dark:text-amber-400",
    accentBg: "bg-amber-600/8 dark:bg-amber-500/15",
    accentBorder: "border-amber-600/25 dark:border-amber-500/30",
    topBar: "bg-amber-500",
    badgeText: "text-amber-700 dark:text-amber-400",
    badgeBorder: "border-amber-500/30",
    badgeBg: "bg-amber-500/10",
    glow: "bg-amber-500/6",
    img: serviceToxImg,
    badge: "18 Weeks",
  },
  {
    icon: ShieldCheck,
    label: "Biocompatibility",
    title: "ISO 10993 Device Clearance",
    client: "US Medical Device Startup",
    metric: "FDA 510(k) accepted",
    detail: "Full ISO 10993 biocompatibility package — cytotoxicity through implantation — delivered in 12 weeks enabling first-round FDA 510(k) clearance.",
    accentText: "text-sky-700 dark:text-sky-400",
    accentBg: "bg-sky-600/8 dark:bg-sky-500/15",
    accentBorder: "border-sky-600/25 dark:border-sky-500/30",
    topBar: "bg-sky-500",
    badgeText: "text-sky-700 dark:text-sky-400",
    badgeBorder: "border-sky-500/30",
    badgeBg: "bg-sky-500/10",
    glow: "bg-sky-500/6",
    img: serviceBioImg,
    badge: "12 Weeks",
  },
  {
    icon: Leaf,
    label: "Agrochemical",
    title: "Multi-Market Registration",
    client: "Multinational Crop Science Firm",
    metric: "8 countries approved",
    detail: "OECD-compliant multi-study package accepted across the EU, India, and 6 additional markets for pesticide registration with zero resubmissions.",
    accentText: "text-emerald-700 dark:text-emerald-400",
    accentBg: "bg-emerald-600/8 dark:bg-emerald-500/15",
    accentBorder: "border-emerald-600/25 dark:border-emerald-500/30",
    topBar: "bg-emerald-500",
    badgeText: "text-emerald-700 dark:text-emerald-400",
    badgeBorder: "border-emerald-500/30",
    badgeBg: "bg-emerald-500/10",
    glow: "bg-emerald-500/6",
    img: serviceAgroImg,
    badge: "8 Markets",
  },
];

const whyReturn = [
  {
    icon: Award,
    title: "NABL & IAS Accredited",
    desc: "Globally accepted reports — no re-testing required by international regulators.",
    accent: "primary" as AccentKey,
    iconBg: "bg-primary/10 border-primary/20",
    iconColor: "text-primary",
    accentBar: "bg-primary",
    badge: "Globally Recognised",
    badgeBorder: "border-primary/30",
    badgeBg: "bg-primary/10",
    badgeText: "text-primary",
    glow: "bg-primary/6",
    img: whyStandardsImg,
    keyPoints: ["NABL accreditation under ISO/IEC 17025:2017", "IAS & ILAC recognised test reports", "Accepted by FDA, EU, CDSCO & 10+ regulators"],
  },
  {
    icon: FlaskConical,
    title: "End-to-End Service",
    desc: "From study design and protocol development to final regulatory submission.",
    accent: "emerald" as AccentKey,
    iconBg: "bg-emerald-500/10 border-emerald-500/25",
    iconColor: "text-emerald-400",
    accentBar: "bg-emerald-500",
    badge: "Full Service CRO",
    badgeBorder: "border-emerald-500/30",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-400",
    glow: "bg-emerald-500/6",
    img: whyEndtoendImg,
    keyPoints: ["Study design, protocol writing & IEC/IACUC support", "Full in-house execution with progress tracking", "Regulatory-ready reports & complete documentation"],
  },
  {
    icon: Globe,
    title: "Global Acceptance",
    desc: "Reports accepted by FDA, EU regulators, CDSCO, and 10+ national authorities.",
    accent: "sky" as AccentKey,
    iconBg: "bg-sky-500/10 border-sky-500/25",
    iconColor: "text-sky-400",
    accentBar: "bg-sky-500",
    badge: "10+ Countries",
    badgeBorder: "border-sky-500/30",
    badgeBg: "bg-sky-500/10",
    badgeText: "text-sky-400",
    glow: "bg-sky-500/6",
    img: facilitiesImg,
    keyPoints: ["Offices in India, Europe & USA", "Reports accepted across Middle East & Asia-Pacific", "Zero re-submission record across global filings"],
  },
  {
    icon: Users,
    title: "Dedicated Expert Team",
    desc: "A named scientific liaison assigned to every study — always reachable.",
    accent: "violet" as AccentKey,
    iconBg: "bg-violet-500/10 border-violet-500/25",
    iconColor: "text-violet-400",
    accentBar: "bg-violet-500",
    badge: "50+ Scientists",
    badgeBorder: "border-violet-500/30",
    badgeBg: "bg-violet-500/10",
    badgeText: "text-violet-400",
    glow: "bg-violet-500/6",
    img: whyTeamImg,
    keyPoints: ["Dedicated project manager for every study", "Multi-disciplinary scientific expertise on team", "Continuous training & professional development"],
  },
];

/* ─── Sub-components ─────────────────────────────────────────── */
const StarRating = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

/* ─── Page ───────────────────────────────────────────────────── */
const Testimonials = () => {
  const featured = testimonials.find((t) => t.featured)!;
  const grid = testimonials.filter((t) => !t.featured);

  return (
    <div>
      <PageHero
        title="What Our Clients Say"
        subtitle="Trusted by researchers, pharmaceutical companies, and biotech firms across India, Europe, and the USA."
        breadcrumb="Testimonials"
      />

      {/* ─── Proof Stats ──────────────────────────────────────── */}
      <section className="py-10 bg-secondary/40 dark:bg-card/30 border-y border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {proofStats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.08}>
                <div
                  className={`glass-card p-5 text-center hover-glow bg-gradient-to-br ${s.gradient} border ${s.border}`}
                >
                  <s.icon className={`w-6 h-6 mx-auto mb-2 ${s.iconColor}`} />
                  <div className="text-2xl md:text-3xl font-bold font-display gradient-text">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Industries Strip ─────────────────────────────────── */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <p className="text-center text-xs font-semibold tracking-widest uppercase text-primary mb-7">
              Industries We Serve
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((ind) => (
                <span
                  key={ind.label}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 hover:scale-105 ${ind.color}`}
                >
                  <ind.icon className="w-4 h-4 flex-shrink-0" />
                  {ind.label}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

    <section className="section-padding relative overflow-hidden bg-secondary/40 dark:bg-card/30">
        <FloatingText text="REVIEWS" className="top-1/4" direction={1} />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            label="Featured Review"
            title={
              <RevealText>
                <span>In Their Own Words</span>
              </RevealText>
            }
            description="A standout experience that represents the quality, speed, and trust that defines every Cryst Bio engagement."
          />

          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-10 items-stretch">
              {/* Image panel */}
              <div className="relative">
                {/* ambient glow */}
                <div className={`absolute -z-10 w-80 h-80 rounded-full blur-3xl opacity-60 ${accentMap[featured.accent].glow} -bottom-12 -left-12`} />

                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-2xl h-full min-h-[340px]">
                  <ParallaxImage
                    src={featured.img}
                    alt={featured.service}
                    containerClassName="w-full h-full"
                    className="transition-transform duration-700 group-hover:scale-105"
                    speed={0.15}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/30 to-transparent" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 group-hover:ring-white/10 transition-all duration-300" />

                  {/* bottom strip */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                    <div>
                      <span className={`text-xs font-semibold uppercase tracking-widest ${accentMap[featured.accent].text} opacity-80`}>
                        {featured.service}
                      </span>
                      <p className="text-lg font-bold font-display text-foreground mt-0.5">
                        Featured Partnership
                      </p>
                    </div>
                    <div className={`w-11 h-11 rounded-xl ${accentMap[featured.accent].bg} border ${accentMap[featured.accent].border} backdrop-blur-md flex items-center justify-center shadow-lg`}>
                      <Star className={`w-5 h-5 ${accentMap[featured.accent].text} fill-current`} />
                    </div>
                  </div>
                </div>

                {/* floating badge */}
                <div className={`absolute -top-4 -right-4 glass-card ${accentMap[featured.accent].bg} border ${accentMap[featured.accent].border} px-4 py-2.5 rounded-xl shadow-xl`}>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 ${accentMap[featured.accent].text}`} />
                    <span className={`text-xs font-semibold ${accentMap[featured.accent].text}`}>Verified Client</span>
                  </div>
                </div>
              </div>

              {/* Quote panel */}
              <div className="relative glass-card glow-border overflow-hidden flex flex-col">
                {/* Coloured top bar */}
                <div className={`h-1 w-full ${accentMap[featured.accent].bar} flex-shrink-0`} />

                <div className="p-8 md:p-10 flex flex-col flex-1">
                  {/* Decorative quote mark */}
                  <div className="absolute top-8 right-8 select-none pointer-events-none">
                    <Quote className="w-28 h-28 text-primary/6 dark:text-primary/8 rotate-180" />
                  </div>

                  {/* Background tint */}
                  <div className={`absolute inset-0 ${accentMap[featured.accent].bg} opacity-30 pointer-events-none`} />

                  <div className="relative z-10 flex flex-col flex-1">
                    {/* Avatar + meta */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold font-display flex-shrink-0 ${accentMap[featured.accent].avatar}`}>
                        {featured.initials}
                      </div>
                      <div>
                        <div className="font-display font-bold text-foreground text-lg leading-tight">
                          {featured.name}
                        </div>
                        <div className="text-sm text-muted-foreground mt-0.5">{featured.role}</div>
                        <div className={`text-sm font-semibold mt-0.5 ${accentMap[featured.accent].text}`}>
                          {featured.company}
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <StarRating count={featured.rating} />
                    </div>

                    {/* Quote text */}
                    <p className="text-lg md:text-xl font-display font-medium text-foreground leading-relaxed flex-1">
                      &ldquo;{featured.quote}&rdquo;
                    </p>

                    <div className="mt-8 pt-6 border-t border-border/50">
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin className="w-3.5 h-3.5 text-primary" />
                          {featured.location}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                          Repeat Partner
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                          Regulatory Submission Outcome
                        </div>
                      </div>
                      <span className={`inline-block mt-4 px-3 py-1 rounded-full text-xs font-semibold border ${accentMap[featured.accent].bg} ${accentMap[featured.accent].border} ${accentMap[featured.accent].text}`}>
                        {featured.service}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Testimonials Grid — Cards with image headers ─────── */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Client Reviews"
            title={
              <RevealText>
                <span>Trusted Across Every Study Type</span>
              </RevealText>
            }
            description="From pharmaceutical NDA packages to academic research collaborations — here's what our clients consistently say."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grid.map((t, i) => {
              const a = accentMap[t.accent];
              return (
                <AnimatedSection key={t.name} delay={i * 0.07}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="glass-card hover-glow h-full flex flex-col overflow-hidden group"
                  >
                    {/* Image header */}
                    <div className="relative h-44 overflow-hidden flex-shrink-0">
                      <ParallaxImage
                        src={t.img}
                        alt={t.service}
                        containerClassName="w-full h-full"
                        className="transition-transform duration-500 group-hover:scale-105"
                        speed={0.05}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                      {/* Coloured top bar */}
                      <div className={`absolute top-0 left-0 right-0 h-1 ${a.bar}`} />
                      {/* Service tag */}
                      <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${a.bg} ${a.border} ${a.text} backdrop-blur-sm`}>
                          {t.service}
                        </span>
                        <StarRating count={t.rating} />
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      {/* Decorative quote icon */}
                      <Quote className={`w-6 h-6 mb-3 ${a.text} opacity-60`} />

                      {/* Quote text */}
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        &ldquo;{t.quote}&rdquo;
                      </p>

                      {/* Divider */}
                      <div className="mt-5 pt-4 border-t border-border/50">
                        <div className="flex items-center gap-3">
                          {/* Avatar */}
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold font-display flex-shrink-0 ${a.avatar}`}>
                            {t.initials}
                          </div>
                          <div className="min-w-0">
                            <div className="font-semibold font-display text-foreground text-sm leading-tight truncate">
                              {t.name}
                            </div>
                            <div className="text-xs text-muted-foreground truncate">{t.role}</div>
                            <div className={`text-xs font-medium truncate ${a.text}`}>{t.company}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 mt-2.5 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3 flex-shrink-0" />
                          {t.location}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/*  Case Highlights - Alternating image+text (like About) */}
      <section className="section-padding bg-secondary/40 dark:bg-card/30 relative overflow-hidden">
        <FloatingText text="CPCSEA-APPROVED" className="top-1/4" direction={1} />
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Study Outcomes"
            title={
              <RevealText>
                <span>Results That Speak For Themselves</span>
              </RevealText>
            }
            description="Real outcomes from real studies — a snapshot of the regulatory wins our clients have achieved with Cryst Bio."
          />

          <div className="space-y-28 md:space-y-36 mt-4">
            {caseHighlights.map((c, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={c.title} className="relative min-h-[400px] flex items-center">
                  <FloatingText
                    text={c.title}
                    className="top-1/2 -translate-y-1/2"
                    direction={isEven ? 1 : -1}
                  />
                  <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                  {/*  Image panel  */}
                  <AnimatedSection direction={isEven ? "left" : "right"} className={!isEven ? "lg:order-2" : ""}>
                    <div className="relative">
                      {/* ambient glow blob */}
                      <div
                        className={`absolute -z-10 w-80 h-80 rounded-full blur-3xl opacity-60 ${c.glow} ${isEven ? "-bottom-12 -left-12" : "-bottom-12 -right-12"}`}
                      />

                      {/* main image */}
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-2xl">
                        <ParallaxImage
                          src={c.img}
                          alt={c.title}
                          containerClassName="w-full h-full"
                          className="transition-transform duration-700 group-hover:scale-105"
                          speed={0.1}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none" />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 group-hover:ring-white/10 transition-all duration-300 pointer-events-none" />

                        {/* bottom label strip */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                          <div>
                            <span className={`text-xs font-semibold uppercase tracking-widest ${c.badgeText} opacity-80`}>
                              {c.label}
                            </span>
                            <p className="text-lg font-bold font-display text-foreground mt-0.5">{c.title}</p>
                          </div>
                          <div className={`w-11 h-11 rounded-xl ${c.accentBg} border ${c.accentBorder} backdrop-blur-md flex items-center justify-center shadow-lg`}>
                            <c.icon className={`w-5 h-5 ${c.accentText}`} />
                          </div>
                        </div>
                      </div>

                      {/* floating badge */}
                      <div className={`absolute -top-4 ${isEven ? "-right-4" : "-left-4"} glass-card ${c.badgeBg} border ${c.badgeBorder} px-4 py-2.5 rounded-xl shadow-xl`}>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className={`w-4 h-4 ${c.badgeText}`} />
                          <span className={`text-xs font-semibold ${c.badgeText}`}>{c.badge}</span>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* ── Text panel ── */}
                  <AnimatedSection direction={isEven ? "right" : "left"} className={!isEven ? "lg:order-1" : ""}>
                    <div>
                      {/* label */}
                      <span className={`inline-block text-xs font-semibold tracking-widest uppercase ${c.badgeText} mb-3`}>
                        {c.label}
                      </span>

                      {/* title */}
                      <h3 className="text-3xl md:text-4xl font-bold font-display text-foreground leading-tight mb-5">
                        {c.title}
                      </h3>

                      {/* coloured accent bar */}
                      <div className={`w-14 h-[3px] rounded-full ${c.topBar} mb-6`} />

                      {/* metric badge */}
                      <div className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border text-sm font-bold mb-6 ${c.accentBg} ${c.accentBorder} ${c.accentText}`}>
                        <CheckCircle2 className="w-4 h-4" />
                        {c.metric}
                      </div>

                      {/* body text */}
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                        {c.detail}
                      </p>

                      {/* client */}
                      <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <div className={`w-8 h-8 rounded-lg ${c.accentBg} border ${c.accentBorder} flex items-center justify-center shrink-0`}>
                          <Building2 className={`w-4 h-4 ${c.accentText}`} />
                        </div>
                        <span>{c.client}</span>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Why Clients Return — Alternating image+text (like About) */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Why They Stay"
            title={
              <RevealText>
                <span>The Cryst Bio Difference</span>
              </RevealText>
            }
            description="Clients don't just complete one study with us — they build lasting research partnerships."
          />

          <div className="space-y-28 md:space-y-36 mt-4">
            {whyReturn.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={item.title} className="relative min-h-[400px] flex items-center">
                  <FloatingText
                    text={item.title}
                    className="top-1/2 -translate-y-1/2"
                    direction={isEven ? 1 : -1}
                  />
                  <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                  {/* ── Image panel ── */}
                  <AnimatedSection direction={isEven ? "left" : "right"} className={!isEven ? "lg:order-2" : ""}>
                    <div className="relative">
                      <div
                        className={`absolute -z-10 w-80 h-80 rounded-full blur-3xl opacity-60 ${item.glow} ${isEven ? "-bottom-12 -left-12" : "-bottom-12 -right-12"}`}
                      />

                      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-2xl">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/15 to-transparent" />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 group-hover:ring-white/10 transition-all duration-300" />

                        {/* bottom label strip */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                          <div>
                            <span className={`text-xs font-semibold uppercase tracking-widest ${item.badgeText} opacity-80`}>
                              Why Choose Us
                            </span>
                            <p className="text-lg font-bold font-display text-foreground mt-0.5">{item.title}</p>
                          </div>
                          <div className={`w-11 h-11 rounded-xl ${item.iconBg} border ${item.badgeBorder} backdrop-blur-md flex items-center justify-center shadow-lg`}>
                            <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                          </div>
                        </div>
                      </div>

                      {/* floating badge */}
                      <div className={`absolute -top-4 ${isEven ? "-right-4" : "-left-4"} glass-card ${item.badgeBg} border ${item.badgeBorder} px-4 py-2.5 rounded-xl shadow-xl`}>
                        <div className="flex items-center gap-2">
                          <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                          <span className={`text-xs font-semibold ${item.badgeText}`}>{item.badge}</span>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* ── Text panel ── */}
                  <AnimatedSection direction={isEven ? "right" : "left"} className={!isEven ? "lg:order-1" : ""}>
                    <div>
                      <span className={`inline-block text-xs font-semibold tracking-widest uppercase ${item.badgeText} mb-3`}>
                        Why They Stay
                      </span>

                      <h3 className="text-3xl md:text-4xl font-bold font-display text-foreground leading-tight mb-5">
                        {item.title}
                      </h3>

                      <div className={`w-14 h-[3px] rounded-full ${item.accentBar} mb-7`} />

                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                        {item.desc}
                      </p>

                      <ul className="space-y-4">
                        {item.keyPoints.map((pt) => (
                          <li key={pt} className="flex items-start gap-3.5">
                            <div className={`w-6 h-6 rounded-full ${item.iconBg} border ${item.badgeBorder} flex items-center justify-center shrink-0 mt-0.5`}>
                              <CheckCircle2 className={`w-3.5 h-3.5 ${item.iconColor}`} />
                            </div>
                            <span className="text-sm md:text-base text-muted-foreground leading-relaxed">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Lab Showcase Banner ───────────────────────────────────── */}
      <section className="section-padding bg-secondary/40 dark:bg-card/30 relative overflow-hidden">
        <FloatingText text="CPCSEA-APPROVED" className="top-1/4" direction={1} />
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={aboutLabImg}
                alt="Cryst Bio State-of-the-Art Laboratory"
                className="w-full h-72 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />

              <div className="absolute inset-0 flex items-center">
                <div className="px-8 md:px-16 max-w-2xl">
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                    Our Facility
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold font-display text-foreground leading-tight mb-4">
                    State-of-the-Art{" "}
                    <span className="gradient-text">Infrastructure</span>
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                    Every study is performed in our NABL-accredited, CPCSEA-approved facility — purpose-built for precision, reproducibility and regulatory compliance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["NABL Accredited", "CPCSEA Approved", "ISO/IEC 17025:2017", "IAS Recognised"].map((b) => (
                      <span key={b} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/15 border border-primary/30 text-primary backdrop-blur-sm">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center glass-card glow-border">
              {/* Background tints */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 dark:from-primary/8 via-transparent to-primary/10 dark:to-primary/8 pointer-events-none" />
              {/* Decorative blobs */}
              <div className="absolute -top-28 -left-28 w-80 h-80 rounded-full bg-primary/[0.14] dark:bg-primary/[0.06] blur-3xl pointer-events-none" />
              <div className="absolute -bottom-28 -right-28 w-80 h-80 rounded-full bg-primary/[0.14] dark:bg-primary/[0.06] blur-3xl pointer-events-none" />
              {/* Dot grid */}
              <div
                className="absolute inset-0 opacity-[0.06] dark:opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                    <FlaskConical className="w-4 h-4" /> Ready to become our next success story?
                  </span>

                  <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-5">
                    Start Your Study Today
                  </h2>

                  <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg leading-relaxed">
                    Join hundreds of pharmaceutical, biotech, and medical device companies that trust Cryst Bio for reliable, globally accepted preclinical research.
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link to="/contact">
                      <Button
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 px-10 shadow-[0_0_28px_-4px_hsl(var(--primary)/0.5)]"
                      >
                        Get In Touch <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Link to="/services">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-border text-foreground hover:bg-secondary gap-2 px-8"
                      >
                        Explore Services <ChevronRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>

                  {/* Trust row */}
                  <div className="flex flex-wrap justify-center gap-6 mt-10">
                    {["NABL Accredited", "CPCSEA Certified", "ISO 10993", "OECD Compliant", "IAS Recognised"].map((badge) => (
                      <span key={badge} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        {badge}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
