import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import ElementPlus, { ElInput } from 'element-plus';

import MagicForm, { MDate, MForm } from '../../../src';

const getWrapper = (
  config: any = [
    {
      text: 'date',
      type: 'date',
      name: 'date',
    },
  ],
  initValues: any = {
    date: '2021-01-01',
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

describe('Date', () => {
  test('基础', (done) => {
    const wrapper = getWrapper();

    setTimeout(async () => {
      const date = wrapper.findComponent(MDate);
      expect(date.exists()).toBe(true);

      const value = await (wrapper.vm as any).submitForm();
      expect(value.date).toMatch('2021-01-01 00:00:00');
      done();
    }, 0);
  });

  test('输入', (done) => {
    const wrapper = getWrapper();

    setTimeout(async () => {
      const input = wrapper.find('input');

      await input.setValue('2021/07/28');
      await input.trigger('blur');

      const value = await (wrapper.vm as any).submitForm();
      expect(input.element.value).toMatch('2021-07-28');
      expect(value.date).toMatch('2021-07-28');
      done();
    }, 0);
  });

  test('清空', (done) => {
    const wrapper = getWrapper();

    setTimeout(async () => {
      const elInput = wrapper.findComponent(ElInput);
      await elInput.trigger('mouseenter');

      const clear = wrapper.find('.clear-icon');

      expect(clear.exists()).toBe(true);
      await clear.trigger('click');
      expect((wrapper.vm as any).values.date).toBeNull();
      done();
    }, 0);
  });
});
