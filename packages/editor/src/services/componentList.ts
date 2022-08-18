import { reactive } from 'vue';

import type { ComponentGroup, ComponentGroupState } from '../type';

import BaseService from './BaseService';

class ComponentList extends BaseService {
  private state = reactive<ComponentGroupState>({
    list: [],
  });

  constructor() {
    super([]);
  }

  /**
   * @param componentGroupList 组件列表配置
   */
  public setList(componentGroupList: ComponentGroup[]): void {
    this.state.list = componentGroupList;
  }

  public getList(): ComponentGroup[] {
    return this.state.list;
  }
}

export type ComponentListService = ComponentList;

export default new ComponentList();
