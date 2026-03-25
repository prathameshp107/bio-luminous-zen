import { Clock, Globe, Users, Layers } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxImage from "@/components/ParallaxImage";
import RevealText from "@/components/RevealText";
import FloatingText from "@/components/FloatingText";
import whyTurnaround from "@/assets/why-turnaround.jpg";
import whyStandards from "@/assets/why-standards.jpg";
import whyTeam from "@/assets/why-team.jpg";
import whyEndtoend from "@/assets/why-endtoend.jpg";

const items = [
  {
    icon: Clock,
    title: "Quick Turnaround",
    floating: "TURNAROUND",
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
    floating: "STANDARDS",
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
    floating: "EXPERTISE",
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
    floating: "SOLUTIONS",
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
  <div className="space-y-40 md:space-y-56">
    {items.map((item, i) => {
      const isEven = i % 2 === 0;
      return (
        <div
          key={item.title}
          className="relative min-h-[400px] flex items-center"
        >
          {/* Background Floating Text — exactly like Home sections */}
          <FloatingText 
            text={item.floating} 
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
                {/* Glow Bloom */}
                <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border/50">
                  <ParallaxImage
                    src={item.img}
                    alt={item.title}
                    containerClassName="w-full aspect-[4/3]"
                    className="transition-transform duration-1000 group-hover:scale-110"
                    speed={0.12}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Icon Badge */}
                <div className="absolute -bottom-6 left-8 w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center shadow-2xl z-20 transition-transform duration-500 group-hover:-translate-y-3">
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  <item.icon className="w-8 h-8 text-primary relative z-10" />
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
                    {String(i + 1).padStart(2, "0")} — Excellence
                  </span>
                  <RevealText>
                    <h3 className="text-3xl md:text-4xl font-bold font-display text-foreground leading-tight">
                      {item.title}
                    </h3>
                  </RevealText>
                  <div className="w-12 h-1 bg-primary/30 mt-4 rounded-full" />
                </div>

                <p className="text-muted-foreground leading-relaxed text-lg max-w-xl">
                  {item.desc}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-2">
                  {item.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm text-foreground/70"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      );
    })}
  </div>
);

export default WhyPartner;
