import React from 'react';

import type { MComponent } from '@tmagic/schema';

import useApp from '../useApp';

interface ImgProps {
  config: {
    url: string;
    src: string;
  } & MComponent;
}

const Img: React.FC<ImgProps> = ({ config }) => {
  const { app } = useApp({ config });

  if (!app) return null;

  const clickHandler = () => {
    if (config.url) window.location.href = config.url;
  };

  return (
    <img
      className="magic-ui-img"
      style={app.transformStyle(config.style || {})}
      id={`${config.id}`}
      src={config.src}
      onClick={clickHandler}
    />
  );
};

Img.displayName = 'magic-ui-img';

export default Img;
