<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterLink to="/article">
    <div class="card">
      <img 
        src="../assets/photos/photo2.jpg" 
        alt="article"
        class="card-image"
      >
      <p class="card-title">title</p>

      <p class="card-text">text</p>
    </div>
  </RouterLink>
</template>

<style lang="scss">
.card {
  padding: 10px;
  width: 320px;
  height: max-content;
  border-radius: 3%;
  
  @media (min-width: 768px) {
    width: 230px;
    height: 280px;
  }

  &-image{
    width: 320px;
    height: 205px;
    margin-bottom: 15px;
    border-radius: 3%;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  
    @media (min-width: 768px) {
      width: 230px;
      height: 150px;
    }
  }

  &-title {
    margin-bottom: 20px;
    font-weight: bold;
  }

  &-text {
    font-size: small;
  }
}
</style>
