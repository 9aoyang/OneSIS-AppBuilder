/// <reference types="node" />
import { EventEmitter } from 'events';
import type { EventItemConfig, Id, MApp } from '@tmagic/schema';
import Env from './Env';
import Page from './Page';
interface AppOptionsConfig {
    ua?: string;
    config?: MApp;
    platform?: 'editor' | 'mobile' | 'tv' | 'pc';
    jsEngine?: 'browser' | 'hippy';
    designWidth?: number;
    curPage?: Id;
    transformStyle?: (style: Record<string, any>) => Record<string, any>;
}
interface EventCache {
    eventConfig: EventItemConfig;
    fromCpt: any;
    args: any[];
}
declare class App extends EventEmitter {
    env: Env;
    pages: Map<Id, Page>;
    page: Page | undefined;
    platform: string;
    jsEngine: string;
    designWidth: number;
    components: Map<any, any>;
    eventQueueMap: Record<string, EventCache[]>;
    constructor(options: AppOptionsConfig);
    /**
     * 将dsl中的style配置转换成css，主要是将数子转成rem为单位的样式值，例如100将被转换成1rem
     * @param style Object
     * @returns Object
     */
    transformStyle(style: Record<string, any> | string): Record<string, any>;
    /**
     * 设置dsl
     * @param config dsl跟节点
     * @param curPage 当前页面id
     */
    setConfig(config: MApp, curPage?: Id): void;
    setPage(id?: Id): void;
    registerComponent(type: string, Component: any): void;
    unregisterComponent(type: string): void;
    resolveComponent(type: string): any;
    bindEvents(): void;
    bindEvent(event: EventItemConfig, id: string): void;
    eventHandler(eventConfig: EventItemConfig, fromCpt: any, args: any[]): void;
    destroy(): void;
    private addEventToMap;
}
export default App;
