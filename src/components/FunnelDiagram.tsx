interface FunnelDiagramProps {
  activeStage: number;
}

export const FunnelDiagram = ({ activeStage }: FunnelDiagramProps) => {
  const stages = [
    { label: "Leads", color: "hsl(45 100% 50%)", gradient: "from-accent to-accent/80" },
    { label: "Conversión", color: "hsl(45 100% 60%)", gradient: "from-accent/80 to-accent/60" },
    { label: "Velocidad", color: "hsl(45 100% 70%)", gradient: "from-accent/60 to-accent/40" },
    { label: "Operaciones", color: "hsl(45 100% 80%)", gradient: "from-accent/40 to-accent/20" }
  ];

  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 300 400" className="w-full h-auto">
        {/* Background glow */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.8" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="funnelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(45 100% 50%)" />
            <stop offset="100%" stopColor="hsl(45 100% 20%)" />
          </linearGradient>
        </defs>

        {/* Funnel stages with curved design */}
        {stages.map((stage, index) => {
          const isActive = index === activeStage;
          const y = index * 85 + 30;
          const topWidth = 260 - index * 35;
          const bottomWidth = 260 - (index + 1) * 35;
          const x1 = (300 - topWidth) / 2;
          const x2 = (300 - bottomWidth) / 2;
          const curveOffset = 15;
          
          return (
            <g key={index}>
              {/* Funnel section with curved edges */}
              <path
                d={`M ${x1 + curveOffset} ${y} 
                    Q ${x1} ${y + 10} ${x1 + curveOffset/2} ${y + 20}
                    L ${x2 + curveOffset/2} ${y + 60}
                    Q ${x2} ${y + 70} ${x2 + curveOffset} ${y + 80}
                    L ${x1 + topWidth - curveOffset} ${y + 80}
                    Q ${x1 + topWidth} ${y + 70} ${x1 + topWidth - curveOffset/2} ${y + 60}
                    L ${x2 + bottomWidth - curveOffset/2} ${y + 20}
                    Q ${x2 + bottomWidth} ${y + 10} ${x2 + bottomWidth - curveOffset} ${y}
                    Z`}
                fill={isActive ? "url(#funnelGradient)" : "hsl(var(--muted) / 0.3)"}
                stroke={isActive ? "hsl(45 100% 50%)" : "hsl(var(--border) / 0.5)"}
                strokeWidth={isActive ? "2" : "1"}
                className="transition-all duration-700"
                style={{
                  filter: isActive ? "url(#glow)" : "none",
                  opacity: isActive ? 1 : 0.4
                }}
              />
              
              {/* Label with better positioning */}
              <text
                x="150"
                y={y + 50}
                textAnchor="middle"
                className="text-sm font-bold transition-all duration-700"
                fill={isActive ? "hsl(0 0% 0%)" : "hsl(var(--foreground) / 0.7)"}
                style={{ 
                  opacity: isActive ? 1 : 0.6,
                  textShadow: isActive ? "0 0 4px hsl(0 0% 0% / 0.5)" : "none",
                  fontWeight: "800"
                }}
              >
                {stage.label}
              </text>

            </g>
          );
        })}
      </svg>
    </div>
  );
};
