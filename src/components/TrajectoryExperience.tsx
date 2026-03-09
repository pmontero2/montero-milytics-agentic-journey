import {
  GraduationCap,
  FlaskConical,
  Bot,
  Network,
  Workflow,
  Sparkles
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      color: "from-sky-500/10 to-sky-600/10",
      borderColor: "border-sky-500/20"
    },
    {
      icon: FlaskConical,
      title: "Investigación IoT en Acuicultura",
      subtitle: "Boyas LoRa + sensores (pH, OD, CE, turbidez)",
      period: "May–Jun 2023",
      description:
        "Validé sistemas de telemetría marina y calidad de datos en entornos reales. Aprendí cómo la precisión técnica puede mejorar sostenibilidad y eficiencia operativa.",
      color: "from-teal-500/10 to-teal-600/10",
      borderColor: "border-teal-500/20"
    },
    {
      icon: Bot,
      title: "Práctica Cloud Engineer",
      subtitle: "Sixbell (Sixtra SA) — AWS Lambda, microservicios y automatización",
      period: "Abr 2024 – Jun 2024",
      description:
        "Automaticé encuestas post atención con AWS Lambda y APIs de Genesys Cloud. Desarrollé interfaz web en Node.js + Express para estandarizar infraestructura EPA. Integré microservicios y flujos serverless para optimizar operación interna. Apoyé en despliegues cloud y procesos de automatización.",
      color: "from-indigo-500/10 to-indigo-600/10",
      borderColor: "border-indigo-500/20"
    },
    {
      icon: Network,
      title: "Proyecto de Título: IoT + Blockchain",
      subtitle: "Hyperledger Besu, Smart Contracts, EV energy sharing",
      period: "Abr–Dic 2024",
      description:
        "Desarrollé una plataforma trazable para intercambio energético entre vehículos eléctricos, integrando IoT y blockchain con enfoque en transparencia y sostenibilidad.",
      color: "from-amber-500/10 to-amber-600/10",
      borderColor: "border-amber-500/20"
    },
    {
      icon: Workflow,
      title: "Líder de Integraciones y Automatización",
      subtitle: "Ventastore Chile SPA — Dashboards, automatización y reducción de tareas",
      period: "May 2025 – Jul 2025",
      description:
        "Desarrollé dashboard logístico con ODT y ZPL, reduciendo confirmación de pedidos en 80%. Creé dashboard de ventas con proyecciones a 6+ meses, reduciendo quiebres de stock en 30%. Automatización de cierre de caja con AppSheet logrando 100% trazabilidad. Bots internos para seguridad y métricas, reduciendo tareas repetitivas en 70%.",
      color: "from-emerald-500/10 to-emerald-600/10",
      borderColor: "border-emerald-500/20"
    },
    {
      icon: Sparkles,
      title: "Ingeniero de Integraciones y Automatización",
      subtitle: "MILYTICS SPA — Backend, APIs, IA y arquitectura serverless",
      period: "Jul 2025 – Dic 2025",
      description:
        "Desarrollé integraciones backend y APIs para ventas, logística y operaciones internas. Implementé dashboards en tiempo real con Supabase, arquitectura serverless con Node.js y Edge Functions, y automatización inteligente con IA (embeddings, RAG, agentes) para reducir tareas manuales significativamente.",
      color: "from-fuchsia-500/10 to-fuchsia-600/10",
      borderColor: "border-fuchsia-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="trajectory" className="py-20 bg-black relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Trayectoria y Experiencia
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto"
            >
              Un camino forjado entre la academia, la investigación y la industria tecnológica.
            </motion.p>
          </div>

          {/* Timeline Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {timelineItems.map((item, index) => {
              const IconComponent = item.icon;
              const isExpanded = expandedCard === index;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  layout
                  className={`bg-gradient-to-br ${item.color} rounded-2xl border ${item.borderColor} backdrop-blur-sm transition-all duration-300 cursor-pointer overflow-hidden border-white/5 hover:border-white/20`}
                  onClick={() => setExpandedCard(isExpanded ? null : index)}
                  onMouseEnter={() => setExpandedCard(index)}
                  onMouseLeave={() => setExpandedCard(null)}
                >
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="p-3 rounded-xl bg-white/5 text-accent flex-shrink-0">
                          <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                            <h3 className="text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                            <span className="text-[10px] uppercase tracking-wider font-bold text-accent/80 bg-accent/10 px-2 py-0.5 rounded-full">
                              {item.period}
                            </span>
                          </div>
                          <p className="text-white/60 text-sm sm:text-base font-medium">{item.subtitle}</p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className="text-white/30 p-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="pt-6 mt-6 border-t border-white/5">
                            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-3xl p-8 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[50px] rotate-45 transform translate-x-16 -translate-y-16 group-hover:bg-accent/20 transition-colors" />
              <p className="text-lg sm:text-xl text-white/90 font-medium leading-relaxed italic relative z-10">
                "La tecnología debe ser el puente entre los problemas complejos y las soluciones humanas simples."
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="h-px w-8 bg-accent/30" />
                <cite className="text-sm font-bold text-accent tracking-widest uppercase not-italic">Brian Montero</cite>
                <div className="h-px w-8 bg-accent/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
