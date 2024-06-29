<script setup lang="ts">
import BackgroundImage from '@/components/BackgroundImage.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import SearchHotel from "@/components/SearchHotel.vue";
import HotelItem from "@/components/HotelItem.vue";
import type {HotelType} from "@/types/hotel";

import FooterComponent from "@/components/FooterComponent.vue";
import {getAllHotels} from "@/api/hotels";

const hotelsList: Array<HotelType> = await getAllHotels()

</script>

<template>
  <main class="relative w-full h-full">
    <div class="relative h-[950px]">
      <BackgroundImage />

      <div class="relative z-10 mx-auto px-[35px] flex flex-col justify-between h-full py-[25px] mb-[50px]">
        <HeaderComponent />
        <SearchHotel />
      </div>
    </div>

    <div class="p-[10px] my-[20px]">
      <h2 class="text-[30px] font-bold text-black mb-[40px]">Top Hotels</h2>

      <ul class="flex gap-[25px] flex-wrap">
        <HotelItem v-for="hotel in hotelsList" :key="hotel.id" :hotel="hotel" />
      </ul>
    </div>

    <FooterComponent />
  </main>
</template>
