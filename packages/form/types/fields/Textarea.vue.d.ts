import { PropType } from 'vue';
import { FormState, TextareaConfig } from '../schema';
declare const _default: import("vue").DefineComponent<{
    config: {
        type: PropType<TextareaConfig>;
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
    changeHandler: (v: string) => void;
    inputHandler: (v: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change(values: string | number): string | number;
    input(values: string | number): string | number;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: {
        type: PropType<TextareaConfig>;
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
    onChange?: ((values: string | number) => any) | undefined;
    onInput?: ((values: string | number) => any) | undefined;
}, {
    name: string;
    disabled: boolean;
    model: Record<string, any>;
}>;
export default _default;
