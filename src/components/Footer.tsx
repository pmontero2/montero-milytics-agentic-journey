import { Button } from "./ui/button";
import { Instagram, Linkedin, Mail, MapPin, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logoBmontero from "@/assets/logo-bmontero.png";

export const Footer = () => {
  const navigate = useNavigate();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black border-t border-accent/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <button
              onClick={scrollToTop}
              className="flex items-center mb-6 group"
            >
              <img
                src={logoBmontero}
                alt="BMONTERO Logo"
                className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
              />
            </button>
            
            <p className="text-foreground/80 text-lg mb-6 max-w-md leading-relaxed">
              Transformando negocios tradicionales en organizaciones inteligentes y humanas, impulsadas por agentes de IA.
            </p>
            
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/brinz_._"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-accent/10 rounded-full text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/bmonterop"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-accent/10 rounded-full text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:bmontero@milytics.io"
                className="p-3 bg-accent/10 rounded-full text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-accent font-bold text-lg mb-6">Navegación</h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="text-foreground/70 hover:text-accent transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/empresas-agenticas")}
                  className="text-foreground/70 hover:text-accent transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Empresas Agénticas
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/sobre-mi")}
                  className="text-foreground/70 hover:text-accent transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Sobre Mí
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-accent font-bold text-lg mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-foreground/70 text-sm">Email</p>
                  <a
                    href="mailto:bmontero@milytics.io"
                    className="text-foreground hover:text-accent transition-colors duration-300"
                  >
                    bmontero@milytics.io
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-foreground/70 text-sm">Ubicación</p>
                  <p className="text-foreground">Coquimbo, Chile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom Bar */}
      <div className="border-t border-accent/10 bg-black/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-foreground/50 text-sm">
              © {new Date().getFullYear()} BMONTERO. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <button
                onClick={() => navigate("/politica-privacidad")}
                className="text-foreground/50 hover:text-accent transition-colors duration-300"
              >
                Política de Privacidad
              </button>
              <button
                onClick={() => navigate("/terminos-servicio")}
                className="text-foreground/50 hover:text-accent transition-colors duration-300"
              >
                Términos de Servicio
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
