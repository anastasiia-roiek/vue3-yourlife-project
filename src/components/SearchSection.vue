<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container section-top">
      <RouterLink to="/" class="section-link">Головна</RouterLink>

      <div>
        <i class="fa fa-search section-icon"></i>

        <input 
          class="section-input" 
          type="text"
          placeholder="Пошук"
        >
      </div>
  </div>
</template>

<style lang="scss">
.section{
  &-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 30px;
  }

  &-input {
    padding: 5px;
    border: none;
    border-radius: 5%;
    background-color: rgb(228, 229, 231);
  }
  &-icon {
    position: relative;
    left: 180px;
    min-width: 40px;
  }

  &-link {
    &:hover {
      text-decoration: underline;
      color: rgb(64, 62, 62);
    }
  }
}
</style>
