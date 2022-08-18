import { PropType } from 'vue';
import { SideBarData } from '../../type';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<SideBarData>;
        default: () => {
            type: string;
            status: string;
            items: string[];
        };
    };
}, {
    activeTabName: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<SideBarData>;
        default: () => {
            type: string;
            status: string;
            items: string[];
        };
    };
}>>, {
    data: SideBarData;
}>;
export default _default;
