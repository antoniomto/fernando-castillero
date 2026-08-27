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
  economico: { alimento: 3500, vet: 1500, higiene: 800, accesorios: 500, imprevistos: 1000 },
  premium:   { alimento: 6500, vet: 2200, higiene: 1000, accesorios: 700, imprevistos: 1500 },
  super:     { alimento: 9500, vet: 3000, higiene: 1200, accesorios: 900, imprevistos: 2000 },
};

const dogRanges: Record<Size, Record<Quality, BudgetRange>> = {
  pequeno: {
    economico: { alimento: 3500, vet: 2000, higiene: 1500, accesorios: 800,  imprevistos: 1200 },
    premium:   { alimento: 6500, vet: 3000, higiene: 2000, accesorios: 1200, imprevistos: 1800 },
    super:     { alimento: 9500, vet: 4000, higiene: 2500, accesorios: 1500, imprevistos: 2500 },
  },
  mediano: {
    economico: { alimento: 6000,  vet: 2500, higiene: 1800, accesorios: 1000, imprevistos: 1500 },
    premium:   { alimento: 11000, vet: 3800, higiene: 2400, accesorios: 1500, imprevistos: 2200 },
    super:     { alimento: 16000, vet: 5000, higiene: 3000, accesorios: 1800, imprevistos: 3000 },
  },
  grande: {
    economico: { alimento: 10000, vet: 3200, higiene: 2200, accesorios: 1300, imprevistos: 2000 },
    premium:   { alimento: 18000, vet: 4500, higiene: 2800, accesorios: 1800, imprevistos: 2800 },
    super:     { alimento: 26000, vet: 6000, higiene: 3500, accesorios: 2200, imprevistos: 3800 },
  },
  gigante: {
    economico: { alimento: 15000, vet: 4000, higiene: 2800, accesorios: 1600, imprevistos: 2500 },
    premium:   { alimento: 26000, vet: 5500, higiene: 3400, accesorios: 2200, imprevistos: 3500 },
    super:     { alimento: 38000, vet: 7500, higiene: 4200, accesorios: 2800, imprevistos: 4800 },
  },
};

export function getBudget(species: Species, size: Size, quality: Quality): BudgetRange {
  if (species === "gato") return catRanges[quality];
  return dogRanges[size][quality];
}

export const currency = (n: number) =>
  n.toLocaleString("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 });
