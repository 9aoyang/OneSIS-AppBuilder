/// <reference types="node" />
import { EventEmitter } from 'events';
import type { EventItemConfig, MComponent, MContainer, MPage } from '@tmagic/schema';
import type App from './App';
import type Page from './Page';
import Store from './Store';
interface NodeOptions {
    config: MComponent | MContainer;
    page?: Page;
    parent?: Node;
    app: App;
}
declare class Node extends EventEmitter {
    data: MComponent | MContainer | MPage;
    style?: {
        [key: string]: any;
    };
    events?: EventItemConfig[];
    instance?: any;
    page?: Page;
    parent?: Node;
    app: App;
    store: Store;
    constructor(options: NodeOptions);
    private listenLifeSafe;
}
export default Node;
