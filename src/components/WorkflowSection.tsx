import { useEffect, useRef, useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const WorkflowSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
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

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={panelRef}
      className="min-h-screen flex flex-col justify-center relative gradient-primary py-12 md:py-16 lg:py-24"
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

      <div className="container mx-auto px-6 text-center relative z-10 flex-1 flex flex-col justify-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >


          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow-accent">
            Así trabajamos
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Un proceso probado para transformar tu operación con IA
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  step: "01",
                  title: "Diagnóstico gratuito",
                  subtitle: "30 minutos",
                  description: "Entendemos tu operación y priorizamos 1 KPI claro para empezar.",
                  details: [
                    "Entendimiento express de tu operación",
                    "Priorización conjunta (1 KPI claro)",
                    "Plan de arranque en una página"
                  ]
                },
                {
                  step: "02", 
                  title: "Columna vertebral",
                  subtitle: "2–3 semanas",
                  description: "Construimos la estructura firme para mover la aguja del KPI priorizado.",
                  details: [
                    "Integraciones necesarias (sin rehacer tu stack)",
                    "Agente/automatización inicial operativa",
                    "Métricas y trazabilidad desde el día 1"
                  ]
                },
                {
                  step: "03",
                  title: "Evolución continua",
                  subtitle: "Ongoing",
                  description: "Sumamos funcionalidades según impacto real con seguimiento continuo.",
                  details: [
                    "Sprints de mejora basados en datos",
                    "Nuevos módulos cuando entregan valor",
                    "Soporte y entrenamiento al equipo"
                  ]
                },
              ].map((item, index) => (
                <div
                  key={item.step}
                  className={`bg-card/40 backdrop-blur border border-accent/30 rounded-2xl p-8 transition-all duration-1000 hover:border-accent/50 hover:scale-105 shadow-[0_0_20px_hsl(45_100%_50%/0.1)] hover:shadow-[0_0_30px_hsl(45_100%_50%/0.2)] ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="text-accent font-bold text-sm mb-4 bg-accent/10 border border-accent/20 rounded-full px-3 py-1 w-fit mx-auto">{item.step}</div>
                  <h4 className="text-xl font-bold mb-2 text-foreground">{item.title}</h4>
                  <div className="text-accent font-semibold text-sm mb-3">{item.subtitle}</div>
                  <p className="text-foreground/70 leading-relaxed mb-4 text-sm">{item.description}</p>
                  <div className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-xs text-foreground/60">
                        <span className="text-accent mr-2">•</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <div className="bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur border border-accent/30 rounded-2xl p-8 mb-8 max-w-4xl mx-auto shadow-[0_0_20px_hsl(45_100%_50%/0.1)]">
                <p className="text-center text-base text-foreground/80 leading-relaxed">
                  A los <span className="font-semibold text-accent">30 días</span> comparamos <em className="text-foreground/60">antes</em> vs <em className="text-accent">después</em> y reportamos mejoras colaterales en otros KPIs.
                </p>
              </div>
              
              <p className="text-center text-base md:text-lg lg:text-xl text-foreground/80 mb-8 font-semibold">
                ¿Qué KPI te duele? Elijamos uno y midamos.
              </p>
              
              <Button
                onClick={scrollToContact}
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-[0_0_20px_hsl(45_100%_50%/0.3)] hover:scale-105 transition-all duration-300 min-h-[48px] sm:min-h-[56px]"
              >
                Agenda una llamada
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
