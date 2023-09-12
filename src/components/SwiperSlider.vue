<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const images = [
      {
        id: 1,
        img: 'https://www.beautypunk.com/wp-content/uploads/2017/06/fruchtleder-titel.jpg'
      },
      {
        id: 2,
        img: 'https://life.liga.net/images/general/2020/11/12/20201112112834-1157.jpg'
      },
      {
        id: 3,
        img: 'https://www.beautypunk.com/wp-content/uploads/2017/06/fruchtleder-titel.jpg'
      },
      {
        id: 4,
        img: 'https://meaningintamil.in/wp-content/uploads/2021/04/Swing-Meaning-In-Tamil-With-Example-%E2%80%A2-Tamil-English-Dictionary.jpg'
      },
    ];

    return {
      modules: [Pagination],
      images,
    };
  },
};
</script>

<template>
  <swiper :pagination="{ clickable: true }" :modules="modules" class="mySwiper">
    <swiper-slide v-for="image in images" :key="image.id">
      <div class="swiper-slide-content">
        <img :src="image.img" alt="">
        <div class="centered-text">15 найсмачніх рецептів</div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style>
.swiper {
  width: 730px;
  height: 480px;
  border-radius: 5%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide-content {
  position: relative;
  height: 100%;
}

.swiper-pagination {
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
}

.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #ffffff;
  border-color: #fff;
  margin: 0 5px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.centered-text {
  position: absolute;
  top: 440px;
  left: 130px;
  transform: translate(-50%, -50%);
  
  color: white;
  padding: 10px;
  border-radius: 5px;
}
</style>
