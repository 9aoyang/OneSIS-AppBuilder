import path from 'path';

import { defineConfig } from 'vite';

import pkg from './package.json';

export default defineConfig({
  resolve: {
    alias:
      process.env.NODE_ENV === 'production'
        ? []
        : [
            {
              find: /^@tmagic\/schema/,
              replacement: path.join(__dirname, '../schema/src/index.ts'),
            },
          ],
  },

  build: {
    cssCodeSplit: false,
    sourcemap: true,
    minify: false,
    target: 'esnext',

    lib: {
      entry: 'src/index.ts',
      name: 'TMagicCore',
      fileName: 'tmagic-core',
    },

    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external(id: string) {
        return Object.keys(pkg.dependencies).some((k) => new RegExp(`^${k}`).test(id));
      },
    },
  },
});
