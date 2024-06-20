<template>
  <button :type="type" :class="variant" class="base-style"><slot /></button>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

const { type, variant } = defineProps({
  type: {
    default: 'button',
    type: String as PropType<'button' | 'submit'>,
    required: false,
  },
  variant: {
    default: 'primary',
    type: String as PropType<'primary'>,
    required: false
  }
})

</script>

<style scoped>
  .primary {
    background-color: black;
    color: white;
    border-radius: 8px;
    width: 100%;
    max-width: 200px;
    padding: 10px 20px;

    transition: 0.2s all ease-in-out;
  }

  .primary:hover {
    background-color: #212121;
  }
</style>