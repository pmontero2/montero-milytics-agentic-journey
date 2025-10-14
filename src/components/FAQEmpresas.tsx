import { useEffect, useMemo, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQ = { question: string; answer: string };

const defaultFaqs: FAQ[] = [
    {
      question: "¿Qué es una Empresa Agéntica?",
      answer:
        "Es una organización donde personas, procesos y agentes de IA (inteligencia artificial) trabajan juntos. No reemplazamos humanos; los potenciamos para lo estratégico mientras la IA se encarga de lo operativo."
    },
    {
      question: "¿Cuánto tiempo toma implementar agentes de IA?",
      answer:
        "Un piloto funcional toma 2–3 semanas. La implementación completa depende del alcance; partimos por casos de uso medibles para mostrar ROI (retorno de inversión) rápido."
    },
    {
      question: "¿Necesito cambiar mi infraestructura actual?",
      answer:
        "No. Integramos con tus sistemas existentes (CRM/ERP/bases de datos). Si hace falta, usamos conectores o APIs (interfaces de programación) sin migraciones forzadas."
    },
    {
      question: "¿Cómo garantizan la seguridad de los datos?",
      answer:
        "Usamos cifrado end-to-end (en origen y destino), control de acceso RBAC (roles) y prácticas de DLP (prevención de fuga de datos), cumpliendo GDPR/LGPD (normativas de datos) según corresponda."
    },
    {
      question: "¿Qué pasa si el agente comete errores?",
      answer:
        "Los agentes tienen límites claros y escalan a un humano cuando corresponde (fallback). Llevamos trazabilidad (logs y auditoría) para corregir y mejorar."
    },
    {
      question: "¿Cómo capacitan a mi equipo?",
      answer:
        "Incluimos talleres prácticos, documentación y runbooks (guías operativas) para que tu equipo gestione y optimice los agentes de forma autónoma."
    },
    {
      question: "¿Qué ROI puedo esperar?",
      answer:
        "Típicamente vemos 40–60% menos tiempo en tareas repetitivas, 25–35% más rapidez de respuesta y 20–30% más satisfacción del cliente en ~3 meses (según caso)."
    },
    {
      question: "¿Trabajan con empresas de cualquier tamaño?",
      answer:
        "Sí. Adaptamos alcance, presupuesto y roadmap (plan de evolución) a tu etapa: startup, pyme o corporación."
    },
    // Extras útiles y cortitos
    {
      question: "¿On-premise o nube?",
      answer:
        "Ambas opciones. On-premise (en tus servidores) o cloud (proveedor externo) según seguridad, latencia y costos. También hacemos despliegues híbridos."
    },
    {
      question: "¿Quién es dueño de mis datos y prompts?",
      answer:
        "Siempre tú. Entregamos exportables y evitamos vendor lock-in (dependencia forzada del proveedor)."
    },
    {
      question: "¿Cómo evitan alucinaciones?",
      answer:
        "Usamos RAG (búsqueda + generación) para dar contexto confiable, políticas de validación y revisión humana en decisiones sensibles."
    },
    {
      question: "¿Con qué sistemas se integran?",
      answer:
        "CRM/ERP, WhatsApp/Meta, correo y bases SQL/NoSQL. Si falta un conector, lo construimos via API (interfaz de programación)."
    },
    {
      question: "¿Costos y SLAs?",
      answer:
        "Transparencia en uso de APIs/infra (costos variables) + servicio. Definimos SLAs (acuerdos de nivel de servicio) por criticidad."
    },
    {
      question: "¿Qué necesito para empezar?",
      answer:
        "Accesos mínimos, un dueño de proceso y un dataset (conjunto de datos) de ejemplo para validar KPIs (indicadores clave) del piloto."
    }
  ];
  

export const FAQEmpresas = ({ faqs = defaultFaqs }: { faqs?: FAQ[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Abrir por hash (ej: #faq-3)
  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (hash?.startsWith("#faq-")) {
      const idx = Number(hash.replace("#faq-", ""));
      if (!Number.isNaN(idx) && idx >= 0 && idx < faqs.length) setOpenIndex(idx);
    }
  }, [faqs.length]);

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  }), [faqs]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.hash = `faq-${index}`;
      history.replaceState(null, "", url.toString());
    }
  };

  return (
    <section id="faq" className="bg-card/30 border-t border-accent/20 py-16" aria-labelledby="faq-heading">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h3 id="faq-heading" className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">
            Preguntas sobre Empresas Agénticas
          </h3>

          <p className="text-lg text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre la transición hacia una empresa agéntica.
          </p>

          {/* JSON-LD for SEO */}
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const btnId = `faq-button-${index}`;
              return (
                <div key={index} className="bg-card/50 backdrop-blur border border-accent/20 rounded-2xl overflow-hidden">
                  <button
                    id={btnId}
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-accent/5 transition-colors duration-300"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="text-lg font-semibold text-foreground">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-accent" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-foreground/60" />
                    )}
                  </button>

                  {isOpen && (
                    <div id={panelId} role="region" aria-labelledby={btnId} className="px-6 pb-6">
                      <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
