import { useEffect, useRef, useState } from "react";
import { FunnelDiagram } from "./FunnelDiagram";

interface ScrollPanelProps {
  title: string;
  description: string;
  imageSrc: string;
  index: number;
  activeStage: number;
}

export const ScrollPanel = ({ title, description, imageSrc, index, activeStage }: ScrollPanelProps) => {
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
      data-scroll-panel
      className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-primary"
    >
      {/* Animated Background similar to Hero */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/50 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-accent rounded-full animate-ping delay-3000"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-primary rounded-full animate-ping delay-4000"></div>
      </div>

      {/* Subtle pattern overlay instead of images */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(45 100% 50% / 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(45 100% 50% / 0.05) 0%, transparent 50%)`,
        }}></div>
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
          }`}
        >
          <div className="mb-4">
            <span className="text-accent font-bold text-sm tracking-wider bg-accent/10 border border-accent/20 rounded-full px-4 py-2">
              0{index + 1}
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-glow-accent drop-shadow-lg">
            {title}
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl leading-relaxed font-semibold drop-shadow-md">
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
          {/* Enhanced Funnel diagram with better styling */}
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl animate-pulse"></div>
            <div className="relative bg-card/40 backdrop-blur-sm rounded-3xl p-8 border border-accent/30 shadow-[0_0_30px_hsl(45_100%_50%/0.2)]">
              <FunnelDiagram activeStage={index} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
