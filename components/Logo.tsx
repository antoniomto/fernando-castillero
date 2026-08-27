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
  const circleBg = isLight ? "#FFFFFF" : "#054D5E";
  const dogColor = isLight ? "#054D5E" : "#A9A478";
  const eye = isLight ? "#054D5E" : "#F6F3D4";
  const wordmark = isLight ? "#FFFFFF" : "#054D5E";
  const tagline = isLight ? "#FFFFFF" : "#5A6668";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 80 80"
        className="h-11 w-11 md:h-12 md:w-12 shrink-0"
        aria-label="Mundo à Parte"
        role="img"
      >
        <circle cx="40" cy="40" r="38" fill={circleBg} />
        <path
          d="M28 52 Q26 44 30 38 Q30 34 34 32 Q36 26 42 28 Q46 26 50 32 Q54 34 54 40 Q56 46 54 54 L52 58 L46 58 L46 54 Q42 56 38 54 L38 58 L30 58 Z M35 34 L32 28 L36 32 Z M45 32 L48 28 L46 34 Z"
          fill={dogColor}
        />
        <circle cx="37" cy="40" r="1.2" fill={eye} />
      </svg>

      {showWordmark && (
        <div className="leading-none">
          <div
            className="font-display text-lg md:text-xl tracking-wide font-semibold"
            style={{ color: wordmark }}
          >
            MUNDO À PARTE
          </div>
          <div
            className="text-[10px] md:text-xs uppercase tracking-[0.16em] mt-1 font-medium"
            style={{ color: tagline, opacity: isLight ? 0.85 : 0.7 }}
          >
            Fisioterapia Veterinária
          </div>
        </div>
      )}
    </div>
  );
}
