export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  benefits: string[];
  icon: "waves" | "laser" | "hand" | "surgery" | "elder" | "sport";
  image: string;
  imageCaption: string;
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
    image: "/images/gallery-hydro.jpg",
    imageCaption: "Sesión de hidroterapia con flotabilidad controlada",
  },
  {
    slug: "laserterapia",
    title: "Laserterapia de Alta Intensidad",
    short: "Fotobiomodulación infrarroja para dolor agudo y regeneración celular.",
    description:
      "Estimula la producción mitocondrial de ATP, alivia dolor crónico y acelera la cicatrización profunda. Aplicación indolora y segura con gafas protectoras Doggles, ideal para artrosis, displasia y post-quirúrgicos.",
    benefits: [
      "Alivio de dolor sin toxicidad medicamentosa",
      "Acelera cicatrización y regeneración tisular",
      "Sesiones rápidas, no invasivas y bien toleradas",
    ],
    icon: "laser",
    image: "/images/clinical/laser-pastor-aleman.jpg",
    imageCaption: "Fotobiomodulación con protección ocular en Mundo Aparte",
  },
  {
    slug: "masaje-terapeutico",
    title: "Terapia Manual & Descompresión Miofascial",
    short: "Técnicas manuales y asistencia articular por personal especializado.",
    description:
      "Maniobras clínicas adaptadas a cada paciente para liberar contracturas compensatorias, facilitar el drenaje linfático y devolver elasticidad a tejidos rígidos por inactividad o cojera.",
    benefits: [
      "Alivio muscular y fascial inmediato",
      "Preparación óptima para ejercicios activos",
      "Reduce ansiedad y estrés hospitalario",
    ],
    icon: "hand",
    image: "/images/clinical/equipo-clinico-yorkie.jpg",
    imageCaption: "Atención individualizada por fisioterapeutas del centro",
  },
  {
    slug: "rehabilitacion-post-quirurgica",
    title: "Rehabilitación Post-Quirúrgica Ortopédica",
    short: "Protocolos guiados para TPLO, displasia, fracturas y columna.",
    description:
      "Plan médico personalizado según el tipo de intervención. Restablece el rango de movimiento articular, previene atrofia por desuso y reeduca la marcha con soportes y arneses ergonómicos.",
    benefits: [
      "Marcha segura desde las primeras semanas",
      "Preservación de masa muscular magra",
      "Disminución drástica de complicaciones post-operatorias",
    ],
    icon: "surgery",
    image: "/images/clinical/soporte-post-quirurgico-perro.jpg",
    imageCaption: "Recuperación y bipedestación asistida tras cirugía",
  },
  {
    slug: "geriatria",
    title: "Magnetoterapia & Atención Geriátrica",
    short: "Campos magnéticos pulsátiles indoloros para artrosis y rigidez.",
    description:
      "El solenoide terapéutico genera ondas magnéticas de baja frecuencia que estimulan la regeneración del cartílago y alivian la inflamación en columna y articulaciones sin manipular al paciente.",
    benefits: [
      "100% indoloro: el paciente descansa o duerme durante la sesión",
      "Mayor agilidad y alivio de rigidez matinal",
      "Disminución del consumo diario de antiinflamatorios orales",
    ],
    icon: "elder",
    image: "/images/clinical/magnetoterapia-gato-evet.jpg",
    imageCaption: "Paciente felino descansando en solenoide magnético E-VET",
  },
  {
    slug: "deportivos",
    title: "Electroestimulación & Acondicionamiento (TENS / EMS)",
    short: "Activación neuromuscular para fuerza, reflejos y prevención.",
    description:
      "Protocolos con equipo digital calibrado para activar fibras musculares atróficas tras reposo forzado o tonificar la musculatura en atletas y perros de trabajo.",
    benefits: [
      "Activación muscular precisa sin impacto articular",
      "Control de espasmos y reeducación refleja",
      "Prevención de recaídas y mantenimiento atlético",
    ],
    icon: "sport",
    image: "/images/clinical/electroterapia-tens-rehabmedic.jpg",
    imageCaption: "Electroterapia digital RehabMedic aplicada en musculatura",
  },
];
