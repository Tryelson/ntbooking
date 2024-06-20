<template>
  <div class="relative">
    <input :class="variant" class="w-[300px] bg-transparent rounded-md px-[8px] py-[5px]" :placeholder="placeholder" :type="type" />

    <div class="absolute right-[10px] w-[20px] h-[20px] top-[0] z-20">
      <IoSearchOutline color="white" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, type PropType} from 'vue'
import { IoSearchOutline  } from "vue3-icons/io5";

const { placeholder, variant } = defineProps({
  placeholder: {
    required: false,
    type: String
  },
  variant: {
    default: 'primary',
    required: false,
    type: String as PropType<'primary' | 'secondary'>,
  },
  type: {
    default: 'text',
    required: false,
    type: String as PropType<'text' | 'date' | 'number'>,
  }
})

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