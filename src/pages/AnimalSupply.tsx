import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import animalImg from "@/assets/animal-facility.jpg";

const animals = [
  { name: "Rats", species: "Wistar, Sprague Dawley", desc: "High-quality rats bred under controlled conditions for toxicology and pharmacology studies." },
  { name: "Mice", species: "Swiss Albino, BALB/c, C57BL/6", desc: "Laboratory mice available in multiple strains for diverse research applications." },
  { name: "Rabbits", species: "New Zealand White", desc: "Rabbits for dermal irritation, pyrogen testing, and biocompatibility studies." },
  { name: "Guinea Pigs", species: "Hartley", desc: "Guinea pigs for sensitization testing and immunological studies." },
  { name: "Hamsters", species: "Golden Syrian", desc: "Hamsters for specialized research protocols and toxicology studies." },
];

const AnimalSupply = () => (
  <div>
    <PageHero title="Animal Supply" subtitle="High-quality laboratory animals bred under strict hygiene and ethical standards." breadcrumb="Animal Supply" />

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
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Our facility maintains strict environmental controls including temperature, humidity, and photoperiod regulation to ensure the health and well-being of all animals.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="section-padding bg-card/50">
      <div className="container mx-auto px-4">
        <SectionHeader label="Available Species" title="Laboratory Animal Models" description="We supply high-quality laboratory animals across multiple species and strains." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.map((a, i) => (
            <AnimatedSection key={a.name} delay={i * 0.08}>
              <div className="glass-card p-6 h-full hover-glow">
                <h3 className="text-xl font-display font-semibold text-foreground mb-1">{a.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{a.species}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

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
