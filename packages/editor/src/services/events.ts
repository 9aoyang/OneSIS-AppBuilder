import { reactive } from 'vue';
import { cloneDeep } from 'lodash-es';

import { DEFAULT_EVENTS, DEFAULT_METHODS, EventOption } from '@tmagic/core';
import { toLine } from '@tmagic/utils';

import type { ComponentGroup } from '../type';

import BaseService from './BaseService';

const eventMap: Record<string, EventOption[]> = reactive({});
const methodMap: Record<string, EventOption[]> = reactive({});

class Events extends BaseService {
  constructor() {
    super([]);
  }

  public init(componentGroupList: ComponentGroup[]) {
    componentGroupList.forEach((group) => {
      group.items.forEach((element) => {
        const type = toLine(element.type);
        if (!this.getEvent(type)) {
          this.setEvent(type, DEFAULT_EVENTS);
        }
        if (!this.getMethod(type)) {
          this.setMethod(type, DEFAULT_METHODS);
        }
      });
    });
  }

  public setEvents(events: Record<string, EventOption[]>) {
    Object.keys(events).forEach((type: string) => {
      this.setEvent(toLine(type), events[type] || []);
    });
  }

  public setEvent(type: string, events: EventOption[]) {
    eventMap[type] = [...DEFAULT_EVENTS, ...events];
  }

  public getEvent(type: string): EventOption[] {
    return cloneDeep(eventMap[type] || DEFAULT_EVENTS);
  }

  public setMethods(methods: Record<string, EventOption[]>) {
    Object.keys(methods).forEach((type: string) => {
      this.setMethod(toLine(type), methods[type] || []);
    });
  }

  public setMethod(type: string, method: EventOption[]) {
    methodMap[type] = [...DEFAULT_METHODS, ...method];
  }

  public getMethod(type: string) {
    return cloneDeep(methodMap[type] || DEFAULT_METHODS);
  }
}

export type EventsService = Events;

export default new Events();
