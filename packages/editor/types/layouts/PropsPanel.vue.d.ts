import type { FormValue } from '@tmagic/form';
declare const _default: import("vue").DefineComponent<{}, {
    values: import("vue").Ref<FormValue>;
    configForm: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            config: import("@tmagic/form").FormConfig;
            initValues: Record<string, any>;
            keyProp: string;
            parentValues: Record<string, any>;
            labelWidth: string;
            disabled: boolean;
            height: string;
            stepActive: string | number;
            inline: boolean;
            labelPosition: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            initValues: {
                type: ObjectConstructor;
                required: true;
                default: () => {};
            };
            parentValues: {
                type: ObjectConstructor;
                default: () => {};
            };
            config: {
                type: import("vue").PropType<import("@tmagic/form").FormConfig>;
                required: true;
                default: () => never[];
            };
            labelWidth: {
                type: StringConstructor;
                default: () => string;
            };
            disabled: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            height: {
                type: StringConstructor;
                default: () => string;
            };
            stepActive: {
                type: (NumberConstructor | StringConstructor)[];
                default: () => number;
            };
            size: {
                type: import("vue").PropType<"small" | "large" | "default">;
            };
            inline: {
                type: BooleanConstructor;
                default: boolean;
            };
            labelPosition: {
                type: StringConstructor;
                default: string;
            };
            keyProp: {
                type: StringConstructor;
                default: string;
            };
            popperClass: {
                type: StringConstructor;
            };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onField-input"?: ((...args: any[]) => any) | undefined;
            "onField-change"?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "height" | "disabled" | "labelWidth" | "config" | "initValues" | "parentValues" | "stepActive" | "inline" | "labelPosition" | "keyProp">;
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
        $emit: (event: "change" | "field-input" | "field-change", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            initValues: {
                type: ObjectConstructor;
                required: true;
                default: () => {};
            };
            parentValues: {
                type: ObjectConstructor;
                default: () => {};
            };
            config: {
                type: import("vue").PropType<import("@tmagic/form").FormConfig>;
                required: true;
                default: () => never[];
            };
            labelWidth: {
                type: StringConstructor;
                default: () => string;
            };
            disabled: {
                type: BooleanConstructor;
                default: () => boolean;
            };
            height: {
                type: StringConstructor;
                default: () => string;
            };
            stepActive: {
                type: (NumberConstructor | StringConstructor)[];
                default: () => number;
            };
            size: {
                type: import("vue").PropType<"small" | "large" | "default">;
            };
            inline: {
                type: BooleanConstructor;
                default: boolean;
            };
            labelPosition: {
                type: StringConstructor;
                default: string;
            };
            keyProp: {
                type: StringConstructor;
                default: string;
            };
            popperClass: {
                type: StringConstructor;
            };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onField-input"?: ((...args: any[]) => any) | undefined;
            "onField-change"?: ((...args: any[]) => any) | undefined;
        }, {
            initialized: import("vue").Ref<boolean>;
            values: import("vue").Ref<FormValue>;
            elForm: import("vue").Ref<any>;
            formState: import("@tmagic/form").FormState;
            changeHandler: () => void;
            resetForm: () => any;
            submitForm: (native?: boolean | undefined) => Promise<any>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "field-input" | "field-change")[], string, {
            config: import("@tmagic/form").FormConfig;
            initValues: Record<string, any>;
            keyProp: string;
            parentValues: Record<string, any>;
            labelWidth: string;
            disabled: boolean;
            height: string;
            stepActive: string | number;
            inline: boolean;
            labelPosition: string;
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
        initValues: {
            type: ObjectConstructor;
            required: true;
            default: () => {};
        };
        parentValues: {
            type: ObjectConstructor;
            default: () => {};
        };
        config: {
            type: import("vue").PropType<import("@tmagic/form").FormConfig>;
            required: true;
            default: () => never[];
        };
        labelWidth: {
            type: StringConstructor;
            default: () => string;
        };
        disabled: {
            type: BooleanConstructor;
            default: () => boolean;
        };
        height: {
            type: StringConstructor;
            default: () => string;
        };
        stepActive: {
            type: (NumberConstructor | StringConstructor)[];
            default: () => number;
        };
        size: {
            type: import("vue").PropType<"small" | "large" | "default">;
        };
        inline: {
            type: BooleanConstructor;
            default: boolean;
        };
        labelPosition: {
            type: StringConstructor;
            default: string;
        };
        keyProp: {
            type: StringConstructor;
            default: string;
        };
        popperClass: {
            type: StringConstructor;
        };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onField-input"?: ((...args: any[]) => any) | undefined;
        "onField-change"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        initialized: import("vue").Ref<boolean>;
        values: import("vue").Ref<FormValue>;
        elForm: import("vue").Ref<any>;
        formState: import("@tmagic/form").FormState;
        changeHandler: () => void;
        resetForm: () => any;
        submitForm: (native?: boolean | undefined) => Promise<any>;
    }> & {} & import("vue").ComponentCustomProperties) | undefined>;
    curFormConfig: any;
    propsPanelSize: import("vue").ComputedRef<unknown>;
    submit(): Promise<void>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "mounted"[], "mounted", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onMounted?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
