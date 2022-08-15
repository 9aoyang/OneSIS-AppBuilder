import path from 'path';

import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import reactRefresh from '@vitejs/plugin-react-refresh';

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
        outDir: isAdmin ? `./dist/entry/${type}` : `../../playground/public/entry/react/${type}`,

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
      ? `/static/react/runtime/${type}/`
      : `/OneSIS-AppBuilder/playground/runtime/react/${type}`;
    const outDir = isAdmin
      ? path.resolve(process.cwd(), `./dist/runtime/${type}`)
      : path.resolve(process.cwd(), `../../playground/public/runtime/react/${type}`);
    return {
      plugins: [
        reactRefresh(),
        legacy({
          targets: ['defaults', 'not IE 11'],
        }),
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
