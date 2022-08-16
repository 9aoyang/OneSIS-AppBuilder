import React from 'react';

import type { MComponent, MContainer } from '@tmagic/schema';

import useApp from '../useApp';

interface ContainerProps {
  config: MContainer;
  className: string;
  style: Record<string, any>;
  id: string;
}

const Container: React.FC<ContainerProps> = ({ config, id }) => {
  const { app } = useApp({ config });

  if (!app) return null;

  return (
    <div
      id={`${id || config.id || ''}`}
      className={`magic-ui-container${config.className ? ` ${config.className}` : ''}`}
      style={app.transformStyle(config.style || {})}
    >
      {config.items?.map((item: MComponent | MContainer) => {
        const MagicUiComp = app.resolveComponent(item.type || 'container');

        if (!MagicUiComp) return null;

        return (
          <MagicUiComp
            id={`${item.id || ''}`}
            key={item.id}
            config={item}
            className={`magic-ui-component${config.className ? ` ${config.className}` : ''}`}
            style={app.transformStyle(item.style || {})}
          ></MagicUiComp>
        );
      })}
    </div>
  );
};

Container.displayName = 'magic-ui-container';

export default Container;
