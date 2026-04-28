import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import starlight from '@astrojs/starlight';

export default defineConfig({
  output: 'static',
  integrations: [
    tailwind(),
    starlight({
      title: 'Notiq Docs',
      logo: { src: './src/assets/logo.svg' },
      social: { github: 'https://github.com/notiq-dev/notiq' },
      disable404Route: true,
      customCss: ['./src/styles/docs.css'],
    }),
  ],
  site: 'https://notiq.dev',
});
