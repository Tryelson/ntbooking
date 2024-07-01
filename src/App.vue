<script setup lang="ts">
import 'vue3-toastify/dist/index.css';
import PublicLayout from "@/layouts/PublicLayout.vue";

</script>

<template>
  <PublicLayout>
    <RouterView :key="$route.fullPath"></RouterView>
  </PublicLayout>
</template>
