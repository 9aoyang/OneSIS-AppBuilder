import path from 'path';

import { defineConfig } from '@tmagic/cli';

export default defineConfig({
  packages: [path.join(__dirname, '../../ui/react')],
  // packages: ['@tmagic/ui-react'],
  componentFileAffix: '.tsx',
});
