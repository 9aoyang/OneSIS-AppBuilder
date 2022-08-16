/// <reference types="node" />
import { EventEmitter } from 'events';
import Moveable from 'moveable';
import StageCore from './StageCore';
import StageMask from './StageMask';
import { StageDragResizeConfig, StageDragStatus } from './types';
export default class StageMultiDragResize extends EventEmitter {
  core: StageCore;
  mask: StageMask;
  /** 画布容器 */
  container: HTMLElement;
  /** 多选:目标节点组 */
  targetList: HTMLElement[];
  /** 多选:目标节点在蒙层中的占位节点组 */
  dragElList: HTMLDivElement[];
  /** Moveable多选拖拽类实例 */
  moveableForMulti?: Moveable;
  /** 拖动状态 */
  dragStatus: StageDragStatus;
  private multiMoveableHelper?;
  constructor(config: StageDragResizeConfig);
  /**
   * 多选
   * @param els
   */
  multiSelect(els: HTMLElement[]): void;
  canSelect(el: HTMLElement, stop: () => boolean): Boolean;
  /**
   * 清除多选状态
   */
  clearSelectStatus(): void;
  /**
   * 销毁实例
   */
  destroy(): void;
  /**
   * 清除蒙层占位节点
   */
  destroyDragElList(): void;
  /**
   * 拖拽完成后将更新的位置信息暴露给上层业务方，业务方可以接收事件进行保存
   * @param isResize 是否进行大小缩放
   */
  private update;
  /**
   * 获取moveable options参数
   * @param {MoveableOptions} options
   * @return {MoveableOptions} moveable options参数
   */
  private getOptions;
}
