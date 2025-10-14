import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

interface MiniTestimonialProps {
  bullets?: string[];
  agentName?: string;
}

export const MiniTestimonial = ({ bullets, agentName = "Agente IA" }: MiniTestimonialProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, []);

  // Si no hay bullets, mostrar testimonio por defecto
  if (!bullets || bullets.length === 0) {
    return (
      <div
        ref={testimonialRef}
        className="flex items-center justify-center relative py-4"
      >
        <div className="w-full relative z-10">
          <div
            className={`max-w-2xl mx-auto transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative bg-card/20 backdrop-blur-sm border border-accent/10 rounded-xl p-6">
              <Quote className="absolute top-4 left-4 h-8 w-8 text-accent/20" />
              
              <blockquote className="relative z-10">
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-4 font-medium">
                  "En una semana ordenó el funnel y mejoramos el tiempo de respuesta."
                </p>
                <footer className="flex items-center gap-4">
                  <div className="flex-1">
                    <cite className="not-italic">
                      <div className="font-bold text-accent text-base">Cliente Piloto</div>
                      <div className="text-foreground/60 text-sm">Industria B2B</div>
                    </cite>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={testimonialRef}
      className="flex items-center justify-center relative py-4"
    >
      <div className="w-full relative z-10">
        <div
          className={`max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative bg-card/20 backdrop-blur-sm border border-accent/10 rounded-xl p-6">
            <Quote className="absolute top-4 left-4 h-8 w-8 text-accent/20" />
            
            <blockquote className="relative z-10">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 font-medium">
                Esto es lo que hago para optimizar tu negocio:
              </p>
              
              <ul className="space-y-3 mb-6">
                {bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-3 mt-1 font-bold">•</span>
                    <span className="text-foreground/85">{bullet}</span>
                  </li>
                ))}
              </ul>
              
              <footer className="flex items-center gap-4">
                <div className="flex-1">
                  <cite className="not-italic">
                    <div className="font-bold text-accent text-base">{agentName}</div>
                    <div className="text-foreground/60 text-sm">Sistema Automatizado</div>
                  </cite>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};
