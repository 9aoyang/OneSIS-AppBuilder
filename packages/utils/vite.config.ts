import { defineConfig } from 'vite';

import pkg from './package.json';

const deps = Object.keys(pkg.dependencies);

export default defineConfig({
  build: {
    cssCodeSplit: false,
    sourcemap: true,
    minify: false,
    target: 'esnext',

    lib: {
      entry: 'src/index.ts',
      name: 'TMagicUtils',
      fileName: 'tmagic-utils',
    },

    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external(id: string) {
        return deps.some((k) => new RegExp(`^${k}`).test(id));
      },
    },
  },
});
