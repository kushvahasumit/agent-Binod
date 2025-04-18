import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";

export default defineConfig({
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/*.html"],
  theme: { extend: {} },
  plugins: [tailwindcss(), react(), crx({ manifest })],
  
});
