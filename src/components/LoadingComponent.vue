<template>
  <div class="flex items-center justify-center h-full">
    <div :class="spinnerClass"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value)
  }
});

const spinnerClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'animate-spin rounded-full h-16 w-16 border-b-4 border-black';
    case 'lg':
      return 'animate-spin rounded-full h-48 w-48 border-b-4 border-black';
    case 'md':
    default:
      return 'animate-spin rounded-full h-32 w-32 border-b-4 border-black';
  }
});
</script>
