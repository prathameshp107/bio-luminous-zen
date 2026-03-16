import { Link } from "react-router-dom";
import ratLogo from "@/assets/bio-logo-Black.png";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ArrowRight,
  ExternalLink,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

const navLinks = [
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Facilities", path: "/facilities" },
  { name: "Animal Supply", path: "/animal-supply" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
  { name: "Gallery", path: "/gallery" },
];

const services = [
  { name: "Toxicology Testing", slug: "toxicology-testing" },
  { name: "Biocompatibility", slug: "biocompatibility-testing" },
  { name: "Agrochemical Testing", slug: "agrochemical-testing" },
  { name: "Research Projects", slug: "research-projects" },
  { name: "Histopathology", slug: "histopathology-clinical-pathology" },
  { name: "Microbiology", slug: "microbiology-services" },
];

const accreditations = ["NABL", "IAS", "CPCSEA", "MSME", "IEC"];

const stats = [
  { value: "50+", label: "Scientists & Researchers" },
  { value: "6", label: "Accreditations" },
  { value: "100+", label: "Studies Completed" },
  { value: "500+", label: "Clients Served" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/crystal-biological-solutions" }
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-background overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[100px] pointer-events-none translate-y-1/2" />

      {/* Top gradient rule */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      {/* ── Main footer body ───────────────────────────────────── */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr_1.5fr] gap-10 lg:gap-14">
          {/* Brand column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center group w-fit">
              <img
                src={ratLogo}
                alt="Cryst Bio Solutions"
                className="h-11 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              A leading Preclinical Contract Research Organization and
              laboratory animal breeder based in Pune, Maharashtra — committed
              to quality, compliance, and scientific excellence.
            </p>

            {/* Accreditation chips */}
            <div>
              <p className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground mb-2.5">
                Accreditations
              </p>
              <div className="flex flex-wrap gap-2">
                {accreditations.map((a) => (
                  <Link
                    key={a}
                    to="/certifications"
                    className="text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors duration-200"
                  >
                    {a}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social icons */}
            <div>
              <p className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground mb-2.5">
                Follow Us
              </p>
              <div className="flex gap-2">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-card border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6 text-xs uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-0 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 shrink-0 flex items-center">
                      <span className="w-3 h-px bg-primary block" />
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6 text-xs uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-3.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group flex items-center gap-0 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 shrink-0 flex items-center">
                      <span className="w-3 h-px bg-primary block" />
                    </span>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6 text-xs uppercase tracking-widest">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              {/* Address */}
              <li>
                <a
                  href="https://maps.app.goo.gl/FXvCnH2Gt7zKJftN7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors duration-300">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-snug">
                      Crystal Biological Solutions Pune, Maharashtra, India
                    </p>
                    <span className="text-xs text-primary flex items-center gap-1 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity">
                      Get Directions <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </a>
              </li>

              {/* Phone */}
              <li>
                <a
                  href="tel:+917276361762"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <Phone className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    +91 7276361762
                  </span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:info@crystbio.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <Mail className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    info@crystbio.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────────── */}
      <div className="border-t border-border/40">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            <span className="text-foreground font-medium">
              Cryst Bio Solutions Pvt. Ltd.
            </span>{" "}
            All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="w-px h-4 bg-border/60" />
            <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="w-px h-4 bg-border/60" />
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
