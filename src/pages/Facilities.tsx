import { Building2, Thermometer, Microscope, ShieldCheck, Wind, Droplets } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import facilitiesImg from "@/assets/facilities.jpg";

const features = [
  { icon: Building2, title: "State-of-the-Art Labs", desc: "Modern laboratory infrastructure equipped with advanced testing equipment." },
  { icon: Thermometer, title: "Climate Control", desc: "Temperature and humidity controlled environments for precise testing." },
  { icon: Microscope, title: "Advanced Equipment", desc: "Latest microscopy and analytical instruments for accurate results." },
  { icon: ShieldCheck, title: "Biosafety Standards", desc: "Strict biosafety protocols and containment measures." },
  { icon: Wind, title: "HVAC Systems", desc: "Advanced air filtration and ventilation for clean environments." },
  { icon: Droplets, title: "Water Purification", desc: "Ultra-pure water systems for all laboratory requirements." },
];

const Facilities = () => (
  <div>
    <PageHero title="Our Facilities" subtitle="World-class infrastructure designed for precision research and testing." breadcrumb="Facilities" />

    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <img src={facilitiesImg} alt="Cryst Bio Facilities" className="rounded-xl w-full object-cover aspect-video" />
          </AnimatedSection>
          <AnimatedSection direction="right">
            <span className="text-sm font-medium tracking-widest uppercase text-primary">Infrastructure</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold font-display text-foreground">
              Built for Excellence
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our facility in Pune houses cutting-edge laboratory equipment, a state-of-the-art animal breeding facility, and dedicated testing areas for toxicology, histopathology, and microbiology services.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Every aspect of our infrastructure is designed to meet international regulatory standards and ensure the highest quality of research output.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="section-padding bg-card/50">
      <div className="container mx-auto px-4">
        <SectionHeader label="Features" title="Facility Highlights" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.08}>
              <div className="glass-card p-6 h-full hover-glow group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Facilities;
