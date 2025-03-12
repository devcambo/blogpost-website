<template>
  <div class="row">
  <div v-if="state.loading">
    <VueSpinner size="520" color="red" />
  </div>
  <div v-else class="leftcolumn">
    <Card v-for="post in state.posts" :key="post.id" v-bind:post="post" /></div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useToast } from 'vue-toastification';
import { VueSpinner } from 'vue3-spinners';
import Card from '../components/Card.vue'

const state = reactive([
  {
    posts: [],
    loading: true
  }
])

const toast = useToast()

onMounted(async () => {
  try {
    const response = await axios.get("/api/posts")
    state.posts = response.data
  } catch (error) {
    toast.error(error.message)
  } finally {
    state.loading = false
  }
})
</script>