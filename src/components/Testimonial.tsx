import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

export const Testimonial = () => {
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

  return (
    <div
      ref={testimonialRef}
      className="min-h-[50vh] flex items-center justify-center relative bg-gradient-to-b from-background via-card/30 to-background py-20"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative bg-card/50 backdrop-blur border border-accent/20 rounded-3xl p-10 md:p-14">
            <Quote className="absolute top-8 left-8 h-12 w-12 text-accent/20" />
            
            <blockquote className="relative z-10">
              <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6 font-medium">
                "En una semana ordenó el funnel y mejoramos el tiempo de respuesta."
              </p>
              <footer className="flex items-center gap-4">
                <div className="flex-1">
                  <cite className="not-italic">
                    <div className="font-bold text-accent text-lg">Cliente Piloto</div>
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
};
