import { fileURLToPath, URL } from 'node:url';

import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import prismjs from 'vite-plugin-prismjs';

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
        noDiscovery: true
    },
    plugins: [
        vue(),
        Components({
            resolvers: [PrimeVueResolver()]
        }),
        prismjs({
            languages: ['java'], // Kullanmak istediğiniz dilleri ekleyin
            theme: 'okaidia', // Prism.js teması
            css: true, // Prism.js CSS'ini otomatik ekler
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});
