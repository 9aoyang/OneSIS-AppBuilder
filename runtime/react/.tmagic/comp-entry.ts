import page from '/Users/gaoyang/Documents/OneSIS-AppBuilder/ui/react/src/page/Page.tsx';
import container from '/Users/gaoyang/Documents/OneSIS-AppBuilder/ui/react/src/container/Container.tsx';
import button from '/Users/gaoyang/Documents/OneSIS-AppBuilder/ui/react/src/button/Button.tsx';
import img from '/Users/gaoyang/Documents/OneSIS-AppBuilder/ui/react/src/img/Img.tsx';
import text from '/Users/gaoyang/Documents/OneSIS-AppBuilder/ui/react/src/text/Text.tsx';
import qrcode from '/Users/gaoyang/Documents/OneSIS-AppBuilder/ui/react/src/qrcode/Qrcode.tsx';
import overlay from '/Users/gaoyang/Documents/OneSIS-AppBuilder/ui/react/src/overlay/Overlay.tsx';

const components: Record<string, any> = {
  'page': page,
  'container': container,
  'button': button,
  'img': img,
  'text': text,
  'qrcode': qrcode,
  'overlay': overlay,
};

export default components;