import { Bot, RefreshCw, BarChart3, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import agente1Image from "@/assets/agente1.webp";
import agente2Image from "@/assets/agente2.webp";
import agente3Image from "@/assets/agente3.webp";
import agente4Image from "@/assets/agente4.webp";

export const WhatIDo = () => {
  const valueBlocks = [
    {
      icon: Bot,
      title: "Agentes IA y chatbots",
      subtitle: "Comunicación inteligente",
      description:
        "Interfaces que conversan como humanos, entienden contexto y resuelven solicitudes, elevando tiempos de respuesta y satisfacción de clientes.",
      color: "from-sky-500/10 to-sky-600/10",
      borderColor: "border-sky-500/20",
      image: agente1Image
    },
    {
      icon: RefreshCw,
      title: "Automatización operativa",
      subtitle: "Procesos sin fricción",
      description:
        "Flujos que conectan herramientas y equipos para ejecutar tareas repetitivas solos, liberando horas y reduciendo errores operativos.",
      color: "from-emerald-500/10 to-emerald-600/10",
      borderColor: "border-emerald-500/20",
      image: agente2Image
    },
    {
      icon: BarChart3,
      title: "Dashboards y datos útiles",
      subtitle: "Decisiones, no reportes",
      description:
        "Métricas claras y accionables en tiempo real que priorizan lo importante y respaldan decisiones comerciales con evidencia.",
      color: "from-indigo-500/10 to-indigo-600/10",
      borderColor: "border-indigo-500/20",
      image: agente3Image
    },
    {
      icon: Lightbulb,
      title: "Capacitación y estrategia IA",
      subtitle: "Acompañamiento humano",
      description:
        "Formación práctica y acompañamiento en adopción. Integrar IA con propósito, claridad y visión para escalar de forma sostenible.",
      color: "from-amber-500/10 to-amber-600/10",
      borderColor: "border-amber-500/20",
      image: agente4Image
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="what-i-do" className="py-24 bg-black relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.05, 0.2, 0.05],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 3 }}
          className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-primary/20 rounded-full blur-[150px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Qué hago / Cómo ayudo
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-white/60 max-w-3xl mx-auto"
            >
              Soluciones tecnológicas diseñadas para escalar tu impacto y optimizar tu tiempo.
            </motion.p>
          </div>

          {/* Value Blocks Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {valueBlocks.map((block, index) => {
              const IconComponent = block.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className={`bg-gradient-to-br ${block.color} rounded-3xl p-8 border border-white/5 backdrop-blur-md relative group overflow-hidden hover:border-white/20 transition-colors duration-500`}
                >
                  {/* Subtle hover splash */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    {/* Agent Image & Icon */}
                    <div className="mb-8 flex justify-center">
                      <div className="relative">
                        <motion.div
                          animate={{
                            y: [0, -10, 0]
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5
                          }}
                        >
                          <img
                            src={block.image}
                            alt={block.title}
                            className="w-32 h-32 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                          />
                        </motion.div>
                        <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground rounded-2xl p-3 shadow-xl">
                          <IconComponent className="h-6 w-6" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                        {block.title}
                      </h3>
                      <p className="text-accent/80 font-semibold mb-4 text-sm tracking-wider uppercase">
                        {block.subtitle}
                      </p>
                      <p className="text-white/70 leading-relaxed text-base">
                        {block.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
