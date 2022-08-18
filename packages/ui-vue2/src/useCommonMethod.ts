import { getCurrentInstance } from 'vue';

export default () => {
  const vm = getCurrentInstance()?.proxy;
  return {
    show: () => {
      vm.$set(vm.config.style, 'display', 'initial');
    },
    hide: () => {
      vm.$set(vm.config.style, 'display', 'none');
    },
  };
};
