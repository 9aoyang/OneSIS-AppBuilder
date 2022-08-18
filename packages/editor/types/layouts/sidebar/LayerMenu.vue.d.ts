import type { MenuItem } from '../../type';
declare const _default: import("vue").DefineComponent<{}, {
    menu: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            menuData: MenuItem[];
            isSubMenu: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            menuData: {
                type: import("vue").PropType<MenuItem[]>;
            } & {
                default: () => never[];
            };
            isSubMenu: {
                type: import("vue").PropType<boolean>;
            } & {
                default: boolean;
            };
        }>> & {
            onHide?: ((...args: any[]) => any) | undefined;
            onShow?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "menuData" | "isSubMenu">;
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
        $emit: (event: "hide" | "show", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            menuData: {
                type: import("vue").PropType<MenuItem[]>;
            } & {
                default: () => never[];
            };
            isSubMenu: {
                type: import("vue").PropType<boolean>;
            } & {
                default: boolean;
            };
        }>> & {
            onHide?: ((...args: any[]) => any) | undefined;
            onShow?: ((...args: any[]) => any) | undefined;
        }, {
            hide: () => void;
            show: (e: MouseEvent) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("hide" | "show")[], string, {
            menuData: MenuItem[];
            isSubMenu: boolean;
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
        menuData: {
            type: import("vue").PropType<MenuItem[]>;
        } & {
            default: () => never[];
        };
        isSubMenu: {
            type: import("vue").PropType<boolean>;
        } & {
            default: boolean;
        };
    }>> & {
        onHide?: ((...args: any[]) => any) | undefined;
        onShow?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        hide: () => void;
        show: (e: MouseEvent) => void;
    }> & {} & import("vue").ComponentCustomProperties & {
        $slots: {};
    }) | undefined>;
    menuData: import("vue").ComputedRef<MenuItem[]>;
    show(e: MouseEvent): void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
