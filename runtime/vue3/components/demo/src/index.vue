<template>
  <div @click="onClick">{{ config.text }}</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import useApp from '../../useApp';

export default defineComponent({
  name: 'MagicUiDemo',
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
  },

  setup(props) {
    useApp(props);

    return {
      onClick() {
        console.log('click');
      },
    };
  },
});
</script>
