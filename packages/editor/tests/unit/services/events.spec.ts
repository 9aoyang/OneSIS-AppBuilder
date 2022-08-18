import { describe, expect, test } from 'vitest';

import { DEFAULT_EVENTS, DEFAULT_METHODS } from '@tmagic/core';

import events from '@editor/services/events';

describe('events', () => {
  test('init', () => {
    events.init([
      {
        title: '容器',
        items: [
          {
            icon: 'el-icon-folder-opened',
            text: '组',
            type: 'container',
            data: {
              id: 0,
              reportType: 'module',
            },
          },
          {
            icon: 'el-icon-files',
            text: '标签页(tab)',
            type: 'tabs',
            data: {
              id: 0,
              reportType: 'module',
            },
          },
        ],
      },
    ]);
    expect(events.getEvent('container')).toHaveLength(DEFAULT_EVENTS.length);
    expect(events.getMethod('container')).toHaveLength(DEFAULT_METHODS.length);
  });

  test('setEvent', () => {
    const event = [{ label: '点击', value: 'magic:common:events:click' }];
    events.setEvent('button', event);
    expect(events.getEvent('button')).toHaveLength(DEFAULT_EVENTS.length + 1);
  });

  test('setMethod', () => {
    const method = [{ label: '点击', value: 'magic:common:events:click' }];
    events.setMethod('button', method);
    expect(events.getMethod('button')).toHaveLength(DEFAULT_METHODS.length + 1);
  });
});
