import React, { useContext } from 'react';

import Core from '@tmagic/core';
import { AppContent } from '@tmagic/ui-react';

function Demo({ config }: { config: any }) {
  const app = useContext<Core | undefined>(AppContent);
  console.log(app);

  return (
    <div id={config.id} style={app.transformStyle(config.style || {})}>
      <span>this is a Demo component:</span>
      <span style={{ color: config.color }}>{config.text}</span>
    </div>
  );
}

export default Demo;
