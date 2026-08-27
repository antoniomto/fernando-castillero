import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  variant?: 1 | 2 | 3;
  color?: "gold" | "teal";
  className?: string;
  priority?: boolean;
  aspectRatio?: string; // ej: "aspect-square", "aspect-[4/5]"
  sizes?: string;
};

/**
 * SIGNATURE — foto con forma orgánica irregular y un blob de color detrás asomando.
 * Es el elemento visual característico de todo el sitio.
 */
export function BlobFrame({
  src,
  alt,
  variant = 1,
  color = "teal",
  className = "",
  priority = false,
  aspectRatio = "aspect-[4/5]",
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: Props) {
  const variantCls = variant === 2 ? "blob-shape-2" : variant === 3 ? "blob-shape-3" : "";
  const colorCls = color === "gold" ? "blob-gold" : "blob-teal";

  return (
    <div className={`blob-frame ${variantCls} ${colorCls} ${className}`}>
      <div className="blob-shape" aria-hidden />
      <div className={`blob-content ${aspectRatio} relative`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    </div>
  );
}
