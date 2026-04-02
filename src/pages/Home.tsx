import { Link, useNavigate } from "react-router-dom";
import { SpecialText } from "@/components/ui/special-text";
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
import ImageReveal from "@/components/ImageReveal";
import PinnedCounter from "@/components/PinnedCounter";
import HorizontalScroll from "@/components/HorizontalScroll";
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
    desc: "Regulatory-compliant testing for agrochemical products including acute toxicity and environmental assessment.",
    img: serviceAgrochem,
    tag: "OECD Guidelines",
    slug: "agrochemical-testing",
  },
  {
    icon: ShieldCheck,
    title: "Biocompatibility",
    desc: "Medical device testing per ISO 10993 — cytotoxicity, sensitization, irritation & implantation.",
    img: serviceBiocompat,
    tag: "ISO 10993",
    slug: "biocompatibility-testing",
  },
  {
    icon: TestTube,
    title: "Toxicology",
    desc: "Full-spectrum toxicology following OECD & FDA guidelines for acute, chronic & genotoxicity studies.",
    img: serviceToxicology,
    tag: "FDA / OECD",
    slug: "toxicology-studies",
  },
  {
    icon: FlaskConical,
    title: "Research Projects",
    desc: "Custom preclinical research — study design, protocol development & regulatory submission support.",
    img: serviceResearch,
    tag: "Custom Studies",
    slug: "research-projects",
  },
  {
    icon: Stethoscope,
    title: "Histopathology",
    desc: "Expert tissue processing, microscopic examination, clinical chemistry & hematology analysis.",
    img: serviceHistopath,
    tag: "GLP Compliant",
    slug: "histopathology",
  },
  {
    icon: Bug,
    title: "Microbiology",
    desc: "Sterility, endotoxin, antimicrobial effectiveness & environmental monitoring services.",
    img: serviceMicro,
    tag: "ISO / USP",
    slug: "microbiology",
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
          description="Highest-quality toxicology testing & preclinical research with rapid turnaround, in full compliance with international standards."
          ctaText="Explore Services"
          images={HERO_MARQUEE_IMAGES}
          onCtaClick={() => navigate("/services")}
        />
      </ScaleOnScroll>

      {/* ─── Animated Counter Strip ───────────────────────────── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
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
              <ImageReveal
                src={aboutImg}
                alt="About Cryst Bio"
                containerClassName="rounded-2xl w-full aspect-[4/3] ring-1 ring-border/50 shadow-2xl"
                direction="left"
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
                Cryst Bio Solutions
              </ScrollRevealText>

              <AnimatedSection delay={0.2}>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  A rapidly emerging Preclinical Contract Research Organization
                  (CRO) and laboratory animal breeder based in Pune, Maharashtra —
                  with consultation offices in Europe and the USA.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Founded in 2018, our core services include Toxicology Testing
                  and Preclinical Research in compliance with ISO 10993, OECD,
                  FDA, ASTM, and USP.
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

      {/* ─── Services — Horizontal Scroll ─────────────────────── */}
      <section className="relative overflow-hidden">
        <FloatingText text="EXCELLENCE" className="top-1/3" direction={-1} />
        <div className="relative z-10">
          {/* Section header pinned above */}
          <div className="container mx-auto px-4 pt-20 md:pt-28 pb-12">
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

          {/* Horizontal scroll track */}
          <HorizontalScroll className="min-h-[90vh] pl-8 md:pl-20">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] h-[70vh] relative group"
              >
                <div className="glass-card overflow-hidden h-full hover-glow flex flex-col transition-all duration-500">
                  {/* Image with parallax */}
                  <div className="relative h-[55%] overflow-hidden flex-shrink-0">
                    <ImageReveal
                      src={s.img}
                      alt={s.title}
                      containerClassName="w-full h-full"
                      direction={i % 2 === 0 ? "left" : "up"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent pointer-events-none" />
                    
                    {/* Tag */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md bg-primary/20 border-primary/40 text-primary">
                        {s.tag}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-4 left-5 z-10">
                      <div className="w-14 h-14 rounded-xl border backdrop-blur-md flex items-center justify-center bg-primary/20 border-primary/40">
                        <s.icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {s.desc}
                    </p>
                    <Link
                      to={`/services/${s.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium mt-5 text-primary group-hover:gap-3 transition-all"
                    >
                      Know more <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA card at end */}
            <div className="flex-shrink-0 w-[85vw] md:w-[35vw] h-[70vh] flex items-center justify-center">
              <div className="text-center space-y-6 p-12">
                <ScrollRevealText
                  tag="h3"
                  className="text-3xl md:text-4xl font-bold font-display text-foreground"
                >
                  See All Services
                </ScrollRevealText>
                <Link to="/services">
                  <MagneticElement strength={0.3}>
                    <Button
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 px-10 shadow-[0_0_28px_-4px_hsl(var(--primary)/0.5)]"
                    >
                      View All <ArrowRight className="w-4 h-4" />
                    </Button>
                  </MagneticElement>
                </Link>
              </div>
            </div>
          </HorizontalScroll>
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
                    Our state-of-the-art laboratories and CPCSEA-certified animal facility
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
      <section className="py-24 relative overflow-hidden">
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
