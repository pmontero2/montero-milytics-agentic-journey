import { Bot, RefreshCw, BarChart3, Lightbulb, Building2 } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import agente1Image from "@/assets/agente1.webp";
import agente2Image from "@/assets/agente2.webp";
import agente3Image from "@/assets/agente3.webp";
import agente4Image from "@/assets/agente4.webp";

export const WhatIDo = () => {
  const navigate = useNavigate();

  const goToEmpresasAgenticas = () => {
    navigate("/empresas-agenticas");
  };

  const valueBlocks = [
    {
      icon: Bot,
      title: "Agentes IA y chatbots",
      subtitle: "Comunicación inteligente",
      description:
        "Interfaces que conversan como humanos, entienden contexto y resuelven solicitudes, elevando tiempos de respuesta y satisfacción de clientes.",
      color: "from-sky-500/20 to-sky-600/20",
      borderColor: "border-sky-500/30",
      image: agente1Image
    },
    {
      icon: RefreshCw,
      title: "Automatización operativa",
      subtitle: "Procesos sin fricción",
      description:
        "Flujos que conectan herramientas y equipos para ejecutar tareas repetitivas solos, liberando horas y reduciendo errores operativos.",
      color: "from-emerald-500/20 to-emerald-600/20",
      borderColor: "border-emerald-500/30",
      image: agente2Image
    },
    {
      icon: BarChart3,
      title: "Dashboards y datos útiles",
      subtitle: "Decisiones, no reportes",
      description:
        "Métricas claras y accionables en tiempo real que priorizan lo importante y respaldan decisiones comerciales con evidencia.",
      color: "from-indigo-500/20 to-indigo-600/20",
      borderColor: "border-indigo-500/30",
      image: agente3Image
    },
    {
      icon: Lightbulb,
      title: "Capacitación y estrategia IA",
      subtitle: "Acompañamiento humano",
      description:
        "Formación práctica y acompañamiento en adopción. Integrar IA con propósito, claridad y visión para escalar de forma sostenible.",
      color: "from-amber-500/20 to-amber-600/20",
      borderColor: "border-amber-500/30",
      image: agente4Image
    }
  ];
  

  return (
    <section id="what-i-do" className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Qué hago / Cómo ayudo
            </h2>
            <p className="text-lg md:text-xl text-accent/80 max-w-3xl mx-auto">
              Traduzco mi propósito en acción. Aquí está lo que puedes esperar de mí o de Milytics.
            </p>
          </div>

          {/* Value Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {valueBlocks.map((block, index) => {
              const IconComponent = block.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${block.color} rounded-2xl p-6 border ${block.borderColor} hover:scale-105 transition-all duration-300 hover:shadow-lg group`}
                >
                  {/* Agent Image */}
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <img 
                        src={block.image} 
                        alt={block.title}
                        className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                      {/* Icon overlay */}
                      <div className="absolute -top-2 -right-2 bg-accent/90 rounded-full p-2">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    {/* Header */}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      {block.title}
                    </h3>
                    <p className="text-white/70 font-medium mb-4">
                      {block.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-white/80 leading-relaxed text-sm">
                      {block.description}
                    </p>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute top-4 right-4 w-1 h-1 bg-accent/40 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-primary/40 rounded-full animate-ping delay-1000"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-1 h-1 bg-accent/40 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-primary/40 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-32 left-32 w-1 h-1 bg-accent/40 rounded-full animate-ping delay-3000"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-primary/40 rounded-full animate-ping delay-4000"></div>
      </div>
    </section>
  );
};
