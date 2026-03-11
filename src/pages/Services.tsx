import { Link } from "react-router-dom";
import { ArrowRight, Leaf, ShieldCheck, TestTube, FlaskConical, Stethoscope, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const services = [
  { icon: Leaf, title: "Agrochemical Testing", desc: "Comprehensive agrochemical testing services including acute toxicity, sub-acute and sub-chronic studies, reproductive toxicity, and environmental impact assessments as per regulatory guidelines.", features: ["Acute Toxicity Studies", "Sub-Chronic Studies", "Environmental Assessment", "Regulatory Compliance"] },
  { icon: ShieldCheck, title: "Biocompatibility Testing", desc: "Medical device biocompatibility testing per ISO 10993 standards including cytotoxicity, sensitization, irritation, systemic toxicity, and implantation studies.", features: ["ISO 10993 Compliance", "Cytotoxicity Testing", "Sensitization Studies", "Implantation Studies"] },
  { icon: TestTube, title: "Toxicology Testing", desc: "Full-spectrum toxicology services following OECD and FDA guidelines including acute, sub-acute, chronic toxicity, genotoxicity, and carcinogenicity studies.", features: ["OECD Guidelines", "FDA Compliance", "Genotoxicity", "Carcinogenicity"] },
  { icon: FlaskConical, title: "Research Projects", desc: "Custom preclinical research solutions including study design, protocol development, data analysis, and regulatory submission support.", features: ["Custom Study Design", "Protocol Development", "Data Analysis", "Regulatory Support"] },
  { icon: Stethoscope, title: "Histopathology & Clinical Pathology", desc: "Expert histopathology and clinical pathology services including tissue processing, staining, microscopic examination, and comprehensive reporting.", features: ["Tissue Processing", "Microscopic Exam", "Clinical Chemistry", "Hematology"] },
  { icon: Bug, title: "Microbiology Services", desc: "Comprehensive microbiology testing including sterility testing, bacterial endotoxin testing, antimicrobial effectiveness, and environmental monitoring.", features: ["Sterility Testing", "Endotoxin Testing", "Antimicrobial Testing", "Environmental Monitoring"] },
];

const Services = () => (
  <div>
    <PageHero title="Our Services" subtitle="Comprehensive preclinical research and testing solutions for global industries." breadcrumb="Services" />

    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeader label="What We Offer" title="Research & Testing Services" description="Delivering highest quality testing services in compliance with ISO 10993, OECD, FDA, ASTM, and USP guidelines." />
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <div className="glass-card p-8 h-full hover-glow group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">{s.desc}</p>
                  </div>
                </div>
                <ul className="grid grid-cols-2 gap-2 mt-4">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-card/50">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">Need a Custom Study?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">Contact us to discuss your specific research requirements and get a tailored solution.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Services;
