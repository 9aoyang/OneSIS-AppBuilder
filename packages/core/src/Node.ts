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
class Node extends EventEmitter {
  public data: MComponent | MContainer | MPage;
  public style?: {
    [key: string]: any;
  };
  public events?: EventItemConfig[];
  public instance?: any;
  public page?: Page;
  public parent?: Node;
  public app: App;
  public store = new Store();

  constructor(options: NodeOptions) {
    super();

    this.page = options.page;
    this.parent = options.parent;
    this.app = options.app;
    const { events } = options.config;
    this.data = options.config;
    this.events = events;

    this.listenLifeSafe();

    this.once('destroy', () => {
      this.instance = null;
      if (typeof this.data.destroy === 'function') {
        this.data.destroy(this);
      }

      this.listenLifeSafe();
    });
  }

  private listenLifeSafe() {
    this.once('created', (instance: any) => {
      this.instance = instance;

      if (typeof this.data.created === 'function') {
        this.data.created(this);
      }
    });

    this.once('mounted', (instance: any) => {
      this.instance = instance;

      const eventConfigQueue = this.app.eventQueueMap[instance.config.id] || [];

      for (
        let eventConfig = eventConfigQueue.shift();
        eventConfig;
        eventConfig = eventConfigQueue.shift()
      ) {
        this.app.eventHandler(eventConfig.eventConfig, eventConfig.fromCpt, eventConfig.args);
      }

      if (typeof this.data.mounted === 'function') {
        this.data.mounted(this);
      }
    });
  }
}

export default Node;
