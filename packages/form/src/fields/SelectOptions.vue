<template>
  <el-option
    v-for="option in options"
    :key="valueKey ? option.value[valueKey] : option.value"
    :label="option.text"
    :value="option.value"
    :disabled="option.disabled"
  ></el-option>
</template>

<script lang="ts" setup>
import { SelectOption } from '../schema';

defineProps<{
  options: SelectOption[];
  valueKey?: string;
}>();
</script>
