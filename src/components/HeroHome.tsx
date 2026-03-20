import { ArrowDown, Building2, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FloatingContactForm } from "./FloatingContactForm";
import brinziImage from "@/assets/bzy2.webp";
import { motion, useReducedMotion } from "framer-motion";

export const HeroHome = () => {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const scrollToVision = () => {
    document.getElementById("vision-purpose")?.scrollIntoView({ behavior: "smooth" });
  };

  const goToEmpresasAgenticas = () => {
    navigate("/empresas-agenticas");
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transition: { duration: 0.8, ease: "easeOut" as any },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ease: [0.6, 0.01, 0.05, 0.95] as any,
        delay: 0.2
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-primary pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={
            shouldReduceMotion
              ? { scale: 1, opacity: 0.2 }
              : {
                  scale: [1, 1.2, 1],
                  opacity: [0.15, 0.32, 0.15],
                }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }
          className="absolute top-1/4 left-1/4 w-[420px] h-[420px] md:w-[500px] md:h-[500px] bg-accent/40 rounded-full blur-[90px] will-change-transform"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? { scale: 1, opacity: 0.18 }
              : {
                  scale: [1.2, 1, 1.2],
                  opacity: [0.1, 0.28, 0.1],
                }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }
          className="absolute bottom-1/4 right-1/4 w-[460px] h-[460px] md:w-[560px] md:h-[560px] bg-primary/40 rounded-full blur-[105px] will-change-transform"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 mt-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative flex flex-col lg:flex-row items-center justify-center lg:items-center gap-8 lg:gap-16 pt-8"
        >
          {/* Left Column - Image */}
          <motion.div
            variants={imageVariants}
            className="flex-shrink-0 z-10 mb-8 lg:mb-0 relative"
          >
            <motion.div
              animate={shouldReduceMotion ? { y: 0 } : { y: [0, -10, 0] }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }
              className="will-change-transform"
            >
              <div className="absolute -inset-4 bg-accent/20 rounded-full blur-2xl opacity-60 animate-pulse" />
              <img
                src={brinziImage}
                alt="Brian Montero"
                className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-80 lg:h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-10"
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="flex-1 text-center lg:text-left relative z-20">
            {/* Main Headlines */}
            <div className="mb-8 lg:mb-10">
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 text-white leading-tight tracking-tight"
              >
                Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Brian Montero</span>
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-4 sm:mb-6 text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Ayudo a personas y empresas a entender y aplicar la <span className="text-accent font-bold">inteligencia artificial</span> de forma <span className="text-accent font-bold">simple y útil</span>.
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8"
              >
                Desarrollo <span className="text-white font-semibold">integraciones y sistemas</span> que automatizan <span className="text-white font-semibold">tareas manuales</span>.
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-6 sm:mb-8"
            >
              <Button
                onClick={openForm}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base sm:text-lg px-8 py-6 rounded-full shadow-[0_0_30px_rgba(var(--accent),0.3)] hover:scale-105 transition-all duration-300 group w-full sm:w-auto"
              >
                <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Hablemos
              </Button>
              <Button
                onClick={goToEmpresasAgenticas}
                variant="outline"
                size="lg"
                className="border-white/25 bg-white/[0.03] text-white hover:text-white hover:bg-white/15 hover:border-white/40 font-semibold text-base sm:text-lg px-8 py-6 rounded-full hover:scale-105 transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_14px_36px_rgba(0,0,0,0.35)] group w-full sm:w-auto"
              >
                <Building2 className="mr-2 h-5 w-5 group-hover:scale-110 group-hover:translate-x-0.5 transition-transform duration-300" />
                Ver Empresas Agénticas
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-white/40 hover:text-white/80 transition-colors"
        onClick={scrollToVision}
      >
        <span className="text-xs uppercase tracking-widest font-medium">Explorar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.div>

      <FloatingContactForm
        isOpen={isFormOpen}
        onClose={closeForm}
        source="hero home"
      />
    </section>
  );
};

