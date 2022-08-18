import { InstallOptions } from '../type';

let $TMAGIC_EDITOR: InstallOptions = {} as any;

const setConfig = (option: InstallOptions): void => {
  $TMAGIC_EDITOR = option;
};

const getConfig = (key: keyof InstallOptions): unknown => $TMAGIC_EDITOR[key];

export { getConfig, setConfig };
