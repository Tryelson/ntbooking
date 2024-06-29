<script setup lang="ts">
import {CiLocationOn, CiStar} from "vue3-icons/ci";
import {LuHotel} from "vue3-icons/lu";
import {FaPeopleGroup} from "vue3-icons/fa6";
import type {HotelType} from "@/types/hotel";
import type {PropType} from "vue";
import ButtonComponent from "@/components/form/ButtonComponent.vue";

const { hotel } = defineProps({
  hotel: {
    required: true,
    type: Object as PropType<HotelType>
  }
})

</script>

<template>
  <div>
    <div class="flex items-start gap-[15px] px-[32px] my-[50px]">
      <div class="w-full max-w-[1000px]">
        <img class="w-full rounded-2xl" :src="hotel.imageSrc" :alt="hotel.name" />
      </div>

      <div class="text-[#212121] max-w-[550px]">
        <div class="flex flex-col h-full gap-[10px]">
          <div class="flex items-center gap-[5px] text-[32px]">
            <span><CiLocationOn /></span>

            <h1 class="text-black font-bold">
              {{ hotel.name }}
            </h1>
          </div>

          <p class="text-[25px] my-[20px]">{{ hotel.description }}</p>

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

          <span class="font-bold text-[25px] mt-[30px]">{{ hotel.price }}</span>
        </div>

        <ButtonComponent className="w-full max-w-full h-[50px] mt-[50px]">Reservar</ButtonComponent>
      </div>
    </div>
  </div>
</template>