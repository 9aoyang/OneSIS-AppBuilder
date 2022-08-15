import page from '@tmagic/ui-react/src/page/Page.tsx';
import container from '@tmagic/ui-react/src/container/Container.tsx';
import button from '@tmagic/ui-react/src/button/Button.tsx';
import img from '@tmagic/ui-react/src/img/Img.tsx';
import text from '@tmagic/ui-react/src/text/Text.tsx';
import qrcode from '@tmagic/ui-react/src/qrcode/Qrcode.tsx';
import overlay from '@tmagic/ui-react/src/overlay/Overlay.tsx';

const components: Record<string, any> = {
  page: page,
  container: container,
  button: button,
  img: img,
  text: text,
  qrcode: qrcode,
  overlay: overlay,
};

export default components;
