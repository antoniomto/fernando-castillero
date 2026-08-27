# Placeholders — Datos por completar

Todo texto entre `{{LLAVES_DOBLES}}` es un placeholder que debe reemplazarse antes de publicar el sitio. Usá tu editor (VS Code, Cursor) para **Buscar en todos los archivos** (`Ctrl+Shift+F`) cada uno.

## 1. Contacto (archivo único: `lib/site-config.ts`)

Reemplazar en un solo lugar — se propaga a todo el sitio.

| Placeholder | Descripción | Ejemplo |
|---|---|---|
| `{{TELEFONO}}` | Teléfono visible con formato local | `+54 11 4123-4567` |
| `{{WHATSAPP}}` | Número para `wa.me`, solo dígitos con código país | `5491141234567` |
| `{{EMAIL}}` | Email de contacto | `fernando@fisiovet.com` |
| `{{DIRECCION}}` | Dirección completa del consultorio | `Av. Corrientes 1234, PB` |
| `{{CIUDAD}}` | Ciudad / provincia | `CABA, Argentina` |
| `{{HORARIOS}}` | Horarios (puede ser multilínea con `\n`) | `Lun-Vie: 9-18hs\nSáb: 9-13hs` |
| `{{GOOGLE_MAPS_EMBED}}` | URL del iframe embed de Google Maps | Pegar iframe en `app/contacto/page.tsx` |
| `{{FACEBOOK_URL}}` | URL de Facebook | `https://facebook.com/fisiovet` |

## 2. Sobre Fernando (`app/sobre/page.tsx`)

| Placeholder | Descripción |
|---|---|
| `{{BIO_LARGA}}` | Biografía completa: quién es, años de experiencia, filosofía |
| `{{FORMACION_1}}` a `{{FORMACION_3}}` | Títulos, posgrados, certificaciones |

## 3. Números y promesas de la home (`app/page.tsx` + `components/home/SocialProofBar.tsx`)

| Placeholder | Descripción | Ejemplo |
|---|---|---|
| `{{STAT_FAMILIAS}}` | Cantidad de familias atendidas (micro-social-proof del hero) | `+150` |
| `{{STAT_PACIENTES}}` | Pacientes totales (barra de stats) | `500+` |
| `{{STAT_ANIOS}}` | Años de experiencia | `8+` |
| `{{PROMESA_EXTRA}}` | Tercer beneficio en CTA final | `Primera consulta orientativa sin cargo` o `Coordinamos según tu disponibilidad` |

**Importante:** no inventar números. Si Fernando no lleva registro exacto, poner rangos honestos o quitar la stat.

## 4. Testimonios (`app/page.tsx`)

3 testimonios en la home:

- `{{TESTIMONIO_1}}` a `{{TESTIMONIO_3}}` — texto del tutor
- `{{NOMBRE_TUTOR_1}}` a `{{NOMBRE_TUTOR_3}}` — nombre del tutor
- `{{MASCOTA_1}}` a `{{MASCOTA_3}}` — nombre de la mascota

## 5. Casos (`app/casos/page.tsx`)

Para cada uno de los 3 casos placeholder:
- `{{CASO_N_NOMBRE}}` — nombre de la mascota
- `{{CASO_N_RAZA}}` — raza y edad
- `{{CASO_N_DIAGNOSTICO}}` — patología o cirugía
- `{{CASO_N_RESUMEN}}` — historia breve (2-4 líneas)
- `{{CASO_N_DURACION}}` — cuántas sesiones o meses

## 6. Imágenes

Todas las imágenes están como **placeholder textual** (`[ foto de ... · placeholder ]`) en cada sección. Para reemplazarlas:

1. Guardar la imagen en `public/images/` (ej: `fernando.jpg`, `galeria/1.jpg`)
2. Reemplazar el `div` placeholder por `<Image src="/images/..." alt="..." width={...} height={...} />` (importar `next/image`)

Ubicaciones:
- **Home hero:** `app/page.tsx` (foto principal opcional)
- **Home sobre:** foto de Fernando
- **Home galería preview:** 6 fotos
- **`/sobre`:** retrato de Fernando
- **`/casos`:** 3 fotos antes/después
- **`/galeria`:** 6 fotos de instalaciones
- **`/blog`:** imagen destacada por post

## 7. Logo

`public/logo.svg` y `app/icon.svg` contienen un logo estilizado que reconstruimos a partir de la imagen enviada. Si Fernando consigue el archivo oficial de la franquicia (SVG o PNG alta resolución), reemplazar ambos archivos y el componente `components/Logo.tsx`.

## 8. Contenido opcional

- **Blog:** hay 2 posts semilla en `content/blog/posts.ts`. Agregar más siguiendo el mismo formato.
- **Servicios:** editar textos en `data/services.ts` según la práctica real de Fernando.
- **FAQ:** editar `data/faq.ts`.
- **Presupuesto:** actualizar valores en `data/budget-ranges.ts` (están en pesos argentinos aproximados).

---

## Checklist antes de publicar

- [ ] Todos los `{{PLACEHOLDER}}` reemplazados (buscar `{{` en el proyecto)
- [ ] Imágenes reales cargadas en `public/images/`
- [ ] Meta descripción y OG image configurados
- [ ] WhatsApp funciona (probar `wa.me/{{WHATSAPP}}`)
- [ ] Google Maps embed correcto
- [ ] Redes sociales apuntan a URLs correctas
- [ ] `npm run build` sin errores
- [ ] Lighthouse >90 en perf y accesibilidad
