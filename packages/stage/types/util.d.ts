import { Mode } from './const';
import type { Offset, SortEventData } from './types';
export declare const getOffset: (el: HTMLElement) => Offset;
export declare const getTargetElStyle: (el: HTMLElement) => string;
export declare const getAbsolutePosition: (el: HTMLElement, { top, left }: Offset) => {
    left: number;
    top: number;
};
export declare const isAbsolute: (style: CSSStyleDeclaration) => boolean;
export declare const isRelative: (style: CSSStyleDeclaration) => boolean;
export declare const isStatic: (style: CSSStyleDeclaration) => boolean;
export declare const isFixed: (style: CSSStyleDeclaration) => boolean;
export declare const isFixedParent: (el: HTMLElement) => boolean;
export declare const getMode: (el: HTMLElement) => Mode;
export declare const getScrollParent: (element: HTMLElement, includeHidden?: boolean) => HTMLElement | null;
export declare const removeSelectedClassName: (doc: Document) => void;
export declare const addSelectedClassName: (el: Element, doc: Document) => void;
export declare const calcValueByFontsize: (doc: Document, value: number) => number;
/**
 * 下移组件位置
 * @param {number} deltaTop 偏移量
 * @param {Object} detail 当前选中的组件配置
 */
export declare const down: (deltaTop: number, target: HTMLElement | SVGElement) => SortEventData | void;
/**
 * 上移组件位置
 * @param {Array} brothers 处于同一容器下的所有子组件配置
 * @param {number} index 当前组件所处的位置
 * @param {number} deltaTop 偏移量
 * @param {Object} detail 当前选中的组件配置
 */
export declare const up: (deltaTop: number, target: HTMLElement | SVGElement) => SortEventData | void;
