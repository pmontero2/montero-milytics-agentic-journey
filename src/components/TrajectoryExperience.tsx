import {
  GraduationCap,
  FlaskConical,
  Bot,
  Network,
  Workflow,
  Sparkles
} from "lucide-react";
import { useState } from "react";
export const TrajectoryExperience = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  
  const timelineItems = [
    {
      icon: GraduationCap,
      title: "Ingeniería Civil Telemática",
      subtitle: "UTFSM — Sistemas, redes y automatización",
      period: "2018–2024",
      description:
        "Desarrollé una visión integral: planificar, diseñar, programar y liderar soluciones que conectan hardware, software y datos para resolver problemas reales con propósito humano.",
      color: "from-sky-500/20 to-sky-600/20",
      borderColor: "border-sky-500/30"
    },
    {
      icon: FlaskConical,
      title: "Investigación IoT en Acuicultura",
      subtitle: "Boyas LoRa + sensores (pH, OD, CE, turbidez)",
      period: "May–Jun 2023",
      description:
        "Validé sistemas de telemetría marina y calidad de datos en entornos reales. Aprendí cómo la precisión técnica puede mejorar sostenibilidad y eficiencia operativa.",
      color: "from-teal-500/20 to-teal-600/20",
      borderColor: "border-teal-500/30"
    },
    {
      icon: Bot,
      title: "Automatización y Sistemas Conversacionales",
      subtitle: "Sixbell — WhatsApp/Telegram, AWS, Genesys Cloud",
      period: "2021 y 2024",
      description:
        "Diseñé bots y flujos automatizados enfocados en productividad y empatía. Confirmé que la tecnología funciona mejor cuando se adapta a las personas, no al revés.",
      color: "from-indigo-500/20 to-indigo-600/20",
      borderColor: "border-indigo-500/30"
    },
    {
      icon: Network,
      title: "Proyecto de Título: IoT + Blockchain",
      subtitle: "Hyperledger Besu, Smart Contracts, EV energy sharing",
      period: "Abr–Dic 2024",
      description:
        "Desarrollé una plataforma trazable para intercambio energético entre vehículos eléctricos, integrando IoT y blockchain con enfoque en transparencia y sostenibilidad.",
      color: "from-amber-500/20 to-amber-600/20",
      borderColor: "border-amber-500/30"
    },
    {
      icon: Workflow,
      title: "Líder de Integraciones y Automatización",
      subtitle: "Venta Store Chile — Operaciones, IA y analítica",
      period: "May–Ago 2025",
      description:
        "Implementé pipelines no-code, dashboards y bots que mejoraron la visibilidad operativa. Logramos equipos más ágiles y procesos centrados en la experiencia humana.",
      color: "from-emerald-500/20 to-emerald-600/20",
      borderColor: "border-emerald-500/30"
    },
    {
      icon: Sparkles,
      title: "Fundación de Milytics",
      subtitle: "De la ingeniería a la inteligencia operativa",
      period: "2024–Presente",
      description:
        "Consolidé todo lo aprendido para crear Milytics: una agencia que impulsa Empresas Agénticas, donde personas y agentes de IA colaboran para generar impacto real y sostenible.",
      color: "from-fuchsia-500/20 to-fuchsia-600/20",
      borderColor: "border-fuchsia-500/30"
    }
  ];
  return (
    <section id="trajectory" className="py-12 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 relative overflow-hidden">
      {/* Background decorative elements - simplified */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-accent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-primary rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header - more compact */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Mi Trayectoria y Experiencia
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto">
              Mi visión está respaldada por experiencia real. Te cuento mi camino paso a paso.
            </p>
          </div>

          {/* Timeline - Single column with expandable cards */}
          <div className="space-y-4">
            {timelineItems.map((item, index) => {
              const IconComponent = item.icon;
              const isExpanded = expandedCard === index;
              
              return (
                <div 
                  key={index} 
                  className={`bg-gradient-to-br ${item.color} rounded-xl border ${item.borderColor} transition-all duration-300 cursor-pointer group`}
                  onClick={() => setExpandedCard(isExpanded ? null : index)}
                  onMouseEnter={() => setExpandedCard(index)}
                  onMouseLeave={() => setExpandedCard(null)}
                >
                  {/* Card Header - Always visible */}
                  <div className="p-3 sm:p-4 px-4 sm:px-6">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start min-w-0 flex-1">
                        <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-accent mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm sm:text-lg font-semibold text-white leading-tight mb-1">{item.title}</h3>
                          <p className="text-yellow-300/70 text-xs sm:text-sm font-medium leading-tight">{item.subtitle}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                        <span className="text-xs text-accent/60 bg-accent/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
                          {item.period}
                        </span>
                        <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-accent/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expandable Content */}
                  <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-3 sm:px-4 pb-3 sm:pb-4">
                      <div className="border-t border-white/10 pt-3 sm:pt-4">
                        <p className="text-white/80 text-xs sm:text-sm leading-relaxed italic">
                          "{item.description}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Quote - compact & semantic */}
<div className="mt-8 sm:mt-10 text-center">
  <blockquote className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-4 sm:p-6 border border-accent/20 max-w-3xl mx-auto">
    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
      De la teoría a la práctica
    </h3>
    <p className="text-sm sm:text-base text-white/80 leading-relaxed">
      La tecnología vale cuando <span className="text-white">libera a las personas</span>. 
      No es solo usar herramientas, es saber <span className="text-white">cuándo y cómo aplicarlas</span> para crear impacto real.
    </p>
    <cite className="mt-2 sm:mt-3 block text-xs sm:text-sm text-white/50 not-italic">Brian Montero</cite>
  </blockquote>
</div>

        </div>
      </div>
    </section>
  );
};
