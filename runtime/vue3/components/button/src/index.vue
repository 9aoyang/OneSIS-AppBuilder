<template>
  <button @click="onClick">text</button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

import Core from '@tmagic/core';

import useApp from '../../useApp';

export default defineComponent({
  name: 'MagicUiButton',
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },

    model: {
      type: Object,
      default: () => ({}),
    },
  },

  setup(props) {
    const text = ref('log');
    const app: Core | undefined = useApp(props);

    return {
      text,

      onClick() {
        console.log('button:click');
        app?.emit('button:click');
      },

      log() {
        console.log('触发');
      },
    };
  },
});
</script>
