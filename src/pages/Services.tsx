import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import ParallaxImage from "@/components/ParallaxImage";
import RevealText from "@/components/RevealText";
import FloatingText from "@/components/FloatingText";
import { servicesData } from "@/data/servicesData";

const Services = () => (
  <div>
    <PageHero title="Our Services" subtitle="Comprehensive preclinical research and testing solutions for global industries." breadcrumb="Services" />

    <section className="section-padding relative overflow-hidden">
      <FloatingText text="SERVICES" className="top-1/4" direction={-1} />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          label="What We Offer"
          title={
            <RevealText>
              <span>Research & Testing Services</span>
            </RevealText>
          }
          description="Delivering highest quality testing services in compliance with ISO 10993, OECD, FDA, ASTM, and USP guidelines."
        />

        <div className="space-y-24">
          {servicesData.map((s, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={s.slug} className="relative min-h-[400px] flex items-center">
                <FloatingText
                  text={s.floating}
                  className="top-1/2 -translate-y-1/2"
                  direction={isEven ? 1 : -1}
                />
                <div className="container mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
                {/* Image */}
                <AnimatedSection direction={isEven ? "left" : "right"} className={isEven ? "" : "lg:order-2"}>
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-2xl">
                      <ParallaxImage
                        src={s.img}
                        alt={s.title}
                        containerClassName="w-full aspect-[4/3]"
                        className="transition-transform duration-700 group-hover:scale-105"
                        speed={0.1}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                    </div>
                    <div className="absolute -bottom-5 left-6 lg:left-8 w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/10">
                      <s.icon className="w-7 h-7 text-primary" />
                    </div>
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
                      <RevealText>
                        <h3 className="mt-2 text-2xl md:text-3xl font-bold font-display text-foreground">
                          {s.title}
                        </h3>
                      </RevealText>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {s.shortDesc}
                    </p>
                    <ul className="grid grid-cols-2 gap-3">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <Link
                        to={`/services/${s.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-foreground bg-primary/10 hover:bg-primary/20 border border-primary/20 px-5 py-2.5 rounded-lg transition-all duration-300"
                      >
                        Know More <ArrowRight className="w-4 h-4 text-primary" />
                      </Link>
                      <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-300">
                        Enquire <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
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
            <Button size="lg" className="font-semibold gap-2">
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Services;
