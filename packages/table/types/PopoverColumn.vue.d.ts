import { PropType } from 'vue';
import { ColumnConfig } from './schema';
declare const _default: import("vue").DefineComponent<{
    config: {
        type: PropType<ColumnConfig>;
        default: () => {};
        required: true;
    };
}, {
    formatter: (item: ColumnConfig, row: any) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: {
        type: PropType<ColumnConfig>;
        default: () => {};
        required: true;
    };
}>>, {
    config: ColumnConfig;
}>;
export default _default;
