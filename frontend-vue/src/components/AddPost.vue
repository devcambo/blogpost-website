<template>
  <h3>Add Post</h3>
  <form @submit.prevent="handleAdd">
    <label for="title">Title</label>
    <input type="text" name="title" id="title" v-model="post.title">
    <label for="image">Image</label>
    <input type="text" name="image" id="image" v-model="post.image">
    <label for="description">Description</label>
    <input type="text" name="description" id="description" v-model="post.description">
    <label for="publishedDate">PublishedDate</label>
    <input type="date" name="publishedDate" id="publishedDate" v-model="post.publishedDate">
    <input type="submit" value="Add Post">
  </form>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';

const post = reactive({
  title: '',
  image: '',
  description: '',
  publishedDate: ''
})

const toast = useToast()
const route = useRouter()

const handleAdd = async () => {
  try {
    const p = {
      title: post.title,
      image: post.image,
      description: post.description,
      publishedDate: post.publishedDate
    }
    await axios.post('/api/posts', p)
    toast.success('Add Post Successfully')
    route.push('/posts')
  } catch (error) {
    toast.error(error.message)
  }
}


</script>