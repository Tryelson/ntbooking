<template>
  <div class="relative">
    <input class="w-[400px] bg-transparent rounded-md px-[8px] py-[5px]" :placeholder="placeholder" :type="type" @input="handleChange" :value="value" :class="[variant, className]" />

    <div class="absolute right-[10px] w-[20px] h-[20px] top-[0] z-20">
      <IoSearchOutline color="white" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {type PropType} from 'vue'
import { IoSearchOutline  } from "vue3-icons/io5";

const { placeholder, variant, onInput, value, className } = defineProps({
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
  onInput: {
    type: Function as PropType<(event: Event) => void>,
    required: false
  },
  value: {
    type: String,
    required: false
  }
})

function handleChange (event: Event) {
  if(onInput){
    onInput(event);
  }
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
  outline: unset;
  color: gray;
  background-color: #f6f6f6;
  transition: all 0.2s ease-in-out;
  padding: 10px;
}

.secondary::placeholder {
  color: gray;
}

.secondary:focus-within {
  box-shadow: 0 0 1px 2px white;
  border-color: transparent;
}

</style>