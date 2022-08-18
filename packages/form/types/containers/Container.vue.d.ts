import { PropType } from 'vue';
import { ChildConfig, FormValue } from '../schema';
declare const _default: import("vue").DefineComponent<{
    labelWidth: StringConstructor;
    expandMore: BooleanConstructor;
    model: {
        type: PropType<FormValue>;
        required: true;
    };
    config: {
        type: PropType<ChildConfig>;
        required: true;
    };
    prop: {
        type: StringConstructor;
        default: () => string;
    };
    stepActive: {
        type: (NumberConstructor | StringConstructor)[];
    };
    size: {
        type: StringConstructor;
        default: string;
    };
}, {
    expand: import("vue").Ref<boolean>;
    name: import("vue").ComputedRef<string | number>;
    type: import("vue").ComputedRef<string>;
    disabled: import("vue").ComputedRef<any>;
    itemProp: import("vue").ComputedRef<string>;
    items: import("vue").ComputedRef<import("../schema").FormConfig>;
    display: import("vue").ComputedRef<boolean>;
    itemLabelWidth: import("vue").ComputedRef<string | undefined>;
    tagName: import("vue").ComputedRef<import("vue").ConcreteComponent<{}, any, any, import("vue").ComputedOptions, import("vue").MethodOptions> | "m-fields-text">;
    rule: import("vue").ComputedRef<import("../schema").Rule[]>;
    tooltip: import("vue").ComputedRef<any>;
    extra: import("vue").ComputedRef<any>;
    key: (config: any) => any;
    onChangeHandler: (v: FormValue, key?: string) => Promise<void>;
    expandHandler: () => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    labelWidth: StringConstructor;
    expandMore: BooleanConstructor;
    model: {
        type: PropType<FormValue>;
        required: true;
    };
    config: {
        type: PropType<ChildConfig>;
        required: true;
    };
    prop: {
        type: StringConstructor;
        default: () => string;
    };
    stepActive: {
        type: (NumberConstructor | StringConstructor)[];
    };
    size: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    size: string;
    prop: string;
    expandMore: boolean;
}>;
export default _default;
