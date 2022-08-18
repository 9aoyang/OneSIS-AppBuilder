import { PropType } from 'vue';
import { GetColumnWidth, MenuBarData } from '../type';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<MenuBarData>;
        default: () => {};
    };
    height: {
        type: NumberConstructor;
    };
}, {
    keys: import("vue").ComputedRef<(keyof MenuBarData)[]>;
    columnWidth: import("vue").ComputedRef<GetColumnWidth | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<MenuBarData>;
        default: () => {};
    };
    height: {
        type: NumberConstructor;
    };
}>>, {
    data: MenuBarData;
}>;
export default _default;
