import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealTextProps {
  children: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  stagger?: number;
  scrub?: boolean;
}

export default function ScrollRevealText({
  children,
  tag: Tag = "h2",
  className = "",
  stagger = 0.03,
  scrub = true,
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const chars = containerRef.current.querySelectorAll(".sr-char");
    if (!chars.length) return;

    gsap.set(chars, { opacity: 0.15, y: 20 });

    gsap.to(chars, {
      opacity: 1,
      y: 0,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        end: "top 35%",
        scrub: scrub ? 1 : false,
        toggleActions: scrub ? undefined : "play none none reverse",
      },
    });
  }, { scope: containerRef });

  // Split into words, then chars
  const words = children.split(" ");

  return (
    <div ref={containerRef} className="overflow-hidden">
      <Tag className={className}>
        {words.map((word, wi) => (
          <span key={wi} className="inline-block whitespace-nowrap">
            {word.split("").map((char, ci) => (
              <span key={ci} className="sr-char inline-block will-change-transform">
                {char}
              </span>
            ))}
            {wi < words.length - 1 && <span className="sr-char inline-block">&nbsp;</span>}
          </span>
        ))}
      </Tag>
    </div>
  );
}
