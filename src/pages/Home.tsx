import { Link, useNavigate } from "react-router-dom";
import { SpecialText } from "@/components/ui/special-text";
import {
  ArrowRight,
  FlaskConical,
  ShieldCheck,
  Leaf,
  TestTube,
  Stethoscope,
  Bug,
  ChevronRight,
  Award,
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  TrendingUp,
  Microscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedMarqueeHero } from "@/components/ui/hero-3";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import WhyPartner from "@/components/WhyPartner";
import CertLogoSlider from "@/components/CertLogoSlider";
import ParallaxImage from "@/components/ParallaxImage";
import RevealText from "@/components/RevealText";
import FloatingText from "@/components/FloatingText";
import ScaleOnScroll from "@/components/ScaleOnScroll";
import ScrollRevealText from "@/components/ScrollRevealText";
import PinnedCounter from "@/components/PinnedCounter";
import MagneticElement from "@/components/MagneticElement";
import heroImg from "@/assets/hero-lab.jpg";
import aboutImg from "@/assets/about-lab.jpg";
import facilitiesImg from "@/assets/facilities.jpg";
import animalFacilityImg from "@/assets/animal-facility.jpg";
import serviceAgrochem from "@/assets/service-agrochem.jpg";
import serviceBiocompat from "@/assets/service-biocompat.jpg";
import serviceToxicology from "@/assets/service-toxicology.jpg";
import serviceResearch from "@/assets/service-research.jpg";
import serviceHistopath from "@/assets/service-histopath.jpg";
import serviceMicro from "@/assets/service-micro.jpg";
import strainWistar from "@/assets/strain-wistar.jpg";
import strainSprague from "@/assets/strain-sprague-dawley.jpg";
import strainSwiss from "@/assets/strain-swiss-albino.jpg";
import strainRabbit from "@/assets/strain-nzw-rabbit.jpg";

const counterItems = [
  { value: 2018, label: "Established" },
  { value: 500, suffix: "+", label: "Projects" },
  { value: 50, suffix: "+", label: "Scientists" },
  { value: 6, suffix: "+", label: "Certifications" },
];

const services = [
  {
    icon: Leaf,
    title: "Agrochemical Testing",
    floating: "AGROCHEM",
    desc: "Regulatory-compliant testing including acute toxicity, sub-chronic, and environmental assessment per OECD guidelines.",
    img: serviceAgrochem,
    tag: "OECD Guidelines",
    slug: "agrochemical-testing",
    features: [
      "Acute & sub-chronic studies",
      "OECD 401/402/403 compliant",
      "Environmental impact assessment",
      "Regulatory-ready reports",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Biocompatibility Testing",
    floating: "BIOCOMPAT",
    desc: "Medical device testing per ISO 10993 — cytotoxicity, sensitization, irritation & implantation studies for global regulatory acceptance.",
    img: serviceBiocompat,
    tag: "ISO 10993",
    slug: "biocompatibility-testing",
    features: [
      "Cytotoxicity evaluation",
      "Sensitization & irritation",
      "Implantation studies",
      "ISO 10993 compliant",
    ],
  },
  {
    icon: TestTube,
    title: "Toxicology",
    floating: "TOXICOLOGY",
    desc: "Full-spectrum toxicology following OECD & ICH guidelines for acute, chronic & genotoxicity studies.",
    img: serviceToxicology,
    tag: "OECD / ICH",
    slug: "toxicology-studies",
    features: [],
  },
  {
    icon: FlaskConical,
    title: "Research Projects",
    floating: "RESEARCH",
    desc: "Custom preclinical research — study design, protocol development & regulatory submission support.",
    img: serviceResearch,
    tag: "Custom Studies",
    slug: "research-projects",
    features: [],
  },
  {
    icon: Stethoscope,
    title: "Histopathology",
    floating: "HISTOPATH",
    desc: "Expert tissue processing, microscopic examination, clinical chemistry & hematology analysis.",
    img: serviceHistopath,
    tag: "GLP Compliant",
    slug: "histopathology",
    features: [],
  },
  {
    icon: Bug,
    title: "Microbiology",
    floating: "MICROBIO",
    desc: "Sterility, endotoxin, antimicrobial effectiveness & environmental monitoring services.",
    img: serviceMicro,
    tag: "GLP / USP",
    slug: "microbiology",
    features: [],
  },
];

const processSteps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Consultation",
    desc: "Connect with Cryst Bio Solutions Pvt. Ltd. scientific team to discuss your research needs and regulatory requirements.",
  },
  {
    num: "02",
    icon: FileCheck2,
    title: "Study Design",
    desc: "Tailored protocol development aligned with OECD, ICH, GLP & global standards for international regulatory acceptance.",
  },
  {
    num: "03",
    icon: Microscope,
    title: "Execution",
    desc: "Rigorous study execution in our NABL-accredited and IAS-accredited facilities under CCSEA-approved conditions.",
  },
  {
    num: "04",
    icon: TrendingUp,
    title: "Reporting",
    desc: "Comprehensive data analysis and regulatory-ready reports delivered on time for national and international submission.",
  },
];

const aboutFeatures = [
  "NABL Accredited Laboratory",
  "CCSEA Registered Animal Facility",
  "ISO 10993 Biocompatibility Studies",
  "OECD & CDSCO Compliant Protocols",
  "IAS Accredited",
  "Global CRO",
];

const HERO_MARQUEE_IMAGES = [
  heroImg,
  serviceAgrochem,
  serviceBiocompat,
  facilitiesImg,
  serviceToxicology,
  strainWistar,
  serviceResearch,
  animalFacilityImg,
  serviceHistopath,
  strainSprague,
  serviceMicro,
  strainSwiss,
  aboutImg,
  strainRabbit,
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden">
      {/* ─── Hero with Scale-on-Scroll ──────────────────────── */}
      <ScaleOnScroll from={1} to={0.92} start="top top" end="bottom top">
        <AnimatedMarqueeHero
          tagline="India's Leading Preclinical CRO"
          title={
            <>
              <SpecialText speed={16} delay={0.2}>
                Advancing
              </SpecialText>{" "}
              <SpecialText speed={16} delay={0.5} className="gradient-text">
                Preclinical
              </SpecialText>
              <br />
              <SpecialText speed={16} delay={0.9}>
                Research Excellence
              </SpecialText>
            </>
          }
          description="Highest-quality preclinical research and testing with rapid turnaround, in full compliance with national & international standards."
          ctaText="Explore Services"
          images={HERO_MARQUEE_IMAGES}
          onCtaClick={() => navigate("/services")}
        />
      </ScaleOnScroll>

      {/* ─── Animated Counter Strip ───────────────────────────── */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <PinnedCounter items={counterItems} />
        </div>
      </section>

      {/* ─── About with Image Reveal ──────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <FloatingText text="PRECLINICAL" className="top-1/4" direction={1} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side — clip-path reveal */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-xl" />
              <img
                src={aboutImg}
                alt="About Cryst Bio Solutions Pvt. Ltd."
                className="rounded-2xl w-full aspect-[4/3] object-cover ring-1 ring-border/50 shadow-2xl"
              />
              {/* Bottom-right badge */}
              <AnimatedSection delay={0.4}>
                <div className="absolute -bottom-5 -right-5 glass-card px-6 py-4 flex flex-col items-center glow-border shadow-xl z-20">
                  <span className="text-3xl font-bold font-display gradient-text">7+</span>
                  <span className="text-xs text-muted-foreground mt-0.5 whitespace-nowrap">
                    Years of Excellence
                  </span>
                </div>
              </AnimatedSection>
              {/* Top-left icon badge */}
              <AnimatedSection delay={0.3}>
                <div className="absolute -top-5 -left-5 w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 backdrop-blur-sm flex flex-col items-center justify-center gap-1 z-20">
                  <Award className="w-8 h-8 text-primary" />
                  <span className="text-[10px] text-primary font-semibold tracking-wide">NABL</span>
                </div>
              </AnimatedSection>
            </div>

            {/* Text side — character reveal */}
            <div>
              <AnimatedSection>
                <span className="text-sm font-medium tracking-widest uppercase text-primary">
                  Who We Are
                </span>
              </AnimatedSection>
              
              <ScrollRevealText
                tag="h2"
                className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight"
              >
                Cryst Bio Solutions Pvt. Ltd.
              </ScrollRevealText>

              <AnimatedSection delay={0.2}>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  A rapidly emerging Preclinical Contract Research Organization
                  (CRO) and laboratory animal breeder based in Pune, Maharashtra —
                  with consultation offices across Europe.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Founded in 2018, providing comprehensive preclinical research
                  and testing services nationally & internationally, in compliance
                  with OECD, CDSCO, GLP, and international standards.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <ul className="mt-7 space-y-3">
                  {aboutFeatures.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-sm text-foreground/85">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={0.5}>
                <Link to="/about" className="inline-block mt-9">
                  <MagneticElement strength={0.2}>
                    <Button
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary/10 gap-2"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Button>
                  </MagneticElement>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services — WhyPartner-style alternating ────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            label="Our Services"
            title={
              <ScrollRevealText
                tag="span"
                className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground"
              >
                Comprehensive Research Solutions
              </ScrollRevealText>
            }
            description="Full range of preclinical research and testing for pharmaceutical, cosmetics, medical device, and biotech industries."
          />
        </div>

        <div className="space-y-24 md:space-y-32 mt-16">
          {services.slice(0, 2).map((s, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={s.title} className="relative min-h-[400px] flex items-center">
                <FloatingText
                  text={s.floating}
                  className="top-1/2 -translate-y-1/2"
                  direction={isEven ? 1 : -1}
                />
                <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  {/* Image Side */}
                  <AnimatedSection
                    direction={isEven ? "left" : "right"}
                    className={isEven ? "" : "lg:order-2"}
                  >
                    <div className="relative group">
                      <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border/50">
                        <ParallaxImage
                          src={s.img}
                          alt={s.title}
                          containerClassName="w-full aspect-[4/3]"
                          className="transition-transform duration-1000 group-hover:scale-110"
                          speed={0.12}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-4 right-4 z-10">
                          <span className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md bg-primary/20 border-primary/40 text-primary">
                            {s.tag}
                          </span>
                        </div>
                      </div>
                      <div className="absolute -bottom-6 left-8 w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center shadow-2xl z-20 transition-transform duration-500 group-hover:-translate-y-3">
                        <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                        <s.icon className="w-8 h-8 text-primary relative z-10" />
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* Content Side */}
                  <AnimatedSection
                    direction={isEven ? "right" : "left"}
                    className={isEven ? "" : "lg:order-1"}
                  >
                    <div className="relative space-y-6">
                      <div>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/80 mb-3 block">
                          {String(i + 1).padStart(2, "0")} — Service
                        </span>
                        <RevealText>
                          <h3 className="text-3xl md:text-4xl font-bold font-display text-foreground leading-tight">
                            {s.title}
                          </h3>
                        </RevealText>
                        <div className="w-12 h-1 bg-primary/30 mt-4 rounded-full" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-lg max-w-xl">
                        {s.desc}
                      </p>
                      {s.features.length > 0 && (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-2">
                          {s.features.map((f) => (
                            <li key={f} className="flex items-center gap-3 text-sm text-foreground/70">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      )}
                      <Link
                        to={`/services/${s.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-foreground bg-primary/10 hover:bg-primary/20 border border-primary/20 px-5 py-2.5 rounded-lg transition-all duration-300"
                      >
                        Learn More <ChevronRight className="w-4 h-4 text-primary" />
                      </Link>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="container mx-auto px-4 mt-20 text-center">
          <Link to="/services">
            <MagneticElement strength={0.3}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 px-10 shadow-[0_0_28px_-4px_hsl(var(--primary)/0.5)]"
              >
                View All Services <ArrowRight className="w-4 h-4" />
              </Button>
            </MagneticElement>
          </Link>
        </div>
      </section>

      {/* ─── Process Steps ────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden bg-card/30">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <AnimatedSection>
              <span className="text-sm font-medium tracking-widest uppercase text-primary">
                How It Works
              </span>
            </AnimatedSection>
            <ScrollRevealText
              tag="h2"
              className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground"
            >
              Our Streamlined Process
            </ScrollRevealText>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.15}>
                <div className="relative glass-card p-8 hover-glow group text-center h-full">
                  {/* Large background number */}
                  <span className="absolute top-4 right-6 text-7xl font-bold font-display text-primary/5 select-none group-hover:text-primary/10 transition-colors duration-500">
                    {step.num}
                  </span>

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Connector line (not on last) */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Partner — Full parallax section ──────────────── */}
      <section className="section-padding relative overflow-hidden">
        <FloatingText text="PARTNER" className="top-10" direction={1} />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            label="Why Cryst Bio"
            title={
              <ScrollRevealText
                tag="span"
                className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground"
              >
                Why Partner With Us
              </ScrollRevealText>
            }
          />
          <WhyPartner />
        </div>
      </section>

      {/* ─── Facilities Showcase — Parallax Image Reveal ──────── */}
      <section className="relative overflow-hidden">
        <div className="h-[70vh] md:h-[80vh] relative">
          <ParallaxImage
            src={facilitiesImg}
            alt="World-class research facilities"
            containerClassName="w-full h-full"
            speed={0.3}
          />
          {/* Dark overlay with text */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex items-end">
            <div className="container mx-auto px-4 pb-16 md:pb-24">
              <div className="max-w-2xl">
                <ScrollRevealText
                  tag="h2"
                  className="text-3xl md:text-5xl font-bold font-display text-foreground mb-4"
                >
                  World-Class Facilities
                </ScrollRevealText>
                <AnimatedSection delay={0.3}>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    Our state-of-the-art laboratory and CCSEA-registered animal facility
                    provide the foundation for reliable, reproducible research results.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.5}>
                  <Link to="/facilities">
                    <MagneticElement strength={0.2}>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10 gap-2"
                      >
                        Explore Facilities <ArrowRight className="w-4 h-4" />
                      </Button>
                    </MagneticElement>
                  </Link>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Certifications ───────────────────────────────────── */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-sm font-medium tracking-widest uppercase text-primary">
                Trusted & Certified
              </span>
              <ScrollRevealText
                tag="h2"
                className="mt-3 text-3xl md:text-4xl font-bold font-display text-foreground"
              >
                Our Certifications
              </ScrollRevealText>
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/8 pointer-events-none" />
              <div className="absolute -top-28 -left-28 w-80 h-80 rounded-full bg-primary/6 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-28 -right-28 w-80 h-80 rounded-full bg-primary/6 blur-3xl pointer-events-none" />
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

                <ScrollRevealText
                  tag="h2"
                  className="text-3xl md:text-5xl font-bold font-display text-foreground mb-5"
                >
                  Let's Grow Together
                </ScrollRevealText>
                <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg leading-relaxed">
                  Partner with us for reliable, high-quality preclinical
                  research solutions designed to meet global regulatory standards.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/contact">
                    <MagneticElement strength={0.2}>
                      <Button
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 px-10 shadow-[0_0_28px_-4px_hsl(var(--primary)/0.5)]"
                      >
                        Contact Us <ArrowRight className="w-4 h-4" />
                      </Button>
                    </MagneticElement>
                  </Link>
                  <Link to="/services">
                    <MagneticElement strength={0.2}>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-border text-foreground hover:bg-secondary gap-2 px-8"
                      >
                        View Services <ChevronRight className="w-4 h-4" />
                      </Button>
                    </MagneticElement>
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

export default Home;
