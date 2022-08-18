/**
 * 通用的事件处理
 */
import App from './App';
import Node from './Node';
export interface EventOption {
    label: string;
    value: string;
}
export declare const DEFAULT_EVENTS: EventOption[];
export declare const DEFAULT_METHODS: EventOption[];
export declare const getCommonEventName: (commonEventName: string, nodeId: string | number) => string;
export declare const isCommonMethod: (methodName: string) => boolean;
export declare const bindCommonEventListener: (app: App) => void;
export declare const triggerCommonMethod: (methodName: string, node: Node) => void;
