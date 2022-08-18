import { PropType } from 'vue';
import { ChildConfig, FormValue } from '../schema';
declare const _default: {
    labelWidth: StringConstructor;
    expandMore: BooleanConstructor;
    model: {
        type: PropType<FormValue>;
        required: boolean;
    };
    config: {
        type: PropType<ChildConfig>;
        required: boolean;
    };
    prop: {
        type: StringConstructor;
        default: () => string;
    };
    stepActive: {
        type: (NumberConstructor | StringConstructor)[];
    };
    size: {
        type: StringConstructor;
        default: string;
    };
};
export default _default;
