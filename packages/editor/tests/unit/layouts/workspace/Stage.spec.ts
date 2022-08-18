import { describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';

import { NodeType } from '@tmagic/schema';

import Stage from '@editor/layouts/workspace/Stage.vue';

globalThis.ResizeObserver =
  globalThis.ResizeObserver ||
  vi.fn().mockImplementation(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    unobserve: vi.fn(),
  }));

describe('Stage.vue', () => {
  (global as any).fetch = vi.fn(() =>
    Promise.resolve({
      text: () => `<!DOCTYPE html>
          <html lang="en" style="font-size: 100px">
            <head></head>
            <body></body>
          </html>`,
    })
  );

  const page = {
    type: NodeType.PAGE,
    id: '2',
    items: [
      {
        type: 'text',
        id: '3',
      },
    ],
  };

  const wrapper = mount(Stage as any, {
    props: {
      runtimeUrl: '',
      root: {
        id: '1',
        type: NodeType.ROOT,
        items: [page],
      },

      page,
      node: page,
      uiSelectMode: false,
    },
  });

  test('基础', () => {
    const stage = wrapper.findComponent(Stage);
    expect(stage.exists()).toBe(true);
  });
});
