import path from 'path';

import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue2';
// @ts-ignore
import externalGlobals from 'rollup-plugin-external-globals';

export default defineConfig(({ mode }) => {
  if (['value', 'config', 'event', 'value:admin', 'config:admin', 'event:admin'].includes(mode)) {
    const [type, isAdmin] = mode.split(':');
    const capitalToken = type.charAt(0).toUpperCase() + type.slice(1);
    return {
      publicDir: './.tmagic/public',
      build: {
        cssCodeSplit: false,
        sourcemap: true,
        minify: false,
        target: 'esnext',
        outDir: isAdmin ? `./dist/entry/${type}` : `../../playground/public/entry/vue2/${type}`,

        lib: {
          entry: `.tmagic/${type}-entry.ts`,
          name: `magicPreset${capitalToken}s`,
          fileName: 'index',
          formats: ['umd'],
        },
      },
    };
  }

  if (['page', 'playground', 'page:admin', 'playground:admin'].includes(mode)) {
    const [type, isAdmin] = mode.split(':');
    const base = isAdmin
      ? `/static/vue2/runtime/${type}/`
      : `/OneSIS-AppBuilder/playground/runtime/vue2/${type}`;
    const outDir = isAdmin
      ? path.resolve(process.cwd(), `./dist/runtime/${type}`)
      : path.resolve(process.cwd(), `../../playground/public/runtime/vue2/${type}`);
    return {
      plugins: [
        vue(),
        legacy({
          targets: ['defaults', 'not IE 11'],
        }),
        externalGlobals({ vue: 'Vue' }, { exclude: [`./${type}/index.html`] }),
      ],

      root: `./${type}/`,

      publicDir: '../public',

      base,

      build: {
        emptyOutDir: true,
        sourcemap: true,
        outDir,
      },
    };
  }

  return {};
});
