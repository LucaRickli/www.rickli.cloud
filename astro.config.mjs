import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import serviceWorker from "astrojs-service-worker";
import compress from "astro-compress";

import { SITE } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [
    mdx(),
    tailwind(),
    serviceWorker(),
    compress({}),
    sitemap({
      filter: (page) => !/\/admin(\/.*)?$/.test(page),
    }),
  ],
});
