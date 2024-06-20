<template>
  <div class="flex flex-col gap-[30px]">
    <h2 class="text-5xl text-white font-bold">Encontre sua melhor estadia</h2>

    <div class="rounded-lg bg-white p-[20px] flex flex-col gap-[20px]">
      <div class="flex flex-wrap gap-[30px]">
        <div class="flex flex-col gap-[10px]">
          <FormLabel>Nome do hotel</FormLabel>
          <InputComponent variant="secondary" placeholder="Digite o nome do hotel" />
        </div>

        <div class="flex flex-col gap-[10px]">
          <FormLabel>Check-in</FormLabel>
          <InputComponent variant="secondary" type="date" />
        </div>

        <div class="flex flex-col gap-[10px]">
          <FormLabel>Check-out</FormLabel>
          <InputComponent variant="secondary" type="date" />
        </div>

        <div class="flex flex-col gap-[10px]">
          <FormLabel>Número de quartos</FormLabel>
          <InputComponent variant="secondary" placeholder="0" />
        </div>

        <div class="flex flex-col gap-[10px]">
          <FormLabel>Número de hóspedes</FormLabel>
          <InputComponent variant="secondary" placeholder="0" />
        </div>
      </div>

      <ButtonComponent variant="primary">Pesquisar</ButtonComponent>

    </div>
  </div>
</template>

<script setup lang="ts">
import InputComponent from "@/components/form/InputComponent.vue";
import FormLabel from "@/components/form/FormLabel.vue";
import ButtonComponent from "@/components/form/ButtonComponent.vue";
</script>