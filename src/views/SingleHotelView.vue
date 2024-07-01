<script setup lang="ts">
import type {HotelType} from "@/types/hotel";

import {useRoute} from 'vue-router'
import {onMounted, ref} from "vue";
import {getHotelById} from "@/api/hotels";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import PageError from "@/components/single-hotel/PageError.vue";
import PageContent from "@/components/single-hotel/PageContent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";

const route = useRoute();
const hotel = ref<HotelType | null>(null);
const notFound = ref(false);
const isLoading = ref(true);

onMounted(async () => {
  try{
    hotel.value = await getHotelById(route.params.id as String)
    notFound.value = !hotel.value
  } catch {
    notFound.value = true
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="flex flex-col justify-between h-full">
    <div class="bg-black px-[32px] py-[20px]">
      <HeaderComponent />
    </div>

    <LoadingComponent v-if="isLoading" />
    <PageError v-if="notFound" />
    <PageContent v-if="hotel" :hotel="hotel" />
  </div>
</template>
