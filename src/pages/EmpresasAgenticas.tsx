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
      
      {/* Introducción a los agentes trabajando en conjunto */}
      <div id="servicios" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-primary">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/50 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-ping delay-1000"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-primary rounded-full animate-ping delay-2000"></div>
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-accent rounded-full animate-ping delay-3000"></div>
          <div className="absolute bottom-20 right-10 w-3 h-3 bg-primary rounded-full animate-ping delay-4000"></div>
        </div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/80 lg:from-background/90 lg:via-background/80 lg:to-background/90"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-glow-accent">
              Nuestros Agentes Trabajan en <span className="text-accent">Conjunto</span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Cada agente tiene una especialidad única, pero todos están conectados para crear una experiencia fluida y eficiente. 
              Cuando un agente completa su tarea, automáticamente pasa la información al siguiente, creando un flujo de trabajo 
              perfectamente sincronizado que nunca se detiene.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl p-6 shadow-2xl border border-accent/30 backdrop-blur-sm">
                <div className="text-accent text-3xl font-bold mb-3">01</div>
                <h3 className="text-xl font-semibold text-glow-accent mb-3">Captura</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">Detecta y califica leads automáticamente</p>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl p-6 shadow-2xl border border-accent/30 backdrop-blur-sm">
                <div className="text-accent text-3xl font-bold mb-3">02</div>
                <h3 className="text-xl font-semibold text-glow-accent mb-3">Convierte</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">Optimiza cada interacción para cerrar más</p>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl p-6 shadow-2xl border border-accent/30 backdrop-blur-sm">
                <div className="text-accent text-3xl font-bold mb-3">03</div>
                <h3 className="text-xl font-semibold text-glow-accent mb-3">Atiende</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">Responde 24/7 con información precisa</p>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl p-6 shadow-2xl border border-accent/30 backdrop-blur-sm">
                <div className="text-accent text-3xl font-bold mb-3">04</div>
                <h3 className="text-xl font-semibold text-glow-accent mb-3">Opera</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">Mantiene todo funcionando sin interrupciones</p>
              </div>
            </div>
          </div>
        </div>
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
