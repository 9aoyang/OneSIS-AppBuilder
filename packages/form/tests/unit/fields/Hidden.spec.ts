import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import ElementPlus from 'element-plus';

import MagicForm, { MForm, MHidden } from '../../../src';

const getWrapper = (
  config: any = [
    {
      text: 'hidden',
      type: 'hidden',
      name: 'hidden',
    },
  ],
  initValues: any = {
    hidden: 'hidden',
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

describe('Hidden', () => {
  test('基础', (done) => {
    const wrapper = getWrapper();

    setTimeout(async () => {
      const hidden = wrapper.findComponent(MHidden);
      expect(hidden.exists()).toBe(true);

      const value = await (wrapper.vm as any).submitForm();
      expect(value.hidden).toMatch('hidden');
      done();
    }, 0);
  });

  test('未设置name', (done) => {
    const wrapper = getWrapper([
      {
        type: 'hidden',
        text: 'hidden',
        defaultValue: 'hidden',
      },
    ]);

    setTimeout(async () => {
      const hidden = wrapper.findComponent(MHidden);
      expect(hidden.exists()).toBe(true);

      const value = await (wrapper.vm as any).submitForm();
      expect(value.hidden).toBeUndefined();
      done();
    }, 0);
  });
});
