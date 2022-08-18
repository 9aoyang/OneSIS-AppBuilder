import { EventOption } from '@tmagic/core';
import type { ComponentGroup } from '../type';
import BaseService from './BaseService';
declare class Events extends BaseService {
    constructor();
    init(componentGroupList: ComponentGroup[]): void;
    setEvents(events: Record<string, EventOption[]>): void;
    setEvent(type: string, events: EventOption[]): void;
    getEvent(type: string): EventOption[];
    setMethods(methods: Record<string, EventOption[]>): void;
    setMethod(type: string, method: EventOption[]): void;
    getMethod(type: string): EventOption[];
}
export declare type EventsService = Events;
declare const _default: Events;
export default _default;
