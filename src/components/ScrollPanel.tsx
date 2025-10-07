import { useEffect, useRef, useState } from "react";
import { FunnelDiagram } from "./FunnelDiagram";

interface ScrollPanelProps {
  title: string;
  description: string;
  imageSrc: string;
  index: number;
}

export const ScrollPanel = ({ title, description, imageSrc, index }: ScrollPanelProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (panelRef.current) {
      observer.observe(panelRef.current);
    }

    return () => {
      if (panelRef.current) {
        observer.unobserve(panelRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={panelRef}
      className="min-h-screen flex items-center justify-center relative snap-start"
      style={{
        background: `linear-gradient(135deg, 
          hsl(260 95% ${4 + index * 3}%) 0%, 
          hsl(265 83% ${15 + index * 5}%) 100%)`
      }}
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
          }`}
        >
          <div className="mb-4">
            <span className="text-accent font-bold text-sm tracking-wider">
              0{index + 1}
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-glow-accent">
            {title}
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
            {description}
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-12 scale-95"
          }`}
        >
          <div className="grid grid-cols-1 gap-8">
            {/* Funnel diagram */}
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-card/30 backdrop-blur-sm rounded-3xl p-8 border border-accent/20">
                <FunnelDiagram activeStage={index} />
              </div>
            </div>
            
            {/* Associated image */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl"></div>
              <img
                src={imageSrc}
                alt={title}
                className="relative rounded-2xl shadow-xl w-full h-auto opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
