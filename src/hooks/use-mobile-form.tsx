import { useEffect } from 'react';

export const useMobileForm = () => {
  useEffect(() => {
    // Prevenir zoom en inputs en iOS
    const preventZoom = () => {
      const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        if (input instanceof HTMLElement) {
          input.style.fontSize = '16px';
        }
      });
    };

    // Aplicar al cargar
    preventZoom();

    // Aplicar a nuevos elementos que se agreguen dinámicamente
    const observer = new MutationObserver(preventZoom);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Función para hacer scroll suave al campo activo
  const scrollToActiveField = () => {
    const activeElement = document.activeElement;
    if (activeElement && activeElement instanceof HTMLElement) {
      setTimeout(() => {
        activeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 300); // Delay para que el teclado aparezca primero
    }
  };

  return { scrollToActiveField };
};
