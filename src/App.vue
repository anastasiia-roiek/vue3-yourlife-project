<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Main</RouterLink>
        <RouterLink to="/article">Article</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
