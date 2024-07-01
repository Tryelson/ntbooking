<script setup lang="ts">
import { RiErrorWarningLine } from "vue3-icons/ri";

</script>

<template>
  <div class="w-full mx-auto p-[20px] max-w-[1000px] flex items-center justify-center gap-[20px]">
    <span class="text-[125px] text-black">
      <RiErrorWarningLine />
    </span>

    <p class="text-black max-w-[400px] text-[22px]">Hotel não encontrado! Clique <RouterLink to="/" class="text-blue-700 underline">aqui</RouterLink> para voltar para página principal</p>
  </div>
</template>