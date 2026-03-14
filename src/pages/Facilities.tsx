import {
  Building2,
  Thermometer,
  Microscope,
  ShieldCheck,
  Wind,
  Droplets,
  CheckCircle2,
  Award,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

import facilitiesImg from "@/assets/facilities.jpg";
import animalFacilityImg from "@/assets/animal-facility.jpg";
import imgLabs from "@/assets/State-of-the-Art Labs.png";
import imgClimate from "@/assets/Climate Control.png";
import imgEquipment from "@/assets/Advanced Equipment.png";
import imgBiosafety from "@/assets/Biosafety Standards.png";
import imgHvac from "@/assets/HVAC Systems.png";
import imgWater from "@/assets/Water Purification.png";

/* ── Intro stats ─────────────────────────────────────────────────── */
const stats = [
  { value: "NABL", label: "Accredited Lab", icon: Award },
  { value: "ISO", label: "17025:2017 Certified", icon: ShieldCheck },
  { value: "6+", label: "Dedicated Testing Areas", icon: Building2 },
  { value: "24/7", label: "Environment Monitoring", icon: Thermometer },
];

const complianceBadges = ["NABL", "ISO 17025", "CPCSEA", "MSME", "GLP Ready"];

/* ── Facility highlights ─────────────────────────────────────────── */
const highlights = [
  {
    icon: Building2,
    title: "State-of-the-Art Labs",
    label: "Laboratory Infrastructure",
    desc: "Our modern laboratory infrastructure is equipped with the latest testing equipment across dedicated zones for toxicology, histopathology, and microbiology — each optimised for precision and regulatory compliance.",
    keyPoints: [
      "Fully equipped analytical and testing instruments across all zones",
      "Dedicated areas for toxicology, histopathology, and microbiology",
      "Regular calibration and maintenance per ISO/IEC 17025:2017 standards",
    ],
    badge: "ISO Accredited",
    iconBg: "bg-primary/10 border-primary/20",
    iconColor: "text-primary",
    accentBar: "bg-primary",
    badgeBorder: "border-primary/30",
    badgeBg: "bg-primary/10",
    badgeText: "text-primary",
    glow: "bg-primary/5",
    img: imgLabs,
  },
  {
    icon: Thermometer,
    title: "Climate Control",
    label: "Environmental Control",
    desc: "Precise temperature, humidity, and photoperiod regulation across all laboratory and animal facility areas ensures stable, reproducible research conditions at every step of the study.",
    keyPoints: [
      "Precise temperature regulation across all testing environments",
      "Humidity control systems maintaining optimal research conditions",
      "Photoperiod management for animal colony housing areas",
    ],
    badge: "24/7 Monitored",
    iconBg: "bg-sky-500/10 border-sky-500/25",
    iconColor: "text-sky-400",
    accentBar: "bg-sky-500",
    badgeBorder: "border-sky-500/30",
    badgeBg: "bg-sky-500/10",
    badgeText: "text-sky-400",
    glow: "bg-sky-500/5",
    img: imgClimate,
  },
  {
    icon: Microscope,
    title: "Advanced Equipment",
    label: "Analytical Instrumentation",
    desc: "Our laboratory houses the latest high-resolution microscopy and analytical instruments, enabling high-precision results across all toxicology, pharmacology, and histopathology studies.",
    keyPoints: [
      "High-resolution microscopy for detailed histopathological analysis",
      "Latest analytical instruments for toxicology and pharmacology",
      "Automated systems ensuring precision and full reproducibility",
    ],
    badge: "Latest Technology",
    iconBg: "bg-violet-500/10 border-violet-500/25",
    iconColor: "text-violet-400",
    accentBar: "bg-violet-500",
    badgeBorder: "border-violet-500/30",
    badgeBg: "bg-violet-500/10",
    badgeText: "text-violet-400",
    glow: "bg-violet-500/5",
    img: imgEquipment,
  },
  {
    icon: ShieldCheck,
    title: "Biosafety Standards",
    label: "Safety & Compliance",
    desc: "Strict biosafety protocols and containment measures are enforced across all laboratory zones in full compliance with national and international regulatory requirements, protecting personnel and study integrity.",
    keyPoints: [
      "Strict biosafety protocols enforced across all laboratory zones",
      "Containment measures fully compliant with regulatory requirements",
      "Regular safety audits and continuous staff biosafety training",
    ],
    badge: "Fully Compliant",
    iconBg: "bg-emerald-500/10 border-emerald-500/25",
    iconColor: "text-emerald-400",
    accentBar: "bg-emerald-500",
    badgeBorder: "border-emerald-500/30",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-400",
    glow: "bg-emerald-500/5",
    img: imgBiosafety,
  },
  {
    icon: Wind,
    title: "HVAC Systems",
    label: "Air Quality Management",
    desc: "Advanced HEPA-filtered air supply and dedicated, isolated ventilation circuits maintain clean, contamination-free environments across all research and animal housing areas.",
    keyPoints: [
      "HEPA-filtered air supply for contamination-free environments",
      "Separate ventilation circuits for animal and laboratory areas",
      "Continuous air quality monitoring with automated controls",
    ],
    badge: "HEPA Filtered",
    iconBg: "bg-amber-500/10 border-amber-500/25",
    iconColor: "text-amber-400",
    accentBar: "bg-amber-500",
    badgeBorder: "border-amber-500/30",
    badgeBg: "bg-amber-500/10",
    badgeText: "text-amber-400",
    glow: "bg-amber-500/5",
    img: imgHvac,
  },
  {
    icon: Droplets,
    title: "Water Purification",
    label: "Water Quality Systems",
    desc: "Multi-stage ultra-pure water purification systems deliver USP and EP pharmacopoeial grade water throughout the facility — an essential foundation for all laboratory procedures.",
    keyPoints: [
      "Ultra-pure water systems meeting USP and EP pharmacopoeial standards",
      "Multi-stage filtration including reverse osmosis and UV treatment",
      "Daily quality checks ensuring consistent and traceable water purity",
    ],
    badge: "USP Grade",
    iconBg: "bg-rose-500/10 border-rose-500/25",
    iconColor: "text-rose-400",
    accentBar: "bg-rose-500",
    badgeBorder: "border-rose-500/30",
    badgeBg: "bg-rose-500/10",
    badgeText: "text-rose-400",
    glow: "bg-rose-500/5",
    img: imgWater,
  },
];

/* ════════════════════════════════════════════════════════════════════ */

const Facilities = () => (
  <div>
    <PageHero
      title="Our Facilities"
      subtitle="World-class infrastructure designed for precision research and testing."
      breadcrumb="Facilities"
    />

    {/* ── Intro — image left, text right ───────────────────────── */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — facility image with floating badges */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={facilitiesImg}
                  alt="Cryst Bio Facilities"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/30" />
              </div>

              {/* NABL badge — bottom right */}
              <div className="absolute -bottom-5 -right-5 glass-card glow-border p-4 rounded-xl shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold font-display gradient-text leading-tight">
                      NABL Accredited
                    </p>
                    <p className="text-xs text-muted-foreground">
                      ISO/IEC 17025:2017
                    </p>
                  </div>
                </div>
              </div>

              {/* Location badge — top left */}
              <div className="absolute -top-4 -left-4 glass-card p-3 rounded-xl border border-primary/20 shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-foreground">
                    Research Facility
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Pune, Maharashtra
                </p>
              </div>

              {/* Glow blob */}
              <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            </div>
          </AnimatedSection>

          {/* Right — text + compliance + stats */}
          <AnimatedSection direction="right">
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-primary mb-3">
              Infrastructure
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight mb-6">
              Built for <span className="gradient-text">Excellence</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-7">
              <p>
                Our facility in Pune houses cutting-edge laboratory equipment, a
                state-of-the-art animal breeding centre, and dedicated testing
                areas for toxicology, histopathology, and microbiology services.
              </p>
              <p>
                Every aspect of our infrastructure is designed to meet
                international regulatory standards and ensure the highest
                quality of research output for our global clients.
              </p>
            </div>

            {/* Compliance chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {complianceBadges.map((b) => (
                <span
                  key={b}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 border border-primary/20 text-primary"
                >
                  {b}
                </span>
              ))}
            </div>

            {/* 2×2 stats mini-cards */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <AnimatedSection
                  key={s.label}
                  delay={0.1 + i * 0.1}
                  direction="right"
                >
                  <div className="glass-card p-4 flex items-center gap-3 hover-glow group transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold font-display gradient-text leading-tight">
                        {s.value}
                      </p>
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ── Animal Facility sub-section ──────────────────────────── */}
    <section className="py-16 bg-card/40">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="right" className="lg:order-2">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-2xl">
              <img
                src={animalFacilityImg}
                alt="Animal Breeding Facility"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/20" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary opacity-80">
                  CPCSEA Approved
                </span>
                <p className="text-lg font-bold font-display text-foreground mt-0.5">
                  Animal Breeding Facility
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" className="lg:order-1">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              Animal Housing
            </span>
            <h3 className="text-3xl md:text-4xl font-bold font-display text-foreground leading-tight mb-5">
              CPCSEA-Approved{" "}
              <span className="gradient-text">Animal Facility</span>
            </h3>
            <div className="w-14 h-[3px] rounded-full bg-primary mb-7" />
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Our animal breeding facility operates under strict CPCSEA
              guidelines with continuous veterinary oversight. Temperature,
              humidity, and photoperiod are precisely controlled to ensure
              optimal welfare and study validity for all housed species.
            </p>
            <ul className="space-y-3.5">
              {[
                "CPCSEA registered and regularly audited facility",
                "Species-specific housing for rats, mice, rabbits, guinea pigs & hamsters",
                "Dedicated veterinary care and health monitoring programs",
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {pt}
                  </span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ── Facility Highlights — alternating image + text ───────── */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Features"
          title="Facility Highlights"
          description="Six pillars of world-class laboratory infrastructure — each designed to deliver precision, safety, and full regulatory compliance."
        />

        <div className="space-y-24 md:space-y-32 mt-4">
          {highlights.map((h, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={h.title}
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                {/* ── Image panel ─────────────────────────────── */}
                <AnimatedSection
                  direction={isEven ? "left" : "right"}
                  className={!isEven ? "lg:order-2" : ""}
                >
                  <div className="relative">
                    {/* Ambient glow blob */}
                    <div
                      className={`absolute -z-10 w-80 h-80 rounded-full blur-3xl opacity-60 ${h.glow} ${
                        isEven ? "-bottom-12 -left-12" : "-bottom-12 -right-12"
                      }`}
                    />

                    {/* Main image */}
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-2xl">
                      <img
                        src={h.img}
                        alt={h.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/15 to-transparent" />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 group-hover:ring-white/10 transition-all duration-300" />

                      {/* Bottom label strip */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                        <div>
                          <span
                            className={`text-xs font-semibold uppercase tracking-widest ${h.badgeText} opacity-80`}
                          >
                            {h.label}
                          </span>
                          <p className="text-lg font-bold font-display text-foreground mt-0.5">
                            {h.title}
                          </p>
                        </div>
                        {/* Icon bubble */}
                        <div
                          className={`w-11 h-11 rounded-xl ${h.iconBg} border ${h.badgeBorder} backdrop-blur-md flex items-center justify-center shadow-lg`}
                        >
                          <h.icon className={`w-5 h-5 ${h.iconColor}`} />
                        </div>
                      </div>
                    </div>

                    {/* Floating badge */}
                    <div
                      className={`absolute -top-4 ${
                        isEven ? "-right-4" : "-left-4"
                      } glass-card ${h.badgeBg} border ${h.badgeBorder} px-4 py-2.5 rounded-xl shadow-xl`}
                    >
                      <div className="flex items-center gap-2">
                        <h.icon className={`w-4 h-4 ${h.iconColor}`} />
                        <span
                          className={`text-xs font-semibold ${h.badgeText}`}
                        >
                          {h.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* ── Text panel ──────────────────────────────── */}
                <AnimatedSection
                  direction={isEven ? "right" : "left"}
                  className={!isEven ? "lg:order-1" : ""}
                >
                  <div>
                    {/* Micro label */}
                    <span
                      className={`inline-block text-xs font-semibold tracking-widest uppercase ${h.badgeText} mb-3`}
                    >
                      {h.label}
                    </span>

                    {/* Title */}
                    <h3 className="text-4xl md:text-5xl font-bold font-display text-foreground leading-tight mb-5">
                      {h.title}
                    </h3>

                    {/* Coloured accent bar */}
                    <div
                      className={`w-14 h-[3px] rounded-full ${h.accentBar} mb-7`}
                    />

                    {/* Description */}
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                      {h.desc}
                    </p>

                    {/* Key points */}
                    <ul className="space-y-4">
                      {h.keyPoints.map((pt) => (
                        <li key={pt} className="flex items-start gap-3.5">
                          <div
                            className={`w-6 h-6 rounded-full ${h.iconBg} border ${h.badgeBorder} flex items-center justify-center shrink-0 mt-0.5`}
                          >
                            <CheckCircle2
                              className={`w-3.5 h-3.5 ${h.iconColor}`}
                            />
                          </div>
                          <span className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ── CTA ──────────────────────────────────────────────────── */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="relative rounded-2xl overflow-hidden p-12 md:p-20 text-center glass-card glow-border">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-sky-500/5 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-primary/8 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-block text-sm font-medium tracking-widest uppercase text-primary mb-4">
                Visit Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4 leading-tight">
                Want to Tour Our{" "}
                <span className="gradient-text">Facility?</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed text-lg">
                Schedule a facility visit or get in touch to learn more about
                our infrastructure and how we can support your research
                requirements.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 px-8 text-base"
                  >
                    Schedule a Visit <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border text-foreground hover:bg-secondary font-semibold px-8 text-base"
                  >
                    Explore Services
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

export default Facilities;
