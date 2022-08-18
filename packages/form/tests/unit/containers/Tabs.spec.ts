import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import ElementPlus from 'element-plus';

import MagicForm, { FormConfig, MForm, MTabs } from '../../../src';

const getWrapper = (
  config: FormConfig = [
    {
      type: 'tab',
      items: [
        {
          title: 'tab1',
          items: [
            {
              name: 'text',
              text: 'text',
            },
          ],
        },
      ],
    },
  ],
  initValues: any = {
    text: 'text',
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

describe('Tabs', () => {
  test('基础', () => {
    const wrapper = getWrapper();

    setTimeout(async (done) => {
      const tabs = wrapper.findComponent(MTabs);
      expect(tabs.exists()).toBe(true);
      const value = await (wrapper.vm as any).submitForm();
      expect(value.text).toBe('text');
      done();
    }, 0);
  });
});
