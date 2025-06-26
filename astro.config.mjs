import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import devToolsJson from "vite-plugin-devtools-json";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    plugins: [devToolsJson()],
  },
});
