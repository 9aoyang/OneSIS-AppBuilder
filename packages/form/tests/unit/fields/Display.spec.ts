import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import ElementPlus from 'element-plus';

import MagicForm, { MDisplay, MForm } from '../../../src';

const getWrapper = (
  config: any = [
    {
      text: 'display',
      type: 'display',
      name: 'display',
    },
  ],
  initValues: any = {
    display: 'hello',
  }
) =>
  mount(MForm, {
    global: {
      plugins: [ElementPlus as any, MagicForm as any],
    },
    props: {
      initValues,
      config,
    },
  });

describe('Display', () => {
  test('基础', (done) => {
    const wrapper = getWrapper();

    setTimeout(async () => {
      const display = wrapper.findComponent(MDisplay);
      expect(display.exists()).toBe(true);

      const value = await (wrapper.vm as any).submitForm();
      expect(value.display).toMatch('hello');
      done();
    }, 0);
  });

  test('初始化', (done) => {
    const wrapper = getWrapper(
      [
        {
          text: 'display',
          type: 'display',
          name: 'display',
          initValue: 'test',
        },
      ],
      {
        display: 'hello',
      }
    );

    setTimeout(async () => {
      const display = wrapper.findComponent(MDisplay);
      expect(display.exists()).toBe(true);

      const value = await (wrapper.vm as any).submitForm();
      expect(value.display).toMatch('test');
      done();
    }, 0);
  });
});
