export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingMin: number;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "cuando-mi-mascota-necesita-fisioterapia",
    title: "¿Cuándo mi mascota necesita fisioterapia?",
    excerpt:
      "Señales tempranas que suelen pasar desapercibidas y que indican que una evaluación puede marcar la diferencia.",
    date: "2026-01-15",
    readingMin: 5,
    content: `
Muchos tutores llegan a fisioterapia cuando el problema ya está muy avanzado. Detectar signos tempranos ayuda a intervenir antes de que la calidad de vida se deteriore.

## Signos a los que prestar atención

- Rechazo a subir al sofá o a la cama.
- Dificultad para levantarse después de dormir.
- Rigidez que mejora con el movimiento.
- Cambios de humor o menos ganas de jugar.
- Cojera intermitente.

## Por qué no esperar

La musculatura se atrofia rápido cuando hay dolor. Cuanto antes se interviene, más tejido se preserva y más rápida es la recuperación.
    `,
  },
  {
    slug: "hidroterapia-beneficios",
    title: "Hidroterapia: por qué el agua acelera la recuperación",
    excerpt:
      "Flotación, resistencia y temperatura son tres aliados clave en la rehabilitación de perros y gatos.",
    date: "2026-01-08",
    readingMin: 4,
    content: `
La hidroterapia combina tres propiedades físicas del agua que resultan ideales para la rehabilitación animal.

## Flotación
Reduce la carga sobre las articulaciones hasta un 60%, permitiendo ejercicio temprano post-cirugía sin dolor.

## Resistencia
El agua ofrece resistencia natural en todas las direcciones, fortaleciendo musculatura sin necesidad de pesas.

## Temperatura
El agua tibia (28-32°C) relaja musculatura y mejora circulación local.
    `,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
