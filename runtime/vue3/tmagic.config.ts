import path from 'path';

import { defineConfig } from '@tmagic/cli';

export default defineConfig({
  packages: [
    '@tmagic/ui',
    path.join(__dirname, './components/index.ts'),
    path.join(__dirname, './plugins/index.ts'),
  ],
  componentFileAffix: '.vue',
});
