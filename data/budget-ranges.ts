export type Species = "perro" | "gato";
export type Size = "pequeno" | "mediano" | "grande" | "gigante";
export type Quality = "economico" | "premium" | "super";

export type BudgetRange = {
  alimento: number;
  vet: number;
  higiene: number;
  accesorios: number;
  imprevistos: number;
};

const catRanges: Record<Quality, BudgetRange> = {
  economico: { alimento: 450, vet: 250, higiene: 150, accesorios: 100, imprevistos: 250 },
  premium:   { alimento: 850, vet: 450, higiene: 250, accesorios: 180, imprevistos: 400 },
  super:     { alimento: 1400, vet: 650, higiene: 350, accesorios: 250, imprevistos: 600 },
};

const dogRanges: Record<Size, Record<Quality, BudgetRange>> = {
  pequeno: {
    economico: { alimento: 550, vet: 300, higiene: 250, accesorios: 150, imprevistos: 300 },
    premium:   { alimento: 1050, vet: 550, higiene: 400, accesorios: 250, imprevistos: 500 },
    super:     { alimento: 1650, vet: 800, higiene: 550, accesorios: 350, imprevistos: 700 },
  },
  mediano: {
    economico: { alimento: 950, vet: 400, higiene: 350, accesorios: 200, imprevistos: 400 },
    premium:   { alimento: 1750, vet: 700, higiene: 500, accesorios: 300, imprevistos: 650 },
    super:     { alimento: 2650, vet: 1050, higiene: 700, accesorios: 450, imprevistos: 900 },
  },
  grande: {
    economico: { alimento: 1550, vet: 550, higiene: 450, accesorios: 250, imprevistos: 550 },
    premium:   { alimento: 2750, vet: 900, higiene: 650, accesorios: 400, imprevistos: 900 },
    super:     { alimento: 4100, vet: 1350, higiene: 900, accesorios: 600, imprevistos: 1250 },
  },
  gigante: {
    economico: { alimento: 2350, vet: 750, higiene: 600, accesorios: 350, imprevistos: 750 },
    premium:   { alimento: 3950, vet: 1250, higiene: 850, accesorios: 550, imprevistos: 1200 },
    super:     { alimento: 5900, vet: 1800, higiene: 1150, accesorios: 800, imprevistos: 1650 },
  },
};

export function getBudget(species: Species, size: Size, quality: Quality): BudgetRange {
  if (species === "gato") return catRanges[quality];
  return dogRanges[size][quality];
}

export const currency = (n: number) =>
  n.toLocaleString("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });
