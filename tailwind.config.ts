import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0C1A24",
          soft: "#475569",
          muted: "#94A3B8",
        },
        canvas: {
          DEFAULT: "#FFFFFF",
          soft: "#F8FAFC",
          subtle: "#F1F5F9",
          surface: "#FAFCFD",
          cream: "#F8FAFC",
          "cream-2": "#F1F5F9",
        },
        brand: {
          marine: "#0E4A56",
          "marine-2": "#093740",
          "marine-light": "#146373",
          "marine-tint": "#E8F4F7",
          emerald: "#0D9488",
          "emerald-light": "#10B981",
          "emerald-tint": "#ECFDF5",
          coral: "#E05D38",
          "coral-2": "#C94D2A",
          "coral-dark": "#B03E1D",
          "coral-tint": "#FFF1EC",
          // Backward compatibility mappings
          teal: "#0E4A56",
          "teal-2": "#093740",
          "teal-dark": "#06252C",
          "teal-tint": "#E8F4F7",
          gold: "#0D9488",
          "gold-2": "#10B981",
          "gold-dark": "#047857",
          "gold-tint": "#ECFDF5",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Helvetica", "sans-serif"],
        italic: ["var(--font-italic)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
      },
    },
  },
  plugins: [],
};

export default config;
