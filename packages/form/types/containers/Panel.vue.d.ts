import { PropType } from 'vue';
import { FormState, PanelConfig } from '../schema';
declare const _default: import("vue").DefineComponent<{
    labelWidth: StringConstructor;
    model: {
        type: ObjectConstructor;
        default: () => {};
    };
    config: {
        type: PropType<PanelConfig>;
        default: () => {};
    };
    prop: StringConstructor;
    size: StringConstructor;
    name: StringConstructor;
}, {
    mForm: FormState | undefined;
    expand: import("vue").Ref<boolean>;
    items: import("vue").ComputedRef<import("../schema").FormConfig>;
    filter: (config: any) => any;
    changeHandler: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    labelWidth: StringConstructor;
    model: {
        type: ObjectConstructor;
        default: () => {};
    };
    config: {
        type: PropType<PanelConfig>;
        default: () => {};
    };
    prop: StringConstructor;
    size: StringConstructor;
    name: StringConstructor;
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    config: PanelConfig;
    model: Record<string, any>;
}>;
export default _default;
