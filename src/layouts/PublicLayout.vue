<script setup lang="ts">
import { ref } from 'vue';
import { GoBell } from "vue3-icons/go";
import { useReservationStore } from "@/stores/reservation";
import CompareLink from "@/components/CompareLink.vue";
import { useComparisonStore } from '@/stores/comparison';
import FooterComponent from "@/components/FooterComponent.vue";

const comparisonStore = useComparisonStore()

const showReservations = ref(false);
const reservationStore = useReservationStore();

function toggleReservations() {
  showReservations.value = !showReservations.value;
}

function getStatusColor(status: String) {
  if (status === "Reserva feita com sucesso") return 'text-green-500';
  if (status === "Pendente") return 'text-yellow-500';
  if (status === "Erro ao fazer a reserva") return 'text-red-500';
  return 'text-black';
}

</script>

<template>
  <div>
    <div class="h-full relative">
      <slot />

      <div class="fixed right-[30px] bottom-[30px] text-black z-[99] shadow-md shadow-gray p-[20px] rounded-full bg-white text-[30px] cursor-pointer hover:bg-gray-50 transition-all" @click="toggleReservations">
        <GoBell />
        <span v-if="reservationStore.reservations.length" class="absolute top-0 right-0 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm">{{ reservationStore.reservations.length }}</span>
      </div>

      <div v-if="showReservations" class="fixed bottom-[120px] right-[30px] w-[300px] bg-white shadow-md p-[20px] rounded-lg">
        <h3 class="mb-[20px] text-black text-[20px] font-bold overflow-auto max-h-[330px]">Reservas</h3>

        <ul v-if="reservationStore.reservations.length > 0">
          <li v-for="reservation in reservationStore.reservations" :key="reservation.id" class="my-[10px] text-black">
            <p><strong>Hotel:</strong> {{ reservation.hotelName }}</p>
            <p :class="getStatusColor(reservation.status)" class="font-bold"><strong class="text-black">Status:</strong> {{ reservation.status }}</p>
            <p><strong>Data:</strong> {{ reservation.date }}</p>
          </li>
        </ul>

        <p v-else class="text-black">Sem notificações no momento!</p>
      </div>

      <CompareLink v-if="comparisonStore.comparisonList.length > 0" />
    </div>

    <FooterComponent />
  </div>
</template>
<style lang="css" scoped>

.bell-notification {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 99;
  padding: 20px;
  border-radius: 50%;
  background-color: white;
  font-size: 30px;
  cursor: pointer;
  transition: all 0.3s;
}
.bell-notification:hover {
  background-color: #f0f0f0;
}

</style>