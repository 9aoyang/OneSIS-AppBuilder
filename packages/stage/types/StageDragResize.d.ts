/// <reference types="node" />
import { EventEmitter } from 'events';
import Moveable from 'moveable';
import { GuidesType, Mode } from './const';
import StageCore from './StageCore';
import StageMask from './StageMask';
import type { StageDragResizeConfig } from './types';
/**
 * 选中框
 */
export default class StageDragResize extends EventEmitter {
    core: StageCore;
    mask: StageMask;
    /** 画布容器 */
    container: HTMLElement;
    /** 目标节点 */
    target?: HTMLElement;
    /** 目标节点在蒙层中的占位节点 */
    dragEl?: HTMLDivElement;
    /** Moveable拖拽类实例 */
    moveable?: Moveable;
    /** 水平参考线 */
    horizontalGuidelines: number[];
    /** 垂直参考线 */
    verticalGuidelines: number[];
    /** 对齐元素集合 */
    elementGuidelines: HTMLElement[];
    /** 布局方式：流式布局、绝对定位、固定定位 */
    mode: Mode;
    private moveableOptions;
    /** 拖动状态 */
    private dragStatus;
    /** 流式布局下，目标节点的镜像节点 */
    private ghostEl;
    private moveableHelper?;
    private isContainerHighlight;
    constructor(config: StageDragResizeConfig);
    /**
     * 将选中框渲染并覆盖到选中的组件Dom节点上方
     * 当选中的节点是不是absolute时，会创建一个新的节点出来作为拖拽目标
     * @param el 选中组件的Dom节点元素
     * @param event 鼠标事件
     */
    select(el: HTMLElement, event?: MouseEvent): void;
    /**
     * 初始化选中框并渲染出来
     */
    updateMoveable(el?: HTMLElement | undefined): void;
    setGuidelines(type: GuidesType, guidelines: number[]): void;
    clearGuides(): void;
    clearSelectStatus(): void;
    destroyDragEl(): void;
    /**
     * 销毁实例
     */
    destroy(): void;
    private init;
    private setElementGuidelines;
    private createGuidelineElements;
    private initMoveable;
    private bindResizeEvent;
    private bindDragEvent;
    private bindRotateEvent;
    private bindScaleEvent;
    private sort;
    private update;
    private generateGhostEl;
    private setGhostElChildrenId;
    private destroyGhostEl;
    private getOptions;
    private canContainerHighlight;
}
