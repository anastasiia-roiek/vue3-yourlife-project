<script setup lang="ts">
import ArticleCard from '../ArticleCard.vue';
import FoodCard from '../FoodCard.vue';
import SwiperSlider from '../SwiperSlider.vue';
import Video from '../Video.vue';
// import data from '@/api/data';
</script>

<template>
  <div>
    <div class="container section-main">

      <div class="section-main-slider">
        <SwiperSlider/>

        <div class="section-main-slider-articles">
          <ArticleCard/>
          <ArticleCard/>
        </div>
      </div>

      <div class="section-main-articles">
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <h1 class="section-food-title">Харчування</h1>

        <div class="section-food">
          <FoodCard/>
          <FoodCard/>
          <FoodCard/>
          <FoodCard/>
        </div>
      </div>
    </div>

    <div class="container section-video">
      <Video></Video>
    </div>

    <div class="container section-last">
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
    </div>
  </div>
</template>

<style lang="scss">

.section {
  background-color: rgb(223, 220, 220);
  padding-bottom: 100px;

  &-last, &-main-articles {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &-main-slider {
    display: flex;
    flex-direction: row;

    &-articles {
      display: none;

      @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
    }
    }
  }

  &-food-title {
    line-height: 100px;
    font-size: x-large;
    font-weight: bold;
  }

  &-food {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: max-content;
    gap: 15px;

    @media (min-width: 1020px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  &-main{
    margin-bottom: 90px;
  }

  &-last {
    margin-top: 60px;
    margin-bottom: 100px;
  }

  &-video {
    padding: 60px 0;
  }
}

</style>
