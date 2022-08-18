import { describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import ElementPlus from 'element-plus';

import { NodeType } from '@tmagic/schema';

import PageBar from '@editor/layouts/workspace/PageBar.vue';

globalThis.ResizeObserver =
  globalThis.ResizeObserver ||
  vi.fn().mockImplementation(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    unobserve: vi.fn(),
  }));

const editorState: Record<string, any> = {
  root: {
    items: [{ key: 0, id: 1, name: 'testName', type: NodeType.PAGE }],
  },
  page: { id: 1, type: NodeType.PAGE },
};

const editorService = {
  get: vi.fn((key: string) => editorState[key]),
  add: vi.fn(),
  set: vi.fn(),
  select: vi.fn(),
};

const getWrapper = () =>
  mount(PageBar as any, {
    global: {
      plugins: [ElementPlus as any],
      provide: {
        services: {
          editorService,
        },
      },
    },
  });

describe.skip('PageBar', () => {
  test('新增page', async () => {
    const wrapper = getWrapper();
    await wrapper.find('#m-editor-page-bar-add-icon').trigger('click');

    expect(editorService.add.mock.calls[0][0]).toEqual({
      type: NodeType.PAGE,
      name: 'page_1',
    });
  });

  test('切换page', async () => {
    const wrapper = getWrapper();
    await wrapper.find('div[class="m-editor-page-bar-item active"]').trigger('click');

    expect(editorService.set.mock.calls).toEqual([]);
  });
});
