import { useState, FormEvent, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Globe,
  Award,
  FlaskConical,
  Users,
  MessageSquare,
  Building2,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

import aboutLabImg from "@/assets/about-lab.jpg";
import facilitiesImg from "@/assets/facilities.jpg";
import whyTeamImg from "@/assets/why-team.jpg";

/* ─── Config ─────────────────────────────────────────────────── */
const FORMSUBMIT_EMAIL = "info@crystbio.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`;

/* ─── Contact Info ───────────────────────────────────────────── */
const contactCards = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Pune, Maharashtra, India",
    subtext: "Mon – Sat: Open for visits",
    href: "https://maps.google.com/?q=Pune+Maharashtra+India",
    iconBg: "bg-primary/10 border-primary/20",
    iconColor: "text-primary",
    glow: "bg-primary/6",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 7276361762",
    subtext: "Mon – Sat: 9AM – 6PM IST",
    href: "tel:+917276361762",
    iconBg: "bg-emerald-500/10 border-emerald-500/25",
    iconColor: "text-emerald-400",
    glow: "bg-emerald-500/6",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@crystbio.com",
    subtext: "We reply within 24 hours",
    href: "mailto:info@crystbio.com",
    iconBg: "bg-sky-500/10 border-sky-500/25",
    iconColor: "text-sky-400",
    glow: "bg-sky-500/6",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 9AM – 6PM",
    subtext: "IST (UTC+5:30)",
    href: undefined,
    iconBg: "bg-amber-500/10 border-amber-500/25",
    iconColor: "text-amber-400",
    glow: "bg-amber-500/6",
  },
];

/* ─── Validation ─────────────────────────────────────────────── */
type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function validate(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Full name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address";
  }
  if (!data.subject.trim()) errors.subject = "Subject is required";
  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }
  return errors;
}

/* ─── Page ───────────────────────────────────────────────────── */
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldErrors = validate(formData);
    if (fieldErrors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: fieldErrors[name as keyof FormErrors],
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("idle");

    // Validate all fields
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Contact: ${formData.subject}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
        setTouched({});
        setErrors({});
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const getFieldClasses = (fieldName: keyof FormErrors) => {
    const base =
      "bg-secondary/80 border-border text-foreground placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300";
    if (touched[fieldName] && errors[fieldName]) {
      return `${base} border-red-500/60 focus:border-red-500/80 focus:ring-red-500/20`;
    }
    return base;
  };

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, quotations, or partnerships."
        breadcrumb="Contact"
      />

      {/* ── Contact Cards ──────────────────────────────────────── */}
      <section className="py-10 bg-secondary/40 dark:bg-card/30 border-y border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactCards.map((c, i) => {
              const Wrapper = c.href ? "a" : "div";
              const wrapperProps = c.href
                ? {
                    href: c.href,
                    target: c.href.startsWith("http") ? "_blank" : undefined,
                    rel: c.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined,
                  }
                : {};
              return (
                <AnimatedSection key={c.label} delay={i * 0.08}>
                  <Wrapper
                    {...(wrapperProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
                    className="glass-card p-5 hover-glow group block h-full transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-11 h-11 rounded-xl ${c.iconBg} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <c.icon className={`w-5 h-5 ${c.iconColor}`} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">
                          {c.label}
                        </p>
                        <p className="text-sm font-semibold text-foreground leading-tight">
                          {c.value}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {c.subtext}
                        </p>
                      </div>
                    </div>
                  </Wrapper>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Main Section: Form + Image ─────────────────────────── */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* ── Contact Form ── */}
            <AnimatedSection direction="left">
              <div className="relative">
                {/* Ambient glow */}
                <div className="absolute -z-10 w-80 h-80 rounded-full blur-3xl opacity-60 bg-primary/6 -top-12 -left-12" />

                <div className="glass-card glow-border overflow-hidden">
                  {/* Coloured top bar */}
                  <div className="h-1 w-full bg-primary flex-shrink-0" />

                  <div className="p-8 md:p-10">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-foreground">
                          Send Us a Message
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Fill out the form and we'll get back within 24 hours
                        </p>
                      </div>
                    </div>

                    {/* Success / Error messages */}
                    <AnimatePresence mode="wait">
                      {submitStatus === "success" && (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, y: -10, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, y: -10, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-emerald-400">
                              Message Sent Successfully!
                            </p>
                            <p className="text-xs text-emerald-400/70 mt-0.5">
                              Thank you for reaching out. Our team will review
                              your inquiry and respond within 24 hours.
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {submitStatus === "error" && (
                        <motion.div
                          key="error"
                          initial={{ opacity: 0, y: -10, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, y: -10, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3"
                        >
                          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-red-400">
                              Something went wrong
                            </p>
                            <p className="text-xs text-red-400/70 mt-0.5">
                              We couldn't send your message. Please try again or
                              email us directly at info@crystbio.com.
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Form */}
                    <form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      noValidate
                    >
                      {/* Hidden FormSubmit fields */}
                      <input
                        type="hidden"
                        name="_captcha"
                        value="false"
                      />
                      <input
                        type="hidden"
                        name="_template"
                        value="table"
                      />

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="contact-name"
                            className="text-sm text-muted-foreground mb-1.5 block font-medium"
                          >
                            Full Name <span className="text-red-400">*</span>
                          </label>
                          <Input
                            id="contact-name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="John Doe"
                            className={getFieldClasses("name")}
                          />
                          {touched.name && errors.name && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-xs text-red-400 mt-1.5 flex items-center gap-1"
                            >
                              <AlertCircle className="w-3 h-3" />
                              {errors.name}
                            </motion.p>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="contact-email"
                            className="text-sm text-muted-foreground mb-1.5 block font-medium"
                          >
                            Email <span className="text-red-400">*</span>
                          </label>
                          <Input
                            id="contact-email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="john@example.com"
                            className={getFieldClasses("email")}
                          />
                          {touched.email && errors.email && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-xs text-red-400 mt-1.5 flex items-center gap-1"
                            >
                              <AlertCircle className="w-3 h-3" />
                              {errors.email}
                            </motion.p>
                          )}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="contact-phone"
                            className="text-sm text-muted-foreground mb-1.5 block font-medium"
                          >
                            Phone
                          </label>
                          <Input
                            id="contact-phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            className="bg-secondary/80 border-border text-foreground placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="contact-company"
                            className="text-sm text-muted-foreground mb-1.5 block font-medium"
                          >
                            Company
                          </label>
                          <Input
                            id="contact-company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company"
                            className="bg-secondary/80 border-border text-foreground placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-subject"
                          className="text-sm text-muted-foreground mb-1.5 block font-medium"
                        >
                          Subject <span className="text-red-400">*</span>
                        </label>
                        <Input
                          id="contact-subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="How can we help?"
                          className={getFieldClasses("subject")}
                        />
                        {touched.subject && errors.subject && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-red-400 mt-1.5 flex items-center gap-1"
                          >
                            <AlertCircle className="w-3 h-3" />
                            {errors.subject}
                          </motion.p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-message"
                          className="text-sm text-muted-foreground mb-1.5 block font-medium"
                        >
                          Message <span className="text-red-400">*</span>
                        </label>
                        <Textarea
                          id="contact-message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Tell us about your project requirements, study types, timelines..."
                          className={`resize-none ${getFieldClasses("message")}`}
                        />
                        {touched.message && errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-red-400 mt-1.5 flex items-center gap-1"
                          >
                            <AlertCircle className="w-3 h-3" />
                            {errors.message}
                          </motion.p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={loading}
                        size="lg"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 shadow-[0_0_28px_-4px_hsl(var(--primary)/0.4)] text-base transition-all duration-300"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message <Send className="w-4 h-4" />
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-center text-muted-foreground/60">
                        Your data is secure. We never share your information
                        with third parties.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* ── Right Side: Image + Info ── */}
            <AnimatedSection direction="right">
              <div className="space-y-8">
                {/* Main image */}
                <div className="relative">
                  {/* ambient glow */}
                  <div className="absolute -z-10 w-80 h-80 rounded-full blur-3xl opacity-60 bg-sky-500/6 -bottom-12 -right-12" />

                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-2xl">
                    <img
                      src={facilitiesImg}
                      alt="Cryst Bio Laboratory"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/30 to-transparent" />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 group-hover:ring-white/10 transition-all duration-300" />

                    {/* bottom strip */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary opacity-80">
                          Our Facility
                        </span>
                        <p className="text-lg font-bold font-display text-foreground mt-0.5">
                          NABL Accredited Lab
                        </p>
                      </div>
                      <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 backdrop-blur-md flex items-center justify-center shadow-lg">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* floating badge */}
                  <div className="absolute -top-4 -right-4 glass-card bg-primary/10 border border-primary/30 px-4 py-2.5 rounded-xl shadow-xl">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-xs font-semibold text-primary">
                        India · Europe · USA
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick info cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-5 hover-glow group text-center">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <FlaskConical className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-2xl font-bold font-display gradient-text">
                      500+
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Studies Completed
                    </div>
                  </div>
                  <div className="glass-card p-5 hover-glow group text-center">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="text-2xl font-bold font-display gradient-text">
                      50+
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Expert Scientists
                    </div>
                  </div>
                </div>

               
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Map Section ────────────────────────────────────────── */}
      <section className="section-padding bg-secondary/40 dark:bg-card/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Our Location"
            title="Find Us in Pune"
            description="Located in the heart of Maharashtra's scientific and industrial hub — easily accessible for clients across India and beyond."
          />

          <AnimatedSection>
            <div className="grid lg:grid-cols-5 gap-8 items-stretch">
              {/* Map */}
              <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-border/50 shadow-xl min-h-[380px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4114.794062814827!2d73.9361808!3d18.4553299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e94d2470ec75%3A0xb9a571e0213d9eb4!2sCrystal%20Biological%20Solutions!5e1!3m2!1sen!2sin!4v1773644734235!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "invert(90%) hue-rotate(180deg)"
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Crystal Biological Solutions Location"
                />
              </div>

              {/* Info beside map */}
              <div className="lg:col-span-2 flex flex-col gap-5">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] group shadow-xl flex-shrink-0">
                  <img
                    src={aboutLabImg}
                    alt="Cryst Bio Facility"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-xs font-medium uppercase tracking-widest text-primary">
                      State-of-the-Art
                    </span>
                    <p className="text-sm font-display font-bold text-foreground mt-0.5">
                      Modern Lab Infrastructure
                    </p>
                  </div>
                </div>

                <div className="glass-card glow-border p-6 rounded-2xl flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-2">
                        Cryst Bio Solutions Pvt. Ltd.
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        Our NABL-accredited facility is purpose-built for
                        preclinical research, toxicology testing, and
                        biocompatibility studies — meeting the highest
                        international standards.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["NABL", "CPCSEA", "ISO 10993", "OECD"].map((b) => (
                          <span
                            key={b}
                            className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 border border-primary/20 text-primary"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      
    </div>
  );
};

export default Contact;
