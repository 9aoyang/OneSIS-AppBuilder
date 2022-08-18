import type { Id, MComponent, MContainer, MPage } from '@tmagic/schema';
import type App from './App';
import Node from './Node';
interface ConfigOptions {
    config: MPage;
    app: App;
}
declare class Page extends Node {
    nodes: Map<Id, Node>;
    constructor(options: ConfigOptions);
    initNode(config: MComponent | MContainer, parent: Node): void;
    getNode(id: Id): Node | undefined;
    setNode(id: Id, node: Node): void;
    deleteNode(id: Id): void;
}
export default Page;
