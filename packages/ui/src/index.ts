import Button from './button';
import Container from './container';
import Img from './img';
import Overlay from './overlay';
import Page from './page';
import Qrcode from './qrcode';
import Text from './text';
import bpmnviewer from './bpmnviewer';

const ui: Record<string, any> = {
  page: Page,
  container: Container,
  button: Button,
  text: Text,
  img: Img,
  qrcode: Qrcode,
  overlay: Overlay,
  bpmnviewer:bpmnviewer
};

export default ui;
