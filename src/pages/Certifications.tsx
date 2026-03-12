import { Award, CheckCircle, ExternalLink } from "lucide-react";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import certNabl from "@/assets/cert-nabl.png";
import certIasCpcsea from "@/assets/cert-ias-cpcsea.png";
import certMsme from "@/assets/cert-msme.png";
import certIec from "@/assets/cert-iec.png";
import certIncorporation from "@/assets/cert-incorporation.png";

const certs = [
  { name: "NABL Accreditation", code: "TC-15118", desc: "National Accreditation Board for Testing and Calibration Laboratories — ISO/IEC 17025:2017 accreditation for testing services.", image: certNabl, validity: "Valid until 24/04/2026" },
  { name: "IAS Accreditation", code: "TL-1015", desc: "International Accreditation Service — AC89 criteria for Testing Laboratories, ISO/IEC 17025:2017 compliance.", image: certIasCpcsea, validity: "Effective January 12, 2024" },
  { name: "CPCSEA Registration", code: "2030/PO/RcBiBt/S/18/CPCSEA", desc: "Committee for the Purpose of Control and Supervision of Experiments on Animals — registered for research, breeding, and trade of small animals.", image: certIasCpcsea, validity: "Registered" },
  { name: "MSME / Udyam Registration", code: "UDYAM-MH-26-0118144", desc: "Ministry of Micro, Small and Medium Enterprises — Udyam registration as a Micro enterprise in technical testing and analysis.", image: certMsme, validity: "Registered 16/06/2021" },
  { name: "IEC Certificate", code: "BRTPM9840F", desc: "Import Export Code — Certificate of Importer-Exporter issued by the Ministry of Commerce and Industry for international trade.", image: certIec, validity: "Issued 10/09/2019" },
  { name: "Certificate of Incorporation", code: "U71200PN2024PTC231728", desc: "Ministry of Corporate Affairs — Cryst Bio Solutions Private Limited incorporated on 11th June 2024 under Companies Act, 2013.", image: certIncorporation, validity: "Incorporated 11/06/2024" },
];

const standards = ["ISO 10993", "ISO/IEC 17025:2017", "OECD Guidelines", "FDA Standards", "ASTM Standards", "USP Standards", "GLP Compliance", "ILAC MRA"];

const Certifications = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div>
      <PageHero title="Certifications" subtitle="Recognized and accredited by national and international regulatory bodies." breadcrumb="Certifications" />

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <img src={lightbox} alt="Certificate" className="w-full h-full object-contain rounded-lg" />
            <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors">✕</button>
          </div>
        </div>
      )}

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeader label="Accreditations" title="Our Certifications & Registrations" description="We maintain the highest standards of quality and compliance through multiple national and international accreditations." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certs.map((c, i) => (
              <AnimatedSection key={c.name} delay={i * 0.08}>
                <div className="glass-card overflow-hidden h-full group hover-glow flex flex-col">
                  {/* Certificate Image */}
                  <div className="relative h-52 overflow-hidden cursor-pointer bg-card" onClick={() => setLightbox(c.image)}>
                    <img src={c.image} alt={c.name} className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                      <span className="text-xs text-primary flex items-center gap-1 font-medium"><ExternalLink className="w-3 h-3" /> View Certificate</span>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-semibold text-foreground leading-tight">{c.name}</h3>
                        {c.code && <p className="text-xs text-primary font-mono mt-0.5">{c.code}</p>}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.desc}</p>
                    <div className="mt-4 pt-3 border-t border-border/50">
                      <span className="text-xs text-muted-foreground">{c.validity}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card/50">
        <div className="container mx-auto px-4">
          <SectionHeader label="Compliance" title="Regulatory Standards We Follow" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
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
};

export default Certifications;
