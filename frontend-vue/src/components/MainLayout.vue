<template>
  <Header />
  <slot />
  <Footer />
</template>

<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>