import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="bg-card/30 backdrop-blur border-t border-accent/20 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-accent font-bold text-lg mb-2">Milytics</div>
            <div className="text-foreground/60 text-sm">
              Empresas Agénticas · IA y Automatización
            </div>
          </div>
          
          <div className="flex gap-6">
            <Button
              variant="ghost"
              className="text-foreground/70 hover:text-accent transition-colors"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/brianmontero"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
            <Button
              variant="ghost"
              className="text-foreground/70 hover:text-accent transition-colors"
              asChild
            >
              <a
                href="https://milytics.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Milytics
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-accent/10 text-center text-foreground/50 text-sm">
          © {new Date().getFullYear()} Brian Montero. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
