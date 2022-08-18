import { PropType } from 'vue';
import { UploadFile } from 'element-plus';
import { ColumnConfig, FormState, SortProp, TableConfig } from '../schema';
declare const _default: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        required: true;
    };
    model: {
        type: ObjectConstructor;
        required: true;
        default: () => {};
    };
    config: {
        type: PropType<TableConfig>;
        required: true;
        default: () => {};
    };
    prop: {
        type: StringConstructor;
    };
    labelWidth: {
        type: StringConstructor;
    };
    sort: {
        type: BooleanConstructor;
        default: boolean;
    };
    sortKey: {
        type: StringConstructor;
        default: string;
    };
    text: {
        type: StringConstructor;
    };
    size: StringConstructor;
    enableToggleMode: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    mForm: FormState | undefined;
    pagesize: import("vue").Ref<number>;
    pagecontext: import("vue").Ref<number>;
    foreUpdate: () => void;
    isFullscreen: import("vue").Ref<boolean>;
    elTable: import("vue").Ref<any>;
    mTable: import("vue").Ref<HTMLDivElement | undefined>;
    excelBtn: import("vue").Ref<any>;
    modelName: import("vue").ComputedRef<string | number>;
    updateKey: import("vue").Ref<number>;
    ArrowDown: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    ArrowUp: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    Delete: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    FullScreen: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    Grid: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    data: import("vue").ComputedRef<any>;
    addable: import("vue").ComputedRef<boolean | "undefined">;
    selection: import("vue").ComputedRef<boolean | "single" | undefined>;
    importable: import("vue").ComputedRef<boolean | "undefined">;
    sortChange: ({ prop, order }: SortProp) => void;
    display(fuc: any): any;
    itemExtra(fuc: any, index: number): any;
    newHandler: (row?: any) => Promise<void>;
    removeHandler(index: number): void;
    selectHandle(selection: any, row: any): void;
    toggleRowSelection(row: any, selected: boolean): void;
    makeConfig(config: ColumnConfig): ColumnConfig;
    upHandler(index: number): void;
    topHandler(index: number): void;
    downHandler(index: number): void;
    bottomHandler(index: number): void;
    showDelete(index: number): boolean;
    clearHandler(): void;
    excelHandler(file: UploadFile): false;
    handleSizeChange(val: number): void;
    handleCurrentChange(val: number): void;
    toggleMode(): void;
    toggleFullscreen(): void;
    getProp(index: number): string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "change")[], "select" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: true;
    };
    model: {
        type: ObjectConstructor;
        required: true;
        default: () => {};
    };
    config: {
        type: PropType<TableConfig>;
        required: true;
        default: () => {};
    };
    prop: {
        type: StringConstructor;
    };
    labelWidth: {
        type: StringConstructor;
    };
    sort: {
        type: BooleanConstructor;
        default: boolean;
    };
    sortKey: {
        type: StringConstructor;
        default: string;
    };
    text: {
        type: StringConstructor;
    };
    size: StringConstructor;
    enableToggleMode: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
}, {
    config: TableConfig;
    enableToggleMode: boolean;
    sort: boolean;
    model: Record<string, any>;
    sortKey: string;
}>;
export default _default;
