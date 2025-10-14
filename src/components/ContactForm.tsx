import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useMobileForm } from "@/hooks/use-mobile-form";

export const ContactForm = () => {
  const { scrollToActiveField } = useMobileForm();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8 sm:py-12">
        <CheckCircle className="h-14 w-14 sm:h-16 sm:w-16 text-accent mx-auto mb-4" />
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">¡Mensaje enviado!</h3>
        <p className="text-sm sm:text-base text-foreground/70 mb-6 leading-relaxed">
          Te contactaremos en las próximas 24 horas para agendar tu llamada.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", company: "", message: "" });
          }}
          variant="outline"
          className="border-accent/30 text-foreground hover:bg-accent/10 px-6 sm:px-8 py-3 text-sm sm:text-base"
        >
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground font-medium text-sm sm:text-base">
            Nombre *
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            onFocus={scrollToActiveField}
            className="bg-card/50 border-accent/30 focus:border-accent focus:ring-accent/20 h-12 sm:h-10 text-base"
            placeholder="Tu nombre completo"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground font-medium text-sm sm:text-base">
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            onFocus={scrollToActiveField}
            className="bg-card/50 border-accent/30 focus:border-accent focus:ring-accent/20 h-12 sm:h-10 text-base"
            placeholder="tu@empresa.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company" className="text-foreground font-medium text-sm sm:text-base">
          Empresa
        </Label>
        <Input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          onFocus={scrollToActiveField}
          className="bg-card/50 border-accent/30 focus:border-accent focus:ring-accent/20 h-12 sm:h-10 text-base"
          placeholder="Nombre de tu empresa"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-foreground font-medium text-sm sm:text-base">
          Mensaje breve
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={scrollToActiveField}
          className="bg-card/50 border-accent/30 focus:border-accent focus:ring-accent/20 min-h-[120px] sm:min-h-[100px] resize-none text-base"
          placeholder="¿Qué KPI te duele más? (leads, conversión, velocidad, operaciones)"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-6 sm:px-8 py-4 text-base sm:text-lg rounded-full shadow-[0_0_20px_hsl(45_100%_50%/0.3)] hover:scale-105 transition-all duration-300"
      >
        {isSubmitting ? (
          "Enviando..."
        ) : (
          <>
            Agenda una llamada
            <ArrowRight className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  );
};
