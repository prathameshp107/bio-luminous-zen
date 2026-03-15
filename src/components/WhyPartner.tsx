import { Clock, Globe, Users, Layers } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import whyTurnaround from "@/assets/why-turnaround.jpg";
import whyStandards from "@/assets/why-standards.jpg";
import whyTeam from "@/assets/why-team.jpg";
import whyEndtoend from "@/assets/why-endtoend.jpg";

const items = [
  {
    icon: Clock,
    title: "Quick Turnaround",
    desc: "Industry-leading turnaround times without compromising quality or accuracy in results. We understand that timelines are critical in research and regulatory submissions.",
    img: whyTurnaround,
    features: [
      "Rapid study initiation",
      "Streamlined workflows",
      "On-time report delivery",
      "Priority scheduling options",
    ],
  },
  {
    icon: Globe,
    title: "Global Standards",
    desc: "Compliant with ISO, OECD, FDA, ASTM & USP guidelines for international acceptance. Our protocols are designed to meet the strictest global regulatory requirements.",
    img: whyStandards,
    features: [
      "ISO 10993 compliant",
      "OECD GLP certified",
      "FDA-aligned protocols",
      "ASTM & USP guidelines",
    ],
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "50+ qualified scientists and researchers with deep domain expertise across disciplines. Our multidisciplinary team brings unmatched knowledge to every project.",
    img: whyTeam,
    features: [
      "PhD-level scientists",
      "Regulatory affairs experts",
      "Decades of combined experience",
      "Ongoing professional development",
    ],
  },
  {
    icon: Layers,
    title: "End-to-End Solutions",
    desc: "From study design to regulatory submission — we handle the complete research pipeline. A single trusted partner for your entire preclinical research journey.",
    img: whyEndtoend,
    features: [
      "Study design & planning",
      "In-house testing facilities",
      "Data analysis & reporting",
      "Regulatory submission support",
    ],
  },
];

const WhyPartner = () => (
  <div className="space-y-24">
    {items.map((item, i) => {
      const isEven = i % 2 === 0;
      return (
        <div
          key={item.title}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Image */}
          <AnimatedSection
            direction={isEven ? "left" : "right"}
            className={isEven ? "" : "lg:order-2"}
          >
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 left-6 lg:left-8 w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/10">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="absolute -z-10 -inset-3 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection
            direction={isEven ? "right" : "left"}
            className={isEven ? "" : "lg:order-1"}
          >
            <div className="space-y-5">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                  {String(i + 1).padStart(2, "0")} — Why Us
                </span>
                <h3 className="mt-2 text-2xl md:text-3xl font-bold font-display text-foreground">
                  {item.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                {item.desc}
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {item.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      );
    })}
  </div>
);

export default WhyPartner;
