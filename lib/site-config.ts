export const siteConfig = {
  name: "Dr. Fernando Castillero",
  role: "Médico Veterinario · Director Clínico & Especialista en Movilidad",
  franquicia: "Mundo Aparte · CANEM Hospital · Biomecánica Animal",
  url: "https://fernandocastillero.com",
  description:
    "Medicina veterinaria de vanguardia, cirugía y hospitalización en CANEM, junto con fisioterapia y rehabilitación avanzada en Mundo Aparte por el Dr. Fernando Castillero.",

  contact: {
    telefono: "{{TELEFONO}}",
    whatsapp: "5214490000000",
    email: "{{EMAIL}}",
    direccion: "Avenida Convención de 1914 Norte #1506, esq. Jacaranda, Circunvalación Norte, C.P. 20020",
    ciudad: "Aguascalientes, Ags., México",
    horarios: "Lunes a Sábado · Urgencias 24/7",
    mapsEmbed: "",
  },

  ecosystem: {
    canem: {
      name: "CANEM Hospital Veterinario",
      role: "Atención Médica, Quirófano, Hospitalización y Urgencias",
      location: "Avenida Convención de 1914 Norte #1506, Aguascalientes",
    },
    mundoAparte: {
      name: "Mundo Aparte",
      role: "Franquicia Líder Mundial en Fisioterapia & Rehabilitación",
      specialty: "Hidroterapia, Electroestimulación, Terapia Láser y Movilidad",
    },
    protesis: {
      name: "Unidad de Prótesis & Biomecánica",
      role: "Dispositivos Adaptativos y Ortesis a Medida",
      specialty: "Recuperación de extremidades y soporte ortopédico avanzado",
    },
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
  { href: "/#ecosistema", label: "Servicios" },
  { href: "/#sobre-fernando", label: "Dr. Fernando" },
  { href: "/herramientas", label: "Herramientas" },
  { href: "/#contacto", label: "Contacto" },
];

export function whatsappLink(mensaje: string): string {
  const numero = siteConfig.contact.whatsapp.replace(/\D/g, "") || "5214490000000";
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}
