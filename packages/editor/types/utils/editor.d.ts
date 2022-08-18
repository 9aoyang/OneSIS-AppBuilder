import type { MApp, MContainer, MNode, MPage } from '@tmagic/schema';
import type StageCore from '@tmagic/stage';
import { Layout } from '../type';
export declare const COPY_STORAGE_KEY = "$MagicEditorCopyData";
/**
 * 获取所有页面配置
 * @param app DSL跟节点
 * @returns 所有页面配置
 */
export declare const getPageList: (app: MApp) => MPage[];
/**
 * 获取所有页面名称
 * @param pages 所有页面配置
 * @returns 所有页面名称
 */
export declare const getPageNameList: (pages: MPage[]) => string[];
/**
 * 新增页面时，生成页面名称
 * @param {Object} pageNameList 所有页面名称
 * @returns {string}
 */
export declare const generatePageName: (pageNameList: string[]) => string;
/**
 * 新增页面时，生成页面名称
 * @param {Object} app 所有页面配置
 * @returns {string}
 */
export declare const generatePageNameByApp: (app: MApp) => string;
/**
 * @param {Object} node
 * @returns {boolean}
 */
export declare const isFixed: (node: MNode) => boolean;
export declare const getNodeIndex: (node: MNode, parent: MContainer | MApp) => number;
export declare const getRelativeStyle: (style?: Record<string, any>) => Record<string, any>;
export declare const getInitPositionStyle: (style: Record<string, any> | undefined, layout: Layout) => Record<string, any>;
export declare const setLayout: (node: MNode, layout: Layout) => MNode;
export declare const change2Fixed: (node: MNode, root: MApp) => {
    left: number;
    top: number;
};
export declare const Fixed2Other: (node: MNode, root: MApp, getLayout: (parent: MNode, node?: MNode) => Promise<Layout>) => Promise<Record<string, any>>;
export declare const getGuideLineFromCache: (key: string) => number[];
export declare const fixNodeLeft: (config: MNode, parent: MContainer, doc?: Document) => any;
export declare const fixNodePosition: (config: MNode, parent: MContainer, stage: StageCore | null) => {
    [key: string]: any;
} | undefined;
