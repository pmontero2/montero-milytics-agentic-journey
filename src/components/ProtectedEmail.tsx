import React, { useState, useRef, useCallback } from 'react';

interface ProtectedEmailProps {
  className?: string;
  showAsLink?: boolean;
  displayText?: string;
  alwaysShow?: boolean; // Para páginas que necesitan mostrar el email siempre
}

// Función helper ofuscada - el email nunca se almacena como string completo
const buildEmail = (): string => {
  const parts = [
    [112, 109, 111, 110, 116, 101, 114, 111],
    [46],
    [98, 114, 105, 97, 110],
    [64],
    [103, 109, 97, 105, 108],
    [46],
    [99, 111, 109]
  ];
  return parts.map(part => part.map(c => String.fromCharCode(c)).join('')).join('');
};

export const ProtectedEmail: React.FC<ProtectedEmailProps> = ({ 
  className = '', 
  showAsLink = true,
  displayText,
  alwaysShow = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  // Solo construir el email cuando sea necesario
  const getEmail = useCallback(() => {
    return buildEmail();
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (linkRef.current) {
      const email = getEmail();
      linkRef.current.href = `mailto:${email}`;
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const email = getEmail();
    e.currentTarget.href = `mailto:${email}`;
  };

  // Renderizar el email ofuscado: dividido en múltiples elementos
  // para que los extractores no lo reconozcan fácilmente
  const renderObfuscatedEmail = () => {
    const email = getEmail();
    // Dividir en partes y usar elementos separados con caracteres ocultos
    const [local, domain] = email.split('@');
    const [domainName, tld] = domain.split('.');
    
    // Usar caracteres zero-width para confundir extractores
    const zwsp = '\u200B'; // Zero-width space
    const zwnj = '\u200C'; // Zero-width non-joiner
    
    return (
      <>
        <span data-part="1">{local}</span>
        <span style={{ fontSize: 0, lineHeight: 0 }} aria-hidden="true">{zwsp}</span>
        <span data-part="2">{zwnj}@{zwnj}</span>
        <span style={{ fontSize: 0, lineHeight: 0 }} aria-hidden="true">{zwsp}</span>
        <span data-part="3">{domainName}</span>
        <span data-part="4" style={{ fontSize: 0, lineHeight: 0 }} aria-hidden="true">{zwsp}</span>
        <span data-part="4">.</span>
        <span data-part="5">{tld}</span>
      </>
    );
  };

  // Si alwaysShow es true, mostrar el email ofuscado siempre
  // Si no, solo mostrar en hover o usar displayText
  const shouldShowEmail = alwaysShow || isHovered;

  if (showAsLink) {
    return (
      <a
        ref={linkRef}
        className={className}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        href="#"
        data-contact="email"
      >
        {shouldShowEmail ? renderObfuscatedEmail() : (displayText || 'Contactar por email')}
      </a>
    );
  }

  // Para texto sin link
  return (
    <span 
      className={className}
      onMouseEnter={handleMouseEnter}
      data-contact="email"
    >
      {shouldShowEmail ? renderObfuscatedEmail() : (displayText || 'Contactar por email')}
    </span>
  );
};
