export declare class UndoRedo<T = any> {
    private elementList;
    private listCursor;
    private listMaxSize;
    constructor(listMaxSize?: number);
    pushElement(element: T): void;
    canUndo(): boolean;
    undo(): T | null;
    canRedo(): boolean;
    redo(): T | null;
    getCurrentElement(): T | null;
}
