import { Link } from "react-router-dom";
import { FlaskConical, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <FlaskConical className="w-5 h-5 text-primary" />
            </div>
            <span className="text-lg font-display font-bold text-foreground">
              Cryst<span className="text-primary">Bio</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A leading Preclinical Contract Research Organization and laboratory animal breeder based in Pune, Maharashtra.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["About Us", "Services", "Facilities", "Animal Supply", "Certifications"].map((name) => (
              <li key={name}>
                <Link
                  to={`/${name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Toxicology Testing", "Biocompatibility", "Agrochemical", "Research Projects", "Histopathology", "Microbiology"].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              Pune, Maharashtra, India
            </li>
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              +91 7276361762
            </li>
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              info@crystbio.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Cryst Bio Solutions Pvt. Ltd. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
          <span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
