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

<style>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 130px;
}

.header-title {
  margin: 15px auto;
  font-size: 50px;
  text-transform: uppercase;
}

.header-menu-wrapper {
  height: 35px;
  width: 100%;
  background-color: rgb(227, 227, 227);
}

.header-menu {
  display: none;

 @media (min-width: 744px) {
    display: flex;
    justify-content: center;
    gap: 60px;
  }
};
</style>
