import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import ElementPlus from 'element-plus';

import MagicForm, { MForm } from '../../src';

describe('表单', () => {
  test('初始化', (done) => {
    const initValues = {};
    const config = [
      {
        text: 'text',
        type: 'text',
        name: 'text',
      },
    ];
    const wrapper = mount(MForm, {
      global: {
        plugins: [ElementPlus as any, MagicForm as any],
      },
      props: {
        initValues,
        config,
      },
    });

    setTimeout(() => {
      expect(wrapper.text()).toBe('text');
      done();
    });
  });
});
