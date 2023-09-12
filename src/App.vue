<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import MainView from './views/MainView.vue';
import ArticleView from './views/MainView.vue';
import SearchSection from './components/SearchSection.vue'
</script>

<template>
    <Header></Header>
    <SearchSection/>
    
    <router-view></router-view>

    <Footer></Footer>
</template>
