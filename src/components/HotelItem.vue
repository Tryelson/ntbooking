<script setup lang="ts">
import { CiLocationOn, CiStar } from 'vue3-icons/ci';
import { LuHotel } from 'vue3-icons/lu';
import { FaPeopleGroup } from 'vue3-icons/fa6';
import { useComparisonStore } from '@/stores/comparison';
import {computed, type PropType} from 'vue';
import type { HotelType } from '@/types/hotel';

const { hotel } = defineProps({
  hotel: {
    type: Object as PropType<HotelType>,
    required: true,
  },
});

const isCompared = computed(() => {
  return comparisonStore.comparisonList.some(h => h.id === hotel.id);
});

const comparisonStore = useComparisonStore();

const toggleComparison = () => {
  if (isCompared.value) {
    comparisonStore.removeHotel(hotel?.id);
  } else {
    comparisonStore.addHotel(hotel);
  }
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
};

</script>

<template>
  <li class="flex flex-col gap-[15px] p-[20px] rounded-2xl hover:bg-[#F3F3F3] transition-all hover:shadow-gray-400 hover:shadow-md">
    <RouterLink :to="`/hotel/${hotel.id}`">
      <img :src="hotel.imageSrc" :alt="hotel.name" class="object-cover w-[300px] h-[250px] rounded-2xl" />

      <h3 class="text-[#212121] mt-[10px] text-[20px] font-bold">{{ hotel.name }}</h3>

      <div class="flex flex-col gap-[10px] text-[#212121]">
        <div class="flex items-center gap-[5px]">
          <span class="text-[20px]"><CiLocationOn /></span>
          <span>{{ hotel.location }}</span>
        </div>

        <div class="flex items-center gap-[5px]">
          <span class="text-[20px]"><CiStar /></span>
          <span>{{ hotel.rate }} ({{ hotel.reviews }} Reviews)</span>
        </div>

        <div class="flex items-center gap-[5px]">
          <span class="text-[20px]"><LuHotel /></span>
          <span>{{ hotel.guests }} Hóspedes</span>
        </div>

        <div class="flex items-center gap-[5px]">
          <span class="text-[20px]"><FaPeopleGroup /></span>
          <span>{{ hotel.rooms }} Quartos</span>
        </div>

        <span class="font-bold text-[20px]">{{ formatPrice(hotel.price as number) }}</span>
      </div>
    </RouterLink>

    <button @click="toggleComparison" :class="{ 'bg-blue-500': !isCompared, 'bg-gray-500': isCompared }" class="mt-2 p-2 text-white rounded">
      <span v-if="!isCompared">Comparar</span>
      <span v-else>Selecionado</span>
    </button>
  </li>
</template>