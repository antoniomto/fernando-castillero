const items = [
  { icon: "★", text: "5.0 en Google" },
  { icon: "⏱", text: "Respuesta en menos de 1 hora" },
  { icon: "🎓", text: "Rehabilitación certificada" },
  { icon: "🏥", text: "Instalaciones profesionales" },
  { icon: "💧", text: "Hidroterapia · Láser · Ejercicio terapéutico" },
  { icon: "❤", text: "Planes personalizados" },
];

export function TrustMarquee() {
  return (
    <div className="bg-ink text-white py-3 overflow-hidden">
      <div className="marquee">
        <div className="marquee-track">
          {items.map((it, i) => (
            <span key={`a-${i}`} className="flex items-center gap-3 text-white/90 text-sm whitespace-nowrap">
              <span className="text-brand-teal text-lg" aria-hidden>{it.icon}</span>
              {it.text}
              <span className="text-white/30" aria-hidden>·</span>
            </span>
          ))}
        </div>
        <div className="marquee-track" aria-hidden>
          {items.map((it, i) => (
            <span key={`b-${i}`} className="flex items-center gap-3 text-white/90 text-sm whitespace-nowrap">
              <span className="text-brand-teal text-lg">{it.icon}</span>
              {it.text}
              <span className="text-white/30">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
