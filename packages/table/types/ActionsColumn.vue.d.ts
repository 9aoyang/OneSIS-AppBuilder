import { PropType } from 'vue';
import { ColumnConfig } from './schema';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            columns: any[];
            config: ColumnConfig;
            rowkeyName: string;
            editState: Record<string, any>;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            columns: {
                type: PropType<any[]>;
                require: boolean;
                default: () => never[];
            };
            config: {
                type: PropType<ColumnConfig>;
                require: boolean;
                default: () => void;
            };
            rowkeyName: {
                type: StringConstructor;
                default: string;
            };
            editState: {
                type: ObjectConstructor;
                default: () => void;
            };
        }>> & {
            onAfterAction?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "columns" | "config" | "rowkeyName" | "editState">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "afterAction", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            columns: {
                type: PropType<any[]>;
                require: boolean;
                default: () => never[];
            };
            config: {
                type: PropType<ColumnConfig>;
                require: boolean;
                default: () => void;
            };
            rowkeyName: {
                type: StringConstructor;
                default: string;
            };
            editState: {
                type: ObjectConstructor;
                default: () => void;
            };
        }>> & {
            onAfterAction?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "afterAction"[], string, {
            columns: any[];
            config: ColumnConfig;
            rowkeyName: string;
            editState: Record<string, any>;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        columns: {
            type: PropType<any[]>;
            require: boolean;
            default: () => never[];
        };
        config: {
            type: PropType<ColumnConfig>;
            require: boolean;
            default: () => void;
        };
        rowkeyName: {
            type: StringConstructor;
            default: string;
        };
        editState: {
            type: ObjectConstructor;
            default: () => void;
        };
    }>> & {
        onAfterAction?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: PropType<any[]>;
        require: boolean;
        default: () => never[];
    };
    config: {
        type: PropType<ColumnConfig>;
        require: boolean;
        default: () => void;
    };
    rowkeyName: {
        type: StringConstructor;
        default: string;
    };
    editState: {
        type: ObjectConstructor;
        default: () => void;
    };
}>> & {
    onAfterAction?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "afterAction"[], "afterAction", {
    columns: any[];
    config: ColumnConfig;
    rowkeyName: string;
    editState: Record<string, any>;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {};
});
export default _default;
