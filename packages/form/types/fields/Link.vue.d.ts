import { PropType } from 'vue';
import { FormState, LinkConfig } from '../schema';
declare const _default: import("vue").DefineComponent<{
    config: {
        type: PropType<LinkConfig>;
        required: true;
    };
    model: {
        type: ObjectConstructor;
        required: boolean;
        default: () => {};
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: PropType<"small" | "mini" | "medium">;
    prop: StringConstructor;
    initValues: ObjectConstructor;
    values: ObjectConstructor;
}, {
    formValue: import("vue").Ref<{}>;
    editor: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            config: import("../schema").FormConfig;
            values: Record<string, any>;
            fullscreen: boolean;
            confirmText: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            values: {
                type: ObjectConstructor;
                default: () => {};
            };
            width: (NumberConstructor | StringConstructor)[];
            fullscreen: BooleanConstructor;
            title: StringConstructor;
            config: {
                type: PropType<import("../schema").FormConfig>;
                required: true;
                default: () => never[];
            };
            labelWidth: (NumberConstructor | StringConstructor)[];
            size: PropType<"small" | "default" | "large">;
            confirmText: {
                type: StringConstructor;
                default: string;
            };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            onSubmit?: ((...args: any[]) => any) | undefined;
            onError?: ((...args: any[]) => any) | undefined;
            onClose?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "config" | "values" | "fullscreen" | "confirmText">;
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
        $emit: (event: "change" | "close" | "submit" | "error", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            values: {
                type: ObjectConstructor;
                default: () => {};
            };
            width: (NumberConstructor | StringConstructor)[];
            fullscreen: BooleanConstructor;
            title: StringConstructor;
            config: {
                type: PropType<import("../schema").FormConfig>;
                required: true;
                default: () => never[];
            };
            labelWidth: (NumberConstructor | StringConstructor)[];
            size: PropType<"small" | "default" | "large">;
            confirmText: {
                type: StringConstructor;
                default: string;
            };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            onSubmit?: ((...args: any[]) => any) | undefined;
            onError?: ((...args: any[]) => any) | undefined;
            onClose?: ((...args: any[]) => any) | undefined;
        }, {
            form: import("vue").Ref<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    config: import("../schema").FormConfig;
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
                        type: PropType<import("../schema").FormConfig>;
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
                        type: PropType<"small" | "default" | "large">;
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
                } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "config" | "initValues" | "keyProp" | "parentValues" | "labelWidth" | "disabled" | "height" | "stepActive" | "inline" | "labelPosition">;
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
                        type: PropType<import("../schema").FormConfig>;
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
                        type: PropType<"small" | "default" | "large">;
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
                    values: import("vue").Ref<import("../schema").FormValue>;
                    elForm: import("vue").Ref<any>;
                    formState: FormState;
                    changeHandler: () => void;
                    resetForm: () => any;
                    submitForm: (native?: boolean | undefined) => Promise<any>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "field-input" | "field-change")[], string, {
                    config: import("../schema").FormConfig;
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
                    type: PropType<import("../schema").FormConfig>;
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
                    type: PropType<"small" | "default" | "large">;
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
                values: import("vue").Ref<import("../schema").FormValue>;
                elForm: import("vue").Ref<any>;
                formState: FormState;
                changeHandler: () => void;
                resetForm: () => any;
                submitForm: (native?: boolean | undefined) => Promise<any>;
            }> & {} & import("vue").ComponentCustomProperties) | undefined>;
            saveFetch: import("vue").Ref<boolean>;
            stepActive: import("vue").Ref<number>;
            dialogVisible: import("vue").Ref<boolean>;
            bodyHeight: import("vue").Ref<string>;
            stepCount: import("vue").ComputedRef<number>;
            hasStep: import("vue").ComputedRef<boolean>;
            cancel: () => void;
            closeHandler: () => void;
            save: () => Promise<void>;
            preStep: () => void;
            nextStep: () => void;
            changeHandler: (value: any) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "submit" | "error")[], string, {
            config: import("../schema").FormConfig;
            values: Record<string, any>;
            fullscreen: boolean;
            confirmText: string;
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
        values: {
            type: ObjectConstructor;
            default: () => {};
        };
        width: (NumberConstructor | StringConstructor)[];
        fullscreen: BooleanConstructor;
        title: StringConstructor;
        config: {
            type: PropType<import("../schema").FormConfig>;
            required: true;
            default: () => never[];
        };
        labelWidth: (NumberConstructor | StringConstructor)[];
        size: PropType<"small" | "default" | "large">;
        confirmText: {
            type: StringConstructor;
            default: string;
        };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        onSubmit?: ((...args: any[]) => any) | undefined;
        onError?: ((...args: any[]) => any) | undefined;
        onClose?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        form: import("vue").Ref<({
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                config: import("../schema").FormConfig;
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
                    type: PropType<import("../schema").FormConfig>;
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
                    type: PropType<"small" | "default" | "large">;
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
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "config" | "initValues" | "keyProp" | "parentValues" | "labelWidth" | "disabled" | "height" | "stepActive" | "inline" | "labelPosition">;
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
                    type: PropType<import("../schema").FormConfig>;
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
                    type: PropType<"small" | "default" | "large">;
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
                values: import("vue").Ref<import("../schema").FormValue>;
                elForm: import("vue").Ref<any>;
                formState: FormState;
                changeHandler: () => void;
                resetForm: () => any;
                submitForm: (native?: boolean | undefined) => Promise<any>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "field-input" | "field-change")[], string, {
                config: import("../schema").FormConfig;
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
                type: PropType<import("../schema").FormConfig>;
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
                type: PropType<"small" | "default" | "large">;
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
            values: import("vue").Ref<import("../schema").FormValue>;
            elForm: import("vue").Ref<any>;
            formState: FormState;
            changeHandler: () => void;
            resetForm: () => any;
            submitForm: (native?: boolean | undefined) => Promise<any>;
        }> & {} & import("vue").ComponentCustomProperties) | undefined>;
        saveFetch: import("vue").Ref<boolean>;
        stepActive: import("vue").Ref<number>;
        dialogVisible: import("vue").Ref<boolean>;
        bodyHeight: import("vue").Ref<string>;
        stepCount: import("vue").ComputedRef<number>;
        hasStep: import("vue").ComputedRef<boolean>;
        cancel: () => void;
        closeHandler: () => void;
        save: () => Promise<void>;
        preStep: () => void;
        nextStep: () => void;
        changeHandler: (value: any) => void;
    }> & {} & import("vue").ComponentCustomProperties) | undefined>;
    href: import("vue").ComputedRef<any>;
    formConfig: import("vue").ComputedRef<import("../schema").FormConfig>;
    disable: import("vue").ComputedRef<boolean | ((mForm: FormState | undefined, data: {
        model: Record<any, any>;
        values: Record<any, any>;
        parent?: Record<any, any> | undefined;
        formValue: Record<any, any>;
        prop: string;
        config: any;
    }) => boolean)>;
    displayText: import("vue").ComputedRef<string>;
    init: () => void;
    editHandler: () => void;
    action: (data: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: {
        type: PropType<LinkConfig>;
        required: true;
    };
    model: {
        type: ObjectConstructor;
        required: boolean;
        default: () => {};
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: PropType<"small" | "mini" | "medium">;
    prop: StringConstructor;
    initValues: ObjectConstructor;
    values: ObjectConstructor;
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    disabled: boolean;
    model: Record<string, any>;
}>;
export default _default;
