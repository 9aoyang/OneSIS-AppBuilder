import type { ComponentItem } from '../../type';
declare const _default: import("vue").DefineComponent<{}, {
    searchText: import("vue").Ref<string>;
    collapseValue: import("vue").ComputedRef<number[]>;
    list: import("vue").ComputedRef<{
        items: ComponentItem[];
        title: string;
    }[] | undefined>;
    appendComponent({ text, type, data }: ComponentItem): void;
    dragstartHandler({ text, type, data }: ComponentItem, e: DragEvent): void;
    dragendHandler(): void;
    dragHandler(e: DragEvent): void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
