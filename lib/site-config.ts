export const siteConfig = {
  name: "Fernando Castillero",
  role: "Fisioterapia Veterinaria",
  franquicia: "Mundo à Parte",
  url: "https://fernandocastillero.com",
  description:
    "Fisioterapia y rehabilitación veterinaria por Fernando Castillero. Hidroterapia, láser, masajes terapéuticos y recuperación post-quirúrgica para perros y gatos.",

  contact: {
    telefono: "{{TELEFONO}}",
    whatsapp: "{{WHATSAPP}}",
    email: "{{EMAIL}}",
    direccion: "{{DIRECCION}}",
    ciudad: "{{CIUDAD}}",
    horarios: "{{HORARIOS}}",
    mapsEmbed: "{{GOOGLE_MAPS_EMBED}}",
  },

  social: {
    instagram: "https://www.instagram.com/fernando.castillero.9/",
    instagramHandle: "@fernando.castillero.9",
    facebook: "{{FACEBOOK_URL}}",
  },

  design: {
    by: "PresencIA",
    url: "https://presencia.ai",
  },
};

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/sobre", label: "Sobre Fernando" },
  { href: "/servicios", label: "Servicios" },
  { href: "/herramientas", label: "Herramientas" },
  { href: "/casos", label: "Casos" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export function whatsappLink(mensaje: string): string {
  const numero = siteConfig.contact.whatsapp.replace(/\D/g, "") || "0000000000";
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}
