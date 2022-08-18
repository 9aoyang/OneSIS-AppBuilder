import type { Id, MComponent, MContainer, MPage } from '@tmagic/schema';

import type App from './App';
import Node from './Node';
interface ConfigOptions {
  config: MPage;
  app: App;
}

class Page extends Node {
  public nodes = new Map<Id, Node>();

  constructor(options: ConfigOptions) {
    super(options);

    this.setNode(options.config.id, this);
    this.initNode(options.config, this);
  }

  public initNode(config: MComponent | MContainer, parent: Node) {
    const node = new Node({
      config,
      parent,
      page: this,
      app: this.app,
    });

    this.setNode(config.id, node);

    config.items?.forEach((element: MComponent | MContainer) => {
      this.initNode(element, node);
    });
  }

  public getNode(id: Id) {
    return this.nodes.get(id);
  }

  public setNode(id: Id, node: Node) {
    this.nodes.set(id, node);
  }

  public deleteNode(id: Id) {
    this.nodes.delete(id);
  }
}

export default Page;
