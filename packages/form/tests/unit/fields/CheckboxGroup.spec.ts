import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import ElementPlus from 'element-plus';

import MagicForm, { MCheckboxGroup, MForm } from '../../../src';

const getWrapper = (
  config: any = [
    {
      text: 'checkboxGroup',
      type: 'checkbox-group',
      name: 'checkboxGroup',
      options: [
        {
          value: 1,
          text: 'one',
        },
        {
          value: 2,
          text: 'two',
        },
      ],
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

describe('CheckboxGroup', () => {
  test('基础', (done) => {
    const wrapper = getWrapper();

    setTimeout(async () => {
      const checkboxGroup = wrapper.findComponent(MCheckboxGroup);
      expect(checkboxGroup.exists()).toBe(true);

      const value = await (wrapper.vm as any).submitForm();
      expect(value.checkboxGroup).toEqual([]);
      done();
    }, 0);
  });

  test('默认选中', (done) => {
    const wrapper = getWrapper(
      [
        {
          text: 'checkboxGroup',
          type: 'checkbox-group',
          name: 'checkboxGroup',
          options: [
            {
              value: 1,
              text: 'one',
            },
            {
              value: 2,
              text: 'two',
            },
          ],
        },
      ],
      {
        checkboxGroup: [1],
      }
    );

    setTimeout(async () => {
      const value = await (wrapper.vm as any).submitForm();
      expect(value.checkboxGroup).toEqual([1]);
      done();
    }, 0);
  });
});
