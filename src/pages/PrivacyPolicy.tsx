import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, Mail, FileText, Cookie } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const sections = [
  {
    icon: Shield,
    title: "Information We Collect",
    content:
      "We collect information you provide directly to us, such as your name, email address, phone number, company name, and any other details you share when contacting us through our website, email, or phone. We also automatically collect certain technical information, including IP address, browser type, operating system, referring URLs, and pages visited on our site.",
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content:
      "We use the information we collect to respond to your inquiries, provide our preclinical research services, improve our website experience, send relevant communications about our services (with your consent), comply with legal obligations, and protect our rights and property.",
  },
  {
    icon: Lock,
    title: "Data Protection & Security",
    content:
      "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These include encryption, access controls, secure servers, and regular security audits. Our NABL-accredited facility follows ISO/IEC 17025:2017 standards which include data integrity and confidentiality requirements.",
  },
  {
    icon: Cookie,
    title: "Cookies & Tracking",
    content:
      "Our website uses essential cookies for basic functionality. We may use analytics cookies to understand how visitors interact with our site. You can control cookie preferences through your browser settings. Note that disabling certain cookies may affect website functionality.",
  },
  {
    icon: Mail,
    title: "Contact & Your Rights",
    content:
      "You have the right to access, correct, update, or delete your personal data. You may also object to or restrict certain processing activities. To exercise these rights or for any privacy-related inquiries, please contact us at enquiry@crystbio.com. We will respond to your request within 30 days.",
  },
  {
    icon: FileText,
    title: "Policy Updates",
    content:
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated effective date. We encourage you to review this policy periodically. Continued use of our services after changes constitutes acceptance of the updated policy.",
  },
];

const PrivacyPolicy = () => (
  <div>
    <PageHero
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information."
      breadcrumb="Privacy Policy"
    />

    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <AnimatedSection>
          <div className="glass-card p-8 md:p-12 rounded-2xl space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Last Updated:</strong> June 2026
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Cryst Bio Solutions Pvt. Ltd. ("we," "our," or "us") is committed to
              protecting your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our
              website or use our preclinical research services.
            </p>

            <div className="space-y-10">
              {sections.map((section, i) => (
                <div key={section.title} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <section.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold font-display text-foreground">
                      {i + 1}. {section.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-[3.25rem]">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border/50">
              <h3 className="text-lg font-bold font-display text-foreground mb-3">
                Contact Information
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                For any privacy-related inquiries, please contact us at:
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a href="mailto:enquiry@crystbio.com" className="text-primary hover:underline">
                    enquiry@crystbio.com
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">Phone:</strong>{" "}
                  <a href="tel:+917276361762" className="text-primary hover:underline">
                    +91 7276361762
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">Address:</strong>{" "}
                  Cryst Bio Solutions Pvt. Ltd., Pune, Maharashtra, India
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Contact
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default PrivacyPolicy;
