export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  benefits: string[];
  icon: "waves" | "laser" | "hand" | "surgery" | "elder" | "sport";
};

export const services: Service[] = [
  {
    slug: "hidroterapia",
    title: "Hidroterapia",
    short: "Rehabilitación en agua para reducir el impacto articular.",
    description:
      "Ejercicios en cinta subacuática o piscina que aprovechan la flotación y resistencia del agua para fortalecer músculos, mejorar rango articular y acelerar la recuperación sin sobrecargar articulaciones.",
    benefits: [
      "Reduce dolor y carga articular",
      "Mejora masa muscular en semanas",
      "Ideal para post-operatorio y obesidad",
    ],
    icon: "waves",
  },
  {
    slug: "laserterapia",
    title: "Laserterapia",
    short: "Láser de baja intensidad para reducir dolor e inflamación.",
    description:
      "Estimula la regeneración celular, alivia dolor crónico y acelera la cicatrización. Aplicación no invasiva, sin efectos secundarios, ideal para artrosis, tendinitis y heridas.",
    benefits: [
      "Alivio de dolor sin medicación",
      "Acelera cicatrización",
      "Sesiones cortas y bien toleradas",
    ],
    icon: "laser",
  },
  {
    slug: "masaje-terapeutico",
    title: "Masaje terapéutico",
    short: "Terapia manual para relajar musculatura y mejorar circulación.",
    description:
      "Técnicas de masaje adaptadas a cada paciente para liberar contracturas, mejorar drenaje linfático y preparar tejidos para el ejercicio terapéutico.",
    benefits: [
      "Alivio muscular inmediato",
      "Complemento ideal a otras terapias",
      "Reduce ansiedad y estrés",
    ],
    icon: "hand",
  },
  {
    slug: "rehabilitacion-post-quirurgica",
    title: "Rehabilitación post-quirúrgica",
    short: "Protocolo específico según el tipo de cirugía.",
    description:
      "Programa personalizado para cirugías ortopédicas (TPLO, TTA, hernia discal, fracturas). Restablece movilidad, previene atrofia muscular y acorta tiempos de recuperación.",
    benefits: [
      "Recuperación más rápida y segura",
      "Menor atrofia muscular",
      "Prevención de recaídas",
    ],
    icon: "surgery",
  },
  {
    slug: "geriatria",
    title: "Fisioterapia geriátrica",
    short: "Mejora calidad de vida en mascotas mayores.",
    description:
      "Manejo integral de artrosis, displasias y pérdida de movilidad asociadas a la edad. Ejercicio adaptado, terapia manual y láser para mantener independencia y bienestar.",
    benefits: [
      "Más movilidad y menos dolor",
      "Mejora ánimo y calidad de vida",
      "Reduce necesidad de medicación",
    ],
    icon: "elder",
  },
  {
    slug: "deportivos",
    title: "Rehabilitación deportiva",
    short: "Prevención y recuperación en perros de trabajo o deporte.",
    description:
      "Programas de acondicionamiento, prevención de lesiones y recuperación acelerada para perros deportivos (agility, canicross, trabajo).",
    benefits: [
      "Menor tasa de lesiones",
      "Mejor performance",
      "Recuperación acelerada",
    ],
    icon: "sport",
  },
];
