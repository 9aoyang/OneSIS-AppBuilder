import { PropType } from 'vue';
import { FormState, FormValue, TabConfig, TabPaneConfig } from '../schema';
declare const Tab: import("vue").DefineComponent<{
    labelWidth: StringConstructor;
    expandMore: BooleanConstructor;
    model: {
        type: ObjectConstructor;
        default: () => {};
    };
    config: {
        type: PropType<TabConfig>;
        default: () => {};
    };
    prop: StringConstructor;
    name: StringConstructor;
    size: StringConstructor;
}, {
    mForm: FormState | undefined;
    activeTabName: any;
    tabs: import("vue").ComputedRef<any>;
    filter: (config: any) => any;
    tabItems: (tab: TabPaneConfig) => import("../schema").FormConfig | TabPaneConfig[];
    tabClickHandler: (tab: any) => void;
    onTabAdd: () => void;
    onTabRemove: (tabName: string) => void;
    display: (displayConfig: any) => any;
    changeHandler: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change(values: FormValue): FormValue;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    labelWidth: StringConstructor;
    expandMore: BooleanConstructor;
    model: {
        type: ObjectConstructor;
        default: () => {};
    };
    config: {
        type: PropType<TabConfig>;
        default: () => {};
    };
    prop: StringConstructor;
    name: StringConstructor;
    size: StringConstructor;
}>> & {
    onChange?: ((values: FormValue) => any) | undefined;
}, {
    config: TabConfig;
    model: Record<string, any>;
    expandMore: boolean;
}>;
export default Tab;
