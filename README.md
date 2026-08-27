# Fernando Castillero · Fisioterapia Veterinaria

Sitio web profesional para Fernando Castillero, fisioterapeuta veterinario que colabora con la franquicia **Mundo à Parte**.

Diseñado por [PresencIA](https://presencia.ai).

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **TailwindCSS 3**
- Contenido estático (sin base de datos)
- Deploy: **Vercel**

## Inicio rápido

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev     # servidor de desarrollo
npm run build   # build de producción
npm start       # servir el build
npm run lint    # ESLint
```

## Estructura

```
app/                 # rutas (App Router)
  herramientas/      # calculadoras + timeline
  blog/[slug]/       # posts individuales
components/
  layout/            # Header, Footer, WhatsAppFloat, CollaborationBadge
  tools/             # FeedingCalculator, PetBudget, RecoveryTimeline
  ui/                # ToolCard, SectionHeading
data/                # datos estáticos (servicios, faq, presupuesto, protocolos)
content/blog/        # posts del blog (TypeScript por ahora)
lib/site-config.ts   # configuración central (contacto, nav, WhatsApp)
public/              # logo.svg, favicon, imágenes
```

## Antes de publicar

1. Reemplazar todos los `{{PLACEHOLDER}}` — ver [`PLACEHOLDERS.md`](./PLACEHOLDERS.md).
2. Cargar imágenes reales en `public/images/` y reemplazar los placeholders visuales.
3. Verificar que el número de WhatsApp funciona.
4. `npm run build` para asegurar que no hay errores.

## Deploy en Vercel

```bash
npx vercel --prod
```

O conectar el repositorio a Vercel desde el dashboard.

## Herramientas incluidas

- **Calculadora de alimentación** — RER × factor MER (WSAVA) para calorías/gramos diarios.
- **Presupuesto mensual** — estimación de costo mensual según especie, tamaño y calidad de alimento.
- **Recuperación post-cirugía** — timeline visual + checklist descargable para 6 tipos de cirugía comunes.

## Colaboración con Mundo à Parte

Este sitio es propiedad de Fernando Castillero como profesional independiente. Menciona explícitamente la colaboración con la franquicia Mundo à Parte en header, footer y página *Sobre*.
