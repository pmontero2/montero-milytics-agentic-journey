import { GraduationCap, Newspaper, Users, Play, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export const CommunityContent = () => {
  const communityElements = [
    {
      icon: ExternalLink,
      title: "Redes de Milytics",
      subtitle: "Sitio web oficial",
      description: "Conoce más sobre Milytics, nuestros servicios y agenda tu diagnóstico IA totalmente gratis.",
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
      cta: "Visitar sitio web",
      url: "https://arsenal.milytics.io"
    },
    {
      icon: Newspaper,
      title: "Milytics News",
      subtitle: "El noticiero inteligente",
      description: "Las últimas novedades en IA, casos de éxito y herramientas que realmente funcionan.",
      color: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30",
      cta: "Leer noticias",
      url: "https://www.milytics.cl/es/news"
    },
    {
      icon: Users,
      title: "Comunidad Miliciana",
      subtitle: "Discord / Espacio colaborativo",
      description: "Un lugar donde compartimos conocimiento, resolvemos dudas y creamos proyectos juntos.",
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30",
      cta: "Únete al Discord",
      url: "https://discord.gg/dT8KkmQdGT"
    },
    {
      icon: Play,
      title: "Últimos videos",
      subtitle: "YouTube oficial",
      description: "Contenido visual donde explico conceptos complejos de forma simple y práctica.",
      color: "from-orange-500/20 to-orange-600/20",
      borderColor: "border-orange-500/30",
      cta: "Ver videos",
      url: "https://www.youtube.com/@Milytics"
    }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Comunidad y Contenido
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Más allá de vender, comparto conocimiento y creo ecosistema. Aquí está mi comunidad.
            </p>
          </div>

          {/* Community Elements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {communityElements.map((element, index) => {
              const IconComponent = element.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${element.color} rounded-2xl p-8 border ${element.borderColor} hover:scale-105 transition-all duration-300 hover:shadow-lg group`}
                >
                  {/* Header */}
                  <div className="flex items-start mb-6">
                    <div className="flex-1">
                      <IconComponent className="h-8 w-8 text-accent mb-3 group-hover:text-glow-accent transition-colors duration-300" />
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                        {element.title}
                      </h3>
                      <p className="text-white/70 font-medium">
                        {element.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 leading-relaxed mb-6">
                    {element.description}
                  </p>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    className="w-full border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 group"
                    onClick={() => window.open(element.url, '_blank')}
                  >
                    {element.cta}
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>

                  {/* Floating particles */}
                  <div className="absolute top-4 right-4 w-1 h-1 bg-accent/40 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-primary/40 rounded-full animate-ping delay-1000"></div>
                </div>
              );
            })}
          </div>  
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-1 h-1 bg-accent/40 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-primary/40 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-32 left-32 w-1 h-1 bg-accent/40 rounded-full animate-ping delay-3000"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-primary/40 rounded-full animate-ping delay-4000"></div>
      </div>
    </section>
  );
};
