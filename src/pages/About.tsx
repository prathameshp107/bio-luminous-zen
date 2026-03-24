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
  ShieldCheck,
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

import aboutImg from "@/assets/about-lab.jpg";
import facilitiesImg from "@/assets/facilities.jpg";
import animalFacilityImg from "@/assets/animal-facility.jpg";
import whyTeamImg from "@/assets/why-team.jpg";
import whyStandardsImg from "@/assets/why-standards.jpg";
import whyEndtoendImg from "@/assets/why-endtoend.jpg";
import whyTurnaroundImg from "@/assets/why-turnaround.jpg";
import valObjectiveImg from "@/assets/sub-res-regulatory.jpg";
import valMissionImg from "@/assets/sub-tox-safety-pharm.jpg";
import valVisionImg from "@/assets/sub-res-study-design.jpg";

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
    label: "Our Objective",
    title: "Objective",
    text: "To become one of the most trusted biocompatibility testing laboratories by providing consistent operation and prioritizing competency and impartiality.",
    keyPoints: [
      "Competency-first scientific approach in every study",
      "Transparent and impartial laboratory operations",
      "Consistent, reproducible, and reliable results",
    ],
    iconBg: "bg-primary/10 border-primary/20",
    iconColor: "text-primary",
    accentBar: "bg-primary",
    badge: "Trusted Partner",
    badgeBorder: "border-primary/30",
    badgeBg: "bg-primary/10",
    badgeText: "text-primary",
    glow: "bg-primary/6",
    img: valObjectiveImg,
  },
  {
    icon: Rocket,
    label: "Our Mission",
    title: "Mission",
    text: "To drive excellence in preclinical research, toxicology, and biocompatibility testing by upholding the highest standards of quality, accuracy, and scientific integrity.",
    keyPoints: [
      "ISO 10993, OECD & FDA compliant testing protocols",
      "Highest accuracy reports with fast turnaround",
      "Uncompromising scientific integrity in every project",
    ],
    iconBg: "bg-sky-500/10 border-sky-500/25",
    iconColor: "text-sky-400",
    accentBar: "bg-sky-500",
    badge: "Excellence Driven",
    badgeBorder: "border-sky-500/30",
    badgeBg: "bg-sky-500/10",
    badgeText: "text-sky-400",
    glow: "bg-sky-500/6",
    img: valMissionImg,
  },
  {
    icon: Eye,
    label: "Our Vision",
    title: "Vision",
    text: "To be a global leader in preclinical research, toxicology, and biocompatibility testing, recognized for scientific excellence, ethical standards, and regulatory compliance.",
    keyPoints: [
      "Globally recognized CRO with offices in India, Europe & USA",
      "Benchmark-setting standards in regulatory compliance",
      "Long-term partnerships built on trust and precision",
    ],
    iconBg: "bg-violet-500/10 border-violet-500/25",
    iconColor: "text-violet-400",
    accentBar: "bg-violet-500",
    badge: "Global Leader",
    badgeBorder: "border-violet-500/30",
    badgeBg: "bg-violet-500/10",
    badgeText: "text-violet-400",
    glow: "bg-violet-500/6",
    img: valVisionImg,
  },
];

const highlights = [
  {
    icon: Users,
    label: "Expert Team",
    title: "Expert Team",
    desc: "Our people are our greatest asset — a team of young, dynamic scientists with deep expertise across toxicology, histopathology, microbiology, and preclinical research.",
    keyPoints: [
      "50+ scientists with diverse multi-disciplinary expertise",
      "Dedicated project managers for seamless client coordination",
      "Continuous training to stay at the forefront of science",
    ],
    iconBg: "bg-primary/10 border-primary/20",
    iconColor: "text-primary",
    accentBar: "bg-primary",
    badge: "50+ Scientists",
    badgeBorder: "border-primary/30",
    badgeBg: "bg-primary/10",
    badgeText: "text-primary",
    glow: "bg-primary/6",
    img: whyTeamImg,
  },
  {
    icon: ShieldCheck,
    label: "Global Standards",
    title: "Global Standards",
    desc: "Every test we perform is conducted in strict adherence to international regulatory frameworks, ensuring your results are accepted worldwide.",
    keyPoints: [
      "NABL-accredited laboratory under ISO/IEC 17025:2017",
      "Full compliance with ISO 10993, OECD, FDA, ASTM & USP",
      "Regular third-party audits and quality assurance checks",
    ],
    iconBg: "bg-emerald-500/10 border-emerald-500/25",
    iconColor: "text-emerald-400",
    accentBar: "bg-emerald-500",
    badge: "NABL Accredited",
    badgeBorder: "border-emerald-500/30",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-400",
    glow: "bg-emerald-500/6",
    img: whyStandardsImg,
  },
  {
    icon: FlaskConical,
    label: "End-to-End CRO",
    title: "End-to-End CRO",
    desc: "We handle every phase of your study — from initial design and protocol development through execution, data analysis, and final regulatory submission.",
    keyPoints: [
      "Study design, protocol writing & IEC/IACUC submission support",
      "Full in-house execution with real-time progress tracking",
      "Regulatory-ready reports and complete documentation",
    ],
    iconBg: "bg-amber-500/10 border-amber-500/25",
    iconColor: "text-amber-400",
    accentBar: "bg-amber-500",
    badge: "Full Service",
    badgeBorder: "border-amber-500/30",
    badgeBg: "bg-amber-500/10",
    badgeText: "text-amber-400",
    glow: "bg-amber-500/6",
    img: whyEndtoendImg,
  },
  {
    icon: Zap,
    label: "Fast Turnaround",
    title: "Fast Turnaround",
    desc: "We understand that time matters in research. Our streamlined processes and experienced team deliver precise, reliable results faster than industry norms.",
    keyPoints: [
      "Optimised workflows that significantly reduce project lead times",
      "Transparent progress updates throughout every study phase",
      "Priority scheduling available for time-sensitive studies",
    ],
    iconBg: "bg-rose-500/10 border-rose-500/25",
    iconColor: "text-rose-400",
    accentBar: "bg-rose-500",
    badge: "Quick Results",
    badgeBorder: "border-rose-500/30",
    badgeBg: "bg-rose-500/10",
    badgeText: "text-rose-400",
    glow: "bg-rose-500/6",
    img: whyTurnaroundImg,
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
    <section className="section-padding relative overflow-hidden">
      <FloatingText text="ABOUT US" className="top-1/4" direction={1} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image with floating badges */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <ParallaxImage
                  src={aboutImg}
                  alt="Cryst Bio Laboratory"
                  containerClassName="w-full h-full"
                  speed={0.15}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/30 pointer-events-none" />
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

              <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            </div>
          </AnimatedSection>

          {/* Right — text */}
          <AnimatedSection direction="right">
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-primary mb-3">
              Who We Are
            </span>
            <RevealText>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight mb-6">
                Cryst Bio Solutions{" "}
                <span className="gradient-text">Pvt. Ltd.</span>
              </h2>
            </RevealText>
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

    {/* ── What Drives Us — alternating layout ───────────────────── */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Our Values"
          title={
            <RevealText>
              <span>What Drives Us</span>
            </RevealText>
          }
          description="Our objective, mission, and vision are the guiding principles that shape every study we conduct and every partnership we build."
        />

        <div className="space-y-28 md:space-y-36 mt-4">
          {values.map((v, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={v.title}
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                {/* ── Image panel ── */}
                <AnimatedSection
                  direction={isEven ? "left" : "right"}
                  className={!isEven ? "lg:order-2" : ""}
                >
                  <div className="relative">
                    {/* ambient glow blob */}
                    <div
                      className={`absolute -z-10 w-80 h-80 rounded-full blur-3xl opacity-60 ${v.glow} ${
                        isEven ? "-bottom-12 -left-12" : "-bottom-12 -right-12"
                      }`}
                    />

                    {/* main image */}
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-2xl">
                      <ParallaxImage
                        src={v.img}
                        alt={v.title}
                        containerClassName="w-full h-full"
                        className="transition-transform duration-700 group-hover:scale-105"
                        speed={0.1}
                      />
                      {/* dark gradient at bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/15 to-transparent" />
                      {/* subtle ring */}
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 group-hover:ring-white/10 transition-all duration-300" />

                      {/* bottom label strip */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                        <div>
                          <span
                            className={`text-xs font-semibold uppercase tracking-widest ${v.badgeText} opacity-80`}
                          >
                            {v.label}
                          </span>
                          <p className="text-lg font-bold font-display text-foreground mt-0.5">
                            {v.title}
                          </p>
                        </div>
                        {/* icon bubble */}
                        <div
                          className={`w-11 h-11 rounded-xl ${v.iconBg} border ${v.badgeBorder} backdrop-blur-md flex items-center justify-center shadow-lg`}
                        >
                          <v.icon className={`w-5 h-5 ${v.iconColor}`} />
                        </div>
                      </div>
                    </div>

                    {/* floating badge — opposite corner from glow */}
                    <div
                      className={`absolute -top-4 ${isEven ? "-right-4" : "-left-4"} glass-card ${v.badgeBg} border ${v.badgeBorder} px-4 py-2.5 rounded-xl shadow-xl`}
                    >
                      <div className="flex items-center gap-2">
                        <v.icon className={`w-4 h-4 ${v.iconColor}`} />
                        <span
                          className={`text-xs font-semibold ${v.badgeText}`}
                        >
                          {v.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* ── Text panel ── */}
                <AnimatedSection
                  direction={isEven ? "right" : "left"}
                  className={!isEven ? "lg:order-1" : ""}
                >
                  <div>
                    {/* label */}
                    <span
                      className={`inline-block text-xs font-semibold tracking-widest uppercase ${v.badgeText} mb-3`}
                    >
                      {v.label}
                    </span>

                    {/* title */}
                    <h3 className="text-4xl md:text-5xl font-bold font-display text-foreground leading-tight mb-5">
                      {v.title}
                    </h3>

                    {/* coloured accent bar */}
                    <div
                      className={`w-14 h-[3px] rounded-full ${v.accentBar} mb-7`}
                    />

                    {/* body text */}
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                      {v.text}
                    </p>

                    {/* key points */}
                    <ul className="space-y-4">
                      {v.keyPoints.map((pt) => (
                        <li key={pt} className="flex items-start gap-3.5">
                          <div
                            className={`w-6 h-6 rounded-full ${v.iconBg} border ${v.badgeBorder} flex items-center justify-center shrink-0 mt-0.5`}
                          >
                            <CheckCircle2
                              className={`w-3.5 h-3.5 ${v.iconColor}`}
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

    {/* ── What Sets Us Apart — alternating layout ───────────────── */}
    <section className="section-padding bg-card/20">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Our Strengths"
          title={
            <RevealText>
              <span>What Sets Us Apart</span>
            </RevealText>
          }
          description="A combination of cutting-edge infrastructure, certified expertise, and unwavering scientific integrity."
        />

        <div className="space-y-28 md:space-y-36 mt-4">
          {highlights.map((h, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={h.label}
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                {/* ── Image panel ── */}
                <AnimatedSection
                  direction={isEven ? "left" : "right"}
                  className={!isEven ? "lg:order-2" : ""}
                >
                  <div className="relative">
                    {/* ambient glow blob */}
                    <div
                      className={`absolute -z-10 w-80 h-80 rounded-full blur-3xl opacity-60 ${h.glow} ${
                        isEven ? "-bottom-12 -left-12" : "-bottom-12 -right-12"
                      }`}
                    />

                    {/* main image */}
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-2xl">
                      <ParallaxImage
                        src={h.img}
                        alt={h.title}
                        containerClassName="w-full h-full"
                        className="transition-transform duration-700 group-hover:scale-105"
                        speed={0.1}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/15 to-transparent pointer-events-none" />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 group-hover:ring-white/10 transition-all duration-300" />

                      {/* bottom label strip */}
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
                        {/* icon bubble */}
                        <div
                          className={`w-11 h-11 rounded-xl ${h.iconBg} border ${h.badgeBorder} backdrop-blur-md flex items-center justify-center shadow-lg`}
                        >
                          <h.icon className={`w-5 h-5 ${h.iconColor}`} />
                        </div>
                      </div>
                    </div>

                    {/* floating badge */}
                    <div
                      className={`absolute -top-4 ${isEven ? "-right-4" : "-left-4"} glass-card ${h.badgeBg} border ${h.badgeBorder} px-4 py-2.5 rounded-xl shadow-xl`}
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

                {/* ── Text panel ── */}
                <AnimatedSection
                  direction={isEven ? "right" : "left"}
                  className={!isEven ? "lg:order-1" : ""}
                >
                  <div>
                    {/* label */}
                    <span
                      className={`inline-block text-xs font-semibold tracking-widest uppercase ${h.badgeText} mb-3`}
                    >
                      {h.label}
                    </span>

                    {/* title */}
                    <h3 className="text-4xl md:text-5xl font-bold font-display text-foreground leading-tight mb-5">
                      {h.title}
                    </h3>

                    {/* coloured accent bar */}
                    <div
                      className={`w-14 h-[3px] rounded-full ${h.accentBar} mb-7`}
                    />

                    {/* body text */}
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                      {h.desc}
                    </p>

                    {/* key points */}
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

    {/* ── Facilities Gallery ────────────────────────────────────── */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Our Facilities"
          title={
            <RevealText>
              <span>State-of-the-Art Infrastructure</span>
            </RevealText>
          }
          description="Our modern laboratories and CPCSEA-approved animal facilities are designed to meet international standards for preclinical research."
        />
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <AnimatedSection direction="left">
            <div className="relative rounded-2xl overflow-hidden h-72 md:h-full min-h-[340px] group">
              <ParallaxImage
                src={facilitiesImg}
                alt="Research Facilities"
                containerClassName="w-full h-full"
                className="transition-transform duration-700 group-hover:scale-105"
                speed={0.1}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none" />
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

          <div className="space-y-6 flex flex-col">
            <AnimatedSection direction="right" delay={0.1} className="flex-1">
              <div className="relative rounded-2xl overflow-hidden h-56 group">
                <ParallaxImage
                  src={animalFacilityImg}
                  alt="Animal Facility"
                  containerClassName="w-full h-full"
                  className="transition-transform duration-700 group-hover:scale-105"
                  speed={0.1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none" />
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
