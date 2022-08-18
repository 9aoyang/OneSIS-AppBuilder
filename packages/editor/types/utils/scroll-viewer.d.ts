interface ScrollViewerOptions {
    container: HTMLDivElement;
    target: HTMLDivElement;
    zoom: number;
}
export declare class ScrollViewer {
    private enter;
    private targetEnter;
    private keydown;
    private container;
    private target;
    private zoom;
    private scrollLeft;
    private scrollTop;
    private x;
    private y;
    private resizeObserver;
    constructor(options: ScrollViewerOptions);
    destroy(): void;
    setZoom(zoom: number): void;
    private scroll;
    private removeHandler;
    private wheelHandler;
    private mouseEnterHandler;
    private mouseLeaveHandler;
    private targetMouseEnterHandler;
    private targetMouseLeaveHandler;
    private mousedownHandler;
    private mouseupHandler;
    private mousemoveHandler;
    private keydownHandler;
    private keyupHandler;
    private setScrollOffset;
}
export {};
