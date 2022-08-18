import type { MNode } from '@tmagic/schema';
export * from './dom';
export declare const sleep: (ms: number) => Promise<void>;
export declare const datetimeFormatter: (v: string | Date, defaultValue?: string, format?: string) => string | number;
export declare const toLine: (name?: string) => string;
export declare const toHump: (name?: string) => string;
export declare const emptyFn: () => any;
/**
 * 通过id获取组件在应用的子孙路径
 * @param {number | string} id 组件id
 * @param {Array} data 要查找的根容器节点
 * @return {Array} 组件在data中的子孙路径
 */
export declare const getNodePath: (id: number | string, data?: MNode[]) => MNode[];
export declare const filterXSS: (str: string) => string;
export declare const getUrlParam: (param: string, url?: string) => string;
export declare const isPop: (node: MNode) => boolean;
export declare const isPage: (node: MNode | undefined) => boolean;
export declare const isNumber: (value: string) => boolean;
export declare const getHost: (targetUrl: string) => string | undefined;
export declare const isSameDomain: (targetUrl?: string, source?: string) => boolean;
