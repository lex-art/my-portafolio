// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    },
    fallback:{
      en: 'es'
    } 
  },
  vite:{
    plugins: [
      {
        name: 'i18n-routers',
        configureServer(server){
          server.middlewares.use((req, _, next) => {
            const locale = req?.originalUrl?.split('/')[1];
            if(locale && !['es', 'en'].includes(locale)){
              req.originalUrl = req?.originalUrl?.replace(`/${locale}`, "");
            }
            next();
          });
        }
      }
      ]
  }
});