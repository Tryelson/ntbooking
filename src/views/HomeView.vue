<script setup lang="ts">
import BackgroundImage from '@/components/BackgroundImage.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import SearchHotel from "@/components/SearchHotel.vue";
import HotelItem from "@/components/HotelItem.vue";
import type { HotelType } from "@/types/hotel";

import { getAllHotels } from "@/api/hotels";
import { onMounted, ref } from "vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
import ButtonComponent from "@/components/form/ButtonComponent.vue";

const hotelsList = ref<Array<HotelType>>([]);
const filteredHotels = ref<Array<HotelType>>([]);
const isError = ref(false);
const isLoading = ref(true);

const parsePrice = (price: string) => {
  return parseFloat(price.replace('R$', '').replace('.', '').replace(',', '.'));
};

const parseReviews = (reviews: string) => {
  return parseInt(reviews.replace(',', ''));
};

onMounted(async () => {
  isLoading.value = true;

  try {
    const hotels = await getAllHotels();
    hotels.forEach(hotel => {
      hotel.price = parsePrice(hotel.price as string);
      hotel.reviews = parseReviews(hotel.reviews as string);
    });
    hotelsList.value = hotels;
    filteredHotels.value = hotelsList.value;
    isError.value = !hotelsList.value || hotelsList.value.length === 0;
  } catch {
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
});

const filterHotels = (filters: any) => {
  filteredHotels.value = hotelsList.value.filter(hotel => {
    return hotel.location.toLowerCase().includes(filters.name.toLowerCase()) &&
        (!filters.rooms || hotel.rooms >= Number(filters.rooms)) &&
        (!filters.guests || hotel.guests >= Number(filters.guests));
  });
};

const resetHotels = () => {
  filteredHotels.value = hotelsList.value;
};

const sortHotels = (criteria: string) => {
  if (criteria === 'price-asc') {
    filteredHotels.value.sort((a, b) => (a.price as number) - (b.price as number));
  } else if (criteria === 'price-desc') {
    filteredHotels.value.sort((a, b) => (b.price as number) - (a.price as number));
  } else if (criteria === 'reviews-asc') {
    filteredHotels.value.sort((a, b) => (a.reviews as number) - (b.reviews as number));
  } else if (criteria === 'reviews-desc') {
    filteredHotels.value.sort((a, b) => (b.reviews as number) - (a.reviews as number));
  }
};

</script>

<template>
  <main class="relative w-full h-full">
    <div class="relative h-[950px]">
      <BackgroundImage />

      <div class="relative z-10 mx-auto px-[35px] flex flex-col justify-between h-full py-[25px] mb-[50px]">
        <HeaderComponent />
        <SearchHotel @search="filterHotels" @reset="resetHotels" />
      </div>
    </div>

    <div class="p-[10px] my-[30px]">
      <div class="flex items-center gap-[20px] mb-[40px]">
        <h2 class="text-[30px] font-bold text-black">Top Hotels</h2>

        <div>
          <label for="sort" class="mr-2 font-bold">Ordenar por:</label>
          <select id="sort" @change="(event: Event) => sortHotels((event.target as HTMLSelectElement).value)" class="p-2 border border-black rounded">
            <option value="">Selecione</option>
            <option value="price-asc">Menor Preço</option>
            <option value="price-desc">Maior Preço</option>
            <option value="reviews-asc">Menos Avaliados</option>
            <option value="reviews-desc">Melhores Avaliações</option>
          </select>
        </div>
      </div>

      <LoadingComponent v-if="isLoading" />
      <p v-if="isError" class="text-[22px] text-center text-black font-bold">Nenhum hotel encontrado :(</p>

      <ul v-if="filteredHotels.length > 0" class="list-hotels flex gap-[25px] flex-wrap">
        <HotelItem v-for="hotel in filteredHotels" :key="hotel.id" :hotel="hotel" />
      </ul>

      <div v-if="filteredHotels.length == 0 && !isLoading" class="flex flex-col align-center gap-[20px]">
        <p class="text-[22px] text-center text-black font-bold">Nenhum hotel encontrado :(</p>
        <ButtonComponent @click="resetHotels" className="mx-auto">Limpar Filtro</ButtonComponent>
      </div>
    </div>
  </main>
</template>

<style lang="css">
  @media(max-width: 1024px){
    .list-hotels{
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .list-hotels li img{
      max-width: 100%;
      width: 100%;
    }
  }

  @media(max-width: 580px){
    .list-hotels{
      grid-template-columns: 1fr;
    }
  }
</style>
