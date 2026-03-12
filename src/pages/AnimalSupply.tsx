import { Link } from "react-router-dom";
import { ArrowRight, Shield, Thermometer, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import animalImg from "@/assets/animal-facility.jpg";
import ratImg from "@/assets/animal-rat.jpg";
import miceImg from "@/assets/animal-mice.jpg";
import rabbitImg from "@/assets/animal-rabbit.jpg";
import guineaPigImg from "@/assets/animal-guinea-pig.jpg";
import hamsterImg from "@/assets/animal-hamster.jpg";

const animals = [
  { name: "Rats", species: "Wistar, Sprague Dawley", desc: "High-quality rats bred under controlled conditions for toxicology, pharmacology, and general safety studies.", image: ratImg, uses: ["Toxicology Studies", "Pharmacokinetics", "Safety Assessment"] },
  { name: "Mice", species: "Swiss Albino, BALB/c, C57BL/6", desc: "Laboratory mice available in multiple strains for diverse research and immunological applications.", image: miceImg, uses: ["Immunology Research", "Oncology Studies", "Genetic Research"] },
  { name: "Rabbits", species: "New Zealand White", desc: "Rabbits for dermal irritation, pyrogen testing, biocompatibility, and ocular studies.", image: rabbitImg, uses: ["Dermal Irritation", "Pyrogen Testing", "Biocompatibility"] },
  { name: "Guinea Pigs", species: "Hartley", desc: "Guinea pigs for skin sensitization testing, immunological studies, and dermal assessments.", image: guineaPigImg, uses: ["Sensitization Testing", "Dermal Assessment", "Immunological Studies"] },
  { name: "Hamsters", species: "Golden Syrian", desc: "Hamsters for specialized research protocols, toxicology, and infectious disease studies.", image: hamsterImg, uses: ["Specialized Protocols", "Toxicology", "Disease Models"] },
];

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

    {/* Animal Cards Grid */}
    <section className="section-padding bg-card/50">
      <div className="container mx-auto px-4">
        <SectionHeader label="Available Species" title="Laboratory Animal Models" description="We supply high-quality laboratory animals across multiple species and strains for preclinical research." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((a, i) => (
            <AnimatedSection key={a.name} delay={i * 0.1}>
              <div className="glass-card overflow-hidden h-full group hover-glow flex flex-col">
                {/* Animal Image */}
                <div className="relative h-56 overflow-hidden">
                  <img src={a.image} alt={a.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-display font-bold text-foreground">{a.name}</h3>
                    <p className="text-sm text-primary font-medium">{a.species}</p>
                  </div>
                </div>
                {/* Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{a.desc}</p>
                  <div className="mt-auto pt-4 border-t border-border/50">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">Common Applications</p>
                    <div className="flex flex-wrap gap-2">
                      {a.uses.map((u) => (
                        <span key={u} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">{u}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
