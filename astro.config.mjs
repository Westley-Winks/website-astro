import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://wwinks.com",
  integrations: [sitemap()],
  prefetch: {
    prefetchAll: true,
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "catppuccin-latte",
        dark: "github-dark",
      },
      langs: ["md", "css", "html", "python"],
      wrap: false,
    },
  },
});
