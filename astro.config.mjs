import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import nodejs from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: nodejs({ mode: 'middleware' }),
  integrations: [react()]
});
