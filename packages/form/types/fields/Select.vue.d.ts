import { PropType, Ref } from 'vue';
import { SelectConfig, SelectGroupOption, SelectOption } from '../schema';
declare const _default: import("vue").DefineComponent<{
    config: {
        type: PropType<SelectConfig>;
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
    select: Ref<any>;
    loading: Ref<boolean>;
    remote: Ref<boolean>;
    options: Ref<SelectOption[]>;
    groupOptions: Ref<SelectGroupOption[]>;
    moreLoadingVisible: Ref<boolean>;
    popperClass: string | undefined;
    getOptions: () => Promise<any>;
    getRequestFuc(): unknown;
    changeHandler(value: any): void;
    visibleHandler(visible: boolean): Promise<void>;
    remoteMethod(q: string): Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: {
        type: PropType<SelectConfig>;
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
