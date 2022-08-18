/// <reference types="node" />
import EventEmitter from 'events';
import Guides from '@scena/guides';
export default class Rule extends EventEmitter {
    hGuides: Guides;
    vGuides: Guides;
    horizontalGuidelines: number[];
    verticalGuidelines: number[];
    private container;
    private containerResizeObserver;
    constructor(container: HTMLDivElement);
    /**
     * 是否显示标尺
     * @param show 是否显示
     */
    showGuides(show?: boolean): void;
    setGuides([hLines, vLines]: [number[], number[]]): void;
    /**
     * 清空所有参考线
     */
    clearGuides(): void;
    /**
     * 是否显示标尺
     * @param show 是否显示
     */
    showRule(show?: boolean): void;
    scrollRule(scrollTop: number): void;
    destroy(): void;
    private getGuidesStyle;
    private createGuides;
    private hGuidesChangeGuidesHandler;
    private vGuidesChangeGuidesHandler;
}
