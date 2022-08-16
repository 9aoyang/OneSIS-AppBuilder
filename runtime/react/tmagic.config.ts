import path from 'path';

import { defineConfig } from '@tmagic/cli';

export default defineConfig({
  packages: [path.join(__dirname, '../../ui/react'), path.join(__dirname, './components/index.ts')],

  // packages: ['@tmagic/ui-react'],
  componentFileAffix: '.tsx',
});
