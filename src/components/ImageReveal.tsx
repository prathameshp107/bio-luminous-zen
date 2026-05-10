import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  direction?: "left" | "right" | "up" | "down";
}

const clipPaths: Record<string, { from: string; to: string }> = {
  left: {
    from: "polygon(0 0, 0 0, 0 100%, 0 100%)",
    to: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
  right: {
    from: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    to: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
  up: {
    from: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    to: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
  down: {
    from: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    to: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
};

export default function ImageReveal({
  src,
  alt,
  className = "",
  containerClassName = "",
  direction = "left",
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !imgRef.current) return;

    const { from, to } = clipPaths[direction];

    gsap.set(containerRef.current, { clipPath: from });
    gsap.set(imgRef.current, { scale: 1.3 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
    });

    tl.to(containerRef.current, { clipPath: to, ease: "power2.inOut", duration: 1 });
    tl.to(imgRef.current, { scale: 1, ease: "power2.out", duration: 1 }, 0);
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`overflow-hidden ${containerClassName}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`w-full h-full object-cover will-change-transform ${className}`}
        loading="lazy"
      />
    </div>
  );
}
