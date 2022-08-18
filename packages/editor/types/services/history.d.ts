import type { Id, MPage } from '@tmagic/schema';
import { UndoRedo } from '../utils/undo-redo';
import BaseService from './BaseService';
export interface StepValue {
    data: MPage;
    modifiedNodeIds: Map<Id, Id>;
    nodeId: Id;
}
export interface HistoryState {
    pageId?: Id;
    pageSteps: Record<Id, UndoRedo<StepValue>>;
    canRedo: boolean;
    canUndo: boolean;
}
declare class History extends BaseService {
    state: {
        pageId?: Id | undefined;
        pageSteps: Record<Id, UndoRedo<StepValue>>;
        canRedo: boolean;
        canUndo: boolean;
    };
    constructor();
    reset(): void;
    changePage(page: MPage): void;
    empty(): void;
    push(state: StepValue): StepValue | null;
    undo(): StepValue | null;
    redo(): StepValue | null;
    destroy(): void;
    private getUndoRedo;
    private setCanUndoRedo;
}
export declare type HistoryService = History;
declare const _default: History;
export default _default;
