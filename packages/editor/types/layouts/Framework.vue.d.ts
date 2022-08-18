import type { MApp } from '@tmagic/schema';
import { GetColumnWidth } from '../type';
declare const _default: import("vue").DefineComponent<{
    codeOptions: {
        type: ObjectConstructor;
        default: () => {};
    };
}, {
    root: import("vue").ComputedRef<MApp | undefined>;
    pageLength: import("vue").ComputedRef<number>;
    showSrc: import("vue").ComputedRef<boolean | undefined>;
    columnWidth: import("vue").ComputedRef<GetColumnWidth | undefined>;
    saveCode(value: string): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    codeOptions: {
        type: ObjectConstructor;
        default: () => {};
    };
}>>, {
    codeOptions: Record<string, any>;
}>;
export default _default;
