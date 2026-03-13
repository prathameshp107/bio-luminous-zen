import { Link } from "react-router-dom";
import { ArrowRight, Leaf, ShieldCheck, TestTube, FlaskConical, Stethoscope, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import serviceAgrochem from "@/assets/service-agrochem.jpg";
import serviceBiocompat from "@/assets/service-biocompat.jpg";
import serviceToxicology from "@/assets/service-toxicology.jpg";
import serviceResearch from "@/assets/service-research.jpg";
import serviceHistopath from "@/assets/service-histopath.jpg";
import serviceMicro from "@/assets/service-micro.jpg";

const services = [
  { icon: Leaf, title: "Agrochemical Testing", img: serviceAgrochem, desc: "Comprehensive agrochemical testing services including acute toxicity, sub-acute and sub-chronic studies, reproductive toxicity, and environmental impact assessments as per regulatory guidelines.", features: ["Acute Toxicity Studies", "Sub-Chronic Studies", "Environmental Assessment", "Regulatory Compliance"] },
  { icon: ShieldCheck, title: "Biocompatibility Testing", img: serviceBiocompat, desc: "Medical device biocompatibility testing per ISO 10993 standards including cytotoxicity, sensitization, irritation, systemic toxicity, and implantation studies.", features: ["ISO 10993 Compliance", "Cytotoxicity Testing", "Sensitization Studies", "Implantation Studies"] },
  { icon: TestTube, title: "Toxicology Testing", img: serviceToxicology, desc: "Full-spectrum toxicology services following OECD and FDA guidelines including acute, sub-acute, chronic toxicity, genotoxicity, and carcinogenicity studies.", features: ["OECD Guidelines", "FDA Compliance", "Genotoxicity", "Carcinogenicity"] },
  { icon: FlaskConical, title: "Research Projects", img: serviceResearch, desc: "Custom preclinical research solutions including study design, protocol development, data analysis, and regulatory submission support.", features: ["Custom Study Design", "Protocol Development", "Data Analysis", "Regulatory Support"] },
  { icon: Stethoscope, title: "Histopathology & Clinical Pathology", img: serviceHistopath, desc: "Expert histopathology and clinical pathology services including tissue processing, staining, microscopic examination, and comprehensive reporting.", features: ["Tissue Processing", "Microscopic Exam", "Clinical Chemistry", "Hematology"] },
  { icon: Bug, title: "Microbiology Services", img: serviceMicro, desc: "Comprehensive microbiology testing including sterility testing, bacterial endotoxin testing, antimicrobial effectiveness, and environmental monitoring.", features: ["Sterility Testing", "Endotoxin Testing", "Antimicrobial Testing", "Environmental Monitoring"] },
];

const Services = () => (
  <div>
    <PageHero title="Our Services" subtitle="Comprehensive preclinical research and testing solutions for global industries." breadcrumb="Services" />

    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeader label="What We Offer" title="Research & Testing Services" description="Delivering highest quality testing services in compliance with ISO 10993, OECD, FDA, ASTM, and USP guidelines." />

        <div className="space-y-24">
          {services.map((s, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={s.title} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Image */}
                <AnimatedSection direction={isEven ? "left" : "right"} className={isEven ? "" : "lg:order-2"}>
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={s.img}
                        alt={s.title}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    </div>
                    {/* Floating icon badge */}
                    <div className="absolute -bottom-5 left-6 lg:left-8 w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/10">
                      <s.icon className="w-7 h-7 text-primary" />
                    </div>
                    {/* Decorative accent */}
                    <div className="absolute -z-10 -inset-3 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </AnimatedSection>

                {/* Content */}
                <AnimatedSection direction={isEven ? "right" : "left"} className={isEven ? "" : "lg:order-1"}>
                  <div className="space-y-5">
                    <div>
                      <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                        {String(i + 1).padStart(2, "0")} — Service
                      </span>
                      <h3 className="mt-2 text-2xl md:text-3xl font-bold font-display text-foreground">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {s.desc}
                    </p>
                    <ul className="grid grid-cols-2 gap-3">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-300 mt-2">
                      Enquire about this service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            );
          })}
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
