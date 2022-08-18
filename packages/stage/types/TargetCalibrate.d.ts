/// <reference types="node" />
import { EventEmitter } from 'events';
import StageCore from './StageCore';
import StageDragResize from './StageDragResize';
import StageMask from './StageMask';
import type { TargetCalibrateConfig } from './types';
/**
 * 将选中的节点修正定位后，添加一个操作节点到蒙层上
 */
export default class TargetCalibrate extends EventEmitter {
    parent: HTMLElement;
    mask: StageMask;
    dr: StageDragResize;
    core: StageCore;
    operationEl: HTMLDivElement;
    constructor(config: TargetCalibrateConfig);
    update(el: HTMLElement, prefix: String): HTMLElement;
    destroy(): void;
    private getOffset;
}
