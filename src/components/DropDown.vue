<template>
  <div class="dropdown">
    <div class="dropdown-header">
      <p class="dropdown-title">Здоров'я</p>
      <button class="dropdown-button"></button>
    </div>
    <div class="dropdown-content">
      <a href="#">Здоров'я</a>
      <a href="#">Здоров'я</a>
      <a href="#">Здоров'я</a>
    </div>
  </div>
</template>


<style>
.dropdown {
  position: relative;
  display: inline-block;
  width: 160px; 
}

.dropdown-header {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px;
}

.dropdown-title {
  font-size: medium;
  font-weight: bold;
}

.dropdown-button {
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding-left: 20px;
  background-image: url('../assets/icons/icon-down-arrow.png');
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 16px 16px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: rgb(133, 133, 131);
  width: 100%; 
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  display: block;
  padding: 8px;
  text-decoration: none;
  color: #2a1b1b;
}

.dropdown-content a:hover {
  background-color: #ddd;
}
</style>
