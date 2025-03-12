<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>

<script setup>
import { RouterView } from 'vue-router';
import MainLayout from './components/MainLayout.vue';
</script>