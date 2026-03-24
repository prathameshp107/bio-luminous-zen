import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Activity,
  Microscope,
  Heart,
  Bug,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import ParallaxImage from "@/components/ParallaxImage";
import RevealText from "@/components/RevealText";
import FloatingText from "@/components/FloatingText";
import { animalModels } from "@/data/animalData";

/* ── Per-animal colour + icon palette keyed by slug ─────────────── */
const slugPalette: Record<
  string,
  {
    icon: React.ComponentType<{ className?: string }>;
    iconColor: string;
    accentBar: string;
    iconBg: string;
    badgeBorder: string;
    badgeBg: string;
    badgeText: string;
    glow: string;
    gradient: string;
  }
> = {
  rats: {
    icon: Activity,
    iconColor: "text-primary",
    accentBar: "bg-primary",
    iconBg: "bg-primary/10 border-primary/20",
    badgeBorder: "border-primary/30",
    badgeBg: "bg-primary/10",
    badgeText: "text-primary",
    glow: "bg-primary/5",
    gradient: "bg-gradient-to-r from-primary/8 via-transparent to-primary/5",
  },
  mice: {
    icon: Microscope,
    iconColor: "text-sky-400",
    accentBar: "bg-sky-500",
    iconBg: "bg-sky-500/10 border-sky-500/25",
    badgeBorder: "border-sky-500/30",
    badgeBg: "bg-sky-500/10",
    badgeText: "text-sky-400",
    glow: "bg-sky-500/5",
    gradient: "bg-gradient-to-r from-sky-500/8 via-transparent to-sky-500/5",
  },
  rabbits: {
    icon: ShieldCheck,
    iconColor: "text-violet-400",
    accentBar: "bg-violet-500",
    iconBg: "bg-violet-500/10 border-violet-500/25",
    badgeBorder: "border-violet-500/30",
    badgeBg: "bg-violet-500/10",
    badgeText: "text-violet-400",
    glow: "bg-violet-500/5",
    gradient:
      "bg-gradient-to-r from-violet-500/8 via-transparent to-violet-500/5",
  },
  "guinea-pigs": {
    icon: Heart,
    iconColor: "text-emerald-400",
    accentBar: "bg-emerald-500",
    iconBg: "bg-emerald-500/10 border-emerald-500/25",
    badgeBorder: "border-emerald-500/30",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-400",
    glow: "bg-emerald-500/5",
    gradient:
      "bg-gradient-to-r from-emerald-500/8 via-transparent to-emerald-500/5",
  },
  hamsters: {
    icon: Bug,
    iconColor: "text-amber-400",
    accentBar: "bg-amber-500",
    iconBg: "bg-amber-500/10 border-amber-500/25",
    badgeBorder: "border-amber-500/30",
    badgeBg: "bg-amber-500/10",
    badgeText: "text-amber-400",
    glow: "bg-amber-500/5",
    gradient:
      "bg-gradient-to-r from-amber-500/8 via-transparent to-amber-500/5",
  },
};

/* ── Strain-level palette (cycles per strain within an animal) ───── */
const strainPalette = [
  {
    iconColor: "text-primary",
    accentBar: "bg-primary",
    iconBg: "bg-primary/10 border-primary/20",
    badgeBorder: "border-primary/30",
    badgeBg: "bg-primary/10",
    badgeText: "text-primary",
    glow: "bg-primary/5",
  },
  {
    iconColor: "text-sky-400",
    accentBar: "bg-sky-500",
    iconBg: "bg-sky-500/10 border-sky-500/25",
    badgeBorder: "border-sky-500/30",
    badgeBg: "bg-sky-500/10",
    badgeText: "text-sky-400",
    glow: "bg-sky-500/5",
  },
  {
    iconColor: "text-violet-400",
    accentBar: "bg-violet-500",
    iconBg: "bg-violet-500/10 border-violet-500/25",
    badgeBorder: "border-violet-500/30",
    badgeBg: "bg-violet-500/10",
    badgeText: "text-violet-400",
    glow: "bg-violet-500/5",
  },
];

/* ── Animal-nav accent classes (index-matched to animalModels) ───── */
const navAccents = [
  "text-primary border-primary/30 bg-primary/10",
  "text-sky-400 border-sky-500/30 bg-sky-500/10",
  "text-violet-400 border-violet-500/30 bg-violet-500/10",
  "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  "text-amber-400 border-amber-500/30 bg-amber-500/10",
];

/* ════════════════════════════════════════════════════════════════════ */

const AnimalDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const animal = animalModels.find((a) => a.slug === slug);

  if (!animal) return <Navigate to="/animal-supply" replace />;

  const c = slugPalette[slug!] ?? slugPalette["rats"];
  const AnimalIcon = c.icon;

  const featureCards: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    sub: string;
  }[] = [
    {
      icon: ShieldCheck,
      label: "CPCSEA Approved",
      sub: "Ethical breeding standards",
    },
    { icon: CheckCircle2, label: "In-House Bred", sub: "Full quality control" },
    {
      icon: AnimalIcon,
      label: `${animal.strains.length} ${animal.strains.length === 1 ? "Strain" : "Strains"}`,
      sub: "Available now",
    },
    { icon: Heart, label: "Health Monitored", sub: "Vet supervised care" },
  ];

  return (
    <div>
      {/* ── Standard page hero ────────────────────────────────── */}
      <PageHero
        title={animal.name}
        subtitle={animal.shortDesc}
        breadcrumb={`Animal Supply » ${animal.name}`}
      />

      {/* ── Intro — text left, image right ────────────────────── */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* ── Left — all info ─────────────────────────────── */}
            <AnimatedSection direction="left">
              <div>
                {/* Species switcher pills */}
                <div className="flex flex-wrap gap-2 mb-7">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground self-center shrink-0 mr-1">
                    Species:
                  </span>
                  {animalModels.map((a, i) => (
                    <Link
                      key={a.slug}
                      to={`/animal-supply/${a.slug}`}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                        a.slug === slug
                          ? navAccents[i % navAccents.length]
                          : "text-muted-foreground border-border/40 hover:border-border hover:text-foreground"
                      }`}
                    >
                      {a.name}
                    </Link>
                  ))}
                </div>

                {/* Micro label */}
                <span
                  className={`inline-block text-xs font-semibold tracking-widest uppercase ${c.badgeText} mb-3`}
                >
                  Laboratory Animal
                </span>

                {/* Animal name */}
                <RevealText>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground leading-tight mb-5">
                    {animal.name}
                  </h2>
                </RevealText>

                {/* Coloured accent bar */}
                <div
                  className={`w-14 h-[3px] rounded-full ${c.accentBar} mb-7`}
                />

                {/* Description */}
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-7">
                  {animal.shortDesc}
                </p>

                {/* Available strains chips */}
                <div className="mb-7">
                  <p
                    className={`text-xs font-semibold uppercase tracking-widest ${c.badgeText} mb-3`}
                  >
                    Available Strains
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {animal.strains.map((s) => (
                      <span
                        key={s.name}
                        className={`px-3 py-1.5 rounded-full text-sm font-semibold ${c.badgeBg} border ${c.badgeBorder} ${c.badgeText}`}
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2×2 feature mini-cards */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {featureCards.map((f) => (
                    <div
                      key={f.label}
                      className="glass-card p-4 flex items-start gap-3 hover-glow group transition-all duration-300"
                    >
                      <div
                        className={`w-9 h-9 rounded-lg ${c.iconBg} border ${c.badgeBorder} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <f.icon className={`w-4 h-4 ${c.iconColor}`} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground leading-tight">
                          {f.label}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {f.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3">
                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 px-7"
                    >
                      Inquire Now <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link to="/animal-supply">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-border hover:bg-secondary font-semibold gap-2 px-7"
                    >
                      <ArrowLeft className="w-4 h-4" /> All Animals
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* ── Right — hero image with floating badges ──────── */}
            <AnimatedSection direction="right">
              <div className="relative">
                {/* Ambient glow blob */}
                <div
                  className={`absolute -z-10 -bottom-10 -right-10 w-72 h-72 rounded-full blur-3xl ${c.glow}`}
                />

                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <ParallaxImage
                    src={animal.heroImage}
                    alt={animal.name}
                    containerClassName="w-full h-full"
                    className="transition-transform duration-700 group-hover:scale-105"
                    speed={0.1}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/30 pointer-events-none" />


                  {/* Bottom label strip */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                    <div>
                      <span
                        className={`text-xs font-semibold uppercase tracking-widest ${c.badgeText} opacity-80`}
                      >
                        Laboratory Animal
                      </span>
                      <p className="text-xl font-bold font-display text-foreground mt-0.5">
                        {animal.name}
                      </p>
                    </div>
                    {/* Icon bubble */}
                    <div
                      className={`w-11 h-11 rounded-xl ${c.iconBg} border ${c.badgeBorder} backdrop-blur-md flex items-center justify-center shadow-lg`}
                    >
                      <AnimalIcon className={`w-5 h-5 ${c.iconColor}`} />
                    </div>
                  </div>
                </div>

                {/* Strain-count badge — bottom right floating */}
                <div className="absolute -bottom-5 -right-5 glass-card glow-border p-4 rounded-xl shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-full ${c.iconBg} border ${c.badgeBorder} flex items-center justify-center shrink-0`}
                    >
                      <AnimalIcon className={`w-5 h-5 ${c.iconColor}`} />
                    </div>
                    <div>
                      <p
                        className={`text-sm font-bold font-display ${c.badgeText} leading-tight`}
                      >
                        {animal.strains.length}{" "}
                        {animal.strains.length === 1 ? "Strain" : "Strains"}
                      </p>
                      <p className="text-xs text-muted-foreground">Available</p>
                    </div>
                  </div>
                </div>

                {/* CPCSEA badge — top left floating */}
                <div className="absolute -top-4 -left-4 glass-card p-3 rounded-xl border border-primary/20 shadow-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-foreground">
                      CPCSEA Approved
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">In-House Bred</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card/20 relative overflow-hidden">
        <FloatingText text={animal.name.toUpperCase()} className="top-1/4" direction={-1} />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            label={`${animal.name} · Available Strains`}
            title={
              <RevealText>
                <span>Strain Details</span>
              </RevealText>
            }
            description={`In-depth information on each ${animal.name.toLowerCase()} strain bred at our CPCSEA-approved facility — characteristics, descriptions, and key study applications.`}
          />

          <div className="space-y-28 md:space-y-36 mt-4">
            {animal.strains.map((strain, i) => {
              const sc = strainPalette[i % strainPalette.length];
              const isEven = i % 2 === 0;

              return (
                <div
                  key={strain.name}
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
                        className={`absolute -z-10 w-80 h-80 rounded-full blur-3xl opacity-60 ${sc.glow} ${
                          isEven
                            ? "-bottom-12 -left-12"
                            : "-bottom-12 -right-12"
                        }`}
                      />

                      {/* Strain image */}
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-2xl">
                        <ParallaxImage
                          src={strain.image}
                          alt={strain.name}
                          containerClassName="w-full h-full"
                          className="transition-transform duration-700 group-hover:scale-105"
                          speed={0.05}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/15 to-transparent pointer-events-none" />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 group-hover:ring-white/10 transition-all duration-300 pointer-events-none" />

                        {/* Bottom label strip */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                          <div>
                            <span
                              className={`text-xs font-semibold uppercase tracking-widest ${sc.badgeText} opacity-80`}
                            >
                              {animal.name} · Strain
                            </span>
                            <p className="text-xl font-bold font-display text-foreground mt-0.5">
                              {strain.name}
                            </p>
                          </div>
                          {/* Strain index bubble */}
                          <div
                            className={`w-11 h-11 rounded-xl ${sc.iconBg} border ${sc.badgeBorder} backdrop-blur-md flex items-center justify-center shadow-lg`}
                          >
                            <span
                              className={`text-sm font-black font-display ${sc.badgeText}`}
                            >
                              S{i + 1}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Floating "In-House Bred" badge */}
                      <div
                        className={`absolute -top-4 ${
                          isEven ? "-right-4" : "-left-4"
                        } glass-card ${sc.badgeBg} border ${sc.badgeBorder} px-4 py-2.5 rounded-xl shadow-xl`}
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className={`w-4 h-4 ${sc.iconColor}`} />
                          <span
                            className={`text-xs font-semibold ${sc.badgeText}`}
                          >
                            In-House Bred
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
                        className={`inline-block text-xs font-semibold tracking-widest uppercase ${sc.badgeText} mb-3`}
                      >
                        {animal.name} · Strain {i + 1}
                      </span>

                      {/* Strain name */}
                      <RevealText>
                        <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground leading-tight mb-5">
                          {strain.name}
                        </h2>
                      </RevealText>

                      {/* Coloured accent bar */}
                      <div
                        className={`w-14 h-[3px] rounded-full ${sc.accentBar} mb-7`}
                      />

                      {/* Description */}
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                        {strain.description}
                      </p>

                      {/* Best study model — glass card */}
                      <div
                        className={`glass-card p-6 rounded-2xl border ${sc.badgeBorder}`}
                      >
                        <p
                          className={`text-xs font-semibold uppercase tracking-widest ${sc.badgeText} mb-5`}
                        >
                          Best Study Model For
                        </p>
                        <ul className="space-y-3.5">
                          {strain.bestStudyModel.map((item) => (
                            <li key={item} className="flex items-start gap-3.5">
                              <div
                                className={`w-6 h-6 rounded-full ${sc.iconBg} border ${sc.badgeBorder} flex items-center justify-center shrink-0 mt-0.5`}
                              >
                                <CheckCircle2
                                  className={`w-3.5 h-3.5 ${sc.iconColor}`}
                                />
                              </div>
                              <span className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AnimatedSection>
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
              {/* Colour wash */}
              <div
                className={`absolute inset-0 ${c.gradient} pointer-events-none`}
              />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-primary/8 blur-3xl rounded-full pointer-events-none" />

              <div className="relative z-10">
                <span
                  className={`inline-block text-xs font-semibold tracking-widest uppercase ${c.badgeText} mb-4`}
                >
                  Animal Procurement
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4 leading-tight">
                  Need <span className="gradient-text">{animal.name}</span> for
                  Your Study?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed text-lg">
                  Contact us for availability, pricing, and customised breeding
                  requirements tailored to your specific study protocol.
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
                  <Link to="/animal-supply">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-border text-foreground hover:bg-secondary font-semibold px-8 text-base gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" /> All Animals
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
};

export default AnimalDetail;
