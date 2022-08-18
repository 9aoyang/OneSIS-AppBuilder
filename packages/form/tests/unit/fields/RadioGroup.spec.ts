import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import ElementPlus from 'element-plus';

import MagicForm, { MForm, MRadioGroup } from '../../../src';

const getWrapper = (
  config: any = [
    {
      text: 'radioGroup',
      type: 'radio-group',
      name: 'radioGroup',
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

describe('RadioGroup', () => {
  test('基础', (done) => {
    const wrapper = getWrapper();

    setTimeout(async () => {
      const radioGroup = wrapper.findComponent(MRadioGroup);
      expect(radioGroup.exists()).toBe(true);

      const value = await (wrapper.vm as any).submitForm();
      expect(value.radioGroup).toMatch('');
      done();
    }, 0);
  });

  test('默认选中', (done) => {
    const wrapper = getWrapper(
      [
        {
          text: 'radioGroup',
          type: 'radio-group',
          name: 'radioGroup',
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
        radioGroup: 1,
      }
    );

    setTimeout(async () => {
      const value = await (wrapper.vm as any).submitForm();
      expect(value.radioGroup).toEqual(1);
      done();
    }, 0);
  });
});
