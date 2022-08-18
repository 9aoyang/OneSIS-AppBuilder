import path from 'path';

import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],

  resolve: {
    alias: [
      { find: /^react$/, replacement: path.join(__dirname, 'node_modules/react/index.js') },
      { find: /^react-dom$/, replacement: path.join(__dirname, 'node_modules/react-dom/index.js') },
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

  base: '/tmagic-editor/playground/runtime/react/',

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
