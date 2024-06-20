<template>
    <header class="flex items-center justify-between gap-[30px]">
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

      <InputComponent placeholder="Buscar destino..." />
    </header>
</template>

<script setup lang="ts">
import InputComponent from "@/components/form/InputComponent.vue";
import LogoBooking from "@/components/LogoBooking.vue";

const menuItems = [
  {
    url: '/',
    text: 'Contato'
  },
  {
    url: '/',
    text: 'Sobre'
  },
  {
    url: '/',
    text: 'Viagens'
  }
]

</script>

<style lang="css" scoped>
  .nav-link{
    border: 2px solid transparent;
  }

  .nav-link:hover {
    background-color: rgba(255, 255, 255, 0.35);
    transition: all 0.2s ease-in-out;
    backdrop-filter: blur(10px);
  }
</style>
