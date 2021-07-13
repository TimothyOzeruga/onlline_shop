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

    <div class="container popular_prod_padding">
      <div class="colection">Popular:</div>
      <div class="shop_list">
        <div class="shop_box" v-for="item in list" :key="item.id">
          <div class="img_title">
            <div class="img_wrap">
              <img :src="item.image" :alt="item.title" />
            </div>
          </div>
          <div class="product_info">
            <h3>{{ item.title.substr(0, 26) }}</h3>
            <div class="price">{{ item.price }}$</div>
            <button type="button" class="btnn" @click="show = true">
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>

    <Email></Email>

    <homeGallery></homeGallery>

    <vodal class="vodal" :show="show" animation="rotate" @hide="show = false">
      <h3 class="text-center">Contact Us</h3>
      <form></form>
    </vodal>
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
.popular_prod_padding {
  padding: 100px 0;
}
.colection {
  font-size: 40px;
  font-weight: 700;
  color: #000;
  margin-bottom: 20px;
}
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
// .shop_box {
//   margin: 0 auto;
//   max-width: 350px;
//   min-width: 240px;
//   width: 20%;
//   padding: 25px;
//   margin: 10px 0;
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   border: 2px solid #000;
//   box-shadow: 0 0 5px 3px #000 inset;

//   &:hover {
//     transform: scale(105%);
//   }

//   .img_title {
//     margin-bottom: 10px;
//   }

//   .img_wrap {
//     width: 100%;
//     margin-bottom: 15px;
//     max-height: 250px;
//     overflow: hidden;
//     display: flex;

//     img {
//       margin: 0 auto;
//       position: relative;
//       width: 40%;
//       height: 100%;
//       object-fit: cover;
//       z-index: 2;
//     }
//   }
//   .product_info {
//     text-align: center;
//   }
//   h3 {
//     font-size: 20px;
//     color: #000;
//     text-align: center;
//     line-height: 22px;
//     margin-bottom: 10px;
//   }
//   .price {
//     color: rgb(68, 68, 68);
//     margin-bottom: 15px;
//     text-align: center;
//   }
// }
.btnn {
  font-family: "Montserrat", sans-serif;
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
  padding: 12px 32px;
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

import axios from "axios";

import homeSlider from "../components/homeSlider.vue";
import Email from "../components/Email.vue";
import linksToCategoties from "../components/linksToCategoties.vue";
import homeGallery from "../components/home_gallery.vue";

export default {
  name: "Home",
  data() {
    return {
      show: false,
      list: [],
    };
  },
  components: {
    Email,
    linksToCategoties,
    homeGallery,
    homeSlider,
  },
  created() {
    axios
      .get(
        "https://fakestoreapi.com/products/category/women's%20clothing?limit=3"
      )
      .then((resp) => {
        this.list = resp.data;
      });
    this.printCard();
  },
  methods: {
    printCard() {
      let rez = [];
      for (let i = 0; i < this.list; i++) {
        rez.push(this.list_item[i]);
      }
      return rez;
    },
  },
};
</script>
