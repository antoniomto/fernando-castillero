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
          DEFAULT: "#0F1A1E",
          soft: "#5A6668",
          muted: "#8B9294",
        },
        canvas: {
          DEFAULT: "#FFFFFF",
          soft: "#FAF8F3",
          cream: "#F6F3D4",       // user's cream
          "cream-2": "#FBF9E9",
        },
        brand: {
          teal: "#054D5E",        // user's teal — primario ahora
          "teal-2": "#0A6478",    // hover
          "teal-dark": "#023844", // pressed / deep
          "teal-tint": "#E4EEF0", // muy suave para chips/bgs
          gold: "#A9A478",        // user's gold khaki — accent
          "gold-2": "#C1BC94",    // hover
          "gold-dark": "#88835F", // pressed
          "gold-tint": "#F0EED6", // muy suave
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
