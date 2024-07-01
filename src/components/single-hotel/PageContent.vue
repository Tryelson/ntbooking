<script setup lang="ts">
import { CiLocationOn, CiStar } from "vue3-icons/ci";
import { LuHotel } from "vue3-icons/lu";
import { FaPeopleGroup } from "vue3-icons/fa6";
import type { HotelType } from "@/types/hotel";
import { onMounted, type PropType, ref } from "vue";
import ButtonComponent from "@/components/form/ButtonComponent.vue";
import HotelItem from "@/components/HotelItem.vue";
import { getAllHotels } from "@/api/hotels";
import LoadingComponent from "@/components/LoadingComponent.vue";
import ContactForm from "@/components/single-hotel/ContactForm.vue";
import { useReservationStore } from "@/stores/reservation";

const hotelsList = ref<Array<HotelType>>([]);
const isError = ref(false);
const isLoading = ref(true);
const showForm = ref(false);

const { hotel } = defineProps({
  hotel: {
    required: true,
    type: Object as PropType<HotelType>
  }
});

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('pt-BR').format(date);
}

const reservationStore = useReservationStore();

function onReserve() {
  if (showForm.value) return;
  showForm.value = true;

  window.scrollBy({
    top: 400,
    behavior: 'smooth'
  });
}

async function onFormSubmit() {
  const statuses = ["Reserva feita com sucesso", "Pendente", "Erro ao fazer a reserva"];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

  const reservation = {
    id: hotel.id,
    status: randomStatus,
    hotelName: hotel.name,
    date: formatDate(new Date())
  };

  reservationStore.addReservation(reservation);
  showForm.value = false;
}

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
  <div class="px-[32px] py-[50px]">
    <div class="single-wrapper flex items-start gap-[15px]">
      <div class="w-full max-w-[1000px] ">
        <img class="w-full rounded-2xl max-h-[600px] object-cover" :src="hotel.imageSrc" :alt="hotel.name" />
      </div>

      <div class="hotel-info text-[#212121] max-w-[550px]">
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

        <ButtonComponent :className="`w-full max-w-full h-[50px] mt-[50px] ${showForm ? 'opacity-[0.2] cursor-not-allowed' : ''}`" :onClick="onReserve">Reservar</ButtonComponent>
      </div>
    </div>

    <div v-if="showForm" class="my-[50px] border-2 border-black shadow-md shadow-gray-400 rounded-[10px] p-[25px]">
      <h3 class="text-[30px] font-bold text-black mb-[40px]">Preencha seus dados</h3>

      <ContactForm @submit="onFormSubmit" />
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
</template>

<style lang="css" scoped>
  @media(max-width: 992px){
    .single-wrapper {
      flex-direction: column;
    }

    .hotel-info {
      max-width: 100%;
      margin-top: 30px;
    }
  }
</style>
