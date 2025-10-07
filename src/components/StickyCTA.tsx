import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const StickyCTA = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
      <Button
        size="lg"
        className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 py-6 rounded-full shadow-[var(--glow-accent)] hover:scale-110 transition-all duration-300"
      >
        Empieza ahora
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};
