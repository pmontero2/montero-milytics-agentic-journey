import { Bot, MessageCircle, BarChart3, Sprout } from "lucide-react";

export const MiniServicesSection = () => {
  const services = [
    {
      icon: Bot,
      emoji: "🤖",
      title: "Automatización simple",
      description: "Procesos que funcionan sin complicaciones"
    },
    {
      icon: MessageCircle,
      emoji: "💬",
      title: "Chatbots humanos",
      description: "Conversaciones naturales y útiles"
    },
    {
      icon: BarChart3,
      emoji: "📊",
      title: "Métricas accionables",
      description: "Datos que realmente importan"
    },
    {
      icon: Sprout,
      emoji: "🌱",
      title: "Crecimiento con propósito",
      description: "Escalar sin perder el rumbo"
    }
  ];

  return (
    <section id="mini-sections" className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
            Lo que hago, explicado simple
          </h2>
          <p className="text-accent/80 max-w-2xl mx-auto">
            Da una idea de lo que hago sin que tengas que pensar demasiado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.emoji}
                  </div>
                  
                  <IconComponent className="h-8 w-8 mx-auto mb-3 text-accent group-hover:text-glow-accent transition-colors duration-300" />
                  
                  <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-glow-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-accent/70 group-hover:text-accent/90 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Floating particles */}
                <div className="absolute top-2 right-2 w-1 h-1 bg-accent/30 rounded-full animate-ping delay-1000"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-primary/30 rounded-full animate-ping delay-2000"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
