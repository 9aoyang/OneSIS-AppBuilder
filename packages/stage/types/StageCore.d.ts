/// <reference types="node" />
/// <reference types="node" />
import { EventEmitter } from 'events';
import type { Id } from '@tmagic/schema';
import StageDragResize from './StageDragResize';
import StageHighlight from './StageHighlight';
import StageMask from './StageMask';
import StageMultiDragResize from './StageMultiDragResize';
import StageRender from './StageRender';
import { ContainerHighlightType, IsContainer, RemoveData, SortEventData, StageCoreConfig, UpdateData } from './types';
export default class StageCore extends EventEmitter {
    container?: HTMLDivElement;
    selectedDom: HTMLElement | undefined;
    selectedDomList: HTMLElement[];
    highlightedDom: Element | undefined;
    renderer: StageRender;
    mask: StageMask;
    dr: StageDragResize;
    multiDr: StageMultiDragResize;
    highlightLayer: StageHighlight;
    config: StageCoreConfig;
    zoom: number;
    containerHighlightClassName: string;
    containerHighlightDuration: number;
    containerHighlightType?: ContainerHighlightType;
    isContainer: IsContainer;
    private canSelect;
    constructor(config: StageCoreConfig);
    getElementsFromPoint(event: MouseEvent): HTMLElement[];
    getElementFromPoint(event: MouseEvent): Promise<HTMLElement | undefined>;
    isElCanSelect(el: HTMLElement, event: MouseEvent, stop: () => boolean): Promise<Boolean>;
    /**
     * 选中组件
     * @param idOrEl 组件Dom节点的id属性，或者Dom节点
     */
    select(idOrEl: Id | HTMLElement, event?: MouseEvent): Promise<void>;
    /**
     * 多选
     * @param domList 多选节点
     */
    multiSelect(idOrElList: HTMLElement[] | Id[]): Promise<void>;
    /**
     * 更新选中的节点
     * @param data 更新的数据
     */
    update(data: UpdateData): Promise<void>;
    /**
     * 高亮选中组件
     * @param el 页面Dom节点
     */
    highlight(idOrEl: HTMLElement | Id): Promise<void>;
    sortNode(data: SortEventData): Promise<void>;
    add(data: UpdateData): Promise<void>;
    remove(data: RemoveData): Promise<void>;
    setZoom(zoom?: number): void;
    /**
     * 用于在切换选择模式时清除上一次的状态
     * @param selectType 需要清理的选择模式 多选：multiSelect，单选：select
     */
    clearSelectStatus(selectType: String): void;
    /**
     * 挂载Dom节点
     * @param el 将stage挂载到该Dom节点上
     */
    mount(el: HTMLDivElement): Promise<void>;
    /**
     * 清空所有参考线
     */
    clearGuides(): void;
    addContainerHighlightClassName(event: MouseEvent, exclude: Element[]): Promise<void>;
    getAddContainerHighlightClassNameTimeout(event: MouseEvent, exclude?: Element[]): NodeJS.Timeout;
    /**
     * 销毁实例
     */
    destroy(): void;
    private getTargetElement;
}
