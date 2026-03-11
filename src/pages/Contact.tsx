import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Pune, Maharashtra, India" },
  { icon: Phone, label: "Phone", value: "+91 7276361762" },
  { icon: Mail, label: "Email", value: "info@crystbio.com" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM" },
];

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you! We'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div>
      <PageHero title="Contact Us" subtitle="Get in touch with our team for inquiries, quotations, or partnerships." breadcrumb="Contact" />

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection direction="left">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Get In Touch</h2>
                <div className="space-y-4">
                  {contactInfo.map((c) => (
                    <div key={c.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <c.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{c.label}</p>
                        <p className="text-foreground font-medium">{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Map embed */}
              <AnimatedSection direction="left" delay={0.2}>
                <div className="rounded-xl overflow-hidden border border-border h-64 mt-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68075771643!2d73.69815826253876!3d18.524603499362973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                    allowFullScreen
                    loading="lazy"
                    title="Cryst Bio Location"
                  />
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <div className="glass-card p-8 glow-border">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-6">Send us a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">Full Name</label>
                        <Input required placeholder="John Doe" className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                        <Input required type="email" placeholder="john@example.com" className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">Phone</label>
                        <Input placeholder="+91 XXXXX XXXXX" className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">Company</label>
                        <Input placeholder="Your Company" className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Subject</label>
                      <Input required placeholder="How can we help?" className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
                      <Textarea required rows={5} placeholder="Tell us about your project requirements..." className="bg-secondary border-border text-foreground placeholder:text-muted-foreground resize-none" />
                    </div>
                    <Button type="submit" disabled={loading} size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">
                      {loading ? "Sending..." : <>Send Message <Send className="w-4 h-4" /></>}
                    </Button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
