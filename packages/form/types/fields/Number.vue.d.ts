import { PropType } from 'vue';
import { FormState, NumberConfig } from '../schema';
declare const _default: import("vue").DefineComponent<{
    config: {
        type: PropType<NumberConfig>;
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
    mForm: FormState | null | undefined;
    changeHandler: (value: number) => void;
    inputHandler: (v: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "input")[], "input" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: {
        type: PropType<NumberConfig>;
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
    onInput?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    disabled: boolean;
    model: Record<string, any>;
}>;
export default _default;
