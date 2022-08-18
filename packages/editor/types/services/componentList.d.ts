import type { ComponentGroup } from '../type';
import BaseService from './BaseService';
declare class ComponentList extends BaseService {
    private state;
    constructor();
    /**
     * @param componentGroupList 组件列表配置
     */
    setList(componentGroupList: ComponentGroup[]): void;
    getList(): ComponentGroup[];
}
export declare type ComponentListService = ComponentList;
declare const _default: ComponentList;
export default _default;
