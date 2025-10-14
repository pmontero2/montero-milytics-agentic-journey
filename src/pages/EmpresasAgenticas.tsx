import { Navbar } from "@/components/Navbar";
import { HeroEmpresas } from "@/components/HeroEmpresas";
import { AgenticConcept } from "@/components/AgenticConcept";
import { StickyFunnelLayoutEmpresas } from "@/components/StickyFunnelLayoutEmpresas";
import { StickyCTA } from "@/components/StickyCTA";
import { CTASection } from "@/components/CTASection";
import { ScrollProgressEmpresas } from "@/components/ScrollProgressEmpresas";
import { Testimonial } from "@/components/Testimonial";
import { Footer } from "@/components/Footer";
import { WorkflowSection } from "@/components/WorkflowSection";
import { FAQEmpresas } from "@/components/FAQEmpresas";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

import agente1Image from "@/assets/agente1.webp";
import agente2Image from "@/assets/agente2.webp";
import agente3Image from "@/assets/agente3.webp";
import agente4Image from "@/assets/agente4.webp";

const EmpresasAgenticas = () => {
  useScrollToTop();

  const panels = [
    {
      title: "Automatización de Leads",
      subtitle: "Más leads, menos ruido",
      description: "Detectamos, calificamos y priorizamos prospectos en automático. Tu equipo habla solo con quienes tienen intención real.",
      bullets: [
        "Captura omnicanal (web, WhatsApp, Instagram, LinkedIn)",
        "Scoring en tiempo real según fit e intención",
        "Enrutamiento a ventas con contexto y próximos pasos"
      ],
      imageSrc: agente1Image,
    },
    {
      title: "Optimización de Conversiones",
      subtitle: "Convierte mejor con datos",
      description: "Probamos mensajes, ofertas y timing de seguimiento. Cada interacción aprende para cerrar más rápido.",
      bullets: [
        "Nurturing personalizado por segmento y etapa",
        "A/B/n de copys y propuestas sin fricción",
        "Recuperación de carritos/cotizaciones y follow-ups inteligentes"
      ],
      imageSrc: agente2Image,
    },
    {
      title: "Respuesta Instantánea 24/7",
      subtitle: "Atención en minutos, siempre",
      description: "Agentes que responden fuera de horario, resuelven dudas frecuentes y agendan automáticamente.",
      bullets: [
        "FAQ, precios, stock y políticas con fuentes verificables",
        "Escalamiento a humano cuando corresponde",
        "Integración con calendario y CRM"
      ],
      imageSrc: agente3Image,
    },
    {
      title: "Operaciones Continuas",
      subtitle: "Back-office que no duerme",
      description: "Automatizamos inventario, compras, conciliaciones y reportes. Menos tareas repetitivas, más control.",
      bullets: [
        "Órdenes y stocks sincronizados entre sistemas",
        "Alertas de quiebre y proyección de demanda",
        "Reportes operativos diarios automáticos"
      ],
      imageSrc: agente4Image,
    },
  ];

  return (
    <div className="overflow-y-auto">
      <Navbar />
      <HeroEmpresas />
      
      {/* El concepto: Empresas Agénticas */}
      <div id="concepto">
        <AgenticConcept />
      </div>
      
      <div id="scrollytelling">
        <StickyFunnelLayoutEmpresas panels={panels} />
        
      </div>

      <div id="workflow">
        <WorkflowSection />
      </div>

      <FAQEmpresas />
      <CTASection />
      
      <Footer />
      
      <ScrollProgressEmpresas />
      <StickyCTA />

    </div>
  );
};

export default EmpresasAgenticas;
