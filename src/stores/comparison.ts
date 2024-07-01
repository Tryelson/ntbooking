import { defineStore } from 'pinia';
import type { HotelType } from '@/types/hotel';

export const useComparisonStore = defineStore('comparison', {
    state: () => ({
        comparisonList: [] as HotelType[],
    }),
    actions: {
        addHotel(hotel: HotelType) {
            if (!this.comparisonList.find(item => item.id === hotel.id)) {
                this.comparisonList.push(hotel);
            }
        },
        removeHotel(hotelId: number) {
            this.comparisonList = this.comparisonList.filter(hotel => hotel.id !== hotelId);
        },
        clearComparisonList() {
            this.comparisonList = [];
        },
    },
});