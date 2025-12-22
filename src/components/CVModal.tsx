import { useState } from "react";
import { createPortal } from "react-dom";

import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Download, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal = ({ isOpen, onClose }: CVModalProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<"ESP" | "ENG" | null>(null);

  const downloadCV = (language: "ESP" | "ENG") => {
    const filename = language === "ESP"
      ? "CV_BRIAN_MONTERO_ESP_2026.pdf"
      : "CV_BRIAN_MONTERO_ENG_2026.pdf";
    const link = document.createElement('a');
    link.href = `/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleClose();
  };

  const handleClose = () => {
    setSelectedLanguage(null);
    onClose();
  };

  const handleLanguageSelect = (language: "ESP" | "ENG") => {
    setSelectedLanguage(language);
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay oscuro */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-background border border-accent/20 rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Botón cerrar */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-accent/10 rounded-full transition-colors"
        >
          <X className="h-5 w-5 text-foreground/70 hover:text-foreground" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Descargar CV
          </h2>
          <p className="text-foreground/70">
            Elige el idioma y cómo quieres obtener tu CV
          </p>
        </div>

        <div className="space-y-6">
          {/* Selección de idioma */}
          {!selectedLanguage && (
            <div className="space-y-3">
              <Label className="text-foreground font-semibold block text-left">Selecciona el idioma</Label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleLanguageSelect("ESP")}
                  className="p-4 rounded-lg border-2 border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300 text-foreground font-medium"
                >
                  <span className="text-2xl mb-2 block font-bold">ES</span>
                  Español
                </button>
                <button
                  onClick={() => handleLanguageSelect("ENG")}
                  className="p-4 rounded-lg border-2 border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300 text-foreground font-medium"
                >
                  <span className="text-2xl mb-2 block font-bold">EN</span>
                  English
                </button>
              </div>
            </div>
          )}

          {/* Opciones después de seleccionar idioma */}
          {selectedLanguage && (
            <div className="space-y-4">
              <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm text-foreground/80 text-center">
                  Idioma seleccionado: <span className="font-semibold text-accent">
                    {selectedLanguage === "ESP" ? "Español" : "English"}
                  </span>
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={() => downloadCV(selectedLanguage)}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Descargar CV
                </Button>

                <Button
                  onClick={() => {
                    setSelectedLanguage(null);
                  }}
                  variant="ghost"
                  className="w-full text-foreground/70 hover:text-foreground"
                >
                  Cambiar idioma
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};
