import { config, mount } from '@vue/test-utils';

import Button from '../../src/button/index';
import initValue from '../../src/button/src/initValue';
import Text from '../../src/text/index';

config.global.provide = {
  hoc: {
    disabled: false,
  },
};

config.global.components = {
  MagicUiText: Text,
};

describe('ui:button', () => {
  it('ui:button:默认', async () => {
    const wrapper = mount(Button, {
      props: {
        config: initValue,
      },
    });
    expect(wrapper.find('.magic-ui-text').exists()).toBe(true);
    wrapper.vm.pushAction((vm: any) => {
      vm.flag = true;
    });
    await wrapper.find('.magic-ui-button').trigger('click');
    expect(wrapper.vm.flag).toBe(true);
  });

  it('ui:button:preAction失败', async () => {
    const wrapper = mount(Button, {
      props: {
        config: {
          ...initValue,
          preAction: () => false,
        },
      },
    });
    wrapper.vm.pushAction((vm: any) => {
      vm.flag = true;
    });
    await wrapper.find('.magic-ui-button').trigger('click');
    expect(wrapper.vm.flag).toBe(undefined);
  });
});
