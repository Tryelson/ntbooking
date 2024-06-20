<script setup lang="ts">
import BackgroundImage from '@/components/BackgroundImage.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import SearchHotel from "@/components/SearchHotel.vue";

</script>

<template>
  <main class="p-[10px] relative w-full h-full">
    <BackgroundImage />

    <div class="relative z-10 mx-auto px-[35px] flex flex-col justify-between h-full py-[25px]">
      <HeaderComponent />
      <SearchHotel />
    </div>
  </main>
</template>
