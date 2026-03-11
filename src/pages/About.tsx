import { Target, Eye, Rocket } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import aboutImg from "@/assets/about-lab.jpg";

const timeline = [
  { year: "2018", title: "Founded", desc: "Established as Crystal Biological Solutions, a proprietorship firm in Pune." },
  { year: "2020", title: "Expansion", desc: "Expanded testing capabilities and upgraded laboratory infrastructure." },
  { year: "2022", title: "Incorporation", desc: "Evolved into Cryst Bio Solutions Pvt. Ltd. with global partnerships." },
  { year: "2024", title: "Global Reach", desc: "Consultation offices established in Europe and USA through marketing associates." },
];

const values = [
  { icon: Target, title: "Objective", text: "To become one of the most trusted biocompatibility testing laboratory by providing consistent operation and prioritizing competency and impartiality." },
  { icon: Rocket, title: "Mission", text: "To drive excellence in preclinical research, toxicology, and biocompatibility testing by upholding the highest standards of quality, accuracy, and scientific integrity." },
  { icon: Eye, title: "Vision", text: "To be a global leader in preclinical research, toxicology, and biocompatibility testing, recognized for our scientific excellence, ethical standards, and commitment to regulatory compliance." },
];

const About = () => (
  <div>
    <PageHero title="About Us" subtitle="Learn about our journey, mission, and commitment to scientific excellence." breadcrumb="About Us" />

    {/* About intro */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <img src={aboutImg} alt="About Cryst Bio" className="rounded-xl w-full object-cover aspect-[4/3]" />
          </AnimatedSection>
          <AnimatedSection direction="right">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
              Cryst Bio Solutions Pvt. Ltd.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Welcome to Cryst Bio Solutions Pvt. Ltd., a rapidly emerging Preclinical Contract Research Organization (CRO) and laboratory animal breeder based in Pune, Maharashtra.</p>
              <p>Originally established in 2018 as Crystal Biological Solutions, we have since evolved into Cryst Bio Solutions Pvt. Ltd. Our core services include Toxicology Testing and Preclinical Research in compliance with international regulatory guidelines such as ISO 10993, OECD, FDA, ASTM, and USP.</p>
              <p>Our young, dynamic, and knowledgeable team is dedicated to delivering high-precision test reports and ensuring fast turnaround times, excellent client support, and seamless project execution.</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-card/50">
      <div className="container mx-auto px-4">
        <SectionHeader label="Our Values" title="What Drives Us" />
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="glass-card p-8 h-full hover-glow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeader label="Our Journey" title="Company Timeline" />
        <div className="max-w-3xl mx-auto space-y-0">
          {timeline.map((t, i) => (
            <AnimatedSection key={t.year} delay={i * 0.1}>
              <div className="relative flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-primary">{t.year}</span>
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pt-2">
                  <h4 className="font-display font-semibold text-foreground text-lg">{t.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
