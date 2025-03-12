<template>
  <div class="card">
    <h2>{{ post.title }}</h2>
    <h5>Title description, {{ post.publishedDate }}</h5>
    <div class="fakeimg" style="height:200px;">{{ post.image }}</div>
    <p>Some text..</p>
    <p>{{ post.description }}</p>
    <RouterLink :to="`/posts/${post.id}`">Read more</RouterLink>
  </div>
</template>

<script setup>
const props = defineProps(['post'])
</script>