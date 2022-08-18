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
    prop: {
        type: StringConstructor;
        default: string;
    };
    size: StringConstructor;
    name: {
        type: StringConstructor;
        default: string;
    };
}, {
    addable: import("vue").ComputedRef<boolean | "undefined">;
    toggleMode: () => void;
    removeHandler: (index: number) => false | undefined;
    swapHandler: (idx1: number, idx2: number) => false | undefined;
    changeHandler: () => false | undefined;
    addHandler: () => Promise<false | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    labelWidth: StringConstructor;
    model: {
        type: ObjectConstructor;
        default: () => {};
    };
    config: {
        type: PropType<GroupListConfig>;
        default: () => {};
    };
    prop: {
        type: StringConstructor;
        default: string;
    };
    size: StringConstructor;
    name: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    config: GroupListConfig;
    name: string;
    prop: string;
    model: Record<string, any>;
}>;
export default _default;
