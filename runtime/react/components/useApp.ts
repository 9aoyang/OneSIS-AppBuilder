import { useContext, useEffect, useState } from 'react';

import Core from '@tmagic/core';
import type { MComponent } from '@tmagic/schema';

import AppContent from './AppContent';

interface UseAppOptions {
  config: MComponent;
  methods?: {
    string: Function;
  };
}

export default ({ config, methods }: UseAppOptions) => {
  const app: Core = useContext(AppContent);
  const node = app?.page?.getNode(config.id);
  const [created, setCreated] = useState(false);

  if (!created) {
    // 只需要触发一次 created
    setCreated(true);
    node?.emit('created', { methods });
  }

  useEffect(() => {
    const emitData = {
      config,
      ...methods,
    };

    node?.emit('mounted', emitData);

    return () => {
      node?.emit('destroy', emitData);
    };
  }, []);

  return { app };
};
