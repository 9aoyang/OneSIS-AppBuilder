import React, { useState } from 'react';

import type { MComponent } from '@tmagic/schema';

import useApp from '../useApp';

interface TextProps {
  config: MComponent;
}

const Text: React.FC<TextProps> = ({ config }) => {
  const { app, ref } = useApp({ config });

  if (!app) return null;

  const [displayText] = useState(config.text);

  return (
    <p
      ref={ref}
      className="magic-ui-text"
      style={app.transformStyle(config.style || {})}
      id={`${config.id || ''}`}
    >
      {displayText}
    </p>
  );
};

Text.displayName = 'maigc-ui-text';

export default Text;
