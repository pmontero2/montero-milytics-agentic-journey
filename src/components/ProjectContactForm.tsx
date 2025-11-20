import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { X } from "lucide-react";
import { useMobileForm } from "@/hooks/use-mobile-form";

interface ProjectContactFormProps {
    isOpen: boolean;
    onClose: () => void;
    projectName: string;
    projectDescription?: string;
}

export const ProjectContactForm = ({
    isOpen,
    onClose,
    projectName,
    projectDescription = "un proyecto similar"
}: ProjectContactFormProps) => {
    const { scrollToActiveField } = useMobileForm();
    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        telefono: "",
        empresa: "",
        mensaje: "",
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const payload = {
                nombre: formData.nombre,
                correo: formData.correo,
                telefono: formData.telefono,
                empresa: formData.empresa,
                mensaje: formData.mensaje,
                proyecto_interes: projectName,
                timestamp: new Date().toISOString(),
                source: `Project Contact - ${projectName}`
            };

            // Enviar al webhook sin esperar respuesta
            const webhookUrl = import.meta.env.WEBHOOK;

            if (!webhookUrl) {
                if (import.meta.env.DEV) {
                    console.error("Webhook URL no configurada");
                }
                return;
            }

            fetch(webhookUrl, {
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
                    empresa: "",
                    mensaje: "",
                });
            }, 2000);

        } catch (error) {
            if (import.meta.env.DEV) {
                console.error("Error al enviar formulario:", error);
            }
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
                                ¿Interesado en {projectName}?
                            </h3>
                            <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                                Cuéntanos sobre tu proyecto y cómo podemos ayudarte a desarrollar {projectDescription}.
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
                                <Label htmlFor="empresa" className="text-sm font-medium">
                                    Empresa / Rubro (Opcional)
                                </Label>
                                <Input
                                    id="empresa"
                                    name="empresa"
                                    type="text"
                                    value={formData.empresa}
                                    onChange={handleInputChange}
                                    onFocus={scrollToActiveField}
                                    className="mt-1 text-base"
                                    placeholder="Nombre de tu empresa o rubro"
                                />
                            </div>

                            <div>
                                <Label htmlFor="mensaje" className="text-sm font-medium">
                                    Cuéntanos sobre tu proyecto *
                                </Label>
                                <Textarea
                                    id="mensaje"
                                    name="mensaje"
                                    required
                                    value={formData.mensaje}
                                    onChange={handleInputChange}
                                    onFocus={scrollToActiveField}
                                    className="mt-1 min-h-[100px] sm:min-h-[80px] resize-none text-base"
                                    placeholder="Describe qué necesitas, qué procesos quieres optimizar, o cualquier detalle relevante..."
                                    rows={4}
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
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
                            ¡Gracias por tu interés!
                        </h3>
                        <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                            Pronto nos pondremos en contacto para discutir tu proyecto.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
