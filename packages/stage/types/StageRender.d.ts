/// <reference types="node" />
import { EventEmitter } from 'events';
import StageCore from './StageCore';
import type { Runtime, RuntimeWindow, StageRenderConfig } from './types';
export default class StageRender extends EventEmitter {
    /** 组件的js、css执行的环境，直接渲染为当前window，iframe渲染则为iframe.contentWindow */
    contentWindow: RuntimeWindow | null;
    runtime: Runtime | null;
    iframe?: HTMLIFrameElement;
    runtimeUrl?: string;
    core: StageCore;
    private render?;
    constructor({ core }: StageRenderConfig);
    getMagicApi: () => {
        onPageElUpdate: (el: HTMLElement) => boolean;
        onRuntimeReady: (runtime: Runtime) => void;
    };
    /**
     * 挂载Dom节点
     * @param el 将页面挂载到该Dom节点上
     */
    mount(el: HTMLDivElement): Promise<void>;
    getRuntime: () => Promise<Runtime>;
    /**
     * 销毁实例
     */
    destroy(): void;
    private loadHandler;
    private postTmagicRuntimeReady;
}
