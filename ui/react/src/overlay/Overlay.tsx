import React, { useContext, useEffect, useState } from 'react';

import Core from '@tmagic/core';
import type { MComponent, MNode } from '@tmagic/schema';

import AppContent from '../AppContent';
import useApp from '../useApp';

interface OverlayProps {
  config: MComponent;
}

const Overlay: React.FC<OverlayProps> = ({ config }) => {
  const [visible, setVisible] = useState(false);

  const app: Core = useContext(AppContent);
  const node = app?.page?.getNode(config.id);

  if (!app) return null;

  const openOverlay = () => {
    setVisible(true);
    if (app) {
      app.emit('overlay:open', node);
    }
  };

  const closeOverlay = () => {
    setVisible(false);
    if (app) {
      app.emit('overlay:close', node);
    }
  };

  useApp({
    config,
    methods: {
      openOverlay,
      closeOverlay,
    },
  });

  app?.on('editor:select', (info: any, path: MNode[]) => {
    if (path.find((node: MNode) => node.id === config.id)) {
      openOverlay();
    } else {
      closeOverlay();
    }
  });

  if (!visible) return null;

  const MagicUiComp = app.resolveComponent('container');

  return (
    <MagicUiComp
      id={config.id}
      className="magic-ui-overlay"
      config={{ style: config.style, items: config.items }}
    ></MagicUiComp>
  );
};

Overlay.displayName = 'magic-ui-overlay';

export default Overlay;
