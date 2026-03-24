import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  speed?: number; // e.g. 0.5 for half speed
}

export default function ParallaxImage({ src, alt, className = "", containerClassName = "", speed = 0.5 }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !imageRef.current) return;

    gsap.to(imageRef.current, {
      yPercent: speed * 50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom", // when the top of the container hits the bottom of the viewport
        end: "bottom top", // when the bottom of the container hits the top of the viewport
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`overflow-hidden relative ${containerClassName}`}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`absolute top-[-20%] left-0 w-full h-[140%] object-cover ${className}`}
      />
    </div>
  );
}
