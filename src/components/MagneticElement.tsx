import { useRef, useCallback } from "react";
import gsap from "gsap";

interface MagneticElementProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticElement({ children, className = "", strength = 0.3 }: MagneticElementProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      gsap.to(ref.current, { x, y, duration: 0.4, ease: "power3.out" });
    },
    [strength]
  );

  const handleLeave = useCallback(() => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
  }, []);

  return (
    <div
      ref={ref}
      className={`will-change-transform ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}
