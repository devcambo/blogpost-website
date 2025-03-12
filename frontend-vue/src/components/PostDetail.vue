<template>
  <h3>Post detail</h3>
  <div class="card">
    <h2>{{ post.title }}</h2>
    <h5>Title description, {{ post.publishedDate }}</h5>
    <div class="fakeimg" style="height:200px;">{{ post.image }}</div>
    <p>Some text..</p>
    <p>{{ post.description }}</p>
    <button @click="handleDelete">Delete</button>
    <RouterLink :to="`/update/${post.id}`">
      Update
    </RouterLink>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';

const route = useRoute()
const router = useRouter()
const toast = useToast()

const post = ref({})
const postId = route.params.id

onMounted(async () => {
  try {
    const response = await axios.get(`/api/posts/${postId}`)
    post.value = response.data
  } catch (error) {
    toast.error(error.message)
  }
})

// handle delete
const handleDelete = async () => {
  try {
    const confirm = window.confirm('Are you sure you want to delete this post?')
    if (confirm){
      await axios.delete(`/api/posts/${postId}`)
      toast.success('Delete post successfully')
      router.push('/posts')
    }
  } catch (error) {
    toast.error(error.message)
  }
}


</script>