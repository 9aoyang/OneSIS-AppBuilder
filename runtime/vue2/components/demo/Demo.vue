<template>
  <div @click="clickHandler">
    {{ text }}
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

import type { MComponent } from '@tmagic/schema';

import useApp from '../useApp';

export default defineComponent({
  name: 'MagicUiDemo',
  props: {
    config: {
      type: Object as PropType<MComponent>,
      default: () => ({}),
    },

    model: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    useApp(props);

    function clickHandler() {
      console.log('clicked');
    }

    return {
      clickHandler,
      text: props.config?.text || '',
    };
  },
});
</script>
