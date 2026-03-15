import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedMarqueeHeroProps {
  tagline: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  images: string[];
  className?: string;
  onCtaClick?: () => void;
}

const ActionButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="mt-8 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-[0_0_28px_-4px_hsl(var(--primary)/0.6)] transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75"
  >
    {children}
  </motion.button>
);

export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  images,
  className,
  onCtaClick,
}) => {
  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  const duplicatedImages = [...images, ...images];

  return (
    <section
      className={cn(
        "relative w-full min-h-screen overflow-hidden bg-background flex flex-col items-center justify-center text-center px-4",
        className,
      )}
    >
      {/* Subtle radial glow behind the text */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center pt-20 md:pt-28 pb-[34%] md:pb-[28%]">
        {/* Tagline pill */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm"
        >
          {tagline}
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="text-5xl md:text-7xl font-bold font-display tracking-tighter text-foreground leading-[1.06]"
        >
          {typeof title === "string"
            ? title.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={FADE_IN_ANIMATION_VARIANTS}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))
            : title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
        >
          {description}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.65 }}
        >
          <ActionButton onClick={onCtaClick}>{ctaText}</ActionButton>
        </motion.div>
      </div>

      {/* Animated image marquee pinned to the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[38%] md:h-[44%] [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] overflow-hidden">
        <motion.div
          className="flex gap-4 items-end"
          animate={{
            x: ["0%", "-50%"],
            transition: {
              ease: "linear",
              duration: 45,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative flex-shrink-0"
              style={{
                transform: `rotate(${index % 2 === 0 ? -2 : 3}deg)`,
                width: "clamp(140px, 14vw, 220px)",
                aspectRatio: "3/4",
              }}
            >
              <img
                src={src}
                alt={`Lab showcase ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl shadow-lg ring-1 ring-border/40"
                loading="lazy"
              />
              {/* Subtle shine overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade gradient so marquee blends into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default AnimatedMarqueeHero;
