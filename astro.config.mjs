import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://notiq.ayushcon2000.workers.dev',

  // base: '/notiq-website',
  integrations: [tailwind()],

  output: "hybrid",
  adapter: cloudflare()
});