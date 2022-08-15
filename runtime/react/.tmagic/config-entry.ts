import page from '@tmagic/ui-react/src/page/formConfig';
import container from '@tmagic/ui-react/src/container/formConfig';
import button from '@tmagic/ui-react/src/button/formConfig';
import img from '@tmagic/ui-react/src/img/formConfig';
import text from '@tmagic/ui-react/src/text/formConfig';
import qrcode from '@tmagic/ui-react/src/qrcode/formConfig';
import overlay from '@tmagic/ui-react/src/overlay/formConfig';

const configs: Record<string, any> = {
  page: page,
  container: container,
  button: button,
  img: img,
  text: text,
  qrcode: qrcode,
  overlay: overlay,
};

export default configs;
