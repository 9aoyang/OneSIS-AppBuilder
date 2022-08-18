import { Id, MContainer, MNode } from '@tmagic/schema';
import { AddMNode, PastePosition } from '../type';
/**
 * 粘贴前置操作：返回分配了新id以及校准了坐标的配置
 * @param position 粘贴的坐标
 * @param config 待粘贴的元素配置(复制时保存的那份配置)
 * @returns
 */
export declare const beforePaste: (position: PastePosition, config: MNode[]) => Promise<MNode[]>;
/**
 * 将元素粘贴到容器内时，将相对于画布坐标转换为相对于容器的坐标
 * @param position PastePosition 粘贴时相对于画布的坐标
 * @param id 元素id
 * @returns PastePosition 转换后的坐标
 */
export declare const getPositionInContainer: (position: PastePosition | undefined, id: Id) => {
    left: number;
    top: number;
};
export declare const getAddParent: (addNode: AddMNode | MNode[]) => MContainer | undefined;
export declare const getDefaultConfig: (addNode: AddMNode, parentNode: MContainer) => Promise<any>;
