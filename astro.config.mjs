import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Canonical and social-sharing URLs. Netlify provides URL at build time; set SITE_URL there to override it (for example, a custom domain).
  site: process.env.SITE_URL || process.env.URL || undefined,
  integrations: [tailwind({ applyBaseStyles: false })],
  output: 'static',
});
