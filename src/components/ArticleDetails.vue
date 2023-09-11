<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterLink to="/">Головна</RouterLink>

  <div class="article container">
      <div class="article-header">
        <p class="article-title">Болить спина?</p>

        <img 
          src="../assets/photos/photo3.jpg" 
          alt="article"
          class="article-image"
        >
      </div>

      <p class="article-text">text</p>

      <button class="article-button" >Пройти тест</button>
    </div>
</template>

<style lang="scss">
.article {
  padding: 5px 10px;
  margin-bottom: 80px;
  width: 335px;
  height: max-content;
  border-radius: 3%;
  background-color: rgb(232, 229, 229);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    width: 810px;
    padding: 20px 45px;
    height: max-content;
  }
  
  @media (min-width: 1044px) {
    width: 1010px;
    margin-bottom: 165px;
    padding: 40px 85px;
    height: max-content;
  }

  &-image{
    width: 315px;
    height: 200px;
    margin-bottom: 15px;
    border-radius: 3%;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

    @media (min-width: 768px) {
      width: 620px;
      height: 330px;
    }
  
    @media (min-width: 1044px) {
      width: 820px;
      height: 530px;
    }
  }

  &-title {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: x-large;
  }

  &-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &-text {
    font-size: small;
  }
}
</style>
