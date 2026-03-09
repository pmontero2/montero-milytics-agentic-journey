import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "🤖 ¿Qué tipo de soluciones desarrollas?",
      answer: "Diseño sistemas que automatizan procesos y comunican datos de forma inteligente. Pueden ser bots, dashboards o flujos que conectan distintas herramientas para que las personas trabajen con menos fricción y más claridad."
    },
    {
      question: "🧠 ¿Necesito saber de IA para trabajar contigo?",
      answer: "No. Mi enfoque es que la IA trabaje para ti, no al revés. Te acompaño paso a paso para que entiendas su valor sin tener que ser técnico ni cambiar tus herramientas actuales."
    },
    {
      question: "⚙️ ¿Qué diferencia hay entre un bot, una automatización y un agente?",
      answer: "Un bot responde o ejecuta acciones puntuales. Una automatización conecta procesos entre distintas áreas. Un agente combina ambos: entiende contexto, toma decisiones simples y aprende con el tiempo. Eso es lo que he implementado en proyectos anteriores."
    },
    {
      question: "📊 ¿En qué etapa puedo aplicar IA en mi empresa?",
      answer: "En cualquier etapa. Si estás empezando, podemos automatizar tareas simples. Si ya usas datos, podemos crear flujos inteligentes o agentes que optimicen decisiones. La clave es comenzar donde más duele y avanzar paso a paso."
    },
    {
      question: "🌱 ¿Cuánto se demora un proyecto?",
      answer: "Depende del alcance, pero la mayoría de los pilotos se implementan en 2 a 6 semanas. La idea es validar rápido, mostrar impacto y escalar cuando el equipo esté listo."
    },
    {
      question: "🤝 ¿Trabajas solo o con un equipo?",
      answer: "He trabajado tanto de forma independiente como liderando equipos. En proyectos anteriores como Milytics, coordiné equipos especializados en datos, automatización y diseño de agentes IA. Adapto mi enfoque según las necesidades del proyecto."
    },
    {
      question: "💬 ¿Puedo agendar una reunión para entender si esto aplica a mi negocio?",
      answer: "Claro. Podemos revisar tus procesos actuales y definir juntos por dónde empezar."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Preguntas Frecuentes
            </h3>
            <p className="text-xl text-white/60 max-w-2xl mx-auto italic">
              "Soluciones simples para preguntas complejas."
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`bg-white/5 backdrop-blur-sm border rounded-3xl overflow-hidden transition-colors duration-500 ${isOpen ? 'border-accent/40 bg-white/10' : 'border-white/5 hover:border-white/10'
                    }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between group"
                  >
                    <span className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-white/80 group-hover:text-white'
                      }`}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className={`transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-white/30 group-hover:text-white/60'}`}
                    >
                      <ChevronDown className="h-6 w-6" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-8 pb-8">
                          <div className="border-t border-white/5 pt-6">
                            <p className="text-white/70 text-lg leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
