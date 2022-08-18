export enum NodeType {
  CONTAINER = 'container',
  PAGE = 'page',
  ROOT = 'app',
}

export type Id = string | number;

export interface EventItemConfig {
  /** 被选中组件ID */
  to: Id;
  /** 被选中组件名称 */
  name: string;
  /** 触发事件后执行被选中组件的方法 */
  method: string;
}

export interface MComponent {
  /** 组件ID，默认为${type}_${number}}形式, 如：page_123 */
  id: Id;
  /** 组件类型 */
  type?: string;
  /** 组件显示名称 */
  name?: string;
  /** 组件根Dom上的class */
  className?: string;
  /* 关联事件集合 */
  events?: EventItemConfig[];
  /** 组件根Dom的style */
  style?: {
    [key: string]: any;
  };
  [key: string]: any;
}

export interface MContainer extends MComponent {
  /** 容器类型，默认为'container' */
  type?: NodeType.CONTAINER | string;
  /** 容器子元素 */
  items: (MComponent | MContainer)[];
}

export interface MPage extends MContainer {
  /** 页面类型 */
  type: NodeType.PAGE;
}

export interface MApp extends MComponent {
  /** App页面类型，app作为整个结构的根节点；有且只有一个 */
  type: NodeType.ROOT;
  /** */
  items: MPage[];
}

export interface PastePosition {
  left?: number;
  top?: number;
}

export type MNode = MComponent | MContainer | MPage | MApp;
