import { Clock, Globe, Users, Layers } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import whyTurnaround from "@/assets/why-turnaround.jpg";
import whyStandards from "@/assets/why-standards.jpg";
import whyTeam from "@/assets/why-team.jpg";
import whyEndtoend from "@/assets/why-endtoend.jpg";

const items = [
  { icon: Clock, title: "Quick Turnaround", desc: "Industry-leading turnaround times without compromising quality or accuracy in results.", img: whyTurnaround },
  { icon: Globe, title: "Global Standards", desc: "Compliant with ISO, OECD, FDA, ASTM & USP guidelines for international acceptance.", img: whyStandards },
  { icon: Users, title: "Expert Team", desc: "50+ qualified scientists and researchers with deep domain expertise across disciplines.", img: whyTeam },
  { icon: Layers, title: "End-to-End", desc: "From study design to regulatory submission — we handle the complete research pipeline.", img: whyEndtoend },
];

const WhyPartner = () => (
  <div className="grid md:grid-cols-2 gap-6">
    {items.map((item, i) => (
      <AnimatedSection key={item.title} delay={i * 0.1}>
        <div className="glass-card overflow-hidden group hover-glow h-full">
          <div className="flex flex-col sm:flex-row h-full">
            <div className="relative w-full sm:w-2/5 h-48 sm:h-auto overflow-hidden flex-shrink-0">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden sm:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent sm:hidden" />
            </div>
            <div className="flex flex-col justify-center p-6 flex-1">
              <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    ))}
  </div>
);

export default WhyPartner;
