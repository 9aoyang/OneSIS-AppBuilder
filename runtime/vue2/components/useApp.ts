import { getCurrentInstance, inject, onMounted, onUnmounted } from 'vue';

import Core from '@tmagic/core';

export default (props: any) => {
  const app: Core | undefined = inject('app');
  const node = app?.page?.getNode(props.config.id);

  const vm = getCurrentInstance()?.proxy;

  node?.emit('created', vm);

  onMounted(() => {
    node?.emit('mounted', vm);
  });

  onUnmounted(() => {
    node?.emit('destroy', vm);
  });

  return app;
};
