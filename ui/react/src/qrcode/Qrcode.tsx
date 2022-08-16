import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';

import type { MComponent } from '@tmagic/schema';

import useApp from '../useApp';

interface QrcodeProps {
  config: {
    url: string;
  } & MComponent;
}

const Qrcode: React.FC<QrcodeProps> = ({ config }) => {
  const { app } = useApp({ config });

  if (!app) return null;

  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    QRCode.toDataURL(config.url, (e: any, url: string) => {
      if (e) console.error(e);
      setImgSrc(url);
    });
  }, [config.url]);

  return (
    <img
      className="magic-ui-qrcode"
      style={app.transformStyle(config.style || {})}
      id={`${config.id}`}
      src={imgSrc}
    />
  );
};

Qrcode.displayName = 'magic-ui-qrcode';

export default Qrcode;
