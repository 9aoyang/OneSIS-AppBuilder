import { PropType } from 'vue';
import { FormState, StepConfig } from '../schema';
declare const _default: import("vue").DefineComponent<{
    model: {
        type: ObjectConstructor;
        default: () => {};
    };
    config: {
        type: PropType<StepConfig>;
        default: () => {};
    };
    stepActive: {
        type: NumberConstructor;
        default: () => number;
    };
    size: StringConstructor;
    labelWidth: StringConstructor;
}, {
    mForm: FormState | undefined;
    active: import("vue").Ref<number>;
    stepClick: (index: number) => void;
    changeHandler: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    model: {
        type: ObjectConstructor;
        default: () => {};
    };
    config: {
        type: PropType<StepConfig>;
        default: () => {};
    };
    stepActive: {
        type: NumberConstructor;
        default: () => number;
    };
    size: StringConstructor;
    labelWidth: StringConstructor;
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    config: StepConfig;
    stepActive: number;
    model: Record<string, any>;
}>;
export default _default;
