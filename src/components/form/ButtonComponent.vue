<template>
  <button
      :type="type"
      :class="[variant, className, { 'disabled': disabled }]"
      class="font-bold"
      @click="onClick"
      :disabled="disabled">
    <slot />
  </button>
</template>

<script setup lang="ts">

import type {PropType} from "vue";

const { type, variant, className, onClick, disabled } = defineProps({
  type: {
    default: 'button',
    type: String as PropType<'button' | 'submit'>,
    required: false,
  },
  variant: {
    default: 'primary',
    type: String as PropType<'primary' | 'secondary'>,
    required: false
  },
  className: {
    type: String,
    required: false
  },
  onClick: {
    type: Function as PropType<(event: Event) => void>,
    required: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
  .primary {
    background-color: black;
    color: white;
    border-radius: 8px;
    padding: 10px 20px;

    transition: 0.2s all ease-in-out;
  }

  .primary:hover {
    background-color: #212121;
  }

  .secondary {
    background-color: white;
    color: black;
    border: 2px solid black;
    border-radius: 8px;
    padding: 10px 20px;

    transition: 0.2s all ease-in-out;
  }

  .secondary:hover {
    background-color: black;
    color: white;
  }

  .disabled {
    background-color: #d3d3d3;
    color: #a9a9a9;
    cursor: not-allowed;
    pointer-events: none;
  }
</style>
