<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/article">
    <div class="food-card">
      <div class="food-card-background"></div>
      <div class="food-card-content">
        <img 
          src="../assets/photos/photo3.jpg" 
          alt="image"
          class="food-card-image"
        >
        <p class="food-card-title">15 найсмачніх рецептів випічки на молоці</p>
      </div>
    </div>
  </RouterLink>
</template>

<style lang="scss">
.food-card {
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 3%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
  transform: scale(1.05) ; 
  }

  @media (min-width: 768px) {
    width: 480px;
    height: 260px;
  }

  &-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0.7;
    background-image: 
      linear-gradient(to bottom, rgba(255, 2, 2, 0), rgb(0, 0, 0));
  }

  &-image {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }

  &-title {
    position: absolute;
    top: 150px;
    left: 1px;
    color: white;
    font-weight: bold;

    @media (min-width: 768px) {
      top: 220px;
      left: 20px;
    }
  }

  &-text {
    font-size: small;
  }
}
</style>
