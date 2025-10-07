import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
import dashboardImage from "@/assets/dashboard-success.png";

export const FinalPanel = () => {
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

  return (
    <div
      ref={panelRef}
      className="min-h-screen flex items-center justify-center relative gradient-primary"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div className="mb-8 inline-flex items-center gap-3 bg-accent/10 border border-accent/30 rounded-full px-6 py-3">
            <CheckCircle className="h-6 w-6 text-accent" />
            <span className="text-accent font-bold text-lg">Empresa OK</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-glow-accent">
            Tu Empresa Agéntica
          </h2>

          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Una visión completa de tu organización optimizada, funcionando 24/7 con agentes inteligentes
          </p>

          <div
            className={`transition-all duration-1000 delay-300 max-w-5xl mx-auto ${
              isVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-3xl opacity-30"></div>
              <img
                src={dashboardImage}
                alt="Dashboard de éxito"
                className="relative rounded-3xl shadow-2xl w-full h-auto border border-accent/20"
              />
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Leads", value: "↑" },
              { label: "Conversión", value: "↑" },
              { label: "Velocidad", value: "↑" },
              { label: "Eficiencia", value: "↑" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-card/50 backdrop-blur border border-accent/20 rounded-2xl p-6 transition-all duration-1000 hover:scale-105 hover:border-accent/50 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-foreground text-sm uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center">Cómo trabajamos</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Descubrimiento",
                  description: "Identificamos el KPI que más te duele y diseñamos la estrategia.",
                },
                {
                  step: "02",
                  title: "Piloto 2–3 semanas",
                  description: "Implementamos un caso de uso específico y medimos resultados reales.",
                },
                {
                  step: "03",
                  title: "Despliegue + capacitación",
                  description: "Escalamos la solución y entrenamos a tu equipo para la autonomía.",
                },
              ].map((item, index) => (
                <div
                  key={item.step}
                  className={`bg-card/30 backdrop-blur border border-accent/20 rounded-2xl p-8 transition-all duration-1000 hover:border-accent/50 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${900 + index * 100}ms` }}
                >
                  <div className="text-accent/50 text-sm font-bold mb-3">{item.step}</div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">{item.title}</h4>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xl text-foreground/80 mt-12 font-semibold">
              ¿Qué KPI te duele? Elijamos uno y midamos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
