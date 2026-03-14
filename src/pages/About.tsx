import {
  Target,
  Eye,
  Rocket,
  Award,
  Users,
  FlaskConical,
  Globe,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

import aboutImg from "@/assets/about-lab.jpg";
import facilitiesImg from "@/assets/facilities.jpg";
import animalFacilityImg from "@/assets/animal-facility.jpg";
import whyTeamImg from "@/assets/why-team.jpg";
import whyStandardsImg from "@/assets/why-standards.jpg";
import whyEndtoendImg from "@/assets/why-endtoend.jpg";
import whyTurnaroundImg from "@/assets/why-turnaround.jpg";

const stats = [
  { value: "2018", label: "Established", icon: Calendar },
  { value: "500+", label: "Projects Completed", icon: FlaskConical },
  { value: "50+", label: "Expert Team Members", icon: Users },
  { value: "6+", label: "Certifications", icon: Award },
];

const timeline = [
  {
    year: "2018",
    title: "Founded",
    desc: "Established as Crystal Biological Solutions, a proprietorship firm in Pune, Maharashtra, laying the foundation for preclinical research excellence.",
  },
  {
    year: "2020",
    title: "Expansion",
    desc: "Expanded testing capabilities, upgraded laboratory infrastructure, and onboarded new scientific talent to serve a growing client base.",
  },
  {
    year: "2022",
    title: "Incorporation",
    desc: "Evolved into Cryst Bio Solutions Pvt. Ltd., securing global partnerships and earning NABL accreditation under ISO/IEC 17025:2017.",
  },
  {
    year: "2024",
    title: "Global Reach",
    desc: "Consultation offices established in Europe and USA through marketing associates, cementing our position as a globally recognized CRO.",
  },
];

const values = [
  {
    icon: Target,
    title: "Objective",
    text: "To become one of the most trusted biocompatibility testing laboratories by providing consistent operation and prioritizing competency and impartiality.",
    gradient: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/10 border-primary/20",
  },
  {
    icon: Rocket,
    title: "Mission",
    text: "To drive excellence in preclinical research, toxicology, and biocompatibility testing by upholding the highest standards of quality, accuracy, and scientific integrity.",
    gradient: "from-sky-500/20 to-sky-500/5",
    iconBg: "bg-sky-500/10 border-sky-500/20",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "To be a global leader in preclinical research, toxicology, and biocompatibility testing, recognized for scientific excellence, ethical standards, and regulatory compliance.",
    gradient: "from-violet-500/20 to-violet-500/5",
    iconBg: "bg-violet-500/10 border-violet-500/20",
  },
];

const highlights = [
  {
    img: whyTeamImg,
    label: "Expert Team",
    desc: "Young, dynamic scientists committed to precision and accuracy in every study.",
  },
  {
    img: whyStandardsImg,
    label: "Global Standards",
    desc: "Full compliance with ISO 10993, OECD, FDA, ASTM, and USP guidelines.",
  },
  {
    img: whyEndtoendImg,
    label: "End-to-End CRO",
    desc: "Complete project management — from protocol design through final report delivery.",
  },
  {
    img: whyTurnaroundImg,
    label: "Fast Turnaround",
    desc: "Streamlined workflows that deliver reliable, high-quality results on time.",
  },
];

const badges = ["ISO 10993", "OECD", "FDA", "ASTM", "USP", "CPCSEA"];

const About = () => (
  <div>
    <PageHero
      title="About Us"
      subtitle="Learn about our journey, mission, and unwavering commitment to scientific excellence."
      breadcrumb="About Us"
    />

    {/* ── Company Intro ─────────────────────────────────────────── */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image with floating badges */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={aboutImg}
                  alt="Cryst Bio Laboratory"
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

              {/* Global presence badge — top left */}
              <div className="absolute -top-4 -left-4 glass-card p-3 rounded-xl border border-primary/20 shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-foreground">
                    Global Presence
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  India · Europe · USA
                </p>
              </div>

              {/* Decorative glow blob */}
              <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            </div>
          </AnimatedSection>

          {/* Right — text */}
          <AnimatedSection direction="right">
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-primary mb-3">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight mb-6">
              Cryst Bio Solutions{" "}
              <span className="gradient-text">Pvt. Ltd.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Welcome to Cryst Bio Solutions Pvt. Ltd., a rapidly emerging
                Preclinical Contract Research Organization (CRO) and laboratory
                animal breeder based in Pune, Maharashtra.
              </p>
              <p>
                Originally established in 2018 as Crystal Biological Solutions,
                we have since evolved into Cryst Bio Solutions Pvt. Ltd. Our
                core services include Toxicology Testing and Preclinical
                Research in compliance with international regulatory guidelines.
              </p>
              <p>
                Our young, dynamic, and knowledgeable team is dedicated to
                delivering high-precision test reports with fast turnaround
                times, excellent client support, and seamless project execution.
              </p>
            </div>

            {/* Compliance badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 border border-primary/20 text-primary"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              Pune, Maharashtra, India
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ── Stats ─────────────────────────────────────────────────── */}
    <section className="py-16 bg-card/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1}>
              <div className="glass-card p-6 text-center hover-glow group transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold font-display gradient-text">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ── Values ────────────────────────────────────────────────── */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Our Values"
          title="What Drives Us"
          description="Our mission, vision, and objective are the guiding principles that shape every study we conduct and every partnership we build."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.15}>
              <div className="glass-card p-8 h-full hover-glow group relative overflow-hidden cursor-default">
                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${v.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}
                />
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl ${v.iconBg} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <v.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {v.text}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ── Highlights image grid ─────────────────────────────────── */}
    <section className="section-padding bg-card/20">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Our Strengths"
          title="What Sets Us Apart"
          description="A combination of cutting-edge infrastructure, certified expertise, and unwavering scientific integrity."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((h, i) => (
            <AnimatedSection key={h.label} delay={i * 0.1}>
              <div className="glass-card overflow-hidden group hover-glow h-full">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={h.img}
                    alt={h.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  {/* Number badge */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">
                      0{i + 1}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-display font-semibold text-foreground text-lg mb-1">
                    {h.label}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ── Facilities Gallery ────────────────────────────────────── */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Our Facilities"
          title="State-of-the-Art Infrastructure"
          description="Our modern laboratories and CPCSEA-approved animal facilities are designed to meet international standards for preclinical research."
        />
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Large left image */}
          <AnimatedSection direction="left">
            <div className="relative rounded-2xl overflow-hidden h-72 md:h-full min-h-[340px] group">
              <img
                src={facilitiesImg}
                alt="Research Facilities"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/20" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs font-medium uppercase tracking-widest text-primary">
                  Research Laboratory
                </span>
                <h4 className="text-xl font-display font-bold text-foreground mt-1">
                  Modern Lab Infrastructure
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Equipped with advanced analytical instruments for precise,
                  reproducible results.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right stacked */}
          <div className="space-y-6 flex flex-col">
            <AnimatedSection direction="right" delay={0.1} className="flex-1">
              <div className="relative rounded-2xl overflow-hidden h-56 group flex-1">
                <img
                  src={animalFacilityImg}
                  alt="Animal Facility"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/20" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs font-medium uppercase tracking-widest text-primary">
                    CPCSEA Approved
                  </span>
                  <h4 className="text-lg font-display font-bold text-foreground mt-1">
                    Animal Facility
                  </h4>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="glass-card glow-border p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-2">
                      Compliance &amp; Accreditations
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Our facility holds NABL accreditation under ISO/IEC
                      17025:2017, CPCSEA registration, and MSME certification —
                      ensuring full alignment with the highest global regulatory
                      standards.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>

    {/* ── Timeline ──────────────────────────────────────────────── */}
    <section className="section-padding bg-card/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Our Journey"
          title="Company Timeline"
          description="From a proprietorship in Pune to a globally-recognized CRO — a story of passion, precision, and progress."
        />

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/70 via-primary/30 to-transparent" />

          <div className="space-y-6 md:space-y-8">
            {timeline.map((t, i) => (
              <AnimatedSection key={t.year} delay={i * 0.1}>
                <article
                  className={`relative pl-14 md:pl-0 ${
                    i % 2 === 0
                      ? "md:pr-[calc(50%+2.25rem)]"
                      : "md:pl-[calc(50%+2.25rem)]"
                  }`}
                >
                  <div className="absolute left-5 top-8 -translate-x-1/2 md:left-1/2">
                    <div className="w-10 h-10 rounded-full border border-primary/40 bg-card/95 backdrop-blur-sm flex items-center justify-center shadow-[0_0_18px_-4px_hsl(var(--primary)/0.6)]">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>
                  </div>

                  <div
                    className={`glass-card hover-glow p-6 md:p-7 rounded-2xl border border-border/60 transition-all duration-300 ${
                      i % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        i % 2 === 0
                          ? "md:justify-end md:flex-row-reverse"
                          : "md:justify-start"
                      }`}
                    >
                      <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-primary/15 text-primary border border-primary/25">
                        Milestone
                      </span>
                      <span className="text-4xl md:text-5xl font-black font-display gradient-text leading-none">
                        {t.year}
                      </span>
                    </div>
                    <h4 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2">
                      {t.title}
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
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
                Work With Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4 leading-tight">
                Ready to Start Your{" "}
                <span className="gradient-text">Research?</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed text-lg">
                Partner with Cryst Bio Solutions for reliable, high-quality
                preclinical research solutions designed to meet global
                regulatory standards.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 px-8 text-base"
                  >
                    Get In Touch <ArrowRight className="w-4 h-4" />
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

export default About;
