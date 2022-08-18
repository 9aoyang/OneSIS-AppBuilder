import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import ElementPlus from 'element-plus';

import MagicForm, { MForm, MTextarea } from '../../../src';

const getWrapper = (
  config: any = [
    {
      type: 'textarea',
      text: 'textarea',
      name: 'textarea',
    },
  ],
  initValues: any = {
    text: 'textarea',
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

describe('Textarea', () => {
  test('基础', (done) => {
    const wrapper = getWrapper();

    setTimeout(async () => {
      const textarea = wrapper.findComponent(MTextarea);
      expect(textarea.exists()).toBe(true);

      const input = wrapper.find('textarea');
      await input.setValue('hello');

      await textarea.trigger('input');
      await textarea.trigger('change');

      const value = await (wrapper.vm as any).submitForm();
      expect(value.textarea).toMatch('hello');
      done();
    }, 0);
  });
});
