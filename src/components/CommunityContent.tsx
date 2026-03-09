import { Newspaper, Users, Play, ExternalLink, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const CommunityContent = () => {
  const communityElements = [
    {
      icon: Linkedin,
      title: "LinkedIn",
      subtitle: "Perfil profesional",
      description: "Conecta conmigo y conoce más sobre mi experiencia en tecnología, automatización e IA.",
      color: "from-blue-500/10 to-blue-600/10",
      borderColor: "border-blue-500/20",
      cta: "Ver perfil",
      url: "https://www.linkedin.com/in/bmonterop"
    },
    {
      icon: Newspaper,
      title: "Milytics News",
      subtitle: "El noticiero inteligente",
      description: "Las últimas novedades en IA, casos de éxito y herramientas que realmente funcionan.",
      color: "from-green-500/10 to-green-600/10",
      borderColor: "border-green-500/20",
      cta: "Leer noticias",
      url: "https://www.milytics.cl/es/news"
    },
    {
      icon: Users,
      title: "Comunidad Miliciana",
      subtitle: "Discord / Espacio colaborativo",
      description: "Un lugar donde compartimos conocimiento, resolvemos dudas y creamos proyectos juntos.",
      color: "from-purple-500/10 to-purple-600/10",
      borderColor: "border-purple-500/20",
      cta: "Únete al Discord",
      url: "https://discord.gg/dT8KkmQdGT"
    },
    {
      icon: Play,
      title: "Últimos videos",
      subtitle: "YouTube oficial",
      description: "Contenido visual donde explico conceptos complejos de forma simple y práctica.",
      color: "from-orange-500/10 to-orange-600/10",
      borderColor: "border-orange-500/20",
      cta: "Ver videos",
      url: "https://www.youtube.com/@Milytics"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="community" className="py-24 bg-black relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Comunidad y Contenido
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto"
            >
              Comparto conocimiento y creo ecosistema. Aquí está mi red.
            </motion.p>
          </div>

          {/* Community Elements Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {communityElements.map((element, index) => {
              const IconComponent = element.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`bg-gradient-to-br ${element.color} rounded-3xl p-8 border border-white/5 backdrop-blur-md relative group overflow-hidden hover:border-white/20 transition-colors duration-500 flex flex-col h-full`}
                >
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start mb-6 gap-4">
                      <div className="p-4 rounded-2xl bg-white/5 text-accent">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                          {element.title}
                        </h3>
                        <p className="text-accent/70 font-semibold text-sm tracking-wide uppercase">
                          {element.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 leading-relaxed mb-8 flex-grow text-lg">
                      {element.description}
                    </p>

                    {/* CTA */}
                    <Button
                      variant="outline"
                      className="w-full border-white/10 text-white hover:bg-accent hover:border-accent hover:text-accent-foreground font-bold py-6 rounded-2xl transition-all duration-300 group"
                      onClick={() => window.open(element.url, '_blank')}
                    >
                      {element.cta}
                      <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </Button>
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
