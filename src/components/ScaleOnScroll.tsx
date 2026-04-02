import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ScaleOnScrollProps {
  children: React.ReactNode;
  className?: string;
  from?: number;
  to?: number;
  start?: string;
  end?: string;
}

export default function ScaleOnScroll({
  children,
  className = "",
  from = 1,
  to = 0.85,
  start = "top top",
  end = "bottom top",
}: ScaleOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { scale: from, borderRadius: "0px" },
      {
        scale: to,
        borderRadius: "24px",
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start,
          end,
          scrub: true,
        },
      }
    );
  }, { scope: ref });

  return (
    <div ref={ref} className={`will-change-transform origin-center ${className}`}>
      {children}
    </div>
  );
}
