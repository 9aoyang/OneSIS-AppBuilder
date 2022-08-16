<script lang="ts" setup>
const onClick = () => {
  console.log('button:click');
};
</script>

<template>
  <button @click="onClick">vue3 button</button>
</template>
