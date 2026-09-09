type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
  showWordmark?: boolean;
};

/**
 * variant "dark"  = logo sobre fondos claros (header blanco)
 * variant "light" = logo sobre fondos oscuros (footer coral)
 */
export function Logo({ className = "", variant = "dark", showWordmark = true }: LogoProps) {
  const isLight = variant === "light";
  const circleBg = isLight ? "#FFFFFF" : "#0E4A56";
  const iconColor = isLight ? "#0E4A56" : "#10B981";
  const wordmark = isLight ? "#FFFFFF" : "#0C1A24";
  const tagline = isLight ? "#E2E8F0" : "#475569";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className="h-10 w-10 md:h-11 md:w-11 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-all"
        style={{ backgroundColor: circleBg }}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke={iconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Caduceus / Veterinary Cross + Paw subtle fusion */}
          <path d="M12 2v20M8 5h8M7 9h10M6 13h12" opacity="0.3" />
          <path d="M12 3v18" />
          <path d="M8 8a4 4 0 0 1 8 0c0 4-8 6-8 10h8" />
          <circle cx="12" cy="7" r="1.5" fill={iconColor} />
        </svg>
      </div>

      {showWordmark && (
        <div className="leading-tight">
          <div
            className="font-display text-base md:text-lg tracking-tight font-bold"
            style={{ color: wordmark }}
          >
            DR. FERNANDO CASTILLERO
          </div>
          <div
            className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] font-medium"
            style={{ color: tagline }}
          >
            Medicina Veterinaria & Rehabilitación
          </div>
        </div>
      )}
    </div>
  );
}
