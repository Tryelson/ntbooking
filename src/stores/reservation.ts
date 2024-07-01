import { defineStore } from 'pinia';

export const useReservationStore = defineStore('reservation', {
  state: () => ({
    reservations: [] as Array<{ id: number; status: string; hotelName: string; date: string }>
  }),
  actions: {
    addReservation(reservation: { id: number; status: string; hotelName: string; date: string }) {
      this.reservations.push(reservation);
    }
  }
});