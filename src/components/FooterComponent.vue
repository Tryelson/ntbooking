<template>
  <footer class="bg-black flex justify-between items-center w-full h-[200px] p-[30px] pb-[10px]">
    <div class="flex flex-col justify-between h-full">
      <LogoBooking />

      <span class="text-white font-bold">&#169; 2024. All rights reserved.</span>
    </div>

    <span class="text-white font-bold max-w-[600px]">Agradecemos por utilizar nosso sistema e esperamos que você tenha uma excelente experiência de uso. Caso tenha alguma sugestão ou feedback, não hesite em nos contatar.</span>
  </footer>
</template>
<script setup lang="ts">
import LogoBooking from "@/components/LogoBooking.vue";
</script>