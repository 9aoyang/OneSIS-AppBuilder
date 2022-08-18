import { PropType } from 'vue';
import { FormConfig, FormState, FormValue } from './schema';
declare const _default: import("vue").DefineComponent<{
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
        type: PropType<FormConfig>;
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
}, {
    initialized: import("vue").Ref<boolean>;
    values: import("vue").Ref<FormValue>;
    elForm: import("vue").Ref<any>;
    formState: FormState;
    changeHandler: () => void;
    resetForm: () => any;
    submitForm: (native?: boolean) => Promise<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "field-input" | "field-change")[], "change" | "field-input" | "field-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: PropType<FormConfig>;
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
    config: FormConfig;
    initValues: Record<string, any>;
    keyProp: string;
    parentValues: Record<string, any>;
    labelWidth: string;
    disabled: boolean;
    height: string;
    stepActive: string | number;
    inline: boolean;
    labelPosition: string;
}>;
export default _default;
