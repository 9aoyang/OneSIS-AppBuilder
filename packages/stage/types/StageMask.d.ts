import { Mode } from './const';
import Rule from './Rule';
import type StageCore from './StageCore';
import type { StageMaskConfig } from './types';
/**
 * 蒙层
 * @description 用于拦截页面的点击动作，避免点击时触发组件自身动作；在编辑器中点击组件应当是选中组件；
 */
export default class StageMask extends Rule {
    content: HTMLDivElement;
    wrapper: HTMLDivElement;
    core: StageCore;
    page: HTMLElement | null;
    pageScrollParent: HTMLElement | null;
    scrollTop: number;
    scrollLeft: number;
    width: number;
    height: number;
    wrapperHeight: number;
    wrapperWidth: number;
    maxScrollTop: number;
    maxScrollLeft: number;
    intersectionObserver: IntersectionObserver | null;
    isMultiSelectStatus: Boolean;
    private mode;
    private pageResizeObserver;
    private wrapperResizeObserver;
    /**
     * 高亮事件处理函数
     * @param event 事件对象
     */
    private highlightHandler;
    constructor(config: StageMaskConfig);
    setMode(mode: Mode): void;
    /**
     * 监听页面大小变化
     * @description 同步页面与mask的大小
     * @param page 页面Dom节点
     */
    observe(page: HTMLElement): void;
    /**
     * 挂载Dom节点
     * @param el 将蒙层挂载到该Dom节点上
     */
    mount(el: HTMLDivElement): void;
    setLayout(el: HTMLElement): void;
    scrollIntoView(el: Element): void;
    /**
     * 销毁实例
     */
    destroy(): void;
    private scroll;
    private scrollTo;
    /**
     * 设置蒙层高度
     * @param height 高度
     */
    private setHeight;
    /**
     * 设置蒙层宽度
     * @param width 宽度
     */
    private setWidth;
    /**
     * 计算并设置最大滚动宽度
     */
    private setMaxScrollLeft;
    /**
     * 计算并设置最大滚动高度
     */
    private setMaxScrollTop;
    /**
     * 修复滚动距离
     * 由于滚动容器变化等因素，会导致当前滚动的距离不正确
     */
    private fixScrollValue;
    /**
     * 点击事件处理函数
     * @param event 事件对象
     */
    private mouseDownHandler;
    private mouseUpHandler;
    private mouseWheelHandler;
    private mouseLeaveHandler;
}
