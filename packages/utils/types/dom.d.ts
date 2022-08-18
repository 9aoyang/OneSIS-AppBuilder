export declare const asyncLoadJs: (url: string, crossOrigin?: string, document?: Document) => any;
export declare const asyncLoadCss: (url: string, document?: Document) => any;
export declare const addClassName: (el: Element, doc: Document, className: string) => void;
export declare const removeClassName: (el: Element, className: string) => void;
export declare const removeClassNameByClassName: (doc: Document, className: string) => HTMLElement | null;
export declare const injectStyle: (doc: Document, style: string) => HTMLStyleElement;
export declare const createDiv: ({ className, cssText }: {
    className: string;
    cssText: string;
}) => HTMLDivElement;
