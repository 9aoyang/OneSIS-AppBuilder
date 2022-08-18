import * as monaco from 'monaco-editor';
declare const _default: import("vue").DefineComponent<{
    initValues: {
        type: (ObjectConstructor | StringConstructor)[];
    };
    modifiedValues: {
        type: (ObjectConstructor | StringConstructor)[];
    };
    type: {
        type: StringConstructor;
        default: () => string;
    };
    language: {
        type: StringConstructor;
        default: () => string;
    };
    options: {
        type: ObjectConstructor;
        default: () => {};
    };
}, {
    values: import("vue").Ref<string>;
    loading: import("vue").Ref<boolean>;
    codeEditor: import("vue").Ref<HTMLDivElement | undefined>;
    getEditor(): monaco.editor.IStandaloneCodeEditor | monaco.editor.IStandaloneDiffEditor | null;
    setEditorValue: (v: string | any, m: string | any) => void | undefined;
    focus(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("save" | "initd")[], "save" | "initd", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    initValues: {
        type: (ObjectConstructor | StringConstructor)[];
    };
    modifiedValues: {
        type: (ObjectConstructor | StringConstructor)[];
    };
    type: {
        type: StringConstructor;
        default: () => string;
    };
    language: {
        type: StringConstructor;
        default: () => string;
    };
    options: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & {
    onSave?: ((...args: any[]) => any) | undefined;
    onInitd?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    options: Record<string, any>;
    language: string;
}>;
export default _default;
