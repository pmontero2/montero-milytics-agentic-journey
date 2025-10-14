import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { X } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useMobileForm } from "@/hooks/use-mobile-form";

interface FloatingContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  source: string;
}

export const FloatingContactForm = ({ isOpen, onClose, source }: FloatingContactFormProps) => {
  const { scrollToActiveField } = useMobileForm();
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    objetivo: "",
    usa_ia: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      usa_ia: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        nombre: formData.nombre,
        correo: formData.correo,
        telefono: formData.telefono,
        usa_ia: formData.usa_ia,
        objetivo: formData.objetivo,
        timestamp: new Date().toISOString(),
        source: source
      };

      // Enviar al webhook sin esperar respuesta
      fetch("https://dev.milytics.io/webhook/fd96ed9d-73b8-4e68-88c5-ce1e9b264c8f", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      });

      setIsSubmitted(true);
      
      // Cerrar el formulario después de 2 segundos
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({
          nombre: "",
          correo: "",
          telefono: "",
          objetivo: "",
          usa_ia: "",
        });
      }, 2000);

    } catch (error) {
      console.error("Error al enviar formulario:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay oscuro */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Formulario */}
      <div className="relative bg-background border border-accent/20 rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-accent/10 rounded-full transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="text-center mb-6 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                ¡Obtén tu consulta gratis!
              </h3>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                Completa el formulario y nos pondremos en contacto contigo pronto.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-4">
              <div>
                <Label htmlFor="nombre" className="text-sm font-medium">
                  Nombre *
                </Label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={handleInputChange}
                  onFocus={scrollToActiveField}
                  className="mt-1 text-base"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <Label htmlFor="correo" className="text-sm font-medium">
                  Correo electrónico *
                </Label>
                <Input
                  id="correo"
                  name="correo"
                  type="email"
                  required
                  value={formData.correo}
                  onChange={handleInputChange}
                  onFocus={scrollToActiveField}
                  className="mt-1 text-base"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <Label htmlFor="telefono" className="text-sm font-medium">
                  Teléfono *
                </Label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  value={formData.telefono}
                  onChange={handleInputChange}
                  onFocus={scrollToActiveField}
                  className="mt-1 text-base"
                  placeholder="+56 9 1234 5678"
                />
              </div>

              <div>
                <Label className="text-sm font-medium mb-3 block">
                  ¿Utiliza IA actualmente en su negocio? *
                </Label>
                <RadioGroup 
                  value={formData.usa_ia} 
                  onValueChange={handleRadioChange}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="si" id="si" />
                    <Label htmlFor="si" className="text-sm font-normal cursor-pointer">
                      Sí
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="text-sm font-normal cursor-pointer">
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="objetivo" className="text-sm font-medium">
                  ¿Qué buscas lograr? (Opcional)
                </Label>
                <Textarea
                  id="objetivo"
                  name="objetivo"
                  value={formData.objetivo}
                  onChange={handleInputChange}
                  onFocus={scrollToActiveField}
                  className="mt-1 min-h-[100px] sm:min-h-[80px] resize-none text-base"
                  placeholder="Cuéntanos sobre tu proyecto o necesidades..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !formData.usa_ia}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold py-4 sm:py-3 rounded-full disabled:opacity-50 text-base sm:text-sm"
              >
                {isSubmitting ? "Enviando..." : "Enviar consulta"}
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-6 sm:py-8">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
              ¡Gracias por tu consulta!
            </h3>
            <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
              Pronto nos pondremos en contacto contigo.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
