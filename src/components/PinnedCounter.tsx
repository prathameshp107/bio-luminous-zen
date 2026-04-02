import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface CounterItem {
  value: number;
  suffix?: string;
  label: string;
}

interface PinnedCounterProps {
  items: CounterItem[];
  className?: string;
}

export default function PinnedCounter({ items, className = "" }: PinnedCounterProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(() => {
    if (!sectionRef.current) return;

    countersRef.current.forEach((el, i) => {
      if (!el) return;

      const item = items[i];
      const obj = { val: 0 };

      gsap.to(obj, {
        val: item.value,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        onUpdate: () => {
          el.textContent = Math.round(obj.val) + (item.suffix || "");
        },
      });
    });
  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className}`}>
      {items.map((item, i) => (
        <div key={item.label} className="text-center space-y-2">
          <span
            ref={(el) => { countersRef.current[i] = el; }}
            className="text-5xl md:text-7xl font-bold font-display gradient-text block"
          >
            0
          </span>
          <span className="text-sm text-muted-foreground uppercase tracking-widest">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
