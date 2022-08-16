<template>
  <button-demo :text="config.text"></button-demo>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

import buttonDemo from './components.vue';

export default defineComponent({
  name: 'MagicUiButton',

  components: {
    buttonDemo,
  },
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

  setup() {
    const text = ref('log');

    return {
      text,
    };
  },
});
</script>
