import path from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';

export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: [
      {
        find: /^vue$/,
        replacement: path.join(__dirname, 'node_modules/vue/dist/vue.esm.js'),
      },
    ],
  },

  root: './',

  base: '/OneSIS-AppBuilder/playground/runtime/vue2/',

  publicDir: 'public',

  server: {
    host: '0.0.0.0',
    port: 8078,
  },

  build: {
    sourcemap: true,

    cssCodeSplit: false,

    rollupOptions: {
      input: {
        page: './page/index.html',
        playground: './playground/index.html',
      },
      output: {
        entryFileNames: 'assets/[name].js',
      },
    },
  },
});
