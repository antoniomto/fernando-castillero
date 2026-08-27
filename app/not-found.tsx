import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-tight text-center py-20">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-3 text-ink">Página no encontrada</h1>
        <p className="mt-4 text-ink-soft">La página que buscás no existe o fue movida.</p>
        <Link href="/" className="btn-primary mt-8">Volver al inicio</Link>
      </div>
    </section>
  );
}
