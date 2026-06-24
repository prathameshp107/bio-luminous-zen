import { motion } from "framer-motion";
import logoNabl from "@/assets/logo-nabl.png";
import logoCpcsea from "@/assets/logo-cpcsea.png";
import logoIas from "@/assets/logo-ias.png";
import logoIlac from "@/assets/logo-ilac.png";
import logoMsme from "@/assets/logo-msme.png";
import logoIec from "@/assets/logo-iec.png";

const logos = [
  { src: logoNabl, alt: "NABL Accreditation" },
  { src: logoCpcsea, alt: "CCSEA Certification" },
  { src: logoIas, alt: "IAS Accreditation" },
  { src: logoIlac, alt: "ILAC Accreditation" },
  { src: logoMsme, alt: "MSME Registration" },
  { src: logoIec, alt: "IEC Certification" },
];

const doubled = [...logos, ...logos];

const CertLogoSlider = () => (
  <div className="overflow-hidden py-8">
    <motion.div
      className="flex items-center gap-8 md:gap-12"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 35, ease: "linear", repeat: Infinity }}
    >
      {doubled.map((logo, i) => (
        <div
          key={i}
          className="flex-shrink-0 w-44 md:w-52 h-28 md:h-32 flex items-center justify-center
                     bg-white dark:bg-white/95 rounded-xl px-5 py-4
                     border border-gray-200 dark:border-gray-300/30
                     shadow-md hover:shadow-xl
                     transition-all duration-300 hover:scale-105"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="w-full h-full object-contain drop-shadow-sm"
          />
        </div>
      ))}
    </motion.div>
  </div>
);

export default CertLogoSlider;