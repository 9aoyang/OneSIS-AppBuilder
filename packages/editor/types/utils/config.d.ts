import { InstallOptions } from '../type';
declare const setConfig: (option: InstallOptions) => void;
declare const getConfig: (key: keyof InstallOptions) => unknown;
export { getConfig, setConfig };
