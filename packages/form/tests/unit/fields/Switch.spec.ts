import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import ElementPlus from 'element-plus';

import MagicForm, { MForm, MSwitch } from '../../../src';

const getWrapper = (
  config: any = [
    {
      type: 'switch',
      text: 'switch',
      name: 'switch',
    },
  ],
  initValues: any = {
    text: 'switch',
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

describe('Switch', () => {
  test('基础', (done) => {
    const wrapper = getWrapper();

    setTimeout(async () => {
      const sw = wrapper.findComponent(MSwitch);
      expect(sw.exists()).toBe(true);

      const value = await (wrapper.vm as any).submitForm();
      expect(value.switch).toBe(false);
      done();
    }, 0);
  });

  test('数字默认值', (done) => {
    const wrapper = getWrapper([
      {
        type: 'switch',
        name: 'switch',
        text: 'switch',
        filter: 'number',
      },
    ]);

    setTimeout(async () => {
      const sw = wrapper.findComponent(MSwitch);
      expect(sw.exists()).toBe(true);

      const value = await (wrapper.vm as any).submitForm();
      expect(value.switch).toBe(0);
      done();
    }, 0);
  });

  test('点击开关', (done) => {
    const wrapper = getWrapper([
      {
        type: 'switch',
        name: 'switch',
        text: 'switch',
        activeValue: 'active',
        inactiveValue: 'inactive',
      },
    ]);

    setTimeout(async () => {
      const value = await (wrapper.vm as any).submitForm();
      expect(value.switch).toMatch('inactive');

      const input = wrapper.find('input');
      expect(input.exists()).toBe(true);
      await input.trigger('click');

      const value2 = await (wrapper.vm as any).submitForm();
      expect(value2.switch).toMatch('active');
      done();
    }, 0);
  });
});
