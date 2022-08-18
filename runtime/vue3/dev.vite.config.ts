import path from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [vue(), vueJsx()],

  resolve: {
    alias: [
      {
        find: /^vue$/,
        replacement: path.join(__dirname, 'node_modules/vue/dist/vue.esm-bundler.js'),
      },
      {
        find: /^@tmagic\/utils/,
        replacement: path.join(__dirname, '../../packages/utils/src/index.ts'),
      },
      {
        find: /^@tmagic\/core/,
        replacement: path.join(__dirname, '../../packages/core/src/index.ts'),
      },
      {
        find: /^@tmagic\/schema/,
        replacement: path.join(__dirname, '../../packages/schema/src/index.ts'),
      },
    ],
  },

  root: './',

  base: '/tmagic-editor/playground/runtime/vue3/',

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
