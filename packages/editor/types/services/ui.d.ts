import type { UiState } from '../type';
import BaseService from './BaseService';
declare const state: {
    uiSelectMode: boolean;
    showSrc: boolean;
    zoom: number;
    stageContainerRect: {
        width: number;
        height: number;
    };
    stageRect: {
        width: number;
        height: number;
    };
    columnWidth: {
        left: number;
        center: number;
        right: number;
    };
    showGuides: boolean;
    showRule: boolean;
    propsPanelSize: "small" | "large" | "default";
};
declare class Ui extends BaseService {
    constructor();
    set<T = any>(name: keyof UiState, value: T): void;
    get<T>(name: keyof typeof state): T;
    zoom(zoom: number): void;
    private setColumnWidth;
    private setStageRect;
    private calcZoom;
}
export declare type UiService = Ui;
declare const _default: Ui;
export default _default;
