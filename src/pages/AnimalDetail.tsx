import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { animalModels } from "@/data/animalData";

const AnimalDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const animal = animalModels.find((a) => a.slug === slug);

  if (!animal) return <Navigate to="/animal-supply" replace />;

  return (
    <div>
      <PageHero
        title={animal.name}
        subtitle={animal.shortDesc}
        breadcrumb={`Animal Supply » ${animal.name}`}
      />

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Sidebar */}
            <aside className="space-y-6">
              <AnimatedSection direction="left">
                <div className="glass-card p-5">
                  <h3 className="text-lg font-display font-bold text-foreground mb-4">Animal Supply</h3>
                  <nav className="flex flex-col gap-1">
                    {animalModels.map((a) => (
                      <Link
                        key={a.slug}
                        to={`/animal-supply/${a.slug}`}
                        className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                          a.slug === slug
                            ? "bg-primary/15 text-primary border border-primary/30"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        }`}
                      >
                        {a.name}
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    ))}
                  </nav>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.1}>
                <div className="glass-card p-5 text-center bg-primary/5 border-primary/20">
                  <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">Have a Question?</p>
                  <h4 className="text-xl font-display font-bold text-foreground mb-3">Call Us Now</h4>
                  <a
                    href="tel:+917276361762"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    +91 7276361762
                  </a>
                </div>
              </AnimatedSection>
            </aside>

            {/* Main Content */}
            <div className="space-y-16">
              {/* Hero Image */}
              <AnimatedSection>
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={animal.heroImage}
                    alt={animal.name}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </AnimatedSection>

              {/* Strains */}
              {animal.strains.map((strain, i) => {
                const isEven = i % 2 === 0;
                return (
                  <AnimatedSection key={strain.name} delay={i * 0.1}>
                    <div className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? "md:[direction:rtl]" : ""}`}>
                      {/* Image */}
                      <div className={`${!isEven ? "md:[direction:ltr]" : ""}`}>
                        <div className="rounded-xl overflow-hidden group">
                          <img
                            src={strain.image}
                            alt={strain.name}
                            className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>

                      {/* Info */}
                      <div className={`${!isEven ? "md:[direction:ltr]" : ""}`}>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                          {strain.name}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {strain.description}
                        </p>
                        <div className="glass-card p-5">
                          <h4 className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
                            Best Study Model For
                          </h4>
                          <ul className="space-y-2">
                            {strain.bestStudyModel.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
              Need {animal.name} for Your Study?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Contact us for availability, pricing, and customized breeding requirements.
            </p>
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
};

export default AnimalDetail;
