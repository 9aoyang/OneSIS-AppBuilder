import { PropType } from 'vue';
import { FormState, RowConfig } from '../schema';
declare const _default: import("vue").DefineComponent<{
    labelWidth: StringConstructor;
    expandMore: BooleanConstructor;
    model: {
        type: ObjectConstructor;
        default: () => {};
    };
    config: {
        type: PropType<RowConfig>;
        default: () => {};
    };
    prop: StringConstructor;
    name: StringConstructor;
    size: StringConstructor;
}, {
    mForm: FormState | undefined;
    changeHandler: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    labelWidth: StringConstructor;
    expandMore: BooleanConstructor;
    model: {
        type: ObjectConstructor;
        default: () => {};
    };
    config: {
        type: PropType<RowConfig>;
        default: () => {};
    };
    prop: StringConstructor;
    name: StringConstructor;
    size: StringConstructor;
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    config: RowConfig;
    model: Record<string, any>;
    expandMore: boolean;
}>;
export default _default;
