import AnimatedSection from "./AnimatedSection";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

const SectionHeader = ({ label, title, description, className = "" }: SectionHeaderProps) => (
  <div className={`text-center max-w-3xl mx-auto mb-16 ${className}`}>
    {label && (
      <AnimatedSection>
        <span className="inline-block text-sm font-medium tracking-widest uppercase text-primary mb-4">
          {label}
        </span>
      </AnimatedSection>
    )}
    <AnimatedSection delay={0.1}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground text-balance">
        {title}
      </h2>
    </AnimatedSection>
    {description && (
      <AnimatedSection delay={0.2}>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{description}</p>
      </AnimatedSection>
    )}
  </div>
);

export default SectionHeader;
