import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface FloatingTextProps {
  text: string;
  className?: string;
  direction?: 1 | -1;
}

export default function FloatingText({ text, className = "", direction = 1 }: FloatingTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;

    gsap.to(textRef.current, {
      xPercent: 20 * direction,
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: textRef });

  return (
    <div className="overflow-hidden whitespace-nowrap select-none pointer-events-none opacity-[0.03] absolute left-0 w-full z-0 py-4">
      <div 
        ref={textRef} 
        className={`text-[15vw] font-bold font-display uppercase leading-none ${className}`}
        style={{ transform: `translateX(${-10 * direction}%)` }}
      >
        {text} {text} {text}
      </div>
    </div>
  );
}
