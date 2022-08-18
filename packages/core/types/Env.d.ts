declare class Env {
    isIos: boolean;
    isIphone: boolean;
    isIpad: boolean;
    isAndroid: boolean;
    isAndroidPad: boolean;
    isMac: boolean;
    isWin: boolean;
    isMqq: boolean;
    isWechat: boolean;
    isWeb: boolean;
    constructor(ua?: string, options?: Record<string, boolean | string>);
}
export default Env;
