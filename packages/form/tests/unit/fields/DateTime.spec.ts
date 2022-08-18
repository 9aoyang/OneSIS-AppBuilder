import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import ElementPlus, { ElInput } from 'element-plus';

import MagicForm, { MDateTime, MForm } from '../../../src';

const getWrapper = (
  config: any = [
    {
      text: 'dateTime',
      type: 'datetime',
      name: 'datetime',
    },
  ],
  initValues: any = {
    datetime: new Date('2021/01/01 12:00:00').toISOString(),
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

describe('DateTime', () => {
  test('基础', (done) => {
    const wrapper = getWrapper();

    setTimeout(async () => {
      const datetime = wrapper.findComponent(MDateTime);
      expect(datetime.exists()).toBe(true);

      const value = await (wrapper.vm as any).submitForm();
      expect(value.datetime).toMatch('2021-01-01 12:00:00');
      done();
    }, 0);
  });

  test('错误类型初始化初始化', (done) => {
    const wrapper = getWrapper(
      [
        {
          text: 'dateTime',
          type: 'datetime',
          name: 'datetime',
        },
      ],
      { datetime: 123 }
    );

    setTimeout(async () => {
      const datetime = wrapper.findComponent(MDateTime);
      expect(datetime.exists()).toBe(true);

      const value = await (wrapper.vm as any).submitForm();
      expect(value.datetime).toMatch('');
      done();
    }, 0);
  });

  test('无效值初始化', (done) => {
    const wrapper = getWrapper(
      [
        {
          text: 'dateTime',
          type: 'datetime',
          name: 'datetime',
        },
      ],
      { datetime: 'Invalid Date' }
    );

    setTimeout(async () => {
      const datetime = wrapper.findComponent(MDateTime);
      expect(datetime.exists()).toBe(true);

      const value = await (wrapper.vm as any).submitForm();
      expect(value.datetime).toMatch('');
      done();
    }, 0);
  });
  test('输入日期', (done) => {
    const wrapper = getWrapper();

    setTimeout(async () => {
      const input = wrapper.find('input');
      await input.setValue('2021/07/28 00:00:00');

      const value = await (wrapper.vm as any).submitForm();
      expect(value.datetime).toMatch('2021-07-28 00:00:00');
      done();
    });
  });

  test('清空', (done) => {
    const wrapper = getWrapper();

    setTimeout(async () => {
      const elInput = wrapper.findComponent(ElInput);
      await elInput.trigger('mouseenter');

      const clear = wrapper.find('.clear-icon');

      expect(clear.exists()).toBe(true);
      await clear.trigger('click');
      expect((wrapper.vm as any).values.datetime).toBeNull();
      done();
    }, 0);
  });
});
