<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <div class="header">
    <h2>Blog Name</h2>
  </div>
  <ul>
    <li>
      <RouterLink to="/">Home</RouterLink>
    </li>
    <li>
      <RouterLink to="/posts">Posts</RouterLink>
    </li>
    <li>
      <RouterLink to="/add">Add Post</RouterLink>
    </li>
  </ul>
</template>