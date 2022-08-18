import { PropType } from 'vue';
import { ChildConfig, FormState } from '../schema';
declare const _default: import("vue").DefineComponent<{
    labelWidth: StringConstructor;
    expandMore: BooleanConstructor;
    span: NumberConstructor;
    model: {
        type: ObjectConstructor;
        default: () => {};
    };
    config: {
        type: PropType<ChildConfig>;
        default: () => {};
    };
    prop: StringConstructor;
    size: StringConstructor;
}, {
    mForm: FormState | undefined;
    display: import("vue").ComputedRef<any>;
    changeHandler: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    labelWidth: StringConstructor;
    expandMore: BooleanConstructor;
    span: NumberConstructor;
    model: {
        type: ObjectConstructor;
        default: () => {};
    };
    config: {
        type: PropType<ChildConfig>;
        default: () => {};
    };
    prop: StringConstructor;
    size: StringConstructor;
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    config: ChildConfig;
    model: Record<string, any>;
    expandMore: boolean;
}>;
export default _default;
