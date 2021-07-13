<template>
  <div class="container popular_prod_padding">
    <div class="colection">Popular:</div>
    <div class="shop_list">
      <div class="shop_box" v-for="item in popular_list" :key="item.id">
        <div class="img_title">
          <div class="img_wrap">
            <img :src="item.image" :alt="item.title" />
          </div>
        </div>
        <div class="product_info">
          <h3>{{ item.title.substr(0, 26) }}</h3>
          <div class="price">{{ item.price }}$</div>
          <button type="button" class="btnn" @click="detail(item.id)">
            BUY
          </button>
        </div>
      </div>
    </div>
    <div class="more_products">
      <router-link class="btnn" :to="'Collections'"
        ><span>View all Collections &#8594;</span></router-link
      >
    </div>

    <vodal
      class="buy_modal"
      :show="show"
      animation="rotate"
      @hide="show = false"
    >
      <h2 class="modal_title">Cart</h2>
      <hr />
      <div class="modal_wrap">
        <div class="modal_product">
          <div class="modal_img">
            <img :src="details.image" :alt="details.title" />
          </div>
          <div class="modal_product_info">
            <h3>{{ details.title }}</h3>
            <div class="modal_descrip_prod">
              {{ details.description }}
            </div>
            <div class="modal_price">{{ details.price }}$</div>
          </div>
        </div>
        <hr />

        <form method="GET">
          <div class="mb-3 form_row">
            <label for="name" class="form-label">Name:</label>
            <input
              type="text"
              class="form-control"
              id="namee"
              name="name"
              aria-describedby="emailHelp"
              data-required
            />
            <div id="name_err" class="form-text text-danger"></div>
          </div>
          <div class="mb-3 form_row">
            <label for="phone" class="form-label">Phone number:</label>
            <input
              type="text"
              class="form-control"
              id="phone"
              name="phone"
              aria-describedby="emailHelp"
            />
            <div id="phone_err" class="form-text"></div>
          </div>
          <button type="submit" class="btnn">Buy</button>
        </form>
      </div>
    </vodal>
  </div>
</template>

<style lang="scss">
.popular_prod_padding {
  padding: 100px 0 30px;
  text-align: center;
}
.colection {
  font-size: 40px;
  font-weight: 400;
  color: #000;
  margin-bottom: 20px;
}
.shop_list {
  margin-bottom: 20px;
}
</style>

<script>
const dataaa = require("@/assets/clothes.json");

import Vue from "vue";
import Vodal from "vodal";

import "vodal/common.css";
import "vodal/rotate.css";

Vue.component(Vodal.name, Vodal);
import "@/assets/css/modal.min.css";

export default {
  data() {
    return {
      show: false,
      list: [],
      popular_list: [],
      details: [],
    };
  },
  created() {
    this.list = dataaa;
    for (let i of this.list) {
      if (i.category == "women's clothing") {
        if (this.popular_list.length > 3) this.popular_list.length = 3;
        this.popular_list.push(i);
      }
      if (i.category == "men's clothing") {
        if (this.popular_list.length > 6) this.popular_list.length = 6;
        this.popular_list.push(i);
      }
    }
  },
  methods: {
    detail(idd) {
      for (let i of this.list) {
        if (i.id == idd) {
          this.details = i;
          this.show = true;
        }
      }
    },
  },
};
</script>