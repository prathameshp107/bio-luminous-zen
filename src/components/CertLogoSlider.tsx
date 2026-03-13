import { motion } from "framer-motion";
import logoNabl from "@/assets/logo-nabl.png";
import logoCpcsea from "@/assets/logo-cpcsea.png";
import logoIas from "@/assets/logo-ias.png";
import logoIlac from "@/assets/logo-ilac.png";
import logoMsme from "@/assets/logo-msme.png";
import logoIec from "@/assets/logo-iec.png";

const logos = [
  { src: logoNabl, alt: "NABL Accreditation" },
  { src: logoCpcsea, alt: "CPCSEA Certification" },
  { src: logoIas, alt: "IAS Accreditation" },
  { src: logoIlac, alt: "ILAC Accreditation" },
  { src: logoMsme, alt: "MSME Registration" },
  { src: logoIec, alt: "IEC Certification" },
];

const doubled = [...logos, ...logos];

const CertLogoSlider = () => (
  <div className="overflow-hidden py-4">
    <motion.div
      className="flex items-center gap-16"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 20, ease: "linear", repeat: Infinity }}
    >
      {doubled.map((logo, i) => (
        <div
          key={i}
          className="flex-shrink-0 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ))}
    </motion.div>
  </div>
);

export default CertLogoSlider;
