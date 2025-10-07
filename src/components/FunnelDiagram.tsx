interface FunnelDiagramProps {
  activeStage: number;
}

export const FunnelDiagram = ({ activeStage }: FunnelDiagramProps) => {
  const stages = [
    { label: "Leads", color: "hsl(187 100% 50%)" },
    { label: "Conversión", color: "hsl(200 100% 55%)" },
    { label: "Velocidad", color: "hsl(265 83% 57%)" },
    { label: "Operaciones", color: "hsl(280 80% 60%)" }
  ];

  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 300 400" className="w-full h-auto">
        {/* Funnel stages */}
        {stages.map((stage, index) => {
          const isActive = index === activeStage;
          const y = index * 90 + 20;
          const topWidth = 280 - index * 40;
          const bottomWidth = 280 - (index + 1) * 40;
          const x1 = (300 - topWidth) / 2;
          const x2 = (300 - bottomWidth) / 2;
          
          return (
            <g key={index}>
              {/* Funnel section */}
              <path
                d={`M ${x1} ${y} L ${x1 + topWidth} ${y} L ${x2 + bottomWidth} ${y + 80} L ${x2} ${y + 80} Z`}
                fill={isActive ? stage.color : "hsl(var(--muted))"}
                stroke={isActive ? stage.color : "hsl(var(--border))"}
                strokeWidth="2"
                className="transition-all duration-700"
                style={{
                  filter: isActive ? `drop-shadow(0 0 20px ${stage.color})` : "none",
                  opacity: isActive ? 1 : 0.3
                }}
              />
              
              {/* Label */}
              <text
                x="150"
                y={y + 45}
                textAnchor="middle"
                className="text-sm font-bold transition-all duration-700"
                fill={isActive ? "hsl(var(--background))" : "hsl(var(--foreground))"}
                style={{ opacity: isActive ? 1 : 0.5 }}
              >
                {stage.label}
              </text>

              {/* Glow effect for active stage */}
              {isActive && (
                <circle
                  cx="150"
                  cy={y + 40}
                  r="8"
                  fill={stage.color}
                  className="animate-pulse"
                  style={{ filter: `blur(4px)` }}
                />
              )}
            </g>
          );
        })}

        {/* Robot icon at bottom */}
        <g transform="translate(130, 350)">
          <circle cx="20" cy="20" r="18" fill="hsl(187 100% 50%)" opacity={activeStage === 3 ? "1" : "0.5"} className="transition-opacity duration-700" />
          <circle cx="15" cy="15" r="3" fill="hsl(var(--background))" />
          <circle cx="25" cy="15" r="3" fill="hsl(var(--background))" />
          <rect x="12" y="22" width="16" height="4" rx="2" fill="hsl(var(--background))" />
        </g>
      </svg>
    </div>
  );
};
