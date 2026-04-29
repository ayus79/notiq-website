import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ayus79.github.io',
  base: '/notiq',
  integrations: [tailwind()],
  output: 'static',
});
