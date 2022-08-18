import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import ElementPlus from 'element-plus';

import MagicForm, { MCheckbox, MForm } from '../../../src';

const getWrapper = (
  config: any = [
    {
      text: 'checkbox',
      type: 'checkbox',
      name: 'checkbox',
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

describe('Checkbox', () => {
  test('基础', (done) => {
    const wrapper = getWrapper();

    setTimeout(async () => {
      const checkbox = wrapper.findComponent(MCheckbox);
      expect(checkbox.exists()).toBe(true);

      const value = await (wrapper.vm as any).submitForm();
      expect(value.checkbox).toBe(false);
      done();
    }, 0);
  });
});
