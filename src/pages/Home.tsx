import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Microscope, ShieldCheck, Leaf, TestTube, Stethoscope, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import heroImg from "@/assets/hero-lab.jpg";
import aboutImg from "@/assets/about-lab.jpg";

const stats = [
  { value: "2018", label: "Established" },
  { value: "500+", label: "Projects Completed" },
  { value: "50+", label: "Team Members" },
  { value: "6+", label: "Certifications" },
];

const services = [
  { icon: Leaf, title: "Agrochemical", desc: "Testing as per regulatory guidelines for agrochemical products." },
  { icon: ShieldCheck, title: "Biocompatibility Testing", desc: "Medical device testing per ISO 10993 standards." },
  { icon: TestTube, title: "Toxicology", desc: "Comprehensive toxicology testing following OECD & FDA guidelines." },
  { icon: FlaskConical, title: "Research Projects", desc: "Custom preclinical research and study design." },
  { icon: Stethoscope, title: "Histopathology", desc: "Clinical and histopathology analysis services." },
  { icon: Bug, title: "Microbiology", desc: "Microbiology testing and analysis services." },
];

const certifications = ["NABL", "CPCSEA", "IAS", "ILAC", "MSME", "IEC"];

const Home = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Cryst Bio Laboratory" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              <FlaskConical className="w-4 h-4" /> India's Leading Research Organization
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-display leading-tight"
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
            Delivering highest quality toxicology testing and preclinical research services with quick turnaround time, in accordance with international standards.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link to="/services">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">
                Our Services <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary font-semibold">
                Contact Us
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
            </div>
          </AnimatedSection>
          <div>
            <AnimatedSection direction="right">
              <span className="text-sm font-medium tracking-widest uppercase text-primary">Who We Are</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold font-display text-foreground">
                Cryst Bio Solutions
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Welcome to Cryst Bio Solutions Pvt. Ltd., a rapidly emerging Preclinical Contract Research Organization (CRO) and laboratory animal breeder based in Pune, Maharashtra. With a strong presence in the global market, we extend our expertise through consultation offices in Europe and the USA.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Founded in 2018, our core services include Toxicology Testing and Preclinical Research in compliance with international regulatory guidelines such as ISO 10993, OECD, FDA, ASTM, and USP.
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

    {/* Services */}
    <section className="section-padding bg-card/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Our Services"
          title="Comprehensive Research Solutions"
          description="We provide a full range of preclinical research and testing services to pharmaceutical, cosmetics, medical device, and biotechnology industries."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <div className="glass-card p-6 h-full hover-glow group transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications banner */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeader label="Trusted & Certified" title="Our Certifications" />
        <div className="flex flex-wrap justify-center gap-6">
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
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">
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
