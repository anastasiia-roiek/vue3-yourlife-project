<script setup lang="ts">

</script>

<template>
  <div class="footer">
    <div class="footer-menu container">
      <h1 class="footer-title">TвійLife.</h1>

      <div class="footer-line"></div>

      <div class="footer-contacts-wrapper">
        <div class="footer-contacts">
        <p class="footer-contacts-title">Контакти</p>

        <nav class="footer-nav">
          <ul class="footer-nav-li">
            <li><a href="#">Пункт 1</a></li>
            <li><a href="#">Пункт 2</a></li>
            <li><a href="#">Пункт 3</a></li>
            <li><a href="#">Пункт 4</a></li>
          </ul>
        </nav>
      </div>

      <div class="footer-contacts">
        <p class="footer-contacts-title">Контакти</p>

        <nav class="footer-nav">
          <ul class="footer-nav-li">
            <li><a href="#">Пункт 1</a></li>
            <li><a href="#">Пункт 2</a></li>
            <li><a href="#">Пункт 3</a></li>
            <li><a href="#">Пункт 4</a></li>
          </ul>
        </nav>
      </div>
      </div>

      <div class="footer-contacts-wrapper">
        <div class="footer-contacts">
        <p class="footer-contacts-title">Контакти</p>

        <nav class="footer-nav">
          <ul class="footer-nav-li">
            <li><a href="#">Пункт 1</a></li>
            <li><a href="#">Пункт 2</a></li>
            <li><a href="#">Пункт 3</a></li>
            <li><a href="#">Пункт 4</a></li>
          </ul>
        </nav>
      </div>

      <div class="footer-contacts">
        <p class="footer-contacts-title">Контакти</p>

        <nav class="footer-nav">
          <ul class="footer-nav-li">
            <li><a href="#">Пункт 1</a></li>
            <li><a href="#">Пункт 2</a></li>
            <li><a href="#">Пункт 3</a></li>
            <li><a href="#">Пункт 4</a></li>
          </ul>
        </nav>
      </div>
      </div>
    </div>
    <p class="footer-year">2023</p>
  </div>
</template>

<style lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(227, 227, 227);
  max-height: 800px;

  @media (min-width: 856px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 290px;
  }

  &-title {
    margin: 15px auto;
    font-size: 50px;
    text-transform: uppercase;
}

  &-line {
    display: none;

      @media (min-width: 856px) {
      display: block;
      height: 200px;
      width: 2px;
      background-color: rgb(130, 128, 128);
    }
  }

  &-year {
    padding: 10px;
    margin-top: 20px;
    font-weight: 800;
  }

  &-nav-li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
  }

  &-contacts {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;

    &-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-bottom: 60px;
      
      @media (min-width: 856px) {
      gap: 40px;
    }

    }
  }

  &-contacts-title {
    font-weight: bold;
  }

  &-menu {

    @media (min-width: 856px) {
      display: flex;
      align-items: center;
      margin-top: 30px;
      gap: 60px;
    }
  }

  li {
    color: rgb(130, 128, 128);
  }
};
</style>
