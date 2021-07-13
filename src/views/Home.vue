<template>
  <div class="home">
    <homeSlider></homeSlider>

    <div class="blackbox">
      <div class="text">FREE SHIPPING <span>FROM 200$</span></div>
      <div class="sub_text">Make an order and get a gift!</div>
    </div>

    <linksToCategoties></linksToCategoties>

    <div class="blackbox">
      <div class="text">FREE SHIPPING <span>FROM 200$</span></div>
      <div class="sub_text">Make an order and get a gift!</div>
    </div>

    <popular></popular>

    <Email></Email>

    <homeGallery></homeGallery>
  </div>
</template>

<style lang='scss'>
/* */
.container {
  width: 90%;
  max-width: 1170px;
  margin: 0 auto;
}

.vodal {
  z-index: 100000;
}

/* */

.blackbox {
  background-color: rgba(20, 20, 20, 0.9);
  padding: 60px;
  color: #fff;
  text-align: center;

  .text {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;

    span {
      font-weight: 400;
    }
  }
  .sub_text {
    font-size: 21px;
    font-weight: 300;
  }
}
/* */

.shop_list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 25px;
  // padding: 0 100px;
}
.shop_box {
  padding-bottom: 20px;
  margin: 0 auto;
  max-width: 350px;
  min-width: 240px;
  width: 20%;
  margin: 14px 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  // border: 2px solid #000;
  // box-shadow: 0 0 5px 3px #000 inset;
  box-shadow: 0 0 5px 3px rgb(161, 161, 161);

  &:hover {
    transform: scale(105%);
  }

  .img_title {
    margin-bottom: 10px;
  }

  .img_wrap {
    width: 100%;
    margin-bottom: 15px;
    max-height: 450px;
    overflow: hidden;
    display: flex;

    img {
      margin: 0 auto;
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 2;
    }
  }
  .product_info {
    padding: 0 6px;
    text-align: center;
  }
  h3 {
    font-weight: 400;
    font-size: 16px;
    color: #000;
    text-align: center;
    line-height: 22px;
    margin-bottom: 10px;
  }
  .price {
    color: rgb(68, 68, 68);
    margin-bottom: 15px;
    text-align: center;
  }
}

.btnn {
  font-family: "Montserrat", sans-serif;
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
  padding: 12px 34px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  &:hover {
    background-color: #000;
    color: #fff;
  }
}
</style>

<script>
import Vue from "vue";
import Vodal from "vodal";
import "vodal/common.css";
import "vodal/rotate.css";
Vue.component(Vodal.name, Vodal);

import homeSlider from "../components/homeSlider.vue";
import popular from "../components/PopularProducts.vue";
import Email from "../components/Email.vue";
import linksToCategoties from "../components/linksToCategoties.vue";
import homeGallery from "../components/home_gallery.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    popular,
    Email,
    linksToCategoties,
    homeGallery,
    homeSlider,
  },
};
</script>
