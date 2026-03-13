import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, CheckCircle2, Beaker, FolderOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { servicesData } from "@/data/servicesData";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;

  return (
    <div>
      <PageHero
        title={service.title}
        subtitle={service.heroDescription}
        breadcrumb={`Services » ${service.title}`}
      />

      {/* Overview */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative group">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-2xl" />
                </div>
                <div className="absolute -bottom-5 left-6 w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/10">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="space-y-6">
                <span className="text-xs font-semibold tracking-widest uppercase text-primary">Overview</span>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
                  About This Service
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {service.overview}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.standards.map((std) => (
                    <span
                      key={std}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Sub-Services */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Detailed Capabilities"
            title="Sub-Services & Tests"
            description="Explore our comprehensive range of specialized tests and evaluations under this service category."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {service.subServices.map((sub, i) => (
              <AnimatedSection key={sub.title} delay={i * 0.05}>
                <div className="group h-full p-6 rounded-2xl bg-card border border-border/60 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 mt-1 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Beaker className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-lg font-semibold font-display text-foreground group-hover:text-primary transition-colors">
                        {sub.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {sub.description}
                      </p>
                      {sub.guidelines && sub.guidelines.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {sub.guidelines.map((g) => (
                            <span
                              key={g}
                              className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground font-mono"
                            >
                              {g}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Case Studies"
            title="Featured Projects"
            description="Selected examples of how we've helped clients achieve their research and regulatory objectives."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {service.projects.map((proj, i) => (
              <AnimatedSection key={proj.title} delay={i * 0.1}>
                <div className="group h-full relative p-6 rounded-2xl bg-card border border-border/60 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                  {/* Accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 to-primary/20" />
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FolderOpen className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
                        Project {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold font-display text-foreground">
                      {proj.title}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Award className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-muted-foreground">{proj.client}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {proj.scope}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Quick View */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
                Why Choose Us for {service.title}?
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                {[
                  "GLP-compliant facility with state-of-the-art equipment",
                  "Experienced team of scientists and study directors",
                  "Fast turnaround with transparent reporting",
                  "End-to-end support from study design to submission",
                  "Internationally recognized certifications",
                  "Dedicated project management for each study",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border/40">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA + Navigation */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Contact us to discuss your {service.title.toLowerCase()} requirements and receive a customized proposal.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="font-semibold gap-2">
                    Request a Quote <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="font-semibold gap-2">
                    <ArrowLeft className="w-4 h-4" /> All Services
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
