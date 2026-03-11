import { Award, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const certs = [
  { name: "NABL Accreditation", code: "TC-15118", desc: "National Accreditation Board for Testing and Calibration Laboratories accreditation for testing services." },
  { name: "CPCSEA Registration", code: "", desc: "Committee for the Purpose of Control and Supervision of Experiments on Animals registration for ethical animal research." },
  { name: "IAS Accreditation", code: "", desc: "International Accreditation Service accreditation recognizing our laboratory competence." },
  { name: "ILAC MRA", code: "", desc: "International Laboratory Accreditation Cooperation Mutual Recognition Arrangement member." },
  { name: "MSME Registration", code: "", desc: "Ministry of Micro, Small and Medium Enterprises registration under Udyam." },
  { name: "IEC Certificate", code: "", desc: "Import Export Code for international trade and global service delivery." },
];

const standards = ["ISO 10993", "OECD Guidelines", "FDA Standards", "ASTM Standards", "USP Standards", "GLP Compliance"];

const Certifications = () => (
  <div>
    <PageHero title="Certifications" subtitle="Recognized and accredited by national and international regulatory bodies." breadcrumb="Certifications" />

    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeader label="Accreditations" title="Our Certifications" description="We maintain the highest standards of quality and compliance through multiple accreditations." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <AnimatedSection key={c.name} delay={i * 0.08}>
              <div className="glass-card p-6 h-full hover-glow group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-1">{c.name}</h3>
                {c.code && <p className="text-sm text-primary font-medium mb-2">{c.code}</p>}
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-card/50">
      <div className="container mx-auto px-4">
        <SectionHeader label="Compliance" title="Regulatory Standards We Follow" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {standards.map((s, i) => (
            <AnimatedSection key={s} delay={i * 0.05}>
              <div className="glass-card p-4 flex items-center gap-3 hover-glow">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{s}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Certifications;
