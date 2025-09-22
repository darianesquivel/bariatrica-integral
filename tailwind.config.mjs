// tailwind.config.mjs
import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": {
          light: "#00AEEF", // Celeste principal
          DEFAULT: "#0073AE", // Azul corporativo
          dark: "#004A7B", // Azul oscuro
        },
        "brand-gray": {
          light: "#F2F2F2",
          DEFAULT: "#6D6E71",
          dark: "#333333",
        },
      },
    },
  },
  plugins: [],
});
