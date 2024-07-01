<script setup lang="ts">
import { ref, computed, defineEmits } from 'vue';
import InputComponent from "@/components/form/InputComponent.vue";
import FormLabel from "@/components/form/FormLabel.vue";
import ButtonComponent from "@/components/form/ButtonComponent.vue";

const emits = defineEmits(['search', 'reset']);

const filters = ref({
  name: '',
  checkIn: '',
  checkOut: '',
  rooms: '',
  guests: ''
});

const isFormValid = computed(() => {
  return filters.value.name !== '' &&
      filters.value.checkIn !== '' &&
      filters.value.checkOut !== '' &&
      filters.value.rooms !== '' &&
      filters.value.guests !== '';
});

const emitSearch = () => {
  if (isFormValid.value) {
    emits('search', { ...filters.value });
  }
};

const resetFilters = () => {
  filters.value = {
    name: '',
    checkIn: '',
    checkOut: '',
    rooms: '',
    guests: ''
  };
  emits('reset');
};
</script>

<template>
  <div class="flex flex-col gap-[30px]">
    <h2 class="title lg:text-[52px] sm:text-[40px] text-[25px] text-white font-bold">Encontre sua melhor estadia</h2>

    <div class="rounded-lg bg-white p-[20px] flex flex-col gap-[20px]">
      <div class="input-wrapper flex flex-wrap gap-[30px]">
        <div class="flex flex-col gap-[10px] w-full max-w-[400px]">
          <FormLabel>Nome do destino</FormLabel>
          <InputComponent v-model="filters.name" variant="secondary" placeholder="Digite o nome do seu destino" />
        </div>

        <div class="flex flex-col gap-[10px] w-full max-w-[400px]">
          <FormLabel>Check-in</FormLabel>
          <InputComponent v-model="filters.checkIn" variant="secondary" type="date" />
        </div>

        <div class="flex flex-col gap-[10px] w-full max-w-[400px]">
          <FormLabel>Check-out</FormLabel>
          <InputComponent v-model="filters.checkOut" variant="secondary" type="date" />
        </div>

        <div class="flex flex-col gap-[10px] w-full max-w-[400px]">
          <FormLabel>Número de quartos</FormLabel>
          <InputComponent v-model="filters.rooms" variant="secondary" placeholder="0" type="number" />
        </div>

        <div class="flex flex-col gap-[10px] w-full max-w-[400px]">
          <FormLabel>Número de hóspedes</FormLabel>
          <InputComponent v-model="filters.guests" variant="secondary" placeholder="0" type="number" />
        </div>
      </div>

      <ButtonComponent type="button" :disabled="!isFormValid" @click="emitSearch" variant="primary">
        Pesquisar
      </ButtonComponent>

      <ButtonComponent type="button" @click="resetFilters" variant="secondary">
        Limpar Filtros
      </ButtonComponent>
    </div>
  </div>
</template>

<style lang="css" scoped>
  .title{
    text-shadow: 0 0 5px black;
  }

  @media(max-width: 992px){
    .input-wrapper{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      flex-wrap: nowrap;
    }
  }

  @media(max-width: 768px){
    .input-wrapper{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media(max-width: 480px){
    .input-wrapper{
      grid-template-columns: 1fr;
      gap: 10px;
    }
  }
</style>
