import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FlaskConical,
  ShieldCheck,
  Leaf,
  TestTube,
  Stethoscope,
  Bug,
  ChevronRight,
  Calendar,
  Users,
  Award,
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  TrendingUp,
  Microscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import WhyPartner from "@/components/WhyPartner";
import CertLogoSlider from "@/components/CertLogoSlider";
import heroImg from "@/assets/hero-lab.jpg";
import aboutImg from "@/assets/about-lab.jpg";
import serviceAgrochem from "@/assets/service-agrochem.jpg";
import serviceBiocompat from "@/assets/service-biocompat.jpg";
import serviceToxicology from "@/assets/service-toxicology.jpg";
import serviceResearch from "@/assets/service-research.jpg";
import serviceHistopath from "@/assets/service-histopath.jpg";
import serviceMicro from "@/assets/service-micro.jpg";

const stats = [
  {
    value: "2018",
    label: "Established",
    icon: Calendar,
    gradient: "from-primary/20 via-primary/10 to-transparent",
    iconColor: "text-primary",
    border: "border-primary/30",
  },
  {
    value: "500+",
    label: "Projects Completed",
    icon: FlaskConical,
    gradient: "from-emerald-500/20 via-emerald-500/10 to-transparent",
    iconColor: "text-emerald-400",
    border: "border-emerald-500/30",
  },
  {
    value: "50+",
    label: "Expert Scientists",
    icon: Users,
    gradient: "from-violet-500/20 via-violet-500/10 to-transparent",
    iconColor: "text-violet-400",
    border: "border-violet-500/30",
  },
  {
    value: "6+",
    label: "Certifications",
    icon: Award,
    gradient: "from-amber-500/20 via-amber-500/10 to-transparent",
    iconColor: "text-amber-400",
    border: "border-amber-500/30",
  },
];

const services = [
  {
    icon: Leaf,
    title: "Agrochemical Testing",
    desc: "Regulatory-compliant testing for agrochemical products including acute toxicity and environmental assessment.",
    img: serviceAgrochem,
    accentBg: "bg-emerald-500/20",
    accentBorder: "border-emerald-500/40",
    accentText: "text-emerald-400",
    tag: "OECD Guidelines",
  },
  {
    icon: ShieldCheck,
    title: "Biocompatibility",
    desc: "Medical device testing per ISO 10993 — cytotoxicity, sensitization, irritation & implantation.",
    img: serviceBiocompat,
    accentBg: "bg-sky-500/20",
    accentBorder: "border-sky-500/40",
    accentText: "text-sky-400",
    tag: "ISO 10993",
  },
  {
    icon: TestTube,
    title: "Toxicology",
    desc: "Full-spectrum toxicology following OECD & FDA guidelines for acute, chronic & genotoxicity studies.",
    img: serviceToxicology,
    accentBg: "bg-amber-500/20",
    accentBorder: "border-amber-500/40",
    accentText: "text-amber-400",
    tag: "FDA / OECD",
  },
  {
    icon: FlaskConical,
    title: "Research Projects",
    desc: "Custom preclinical research — study design, protocol development & regulatory submission support.",
    img: serviceResearch,
    accentBg: "bg-violet-500/20",
    accentBorder: "border-violet-500/40",
    accentText: "text-violet-400",
    tag: "Custom Studies",
  },
  {
    icon: Stethoscope,
    title: "Histopathology",
    desc: "Expert tissue processing, microscopic examination, clinical chemistry & hematology analysis.",
    img: serviceHistopath,
    accentBg: "bg-rose-500/20",
    accentBorder: "border-rose-500/40",
    accentText: "text-rose-400",
    tag: "GLP Compliant",
  },
  {
    icon: Bug,
    title: "Microbiology",
    desc: "Sterility, endotoxin, antimicrobial effectiveness & environmental monitoring services.",
    img: serviceMicro,
    accentBg: "bg-cyan-500/20",
    accentBorder: "border-cyan-500/40",
    accentText: "text-cyan-400",
    tag: "ISO / USP",
  },
];

const processSteps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Consultation",
    desc: "Discuss your research needs and regulatory requirements with our scientific team.",
  },
  {
    num: "02",
    icon: FileCheck2,
    title: "Study Design",
    desc: "Tailored protocol development aligned with OECD, FDA, ISO & USP guidelines.",
  },
  {
    num: "03",
    icon: Microscope,
    title: "Execution",
    desc: "Rigorous study execution in our CPCSEA-certified, NABL-accredited facilities.",
  },
  {
    num: "04",
    icon: TrendingUp,
    title: "Reporting",
    desc: "Comprehensive data analysis and regulatory-ready reports delivered on time.",
  },
];

const aboutFeatures = [
  "NABL Accredited Laboratories",
  "CPCSEA Certified Animal Facility",
  "ISO 10993 Biocompatibility Studies",
  "OECD & FDA Compliant Protocols",
  "Global CRO with European & US Offices",
];

const trustBadges = [
  "NABL Accredited",
  "CPCSEA Certified",
  "ISO 10993",
  "OECD Compliant",
];

const Home = () => (
  <div className="overflow-x-hidden">
    {/* ─── Hero ─────────────────────────────────────────────── */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Cryst Bio Laboratory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — headline & CTAs */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                <FlaskConical className="w-4 h-4" /> India's Leading Preclinical
                CRO
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.06] tracking-tight"
            >
              Advancing <span className="gradient-text">Preclinical</span>
              <br />
              Research{" "}
              <span className="relative inline-block">
                Excellence
                <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-primary via-primary/60 to-transparent" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-7 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Highest-quality toxicology testing & preclinical research with
              rapid turnaround, in full compliance with international standards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.44 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link to="/services">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 text-base px-8 shadow-[0_0_24px_-4px_hsl(var(--primary)/0.55)]"
                >
                  Explore Services <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-secondary font-semibold text-base px-8"
                >
                  Get In Touch
                </Button>
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-10 flex flex-wrap gap-2.5"
            >
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-xs font-medium text-muted-foreground"
                >
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — floating stat cards (desktop only) */}
          {/* <div className="hidden lg:grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.55 + i * 0.12 }}
                className={`glass-card p-6 hover-glow bg-gradient-to-br ${s.gradient} border ${s.border} group cursor-default`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${s.gradient} border ${s.border}`}
                >
                  <s.icon className={`w-6 h-6 ${s.iconColor}`} />
                </div>
                <div
                  className={`text-3xl font-bold font-display ${s.iconColor}`}
                >
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Bottom fade-out */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>

    {/* ─── Mobile Stats Strip ───────────────────────────────── */}
    <section className="lg:hidden py-8 bg-card/30 border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1}>
              <div
                className={`glass-card p-5 text-center hover-glow bg-gradient-to-br ${s.gradient} border ${s.border}`}
              >
                <s.icon className={`w-7 h-7 mx-auto mb-2 ${s.iconColor}`} />
                <div
                  className={`text-2xl font-bold font-display ${s.iconColor}`}
                >
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ─── About ────────────────────────────────────────────── */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Glow halo */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-xl" />
              <img
                src={aboutImg}
                alt="About Cryst Bio"
                className="relative rounded-2xl w-full object-cover aspect-[4/3] ring-1 ring-border/50"
              />
              {/* Bottom-right badge */}
              <div className="absolute -bottom-5 -right-5 glass-card px-6 py-4 flex flex-col items-center glow-border shadow-xl">
                <span className="text-3xl font-bold font-display gradient-text">
                  7+
                </span>
                <span className="text-xs text-muted-foreground mt-0.5 whitespace-nowrap">
                  Years of Excellence
                </span>
              </div>
              {/* Top-left icon badge */}
              <div className="absolute -top-5 -left-5 w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 backdrop-blur-sm flex flex-col items-center justify-center gap-1">
                <Award className="w-8 h-8 text-primary" />
                <span className="text-[10px] text-primary font-semibold tracking-wide">
                  NABL
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Text side */}
          <AnimatedSection direction="right">
            <span className="text-sm font-medium tracking-widest uppercase text-primary">
              Who We Are
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight">
              Cryst Bio Solutions
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              A rapidly emerging Preclinical Contract Research Organization
              (CRO) and laboratory animal breeder based in Pune, Maharashtra —
              with consultation offices in Europe and the USA.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Founded in 2018, our core services include Toxicology Testing and
              Preclinical Research in compliance with ISO 10993, OECD, FDA,
              ASTM, and USP.
            </p>
            <ul className="mt-7 space-y-3">
              {aboutFeatures.map((feat) => (
                <li
                  key={feat}
                  className="flex items-center gap-3 text-sm text-foreground/85"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-block mt-9">
              <Button
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/10 gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ─── Services ─────────────────────────────────────────── */}
    <section className="section-padding bg-card/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Our Services"
          title="Comprehensive Research Solutions"
          description="Full range of preclinical research and testing for pharmaceutical, cosmetics, medical device, and biotech industries."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <div className="glass-card overflow-hidden h-full hover-glow group transition-all duration-500 flex flex-col">
                {/* Image */}
                <div className="relative h-52 overflow-hidden flex-shrink-0">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                  {/* Tag — top right */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-sm ${s.accentBg} ${s.accentBorder} ${s.accentText}`}
                    >
                      {s.tag}
                    </span>
                  </div>

                  {/* Icon — bottom left */}
                  <div className="absolute bottom-3 left-4">
                    <div
                      className={`w-12 h-12 rounded-xl border backdrop-blur-sm flex items-center justify-center ${s.accentBg} ${s.accentBorder}`}
                    >
                      <s.icon className={`w-6 h-6 ${s.accentText}`} />
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {s.desc}
                  </p>
                  <Link
                    to="/services"
                    className={`inline-flex items-center gap-1.5 text-sm font-medium mt-5 group-hover:gap-2.5 transition-all ${s.accentText}`}
                  >
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/10 gap-2 px-10"
              >
                View All Services <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* ─── Process ──────────────────────────────────────────── */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeader label="Why Cryst Bio" title="Why Partner With Us" />
        <WhyPartner />
      </div>
    </section>

    {/* ─── Certifications ───────────────────────────────────── */}
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
      {/* Faint glow blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-sm font-medium tracking-widest uppercase text-primary">
              Trusted & Certified
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold font-display text-foreground">
              Our Certifications
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Accredited by globally recognised bodies, ensuring your research
              meets the highest international standards.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <CertLogoSlider />
        </AnimatedSection>
      </div>
    </section>

    {/* ─── CTA ──────────────────────────────────────────────── */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center glass-card glow-border">
            {/* Background tints */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/8 pointer-events-none" />
            {/* Decorative blobs */}
            <div className="absolute -top-28 -left-28 w-80 h-80 rounded-full bg-primary/6 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-28 -right-28 w-80 h-80 rounded-full bg-primary/6 blur-3xl pointer-events-none" />
            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                <FlaskConical className="w-4 h-4" /> Ready to start your study?
              </span>

              <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-5">
                Let's Grow Together
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg leading-relaxed">
                Partner with us for reliable, high-quality preclinical research
                solutions designed to meet global regulatory standards.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 px-10 shadow-[0_0_28px_-4px_hsl(var(--primary)/0.5)]"
                  >
                    Contact Us <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border text-foreground hover:bg-secondary gap-2 px-8"
                  >
                    View Services <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Home;
