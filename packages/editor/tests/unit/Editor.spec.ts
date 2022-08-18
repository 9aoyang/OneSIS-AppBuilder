import { describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import ElementPlus from 'element-plus';

import MagicForm from '@tmagic/form';
import { NodeType } from '@tmagic/schema';

import Editor from '@editor/Editor.vue';

vi.mock('@editor/utils/logger', () => ({
  log: vi.fn(),
  info: vi.fn(),
  warn: vi.fn(),
  debug: vi.fn(),
  error: vi.fn(),
}));

globalThis.ResizeObserver =
  globalThis.ResizeObserver ||
  vi.fn().mockImplementation(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    unobserve: vi.fn(),
  }));

describe.skip('编辑器', () => {
  test('初始化', () => {
    const wrapper = mount(Editor as any, {
      global: {
        plugins: [ElementPlus as any, MagicForm as any],
      },
      props: {
        modelValue: {
          type: NodeType.ROOT,
          id: 1,
          name: 'app',
          items: [
            {
              type: NodeType.PAGE,
              id: 2,
              name: NodeType.PAGE,
              items: [],
            },
          ],
        },
        runtimeUrl:
          'https://m.film.qq.com/magic-ui/production/1/1625056093304/magic/magic-ui.umd.min.js',
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
