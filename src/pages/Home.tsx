import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, ShieldCheck, Leaf, TestTube, Stethoscope, Bug, ChevronRight } from "lucide-react";
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
  { value: "2018", label: "Established" },
  { value: "500+", label: "Projects Completed" },
  { value: "50+", label: "Team Members" },
  { value: "6+", label: "Certifications" },
];

const services = [
  { icon: Leaf, title: "Agrochemical Testing", desc: "Regulatory-compliant testing for agrochemical products including acute toxicity and environmental assessment.", img: serviceAgrochem },
  { icon: ShieldCheck, title: "Biocompatibility", desc: "Medical device testing per ISO 10993 — cytotoxicity, sensitization, irritation & implantation.", img: serviceBiocompat },
  { icon: TestTube, title: "Toxicology", desc: "Full-spectrum toxicology following OECD & FDA guidelines for acute, chronic & genotoxicity studies.", img: serviceToxicology },
  { icon: FlaskConical, title: "Research Projects", desc: "Custom preclinical research — study design, protocol development & regulatory submission support.", img: serviceResearch },
  { icon: Stethoscope, title: "Histopathology", desc: "Expert tissue processing, microscopic examination, clinical chemistry & hematology analysis.", img: serviceHistopath },
  { icon: Bug, title: "Microbiology", desc: "Sterility, endotoxin, antimicrobial effectiveness & environmental monitoring services.", img: serviceMicro },
];

const certifications = ["NABL", "CPCSEA", "IAS", "ILAC", "MSME", "IEC"];

const whyUs = [
  { title: "Quick Turnaround", desc: "Industry-leading turnaround times without compromising quality." },
  { title: "Global Standards", desc: "Compliant with ISO, OECD, FDA, ASTM & USP guidelines." },
  { title: "Expert Team", desc: "50+ qualified scientists and researchers with deep domain expertise." },
  { title: "End-to-End", desc: "From study design to regulatory submission — we handle it all." },
];

const Home = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Cryst Bio Laboratory" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              <FlaskConical className="w-4 h-4" /> India's Leading CRO
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-display leading-[1.1]"
          >
            Advancing{" "}
            <span className="gradient-text">Preclinical</span>{" "}
            Research Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
          >
            Highest quality toxicology testing & preclinical research with quick turnaround, in accordance with international standards.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link to="/services">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 text-base px-8">
                Explore Services <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary font-semibold text-base px-8">
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="relative z-10 -mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1}>
              <div className="glass-card p-6 text-center hover-glow">
                <div className="text-3xl md:text-4xl font-bold font-display gradient-text">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* About */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              <img src={aboutImg} alt="About Cryst Bio" className="rounded-xl w-full object-cover aspect-[4/3]" />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-border/30" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl bg-primary/10 border border-primary/20 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold font-display gradient-text">7+</span>
                <span className="text-xs text-muted-foreground">Years</span>
              </div>
            </div>
          </AnimatedSection>
          <div>
            <AnimatedSection direction="right">
              <span className="text-sm font-medium tracking-widest uppercase text-primary">Who We Are</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold font-display text-foreground">
                Cryst Bio Solutions
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                A rapidly emerging Preclinical Contract Research Organization (CRO) and laboratory animal breeder based in Pune, Maharashtra — with consultation offices in Europe and the USA.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Founded in 2018, our core services include Toxicology Testing and Preclinical Research in compliance with ISO 10993, OECD, FDA, ASTM, and USP.
              </p>
              <Link to="/about" className="inline-block mt-6">
                <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>

    {/* Services — image cards */}
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
              <div className="glass-card overflow-hidden h-full hover-glow group transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-1 text-sm text-primary mt-3 group-hover:gap-2 transition-all">
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeader label="Why Cryst Bio" title="Why Partner With Us" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold font-display gradient-text">0{i + 1}</span>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications banner */}
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-8">
            <span className="text-sm font-medium tracking-widest uppercase text-primary">Trusted & Certified</span>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold font-display text-foreground">Our Certifications</h2>
          </div>
        </AnimatedSection>
        <div className="flex flex-wrap justify-center gap-4">
          {certifications.map((c, i) => (
            <AnimatedSection key={c} delay={i * 0.05}>
              <div className="glass-card px-8 py-4 text-center hover-glow">
                <span className="text-lg font-display font-bold text-primary">{c}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="relative rounded-2xl overflow-hidden p-12 md:p-16 text-center glass-card glow-border">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
                Let's Grow Together
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Partner with us for reliable, high-quality preclinical research solutions designed to meet global regulatory standards.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 px-8">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Home;
