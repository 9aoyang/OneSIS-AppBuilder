import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: ArrayConstructor;
        require: boolean;
    };
    columns: {
        type: PropType<any[]>;
        require: boolean;
        default: () => never[];
    };
    /** 合并行或列的计算方法 */
    spanMethod: {
        type: PropType<(data: {
            row: any;
            column: any;
            rowIndex: number;
            columnIndex: number;
        }) => [number, number]>;
    };
    fetch: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Table 的最大高度。合法的值为数字或者单位为 px 的高度 */
    bodyHeight: {
        type: (StringConstructor | NumberConstructor)[];
    };
    /** 是否显示表头 */
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 空数据时显示的文本内容 */
    emptyText: {
        type: StringConstructor;
    };
    /** 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效 */
    defaultExpandAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    rowkeyName: {
        type: StringConstructor;
    };
    /** 是否带有纵向边框 */
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, {
    editState: any[];
}, {
    tableData(): unknown[];
    selectionColumn(): any;
    hasBorder(): boolean;
}, {
    sortChange(data: any): void;
    selectHandler(selection: any, row: any): void;
    selectAllHandler(selection: any): void;
    selectionChangeHandler(selection: any): void;
    toggleRowSelection(row: any, selected: boolean): void;
    toggleRowExpansion(row: any, expanded: boolean): void;
    clearSelection(): void;
    objectSpanMethod(data: any): [number, number] | (() => {
        rowspan: number;
        colspan: number;
    });
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("afterAction" | "sort-change" | "select" | "select-all" | "selection-change")[], "select" | "afterAction" | "sort-change" | "select-all" | "selection-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: ArrayConstructor;
        require: boolean;
    };
    columns: {
        type: PropType<any[]>;
        require: boolean;
        default: () => never[];
    };
    /** 合并行或列的计算方法 */
    spanMethod: {
        type: PropType<(data: {
            row: any;
            column: any;
            rowIndex: number;
            columnIndex: number;
        }) => [number, number]>;
    };
    fetch: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Table 的最大高度。合法的值为数字或者单位为 px 的高度 */
    bodyHeight: {
        type: (StringConstructor | NumberConstructor)[];
    };
    /** 是否显示表头 */
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 空数据时显示的文本内容 */
    emptyText: {
        type: StringConstructor;
    };
    /** 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效 */
    defaultExpandAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    rowkeyName: {
        type: StringConstructor;
    };
    /** 是否带有纵向边框 */
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onAfterAction?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
    "onSort-change"?: ((...args: any[]) => any) | undefined;
    "onSelect-all"?: ((...args: any[]) => any) | undefined;
    "onSelection-change"?: ((...args: any[]) => any) | undefined;
}, {
    columns: any[];
    showHeader: boolean;
    fetch: boolean;
    defaultExpandAll: boolean;
    border: boolean;
}>;
export default _default;
