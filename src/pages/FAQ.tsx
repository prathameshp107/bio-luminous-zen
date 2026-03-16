import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of preclinical research services, including toxicology testing, biocompatibility testing, histopathology, microbiology, and custom research studies. We also supply a variety of laboratory animal models.",
  },
  {
    question: "What animal models are available?",
    answer:
      "We provide various rodent models such as Wistar Rats, Sprague Dawley Rats, Swiss Albino Mice, BALB/c Mice, and C57BL/6 Mice. We also offer NZW Rabbits and Dunkin-Hartley Guinea Pigs.",
  },
  {
    question: "Are your facilities accredited?",
    answer:
      "Yes, our facilities are accredited by NABL (ISO/IEC 17025:2017) and approved by the CPCSEA. We are also an ISO 9001:2015 certified organization.",
  },
  {
    question: "Can you perform custom studies?",
    answer:
      "Absolutely. We specialize in designing and executing custom research protocols tailored to meet the specific needs of our clients. Contact us to discuss your project requirements.",
  },
  {
    question: "What are your quality standards?",
    answer:
      "We adhere to strict international quality standards, including OECD, GLP, ISO, and AAALAC guidelines, ensuring the reliability and integrity of our data.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "You can request a quote by contacting us through our website's contact form, emailing us at info@crystbiosolutions.com, or calling us at +91 95869 33112.",
  },
];

const FAQ = () => {
  return (
    <div>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about our services and capabilities."
        backgroundImage="/src/assets/facilities.jpg"
      />

      {/* FAQ Accordion */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((item, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-left font-semibold text-lg">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
              Have More Questions?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              If you can't find the answer you're looking for, please don't
              hesitate to get in touch with our expert team.
            </p>
            <Link to="/contact">
              <Button size="lg" className="font-semibold gap-2">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default FAQ;