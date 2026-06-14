import { ArrowRight, Search, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import RevealText from "@/components/RevealText";
import FloatingText from "@/components/FloatingText";
import { faqData } from "@/data/faqData";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(faqData.map((item) => item.category))];

  const filteredFaq = faqData.filter(
    (item) =>
      (activeCategory === "All" || item.category === activeCategory) &&
      (item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about our services, animal models, and research capabilities."
      />

      {/* FAQ Section */}
      <section className="section-padding relative overflow-hidden">
        <FloatingText text="QUESTIONS" className="top-1/4" direction={1} />
        <div className="container mx-auto px-4 relative z-10">

          {/* Search */}
          <div className="max-w-xl mx-auto mb-10 relative">
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>

          <div className="grid lg:grid-cols-[250px_1fr] gap-10">

            {/* Category Sidebar */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Categories
              </h3>

              <div className="flex flex-col gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "ghost"}
                    onClick={() => setActiveCategory(category)}
                    className="justify-start"
                  >
                    {category}
                  </Button>
                ))}
              </div>

              <div className="mt-6 text-sm text-muted-foreground">
                {filteredFaq.length} Questions Found
              </div>
            </div>

            {/* FAQ Accordion */}
            <div>
              {filteredFaq.length === 0 ? (
                <div className="text-center py-20">
                  <HelpCircle className="mx-auto mb-4 w-10 h-10 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    No questions found for your search.
                  </p>
                </div>
              ) : (
                <AnimatedSection>
                  <Accordion type="single" collapsible className="w-full space-y-3">
                    {filteredFaq.map((item, index) => (
                      <AccordionItem
                        value={`item-${index}`}
                        key={index}
                        className="glass-card border border-border/50 rounded-xl px-4"
                      >
                        <AccordionTrigger className="text-left font-semibold text-lg">
                          {item.question}
                        </AccordionTrigger>

                        <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </AnimatedSection>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card/40">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <RevealText>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                Still Have Questions?
              </h2>
            </RevealText>

            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Our scientific team is ready to help you with study design,
              regulatory guidance, and laboratory services.
            </p>

            <Link to="/contact">
              <Button size="lg" className="gap-2 font-semibold">
                Contact Our Team <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default FAQ;