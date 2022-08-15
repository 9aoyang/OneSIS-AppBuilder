import path from 'path';

import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],

  base: '/OneSIS-AppBuilder/playground',

  resolve: {
    alias: [
      {
        find: /^vue$/,
        replacement: path.join(__dirname, 'node_modules/vue/dist/vue.esm-bundler.js'),
      },
      {
        find: /^element-plus$/,
        replacement: path.join(__dirname, 'node_modules/element-plus/es/index.mjs'),
      },
    ],
  },

  server: {
    fs: {
      strict: false,
    },
    host: '0.0.0.0',
    port: 8098,
    proxy: {
      '^/OneSIS-AppBuilder/playground/runtime': {
        target: 'http://127.0.0.1:8078',
        changeOrigin: true,
        prependPath: false,
      },
    },
    open: '/OneSIS-AppBuilder/playground/',
  },

  build: {
    sourcemap: true,
  },
});
