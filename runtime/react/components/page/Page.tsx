import React from 'react';

import type { MComponent, MContainer, MPage } from '@tmagic/schema';

import useApp from '../useApp';

interface PageProps {
  config: MPage;
}

const Page: React.FC<PageProps> = ({ config }) => {
  const { app } = useApp({
    config,
    methods: {
      refresh: () => window.location.reload(),
    },
  });

  if (!app) return null;

  return (
    <div
      id={`${config.id || ''}`}
      className={`magic-ui-page magic-ui-container${
        config.className ? ` ${config.className}` : ''
      }`}
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

Page.displayName = 'magic-ui-page';

export default Page;
