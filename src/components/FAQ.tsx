import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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
    <div className="bg-card/30 border-t border-accent/20 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">
            Preguntas Frecuentes
          </h3>
          
          <p className="text-lg text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Si aún tienes dudas sobre cómo puedo ayudarte, aquí te dejo algunas respuestas claras.
          </p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur border border-accent/20 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-accent/5 transition-colors duration-300"
                >
                  <span className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-accent" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-foreground/60" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-foreground/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
