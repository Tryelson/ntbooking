<script setup lang="ts">
import { useComparisonStore } from '@/stores/comparison';
import {computed, onMounted, ref} from 'vue';
import LoadingComponent from "@/components/LoadingComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import HotelItem from "@/components/HotelItem.vue";
import type {HotelType} from "@/types/hotel";
import {getAllHotels} from "@/api/hotels";

const hotelsList = ref<Array<HotelType>>([]);
const isError = ref(false);
const isLoading = ref(true);

const comparisonStore = useComparisonStore();

const comparisonList = computed(() => comparisonStore.comparisonList);

const removeFromComparison = (hotelId: number) => {
  comparisonStore.removeHotel(hotelId);
};

onMounted(async () => {
  isLoading.value = true;
  try {
    const allHotels = await getAllHotels();
    hotelsList.value = allHotels.slice(0, 5);
    isError.value = !hotelsList.value || hotelsList.value.length === 0;
  } catch {
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
});

</script>

<template>
  <div class="flex flex-col justify-between h-full">
    <div class="bg-black px-[32px] py-[20px]">
      <HeaderComponent />
    </div>

    <div class="p-[30px] text-black">
      <h2 class="text-2xl font-bold mb-5">Comparação de Hotéis</h2>

      <div v-if="comparisonList.length === 0" class="text-lg">Nenhum hotel selecionado para comparação.</div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="hotel in comparisonList" :key="hotel.id" class="border p-5 rounded-lg shadow">
          <RouterLink :to="`/hotel/${hotel.id}`">
            <img :src="hotel.imageSrc" :alt="hotel.name" class="object-cover w-full h-48 rounded-lg mb-3" />
            <h3 class="text-xl font-bold">{{ hotel.name }}</h3>
            <p><strong>Localização:</strong> {{ hotel.location }}</p>
            <p><strong>Avaliação:</strong> {{ hotel.rate }} ({{ hotel.reviews }} Reviews)</p>
            <p><strong>Hóspedes:</strong> {{ hotel.guests }}</p>
            <p><strong>Quartos:</strong> {{ hotel.rooms }}</p>
            <p><strong>Preço:</strong> {{ hotel.price }}</p>
          </RouterLink>
          <button @click="removeFromComparison(hotel.id)" class="w-full mt-3 p-2 bg-red-500 text-white rounded">Remover</button>
        </div>
      </div>

      <div class="mt-[50px]">
        <h3 class="text-[30px] font-bold text-black mb-[40px]">Veja também</h3>

        <LoadingComponent v-if="isLoading" />
        <p v-if="isError" class="text-[22px] text-center text-black font-bold">Nenhum hotel encontrado :(</p>

        <ul v-if="hotelsList.length > 0" class="flex gap-[25px] flex-wrap">
          <HotelItem v-for="hotel in hotelsList" :key="hotel.id" :hotel="hotel" />
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
}
</style>