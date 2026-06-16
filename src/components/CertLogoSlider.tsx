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
  <div className="overflow-hidden py-6">
    <motion.div
      className="flex items-center gap-12 md:gap-16"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 30, ease: "linear", repeat: Infinity }}
    >
      {doubled.map((logo, i) => (
        <div
          key={i}
          className="flex-shrink-0 w-36 md:w-44 h-24 md:h-28 flex items-center justify-center
                     bg-white/10 dark:bg-white/5 rounded-xl px-4 py-3
                     border border-white/10 dark:border-white/5
                     shadow-sm hover:shadow-md
                     opacity-80 hover:opacity-100
                     transition-all duration-300 hover:scale-105"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="w-full h-full object-contain
                       invert dark:invert-0
                       hover:invert-0 dark:hover:invert
                       drop-shadow-sm"
          />
        </div>
      ))}
    </motion.div>
  </div>
);

export default CertLogoSlider;