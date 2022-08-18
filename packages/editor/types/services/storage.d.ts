import BaseService from './BaseService';
interface Options {
    namespace?: string;
    protocol?: Protocol;
}
export declare enum Protocol {
    OBJECT = "object",
    JSON = "json",
    STRING = "string",
    NUMBER = "number",
    BOOLEAN = "boolean"
}
/**
 * 数据存储服务
 */
export declare class WebStorage extends BaseService {
    private storage;
    private namespace;
    constructor();
    /**
     * 获取数据存储对象，可以通过
     * const storageService = new StorageService();
     * storageService.usePlugin({
     *    // 替换存储对象为 sessionStorage
     *    async afterGetStorage(): Promise<Storage> {
     *      return window.sessionStorage;
     *    },
     * });
     */
    getStorage(): Promise<Storage>;
    getNamespace(): Promise<string>;
    /**
     * 清理，支持storageService.usePlugin
     */
    clear(): Promise<void>;
    /**
     * 获取存储项，支持storageService.usePlugin
     */
    getItem(key: string, options?: Options): Promise<any>;
    /**
     * 获取指定索引位置的key
     */
    key(index: number): Promise<string | null>;
    /**
     * 移除存储项，支持storageService.usePlugin
     */
    removeItem(key: string, options?: Options): Promise<void>;
    /**
     * 设置存储项，支持storageService.usePlugin
     */
    setItem(key: string, value: any, options?: Options): Promise<void>;
    private getValueAndProtocol;
}
export declare type StorageService = WebStorage;
declare const _default: WebStorage;
export default _default;
