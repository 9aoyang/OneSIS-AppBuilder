/**
 * 动态表单，目前只支持input类型字段
 * inputType: 'dynamic-field',
 * text: '动态表单',
 * dynamicKey: 'keyname', 如果model[dynamicKey]变化，表单字段变化
 * returnFields(config,model,request): 函数，返回字段列表[{name:'',label:'',defaultValue:''}]
 *
 * 特别注意！！！field的上一级必须extensible: true，才能保存未声明的字段
 */
import { PropType } from 'vue';
import { DynamicFieldConfig } from '../schema';
declare const _default: import("vue").DefineComponent<{
    config: {
        type: PropType<DynamicFieldConfig>;
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
    request: Function;
    fieldMap: {
        [key: string]: any;
    };
    fieldLabelMap: {
        [key: string]: any;
    };
    unwatch: import("vue").WatchStopHandle;
    changeFieldMap: () => Promise<void>;
    inputChangeHandler: (key: string) => void;
}, unknown, {}, {
    init(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: {
        type: PropType<DynamicFieldConfig>;
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
