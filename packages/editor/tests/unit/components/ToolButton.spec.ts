import { describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import ElementPlus, { ElDropdown } from 'element-plus';

import ToolButton from '@editor/components/ToolButton.vue';
import uiService from '@editor/services/ui';

// ResizeObserver mock
globalThis.ResizeObserver =
  globalThis.ResizeObserver ||
  vi.fn().mockImplementation(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    unobserve: vi.fn(),
  }));

const editorState: Record<string, any> = {
  node: 'node',
};

// mock
const editorService = {
  get: vi.fn((key: string) => editorState[key]),
  remove: vi.fn(),
  redo: vi.fn(),
  undo: vi.fn(),
};

// mock
const historyService = {
  state: {
    canUndo: true,
    canRedo: true,
  },
};

const getWrapper = (
  props: any = {
    data: 'delete',
  }
) =>
  mount(ToolButton, {
    props,
    global: {
      plugins: [ElementPlus as any],
      provide: {
        services: {
          editorService,
          historyService,
          uiService,
        },
      },
    },
  });

describe.skip('ToolButton', () => {
  test('删除', async () => {
    const wrapper = getWrapper();
    const icon = wrapper.find('.el-button');
    await icon.trigger('click');
    expect(editorService.remove.mock.calls[0][0]).toBe('node');
  });

  test('后退', async () => {
    const wrapper = getWrapper({ data: 'undo' });

    const icon = wrapper.find('.el-button');
    await icon.trigger('click');
    expect(editorService.undo).toBeCalled();
  });

  test('前进', async () => {
    const wrapper = getWrapper({ data: 'redo' });

    const icon = wrapper.find('.el-button');
    await icon.trigger('click');
    expect(editorService.redo).toBeCalled();
  });

  test('放大', async () => {
    uiService.set('zoom', 1);
    const wrapper = getWrapper({ data: 'zoom-in' });

    const icon = wrapper.find('.el-button');
    await icon.trigger('click');
    expect(uiService.get('zoom')).toBe(1.1);
  });

  test('缩小', (done) => {
    uiService.set('zoom', 1);
    const wrapper = getWrapper({ data: 'zoom-out' });

    setTimeout(async () => {
      const icon = wrapper.find('.el-button');
      await icon.trigger('click');
      expect(uiService.get('zoom')).toBe(0.9);
      done();
    }, 0);
  });

  test('data无匹配值', () => {
    getWrapper({ data: 'default' });
  });

  test('自定义display', () => {
    const display = vi.fn();
    getWrapper({
      data: { display },
    });
    expect(display).toBeCalled();
  });

  test('点击下拉菜单项', (done) => {
    const wrapper = getWrapper({
      data: {
        type: 'dropdown',
      },
    });

    setTimeout(async () => {
      const dropDown = wrapper.findComponent(ElDropdown);
      const handler = vi.fn();
      dropDown.vm.$emit('command', {
        item: { handler },
      });
      expect(handler).toBeCalled();
      done();
    }, 0);
  });

  test('按钮不可用', (done) => {
    const wrapper = getWrapper({
      data: {
        icon: 'disabled-icon',
        type: 'button',
        disabled: true,
      },
    });

    setTimeout(async () => {
      // disabled 后会有 is-disabled class
      const iconBtn = wrapper.find('.el-button.is-text.is-disabled');
      await iconBtn.trigger('click');
      done();
    }, 0);
  });

  test('菜单项handler未定义', () => {
    const wrapper = getWrapper({
      data: {
        type: 'dropdown',
      },
    });

    const dropDown = wrapper.findComponent(ElDropdown);
    dropDown.vm.$emit('command', {
      item: {},
    });
  });

  test('参数data为undefined', () => {
    const wrapper = getWrapper({ data: undefined });
    expect(wrapper.find('div[class="menu-item"]').exists()).toBe(false);
  });

  test('自定义display', () => {
    const wrapper = getWrapper({
      data: {
        display: false,
      },
    });
    expect(wrapper.find('div[class="menu-item"]').exists()).toBe(false);
  });
});
