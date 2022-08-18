import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import ElementPlus from 'element-plus';

import MagicForm, { MDaterange, MForm } from '../../../src';

const getWrapper = (
  config: any = [
    {
      type: 'daterange',
      text: 'daterange',
      names: ['start', 'end'],
    },
  ],
  initValues: any = {}
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

describe('Daterange', () => {
  test('基础', (done) => {
    const wrapper = getWrapper();

    setTimeout(async () => {
      const daterange = wrapper.findComponent(MDaterange);
      expect(daterange.exists()).toBe(true);

      const value = await (wrapper.vm as any).submitForm();
      expect(value.start).toMatch('');
      expect(value.end).toMatch('');
      done();
    });
  });

  test('基础初始化', (done) => {
    const wrapper = getWrapper([{ type: 'daterange', text: 'daterange' }], {
      daterange: [new Date('2021-7-30 00:00:00'), new Date('2021-7-30 12:00:00')],
    });

    setTimeout(async () => {
      const daterange = wrapper.findComponent(MDaterange);
      expect(daterange.exists()).toBe(true);

      done();
    }, 0);
  });
});
