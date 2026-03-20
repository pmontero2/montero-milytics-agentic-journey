import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { FloatingContactForm } from "./FloatingContactForm";
import { motion } from "framer-motion";

export const CTASection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <section id="contact" className="bg-black py-24 relative overflow-hidden border-t border-white/5">
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/30 rounded-full blur-[150px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-8">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-bold tracking-widest uppercase">Tu próximo paso</span>
          </div>

          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            ¿Listo para transformar <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">tu negocio con IA?</span>
          </h3>

          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Hablemos sobre tus procesos actuales y descubramos juntos cómo la automatización inteligente puede liberar el potencial de tu equipo.
          </p>

          <Button
            onClick={openForm}
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-12 py-8 text-xl rounded-full shadow-[0_0_40px_rgba(var(--accent),0.4)] hover:scale-105 transition-all duration-300 group"
          >
            Hablemos
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>

          <p className="mt-8 text-white/40 text-sm">
            Sin compromisos. Solo una charla estratégica de 15 minutos.
          </p>
        </motion.div>
      </div>

      <FloatingContactForm
        isOpen={isFormOpen}
        onClose={closeForm}
        source="brinz landing"
      />
    </section>
  );
};
