<template>
  <div>
    <span>this is a Demo component:</span>
    <span :style="{ color: config.color }">{{ config.text }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MagicUiDemo',

  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
  },

  setup() {},
};
</script>
