import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
  panelClassName?: string;
}

export default function HorizontalScroll({ children, className = "", panelClassName = "" }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !trackRef.current) return;

    const panels = trackRef.current.children;
    const totalWidth = trackRef.current.scrollWidth - window.innerWidth;

    gsap.to(trackRef.current, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
      },
    });

    // Stagger-reveal each panel
    Array.from(panels).forEach((panel, i) => {
      gsap.from(panel, {
        opacity: 0.3,
        scale: 0.9,
        scrollTrigger: {
          trigger: panel as Element,
          containerAnimation: gsap.getById?.("horizontalScroll") || undefined,
          start: "left 80%",
          end: "left 20%",
          scrub: true,
        },
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={trackRef} className={`flex gap-8 will-change-transform ${panelClassName}`}>
        {children}
      </div>
    </div>
  );
}
