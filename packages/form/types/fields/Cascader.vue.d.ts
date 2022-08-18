import { PropType } from 'vue';
import { CascaderConfig } from '../schema';
declare const _default: import("vue").DefineComponent<{
    config: {
        type: PropType<CascaderConfig>;
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
    options: import("vue").Ref<{
        value: any;
        label: string;
        children?: any[] | undefined;
    }[]>;
    remoteData: any;
    addButtonStyle: {
        top: number;
        left: number;
        width: string;
    };
    dialogVisible: boolean;
    cascader: import("vue").Ref<any>;
    dialog: import("vue").Ref<any>;
    action: import("vue").ComputedRef<((options: any) => any) | null>;
    setRemoteOptions: () => Promise<void>;
    changeHandler: (value: any) => void;
    addHandler: () => void;
    editAfterAction: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: {
        type: PropType<CascaderConfig>;
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
