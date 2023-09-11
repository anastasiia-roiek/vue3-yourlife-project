<script setup lang="ts">
import DropDown from './DropDown.vue';
</script>

<template>
  <div class="header">
    <h1 class="header-title">TвійLife.</h1>

    <div class="header-menu-wrapper">
      <div class="header-menu container">
        <DropDown/>
        <DropDown/>
        <DropDown/>
        <DropDown/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "../styles/utils/mixins";

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 130px;

  &-title {
    margin: 15px auto;
    font-size: 50px;
    text-transform: uppercase;
  }

  &-menu {
    display: none;

    @media (min-width: 768px) {
      display: flex;
      justify-content: center;
      gap: 60px;
    }

    &-wrapper {
      height: 35px;
      width: 100%;
      background-color: rgb(227, 227, 227);
    }
  }
};
</style>
