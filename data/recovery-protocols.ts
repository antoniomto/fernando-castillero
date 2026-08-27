export type Phase = {
  window: string;
  title: string;
  expect: string[];
  allowed: string[];
  alarm: string[];
};

export type Protocol = {
  slug: string;
  name: string;
  summary: string;
  phases: Phase[];
  dailyChecklist: string[];
};

export const protocols: Protocol[] = [
  {
    slug: "tpla-tta",
    name: "TPLO / TTA (rotura de ligamento cruzado)",
    summary:
      "Cirugía ortopédica correctiva de la rodilla. La rehabilitación temprana es clave para recuperar función completa y evitar atrofia.",
    phases: [
      {
        window: "Semana 0-2",
        title: "Reposo estricto y control del dolor",
        expect: ["Inflamación local", "Dolor leve a moderado", "Rechazo a apoyar la pata"],
        allowed: [
          "Paseos muy cortos (5 min) solo para higiene",
          "Frío local 3-4 veces al día",
          "Movilización pasiva suave (según indicación)",
        ],
        alarm: ["Fiebre", "Secreción o mal olor en la herida", "Rechazo total a apoyar tras 5 días"],
      },
      {
        window: "Semana 2-4",
        title: "Movilidad controlada",
        expect: ["Comienza a apoyar", "Mejora del ánimo", "Puntos retirados"],
        allowed: [
          "Paseos de 10-15 min con correa corta",
          "Ejercicios de rango articular pasivo",
          "Inicio de hidroterapia si el veterinario lo autoriza",
        ],
        alarm: ["Cojera que empeora", "Chasquido audible en la rodilla"],
      },
      {
        window: "Semana 4-8",
        title: "Fortalecimiento progresivo",
        expect: ["Apoyo casi normal", "Aumenta masa muscular", "Mayor confianza"],
        allowed: [
          "Paseos de 20-30 min con correa",
          "Hidroterapia 1-2 veces por semana",
          "Ejercicios propioceptivos suaves",
          "Subir rampas suaves",
        ],
        alarm: ["Nueva cojera", "Inflamación tras el ejercicio"],
      },
      {
        window: "Semana 8-12+",
        title: "Retorno a la actividad",
        expect: ["Función simétrica", "Musculatura recuperada", "Alta veterinaria posible"],
        allowed: [
          "Trote controlado",
          "Ejercicios de fuerza y equilibrio",
          "Vuelta paulatina a juegos (sin saltos bruscos)",
        ],
        alarm: ["Recaída súbita", "Cojera al enfriarse"],
      },
    ],
    dailyChecklist: [
      "Revisar herida quirúrgica (color, olor, secreción)",
      "Aplicar frío/calor según etapa",
      "Administrar medicación en horario",
      "Ejercicios de rango articular indicados",
      "Uso de collar isabelino o arnés post-quirúrgico",
      "Superficies antideslizantes en la casa",
      "Rutina de paseo según fase",
      "Registrar apoyo y ánimo",
    ],
  },
  {
    slug: "hernia-discal",
    name: "Hernia discal (cirugía de columna)",
    summary:
      "Descompresión medular. La rehabilitación neurológica temprana define en gran medida el resultado funcional.",
    phases: [
      {
        window: "Semana 0-2",
        title: "Cuidados intensivos y estimulación básica",
        expect: ["Debilidad o parálisis posterior", "Incontinencia posible", "Dolor postoperatorio"],
        allowed: [
          "Cambios posturales cada 4 horas",
          "Vaciado vesical asistido si indicado",
          "Estimulación sensitiva suave",
          "Masaje circulatorio",
        ],
        alarm: ["Fiebre", "Retención urinaria", "Empeoramiento neurológico"],
      },
      {
        window: "Semana 2-4",
        title: "Reeducación motora inicial",
        expect: ["Recuperación de reflejos", "Primer apoyo asistido"],
        allowed: [
          "Ejercicios pasivos de rango articular",
          "Bipedestación asistida",
          "Hidroterapia con arnés (según indicación)",
          "Estimulación con superficies texturizadas",
        ],
        alarm: ["Rigidez extrema", "Regresión motora"],
      },
      {
        window: "Semana 4-8",
        title: "Marcha asistida y fortalecimiento",
        expect: ["Marcha inestable", "Recupera propiocepción", "Control esfínteres progresivo"],
        allowed: [
          "Cinta subacuática",
          "Ejercicios de equilibrio con balones",
          "Paseos cortos con arnés de soporte",
          "Electroestimulación funcional",
        ],
        alarm: ["Caídas frecuentes", "Nueva pérdida de sensibilidad"],
      },
      {
        window: "Semana 8-12+",
        title: "Marcha independiente y afinamiento",
        expect: ["Marcha funcional", "Retorno progresivo a la actividad"],
        allowed: [
          "Paseos regulares",
          "Trote controlado",
          "Ejercicios propioceptivos avanzados",
        ],
        alarm: ["Recaídas", "Nueva debilidad posterior"],
      },
    ],
    dailyChecklist: [
      "Cambios posturales cada 4-6 horas",
      "Vaciado vesical si aplica",
      "Ejercicios pasivos indicados",
      "Superficies antideslizantes",
      "Uso de arnés de soporte",
      "Higiene y control de escaras",
      "Registrar avances motores",
      "Medicación en horario",
    ],
  },
  {
    slug: "castracion",
    name: "Castración / Ovariectomía",
    summary:
      "Cirugía de rutina con recuperación rápida. La fisioterapia acelera la vuelta a la actividad y previene sobrepeso postoperatorio.",
    phases: [
      {
        window: "Semana 0-1",
        title: "Reposo y cicatrización",
        expect: ["Somnolencia leve", "Molestia local"],
        allowed: ["Paseos cortos (5-10 min)", "Collar isabelino permanente", "Frío local si hay inflamación"],
        alarm: ["Sangrado", "Secreción purulenta", "Fiebre"],
      },
      {
        window: "Semana 1-2",
        title: "Retorno gradual",
        expect: ["Puntos retirados", "Actividad casi normal"],
        allowed: ["Paseos de 20-30 min", "Reintroducir juego suave", "Baño autorizado tras retiro de puntos"],
        alarm: ["Hernia en la incisión", "Cojera nueva"],
      },
      {
        window: "Semana 2-4+",
        title: "Actividad plena y control de peso",
        expect: ["Retorno completo", "Riesgo de aumento de peso"],
        allowed: ["Actividad normal", "Plan nutricional ajustado", "Ejercicio regular"],
        alarm: ["Aumento de peso >10% en 3 meses"],
      },
    ],
    dailyChecklist: [
      "Revisar herida quirúrgica",
      "Uso de collar isabelino",
      "Medicación en horario",
      "Paseo controlado",
      "Ajuste de ración de alimento",
    ],
  },
  {
    slug: "fractura",
    name: "Fractura ósea (con osteosíntesis)",
    summary:
      "Consolidación ósea entre 6 y 12 semanas. La fisioterapia previene atrofia y rigidez articular durante la inmovilización.",
    phases: [
      {
        window: "Semana 0-2",
        title: "Consolidación inicial",
        expect: ["Inflamación", "Dolor moderado", "Inmovilización con vendaje o fijador"],
        allowed: ["Reposo estricto", "Frío local", "Movilización pasiva de articulaciones libres"],
        alarm: ["Vendaje flojo o mojado", "Mal olor", "Frío o cianosis distal"],
      },
      {
        window: "Semana 2-6",
        title: "Movilización controlada",
        expect: ["Callo óseo en formación", "Comienza a apoyar"],
        allowed: [
          "Ejercicios de rango articular",
          "Hidroterapia con carga parcial (según autorización)",
          "Masaje descontracturante",
        ],
        alarm: ["Aumento de dolor súbito", "Falla del implante"],
      },
      {
        window: "Semana 6-12",
        title: "Fortalecimiento y consolidación",
        expect: ["Consolidación radiográfica", "Aumento del apoyo"],
        allowed: ["Ejercicios de fuerza progresivos", "Cinta subacuática", "Paseos con correa larga"],
        alarm: ["Nueva cojera", "Inflamación persistente"],
      },
      {
        window: "Semana 12+",
        title: "Retorno funcional",
        expect: ["Consolidación completa", "Actividad casi normal"],
        allowed: ["Actividad plena progresiva", "Deportivos: entrada gradual"],
        alarm: ["Recaída", "Movilidad reducida persistente"],
      },
    ],
    dailyChecklist: [
      "Revisar vendaje o fijador",
      "Ejercicios pasivos indicados",
      "Frío/calor según indicación",
      "Medicación en horario",
      "Superficies antideslizantes",
      "Paseo controlado según fase",
    ],
  },
  {
    slug: "luxacion-rotula",
    name: "Luxación de rótula (cirugía correctiva)",
    summary:
      "Común en razas pequeñas. Rehabilitación clave para estabilizar la rodilla y prevenir cojera crónica.",
    phases: [
      {
        window: "Semana 0-2",
        title: "Reposo y control del dolor",
        expect: ["Inflamación", "Rechazo al apoyo"],
        allowed: ["Reposo estricto", "Frío local", "Movilización pasiva suave"],
        alarm: ["Fiebre", "Herida abierta"],
      },
      {
        window: "Semana 2-4",
        title: "Movilización guiada",
        expect: ["Comienza a apoyar", "Puntos retirados"],
        allowed: ["Paseos cortos con correa", "Ejercicios de rango articular", "Inicio de hidroterapia"],
        alarm: ["Reluxación", "Chasquido audible"],
      },
      {
        window: "Semana 4-8",
        title: "Fortalecimiento del cuádriceps",
        expect: ["Apoyo casi normal", "Mejor tono muscular"],
        allowed: ["Cinta subacuática", "Ejercicios propioceptivos", "Rampas suaves"],
        alarm: ["Cojera intermitente"],
      },
      {
        window: "Semana 8+",
        title: "Retorno a la actividad",
        expect: ["Estabilidad articular", "Musculatura simétrica"],
        allowed: ["Trote", "Juego controlado", "Ejercicio regular"],
        alarm: ["Recaída de la luxación"],
      },
    ],
    dailyChecklist: [
      "Revisar herida",
      "Ejercicios de rango articular",
      "Superficies antideslizantes",
      "Evitar saltos y escaleras",
      "Medicación en horario",
      "Uso de arnés en paseos",
    ],
  },
  {
    slug: "cirugia-columna",
    name: "Cirugía de columna (otras patologías)",
    summary:
      "Incluye estabilización vertebral, tumores, etc. Rehabilitación neurológica y muscular específica según el caso.",
    phases: [
      {
        window: "Semana 0-2",
        title: "Estabilización postoperatoria",
        expect: ["Dolor postoperatorio", "Debilidad", "Limitación de movimiento"],
        allowed: ["Cambios posturales", "Estimulación sensitiva", "Masaje circulatorio"],
        alarm: ["Fiebre", "Empeoramiento neurológico"],
      },
      {
        window: "Semana 2-6",
        title: "Reeducación motora",
        expect: ["Recuperación gradual", "Marcha asistida"],
        allowed: ["Hidroterapia con arnés", "Ejercicios propioceptivos", "Electroestimulación"],
        alarm: ["Regresión motora", "Pérdida de sensibilidad"],
      },
      {
        window: "Semana 6-12+",
        title: "Fortalecimiento y marcha independiente",
        expect: ["Mejora funcional progresiva"],
        allowed: ["Cinta subacuática", "Ejercicios de fuerza", "Paseos con soporte"],
        alarm: ["Nueva debilidad", "Dolor recurrente"],
      },
    ],
    dailyChecklist: [
      "Cambios posturales",
      "Ejercicios pasivos",
      "Superficies antideslizantes",
      "Arnés de soporte",
      "Medicación en horario",
      "Registrar avances",
    ],
  },
];

export function getProtocol(slug: string): Protocol | undefined {
  return protocols.find((p) => p.slug === slug);
}
