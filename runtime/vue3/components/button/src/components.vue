<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
});

const onClick = () => {
  console.log(props.text);

  console.log('button:click');
};
</script>

<template>
  <button @click="onClick">{{ props.text }}</button>
</template>
