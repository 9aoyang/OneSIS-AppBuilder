import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import ElementPlus from 'element-plus';

import MagicForm, { MForm, MTime } from '../../../src';

const getWrapper = (
  config: any = [
    {
      type: 'time',
      text: 'time',
      name: 'time',
    },
  ],
  initValues: any = {
    text: 'time',
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

describe('Time', () => {
  test('基础', (done) => {
    const wrapper = getWrapper();

    setTimeout(async () => {
      const time = wrapper.findComponent(MTime);
      expect(time.exists()).toBe(true);

      const input = wrapper.find('input');
      expect(input.exists()).toBe(true);
      await input.setValue('12:00:00');

      time.vm.$emit('change', new Date('12:00:00'));
      const value = await (wrapper.vm as any).submitForm();
      expect(value.time).toMatch('12:00:00');
      done();
    }, 0);
  });
});
