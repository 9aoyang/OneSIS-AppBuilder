import { PropType } from 'vue';
interface CodeLinkConfig {
    type: 'code-link';
    name: string;
    text?: string;
    formTitle?: string;
}
declare const _default: import("vue").DefineComponent<{
    config: {
        type: PropType<CodeLinkConfig>;
    };
    model: {
        type: ObjectConstructor;
    };
    name: {
        type: StringConstructor;
    };
    prop: {
        type: StringConstructor;
    };
}, {
    modelValue: import("vue").Ref<{
        form: Record<string, any>;
    }>;
    formConfig: import("vue").ComputedRef<{
        text: string;
        type: string;
        form: {
            name: string | undefined;
            type: string;
        }[];
        name?: string | undefined;
        formTitle?: string | undefined;
    }>;
    changeHandler(v: Record<string, any>): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: {
        type: PropType<CodeLinkConfig>;
    };
    model: {
        type: ObjectConstructor;
    };
    name: {
        type: StringConstructor;
    };
    prop: {
        type: StringConstructor;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
