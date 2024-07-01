<script setup lang="ts">
import InputComponent from "@/components/form/InputComponent.vue";
import LogoBooking from "@/components/LogoBooking.vue";
import {ref} from "vue";
import {getHotelsByName} from "@/api/hotels";
import type {HotelType} from "@/types/hotel";
import {CiStar} from "vue3-icons/ci";
import {LuHotel} from "vue3-icons/lu";
import {FaPeopleGroup} from "vue3-icons/fa6";
import {useRouter} from "vue-router";
import LoadingComponent from "@/components/LoadingComponent.vue";

const router = useRouter();

const menuItems = [
  {
    url: '/compare',
    text: 'Comparar'
  },
]

const searchText = ref('')
const hotelFilteredList = ref<Array<HotelType>>([]);

const isError = ref(false);
const isLoading = ref(true);

async function handleSearch(event: Event) {
  hotelFilteredList.value = [];
  isLoading.value = true;
  const { value } = event.target as HTMLInputElement;
  searchText.value = value;

  try {
    const result = await getHotelsByName(value);
    hotelFilteredList.value = result || [];
    isError.value = hotelFilteredList.value.length === 0;
  } catch (error) {
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
}

function navigateToHotel(hotelId: number){
  router.push(`/hotel/${hotelId}`);
}

</script>

<template>
    <header class="header flex items-center justify-between gap-[30px]">
      <LogoBooking />

      <nav>
        <ul class="flex items-center gap-[20px]">
            <li v-for="(item, key) in menuItems" :key="key">
              <RouterLink :to="item.url" class="nav-link flex rounded-md px-3.5 py-1.5 text-white font-medium">
                {{ item.text }}
              </RouterLink>
            </li>
        </ul>
      </nav>

      <div class="wrapper flex flex-col gap-[15px] relative">
        <InputComponent className="input-search" placeholder="Buscar destino..." :onInput="handleSearch" />

        <div v-if="searchText" class="absolute z-20 shadow-md top-[50px] w-full bg-white rounded-[8px] p-[15px] max-h-[500px] overflow-auto">

          <h3 v-if="!isError" class="text-[#212121] text-[22px] font-bold mb-[20px]">Resultados da pesquisa</h3>
          <h3 v-else class="text-[#212121] text-[22px] font-bold mb-[20px]">Hotéis não encontrados!</h3>
          <span v-if="isError" class="text-black font-medium">Que pena! Tente pesquisando por outro nome...</span>

          <LoadingComponent v-if="isLoading" size="sm" />
          <ul v-if="hotelFilteredList.length" class="flex flex-col gap-[15px]">
            <li :key="hotel.id" @click="navigateToHotel(hotel.id)" v-for="hotel in hotelFilteredList" class="search-item border-b-[2px] border-[#e3e1e1] p-[10px] cursor-pointer hover:bg-[#F3F3F3] transition-all hover:shadow-gray-400 hover:shadow-md">
              <div class="item-header flex gap-[10px]">
                <img class="w-[120px] h-[120px] object-cover rounded-md" :src="hotel.imageSrc" :alt="hotel.name" />
                <div class="flex flex-col gap-[5px] text-[#212121]">
                  <span class="font-bold text-[16px]">{{ hotel.name }}</span>
                  <span class="text-[14px]">{{ hotel.description }}</span>
                </div>
              </div>

              <div class="text-[#212121] flex flex-wrap justify-between gap-[3px] mt-[10px]">
                <div class="flex items-center gap-[5px]">
                  <span class="text-[20px]"><CiStar /></span>
                  <span class="whitespace-nowrap">{{ hotel.rate }} Reviews</span>
                </div>

                <div class="flex items-center gap-[5px]">
                  <span class="text-[20px]"><LuHotel /></span>
                  <span class="whitespace-nowrap">{{ hotel.guests }} Quartos</span>
                </div>

                <div class="flex items-center gap-[5px]">
                  <span class="text-[20px]"><FaPeopleGroup /></span>
                  <span class="whitespace-nowrap">{{ hotel.rooms }} Hóspedes</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
</template>

<style lang="css" scoped>
  .nav-link{
    border: 2px solid transparent;
  }

  .nav-link:hover {
    background-color: rgba(255, 255, 255, 0.35);
    transition: all 0.2s ease-in-out;
    backdrop-filter: blur(10px);
  }

  @media(max-width: 992px){
    .header {
      flex-direction: column;
      gap: 10px;
    }

    .wrapper{
      width: 100%;
    }

    .input-search {
      width: 100%;
      max-width: 100%;
    }

    .item-header{
      flex-direction: column;
    }

    .item-header img{
      width: 100%;
    }
  }
</style>
