/// <reference types="node" />
import { EventEmitter } from 'events';
/**
 * 提供两种方式对Class进行扩展
 * 方法1：
 * 给Class中的每个方法都添加before after两个钩子
 * 给Class添加一个usePlugin方法，use方法可以传入一个包含before或者after方法的对象
 *
 * 例如：
 *   Class EditorService extends BaseService {
 *     constructor() {
 *       super(['add']);
 *     }
 *     add(value) { return result; }
 *   };
 *
 *   const editorService = new EditorService();
 *
 *   editorService.usePlugin({
 *     beforeAdd(value) { return [value] },
 *     afterAdd(value, result) {},
 *   });
 *
 *   editorService.add(); 最终会变成  () => {
 *    editorService.beforeAdd();
 *    editorService.add();
 *    editorService.afterAdd();
 *   }
 *
 * 调用时的参数会透传到before方法的参数中, 然后before的return 会作为原方法的参数和after的参数，after第一个参数则是原方法的return值;
 * 如需终止后续方法调用可以return new Error();
 *
 * 方法2：
 * 给Class中的每个方法都添加中间件
 * 给Class添加一个use方法，use方法可以传入一个包含源对象方法名作为key值的对象
 *
 * 例如：
 *   Class EditorService extends BaseService {
 *     constructor() {
 *       super(['add']);
 *     }
 *     add(value) { return result; }
 *   };
 *
 *  const editorService = new EditorService();
 *  editorService.use({
 *    add(value, next) { console.log(value); next() },
 *  });
 */
export default class extends EventEmitter {
    private pluginOptionsList;
    private middleware;
    private taskList;
    private doingTask;
    constructor(methods?: string[], serialMethods?: string[]);
    use(options: Record<string, Function>): void;
    usePlugin(options: Record<string, Function>): void;
    private doTask;
}
