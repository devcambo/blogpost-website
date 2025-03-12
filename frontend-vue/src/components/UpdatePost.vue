<template>
  <h3>Update Post</h3>
  <form @submit.prevent="handleUpdate">
    <label for="title">Title</label>
    <input type="text" name="title" id="title" v-model="post.title">
    <label for="image">Image</label>
    <input type="text" name="image" id="image" v-model="post.image">
    <label for="description">Description</label>
    <input type="text" name="description" id="description" v-model="post.description">
    <label for="publishedDate">PublishedDate</label>
    <input type="date" name="publishedDate" id="publishedDate" v-model="post.publishedDate">
    <input type="submit" value="Update Post">
  </form>
</template>

<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useToast } from 'vue-toastification';
import { useRoute, useRouter } from 'vue-router';

const post = reactive({
  title: '',
  image: '',
  description: '',
  publishedDate: ''
})

const toast = useToast()
const router = useRouter()
const route = useRoute()
const postId = route.params.id

// handle update
const handleUpdate = async () => {
  try {
    const p = {
      title: post.title,
      image: post.image,
      description: post.description,
      publishedDate: post.publishedDate
    }
    await axios.put(`/api/posts/${postId}`, p)
    toast.success('Update Post Successfully')
    router.push('/posts')
  } catch (error) {
    toast.error(error.message)
  }
}

onMounted(async () => {
  try {
    const response = await axios.get(`/api/posts/${postId}`)
    const { title, image, description, publishedDate } = response.data
    post.title = title,
      post.image = image,
      post.description = description,
      post.publishedDate = publishedDate
  } catch (error) {
    toast.error(error.message)
  }
})
</script>