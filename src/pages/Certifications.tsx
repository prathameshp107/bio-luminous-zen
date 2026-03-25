import { Award, CheckCircle, ExternalLink, X } from "lucide-react";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import ParallaxImage from "@/components/ParallaxImage";
import RevealText from "@/components/RevealText";
import FloatingText from "@/components/FloatingText";
import certNabl from "@/assets/cert-nabl.png";
import certIasCpcsea from "@/assets/cert-ias-cpcsea.png";
import certMsme from "@/assets/cert-msme.png";
import certIec from "@/assets/cert-iec.png";
import certIncorporation from "@/assets/cert-incorporation.png";

const certs = [
  {
    name: "NABL Accreditation",
    FloatingText: "NABL",
    code: "TC-15118",
    desc: "National Accreditation Board for Testing and Calibration Laboratories — ISO/IEC 17025:2017 accreditation for testing services, ensuring globally accepted, reliable results.",
    image: certNabl,
    validity: "Valid until 24/04/2026",
    features: [
      "ISO/IEC 17025:2017 certified",
      "Testing & calibration labs",
      "Nationally recognized",
      "Valid until April 2026",
    ],
  },
  {
    name: "IAS Accreditation",
    FloatingText: "IAS",
    code: "TL-1015",
    desc: "International Accreditation Service — AC89 criteria for Testing Laboratories, ISO/IEC 17025:2017 compliance for internationally accepted test results and reports.",
    image: certIasCpcsea,
    validity: "Effective January 12, 2024",
    features: [
      "International recognition",
      "AC89 criteria compliance",
      "ISO/IEC 17025:2017",
      "Effective since 2024",
    ],
  },
  {
    name: "CPCSEA Registration",
    FloatingText: "CPCSEA",
    code: "2030/PO/RcBiBt/S/18/CPCSEA",
    desc: "Committee for the Purpose of Control and Supervision of Experiments on Animals — registered for research, breeding, and trade of small animals under ethical guidelines.",
    image: certIasCpcsea,
    validity: "Registered",
    features: [
      "Animal research authorized",
      "Breeding & trade approved",
      "Ethical study compliance",
      "Small animal studies",
    ],
  },
  {
    name: "MSME / Udyam Registration",
    FloatingText: "MSME",
    code: "UDYAM-MH-26-0118144",
    desc: "Ministry of Micro, Small and Medium Enterprises — Udyam registration as a Micro enterprise in technical testing and analysis, enabling government-recognized operations.",
    image: certMsme,
    validity: "Registered 16/06/2021",
    features: [
      "Micro enterprise status",
      "Technical testing sector",
      "Government certified",
      "Registered June 2021",
    ],
  },
  {
    name: "IEC Certificate",
    FloatingText: "IEC",
    code: "BRTPM9840F",
    desc: "Import Export Code — Certificate of Importer-Exporter issued by the Ministry of Commerce and Industry, enabling international trade of biological and scientific materials.",
    image: certIec,
    validity: "Issued 10/09/2019",
    features: [
      "Import-export authorized",
      "International trade enabled",
      "Commerce ministry issued",
      "Active since 2019",
    ],
  },
  {
    name: "Certificate of Incorporation",
    FloatingText: "Incorporation",
    code: "U71200PN2024PTC231728",
    desc: "Ministry of Corporate Affairs — Cryst Bio Solutions Private Limited incorporated on 11th June 2024 under the Companies Act, 2013, as a legally registered entity in India.",
    image: certIncorporation,
    validity: "Incorporated 11/06/2024",
    features: [
      "Companies Act 2013",
      "Private Limited entity",
      "MCA registered",
      "Incorporated June 2024",
    ],
  },
];

const standards = [
  "ISO 10993",
  "ISO/IEC 17025:2017",
  "OECD Guidelines",
  "FDA Standards",
  "ASTM Standards",
  "USP Standards",
  "GLP Compliance",
  "ILAC MRA",
];

const Certifications = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <img
              src={lightbox}
              alt="Certificate"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Certifications */}
      <section className="section-padding relative overflow-hidden">
        <FloatingText text="ACCREDITATIONS" className="top-1/4" direction={1} />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            label="Accreditations"
            title={
              <RevealText>
                <span>Our Certifications & Registrations</span>
              </RevealText>
            }
            description="We maintain the highest standards of quality and compliance through multiple national and international accreditations."
          />

          <div className="space-y-24">
            {certs.map((cert, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={cert.name}
                  className="relative min-h-[360px] flex items-center"
                >
                  <FloatingText
                    text={cert.FloatingText}
                    className="top-1/2 -translate-y-1/2"
                    direction={isEven ? 1 : -1}
                  />
                  <div className="container mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
                  {/* Image */}
                  <AnimatedSection
                    direction={isEven ? "left" : "right"}
                    className={isEven ? "" : "lg:order-2"}
                  >
                    <div className="relative group">
                      <div
                        className="relative overflow-hidden rounded-2xl cursor-pointer bg-card border border-border/40"
                        onClick={() => setLightbox(cert.image)}
                      >
                        <ParallaxImage
                          src={cert.image}
                          alt={cert.name}
                          containerClassName="w-full aspect-[4/3] p-6"
                          className="object-contain transition-transform duration-700 group-hover:scale-105"
                          speed={0.05}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                        {/* View overlay */}
                        <div className="absolute inset-0 flex items-end justify-center pb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary bg-card/80 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-full">
                            <ExternalLink className="w-3.5 h-3.5" /> View
                            Certificate
                          </span>
                        </div>
                      </div>
                      {/* Icon badge */}
                      <div className="absolute -bottom-5 left-6 lg:left-8 w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/10">
                        <Award className="w-7 h-7 text-primary" />
                      </div>
                      <div className="absolute -z-10 -inset-3 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </AnimatedSection>

                  {/* Content */}
                  <AnimatedSection
                    direction={isEven ? "right" : "left"}
                    className={isEven ? "" : "lg:order-1"}
                  >
                    <div className="space-y-5">
                      <div>
                        <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                          {String(i + 1).padStart(2, "0")} — Certification
                        </span>
                        <RevealText>
                          <h3 className="mt-2 text-2xl md:text-3xl font-bold font-display text-foreground">
                            {cert.name}
                          </h3>
                        </RevealText>
                        {cert.code && (
                          <p className="mt-1 text-sm font-mono text-primary/80 tracking-wide">
                            {cert.code}
                          </p>
                        )}
                      </div>

                      <p className="text-muted-foreground leading-relaxed text-base">
                        {cert.desc}
                      </p>

                      <ul className="grid grid-cols-2 gap-3">
                        {cert.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-2.5 text-sm text-muted-foreground"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="pt-1 border-t border-border/40 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {cert.validity}
                        </span>
                      </div>

                      <button
                        onClick={() => setLightbox(cert.image)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-foreground bg-primary/10 hover:bg-primary/20 border border-primary/20 px-5 py-2.5 rounded-lg transition-all duration-300"
                      >
                        View Certificate{" "}
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </button>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regulatory Standards */}
      <section className="section-padding bg-card/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Compliance"
            title="Regulatory Standards We Follow"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {standards.map((s, i) => (
              <AnimatedSection key={s} delay={i * 0.05}>
                <div className="glass-card p-4 flex items-center gap-3 hover-glow">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {s}
                  </span>
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
