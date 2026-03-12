import { Link } from "react-router-dom";
import { ArrowRight, Shield, Thermometer, HeartPulse, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import animalImg from "@/assets/animal-facility.jpg";
import { animalModels } from "@/data/animalData";

const features = [
  { icon: Shield, title: "CPCSEA Compliant", desc: "All breeding and experiments follow strict CPCSEA ethical guidelines." },
  { icon: Thermometer, title: "Controlled Environment", desc: "Temperature, humidity, and photoperiod precisely regulated." },
  { icon: HeartPulse, title: "Health Monitored", desc: "Continuous health surveillance and veterinary care programs." },
];

const AnimalSupply = () => (
  <div>
    <PageHero title="Animal Supply" subtitle="High-quality laboratory animals bred under strict hygiene and ethical standards." breadcrumb="Animal Supply" />

    {/* Intro */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <img src={animalImg} alt="Animal Breeding Facility" className="rounded-xl w-full object-cover aspect-video" />
          </AnimatedSection>
          <AnimatedSection direction="right">
            <span className="text-sm font-medium tracking-widest uppercase text-primary">Breeding Facility</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold font-display text-foreground">
              Quality Laboratory Animals
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We operate a hygienically well-maintained breeding facility, supplying quality laboratory animals for preclinical research. All animals are bred under CPCSEA guidelines with proper health monitoring.
            </p>
            <div className="mt-8 grid gap-4">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{f.title}</h4>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Animal Cards — Link to Detail Pages */}
    <section className="section-padding bg-card/50">
      <div className="container mx-auto px-4">
        <SectionHeader label="Available Species" title="Laboratory Animal Models" description="Click on any animal model to view detailed strain information, images, and best study applications." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {animalModels.map((a, i) => (
            <AnimatedSection key={a.slug} delay={i * 0.1}>
              <Link to={`/animal-supply/${a.slug}`} className="block h-full">
                <div className="glass-card overflow-hidden h-full group hover-glow flex flex-col transition-all duration-500 hover:border-primary/40">
                  {/* Animal Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img src={a.heroImage} alt={a.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    <div className="absolute bottom-4 left-5">
                      <h3 className="text-2xl font-display font-bold text-foreground">{a.name}</h3>
                      <p className="text-sm text-primary font-medium">
                        {a.strains.length} {a.strains.length === 1 ? "Strain" : "Strains"} Available
                      </p>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{a.shortDesc}</p>
                    <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {a.strains.map((s) => (
                          <span key={s.name} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                            {s.name}
                          </span>
                        ))}
                      </div>
                      <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">Need Laboratory Animals?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">Contact us for availability, pricing, and customized breeding requirements.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">
              Inquire Now <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default AnimalSupply;
