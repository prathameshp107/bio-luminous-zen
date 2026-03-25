import { Link } from "react-router-dom";
import {
  ArrowRight,
  Thermometer,
  HeartPulse,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  Activity,
  Microscope,
  Heart,
  Bug,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import ParallaxImage from "@/components/ParallaxImage";
import RevealText from "@/components/RevealText";
import FloatingText from "@/components/FloatingText";
import animalImg from "@/assets/animal-facility.jpg";
import { animalModels } from "@/data/animalData";

/* ── Intro feature cards ─────────────────────────────────────────── */
const features = [
  {
    icon: ShieldCheck,
    title: "CPCSEA Compliant",
    desc: "All breeding and animal experiments strictly follow CPCSEA ethical guidelines and regulatory standards.",
  },
  {
    icon: Thermometer,
    title: "Controlled Environment",
    desc: "Temperature, humidity, and photoperiod are precisely regulated to ensure optimal welfare and study validity.",
  },
  {
    icon: HeartPulse,
    title: "Health Monitored",
    desc: "Continuous health surveillance and dedicated veterinary care programs for every breeding colony.",
  },
];

/* ── Per-animal colour palette (5 animals → 5 unique accents) ───── */
const palette = [
  {
    icon: Activity,
    iconColor: "text-primary",
    accentBar: "bg-primary",
    iconBg: "bg-primary/10 border-primary/20",
    badgeBorder: "border-primary/30",
    badgeBg: "bg-primary/10",
    badgeText: "text-primary",
    glow: "bg-primary/5",
    btnClass: "border-primary/30 text-primary hover:bg-primary/10",
  },
  {
    icon: Microscope,
    iconColor: "text-sky-400",
    accentBar: "bg-sky-500",
    iconBg: "bg-sky-500/10 border-sky-500/25",
    badgeBorder: "border-sky-500/30",
    badgeBg: "bg-sky-500/10",
    badgeText: "text-sky-400",
    glow: "bg-sky-500/5",
    btnClass: "border-sky-500/30 text-sky-400 hover:bg-sky-500/10",
  },
  {
    icon: ShieldCheck,
    iconColor: "text-violet-400",
    accentBar: "bg-violet-500",
    iconBg: "bg-violet-500/10 border-violet-500/25",
    badgeBorder: "border-violet-500/30",
    badgeBg: "bg-violet-500/10",
    badgeText: "text-violet-400",
    glow: "bg-violet-500/5",
    btnClass: "border-violet-500/30 text-violet-400 hover:bg-violet-500/10",
  },
  {
    icon: Heart,
    iconColor: "text-emerald-400",
    accentBar: "bg-emerald-500",
    iconBg: "bg-emerald-500/10 border-emerald-500/25",
    badgeBorder: "border-emerald-500/30",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-400",
    glow: "bg-emerald-500/5",
    btnClass: "border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10",
  },
  {
    icon: Bug,
    iconColor: "text-amber-400",
    accentBar: "bg-amber-500",
    iconBg: "bg-amber-500/10 border-amber-500/25",
    badgeBorder: "border-amber-500/30",
    badgeBg: "bg-amber-500/10",
    badgeText: "text-amber-400",
    glow: "bg-amber-500/5",
    btnClass: "border-amber-500/30 text-amber-400 hover:bg-amber-500/10",
  },
];

/* ── Curated key study highlights per animal ─────────────────────── */
const animalHighlights: Record<string, string[]> = {
  rats: [
    "General toxicology & safety pharmacology studies",
    "Pharmacokinetics, ADME & metabolic research",
    "Acute, subchronic & chronic toxicity testing",
  ],
  mice: [
    "Immunological, oncology & cancer research models",
    "Pharmacological screening & efficacy studies",
    "Infectious disease & inflammation models",
  ],
  rabbits: [
    "Dermal & ocular irritation assessments",
    "Pyrogen testing (Rabbit Pyrogen Test)",
    "Biocompatibility testing per ISO 10993",
  ],
  "guinea-pigs": [
    "Skin sensitization (Guinea Pig Maximization Test)",
    "Immunological, allergic & complement studies",
    "Dermal irritation & regulatory toxicology",
  ],
  hamsters: [
    "Infectious disease models including COVID-19 & Influenza",
    "Oncology — cheek pouch transplantation models",
    "Oral toxicity, teratogenicity & metabolic studies",
  ],
};

/* ── Component ───────────────────────────────────────────────────── */
const AnimalSupply = () => (
  <div>
    <PageHero
      title="Animal Supply"
      subtitle="High-quality laboratory animals bred under strict hygiene and ethical standards."
      breadcrumb="Animal Supply"
    />

    {/* ── Intro ─────────────────────────────────────────────────── */}
    <section className="section-padding relative overflow-hidden">
      <FloatingText text="BREEDING" className="top-1/4" direction={1} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — facility image with floating badges */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <ParallaxImage
                  src={animalImg}
                  alt="Animal Breeding Facility"
                  containerClassName="w-full h-full"
                  speed={0.15}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/30 pointer-events-none" />
              </div>

              {/* CPCSEA badge — bottom right */}
              <div className="absolute -bottom-5 -right-5 glass-card glow-border p-4 rounded-xl shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold font-display gradient-text leading-tight">
                      CPCSEA Approved
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Ethical Breeding
                    </p>
                  </div>
                </div>
              </div>

              {/* Established badge — top left */}
              <div className="absolute -top-4 -left-4 glass-card p-3 rounded-xl border border-primary/20 shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-foreground">
                    Breeding Facility
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Est. 2018 · Pune, India
                </p>
              </div>

              {/* Glow blob */}
              <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            </div>
          </AnimatedSection>

          {/* Right — text + feature cards */}
          <AnimatedSection direction="right">
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-primary mb-3">
              Breeding Facility
            </span>
            <RevealText>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight mb-6">
                Quality Laboratory <span className="gradient-text">Animals</span>
              </h2>
            </RevealText>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
              We operate a hygienically well-maintained breeding facility,
              supplying quality laboratory animals for preclinical research. All
              animals are bred under CPCSEA guidelines with continuous health
              monitoring and rigorous environmental controls.
            </p>

            <div className="space-y-4">
              {features.map((f, i) => (
                <AnimatedSection
                  key={f.title}
                  delay={0.1 + i * 0.1}
                  direction="right"
                >
                  <div className="glass-card p-4 flex items-start gap-4 hover-glow group transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <f.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-0.5">
                        {f.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ── Laboratory Animal Models — alternating layout ─────────── */}
    <section className="section-padding bg-card/20">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Available Species"
          title={
            <RevealText>
              <span>Laboratory Animal Models</span>
            </RevealText>
          }
          description="Five species, multiple strains — bred in-house under controlled conditions for diverse preclinical research applications."
        />

        <div className="space-y-28 md:space-y-36 mt-4">
          {animalModels.map((a, i) => {
            const c = palette[i % palette.length];
            const isEven = i % 2 === 0;
            const highlights = animalHighlights[a.slug] ?? [];

            return (
              <div
                key={a.slug}
                className="relative min-h-[400px] flex items-center"
              >
                <FloatingText
                  text={a.name}
                  className="top-1/2 -translate-y-1/2"
                  direction={isEven ? 1 : -1}
                />
                <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                {/* ── Image panel ───────────────────────────────── */}
                <AnimatedSection
                  direction={isEven ? "left" : "right"}
                  className={!isEven ? "lg:order-2" : ""}
                >
                  <div className="relative">
                    {/* Ambient glow blob */}
                    <div
                      className={`absolute -z-10 w-80 h-80 rounded-full blur-3xl opacity-60 ${c.glow} ${
                        isEven ? "-bottom-12 -left-12" : "-bottom-12 -right-12"
                      }`}
                    />

                    {/* Main image — wrapped in Link */}
                    <Link to={`/animal-supply/${a.slug}`}>
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-2xl cursor-pointer">
                        <ParallaxImage
                          src={a.heroImage}
                          alt={a.name}
                          containerClassName="w-full h-full"
                          className="transition-transform duration-700 group-hover:scale-105"
                          speed={0.1}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/15 to-transparent pointer-events-none" />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 group-hover:ring-white/10 transition-all duration-300 pointer-events-none" />

                        {/* Bottom label strip */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                          <div>
                            <span
                              className={`text-xs font-semibold uppercase tracking-widest ${c.badgeText} opacity-80`}
                            >
                              Laboratory Animal
                            </span>
                            <p className="text-xl font-bold font-display text-foreground mt-0.5">
                              {a.name}
                            </p>
                          </div>
                          {/* Icon bubble */}
                          <div
                            className={`w-11 h-11 rounded-xl ${c.iconBg} border ${c.badgeBorder} backdrop-blur-md flex items-center justify-center shadow-lg`}
                          >
                            <c.icon className={`w-5 h-5 ${c.iconColor}`} />
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Floating strain-count badge */}
                    <div
                      className={`absolute -top-4 ${
                        isEven ? "-right-4" : "-left-4"
                      } glass-card ${c.badgeBg} border ${c.badgeBorder} px-4 py-2.5 rounded-xl shadow-xl`}
                    >
                      <div className="flex items-center gap-2">
                        <c.icon className={`w-4 h-4 ${c.iconColor}`} />
                        <span
                          className={`text-xs font-semibold ${c.badgeText}`}
                        >
                          {a.strains.length}{" "}
                          {a.strains.length === 1 ? "Strain" : "Strains"}{" "}
                          Available
                        </span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* ── Text panel ────────────────────────────────── */}
                <AnimatedSection
                  direction={isEven ? "right" : "left"}
                  className={!isEven ? "lg:order-1" : ""}
                >
                  <div>
                    {/* Micro-label */}
                    <span
                      className={`inline-block text-xs font-semibold tracking-widest uppercase ${c.badgeText} mb-3`}
                    >
                      Laboratory Animal
                    </span>

                    {/* Animal name */}
                    <h3 className="text-4xl md:text-5xl font-bold font-display text-foreground leading-tight mb-5">
                      {a.name}
                    </h3>

                    {/* Coloured accent bar */}
                    <div
                      className={`w-14 h-[3px] rounded-full ${c.accentBar} mb-7`}
                    />

                    {/* Description */}
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-7">
                      {a.shortDesc}
                    </p>

                    {/* Available strains chips */}
                    <div className="mb-7">
                      <p
                        className={`text-xs font-semibold uppercase tracking-widest ${c.badgeText} mb-3`}
                      >
                        Available Strains
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {a.strains.map((s) => (
                          <span
                            key={s.name}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold ${c.badgeBg} border ${c.badgeBorder} ${c.badgeText}`}
                          >
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key study highlights */}
                    <ul className="space-y-3.5 mb-8">
                      {highlights.map((pt) => (
                        <li key={pt} className="flex items-start gap-3.5">
                          <div
                            className={`w-6 h-6 rounded-full ${c.iconBg} border ${c.badgeBorder} flex items-center justify-center shrink-0 mt-0.5`}
                          >
                            <CheckCircle2
                              className={`w-3.5 h-3.5 ${c.iconColor}`}
                            />
                          </div>
                          <span className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Per-animal CTA */}
                    <Link to={`/animal-supply/${a.slug}`}>
                      <Button
                        variant="outline"
                        className={`${c.btnClass} border gap-2 font-semibold transition-all duration-300`}
                      >
                        View All Strains &amp; Details{" "}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ── CTA ───────────────────────────────────────────────────── */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="relative rounded-2xl overflow-hidden p-12 md:p-20 text-center glass-card glow-border">
            {/* Background glows */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-sky-500/5 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-primary/8 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-block text-sm font-medium tracking-widest uppercase text-primary mb-4">
                Animal Procurement
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4 leading-tight">
                Need Laboratory <span className="gradient-text">Animals?</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed text-lg">
                Contact us for availability, pricing, custom strain
                requirements, and tailored breeding programs designed for your
                study protocol.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 px-8 text-base"
                  >
                    Inquire Now <ArrowRight className="w-4 h-4" />
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

export default AnimalSupply;
