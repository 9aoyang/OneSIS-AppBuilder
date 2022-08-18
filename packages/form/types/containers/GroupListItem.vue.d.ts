import { PropType } from 'vue';
import { GroupListConfig } from '../schema';
declare const _default: import("vue").DefineComponent<{
    labelWidth: StringConstructor;
    model: {
        type: ObjectConstructor;
        default: () => {};
    };
    config: {
        type: PropType<GroupListConfig>;
        default: () => {};
    };
    prop: StringConstructor;
    size: StringConstructor;
    index: {
        type: (SymbolConstructor | NumberConstructor | StringConstructor)[];
        default: number;
    };
    groupModel: {
        type: ArrayConstructor;
        default: () => never[];
    };
}, {
    expand: import("vue").Ref<boolean>;
    expandHandler: () => void;
    title: import("vue").ComputedRef<any>;
    showDelete: (index: number) => boolean;
    removeHandler: () => void;
    movable: () => boolean;
    changeOrder: (offset?: number) => void;
    itemExtra: import("vue").ComputedRef<any>;
    rowConfig: import("vue").ComputedRef<{
        [x: string]: string | number | import("../schema").FormConfig | undefined;
        type: string;
        span: number;
        items: import("../schema").FormConfig;
        labelWidth: string | undefined;
    }>;
    changeHandler: () => void;
    length: import("vue").ComputedRef<number>;
    Delete: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "swap-item" | "remove-item")[], "change" | "swap-item" | "remove-item", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    labelWidth: StringConstructor;
    model: {
        type: ObjectConstructor;
        default: () => {};
    };
    config: {
        type: PropType<GroupListConfig>;
        default: () => {};
    };
    prop: StringConstructor;
    size: StringConstructor;
    index: {
        type: (SymbolConstructor | NumberConstructor | StringConstructor)[];
        default: number;
    };
    groupModel: {
        type: ArrayConstructor;
        default: () => never[];
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onSwap-item"?: ((...args: any[]) => any) | undefined;
    "onRemove-item"?: ((...args: any[]) => any) | undefined;
}, {
    config: GroupListConfig;
    index: string | number | symbol;
    model: Record<string, any>;
    groupModel: unknown[];
}>;
export default _default;
