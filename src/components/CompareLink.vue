<template>
  <RouterLink to="/compare" class="flex items-center gap-[10px] text-black fixed left-[-10px] bottom-[30px] bg-white border-black border-2 p-4 rounded-r-lg shadow-lg transition-all z-50 font-bold w-full max-w-[300px] text-center hover:bg-gray-50">
    <div>

    </div>
    <LuHotel /> Comparar Hotéis ({{ comparisonStore.comparisonList.length }})
  </RouterLink>
</template>

<script setup lang="ts">
import { LuHotel } from 'vue3-icons/lu'
import { useComparisonStore } from '@/stores/comparison';

const comparisonStore = useComparisonStore()

</script>