<template>
    <input
        class="bg-transparent rounded-md px-[8px] py-[5px]"
        :placeholder="placeholder"
        :type="type"
        @input="handleChange"
        :value="modelValue"
        :class="[variant, className]"
    />
</template>

<script lang="ts" setup>
import {type PropType} from 'vue'

const { placeholder, variant, className } = defineProps({
  placeholder: {
    required: false,
    type: String
  },
  variant: {
    default: 'primary',
    required: false,
    type: String as PropType<'primary' | 'secondary' | 'search'>,
  },
  type: {
    default: 'text',
    required: false,
    type: String as PropType<'text' | 'date' | 'number'>,
  },
  className: {
    default: '',
    type: String,
    required: false
  },
  modelValue: {
    type: String,
    required: false
  }
})

const emits = defineEmits(['update:modelValue'])

function handleChange(event: Event) {
  emits('update:modelValue', (event.target as HTMLInputElement).value)
}

</script>

<style lang="css" scoped>
.primary {
  outline: unset;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease-in-out;
  border: 2px solid #ffffff26;
}

.primary::placeholder {
  color: white;
}

.primary:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.primary:focus-within {
  box-shadow: 0 0 1px 2px white;
  border-color: transparent;
}

.secondary {
  width: 100%;
  outline: unset;
  background-color: #f6f6f6;
  transition: all 0.2s ease-in-out;
  padding: 10px;
  color: black;
}

.secondary::placeholder {
  color: gray;
}

.secondary:focus-within {
  box-shadow: 0 0 1px 2px white;
  border-color: transparent;
}

.input-search {
  width: 400px;
}

</style>