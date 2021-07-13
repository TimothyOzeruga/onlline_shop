<template>
  <div class="collections">
    <h2 class="collection_title">OUR COLLECTION</h2>
    <div class="container">
      <hr />
      <div class="man_cloth">
        <div class="clth_title">Men's Collection:</div>
        <div class="shop_list">
          <div class="shop_box" v-for="item in men_list" :key="item.id">
            <div class="img_title">
              <div class="img_wrap">
                <img :src="item.image" :alt="item.title" />
              </div>
            </div>
            <div class="product_info">
              <h3>{{ item.title.substr(0, 20) }}</h3>
              <div class="price">{{ item.price }}$</div>
              <button type="button" class="btnn" @click="detail(item.id)">
                Buy
              </button>
            </div>
          </div>
        </div>
        <div class="more_products">
          <router-link class="btnn btnn_black" :to="'collectionCategory/mens'"
            ><span>View all Men's Collection &#8594;</span></router-link
          >
        </div>
        <hr />
      </div>
      <div class="woman_cloth">
        <div class="clth_title">Women's Collection:</div>
        <div class="shop_list">
          <div class="shop_box" v-for="item in women_list" :key="item.id">
            <div class="img_title">
              <div class="img_wrap">
                <img :src="item.image" :alt="item.title" />
              </div>
            </div>
            <div class="product_info">
              <h3>{{ item.title.substr(0, 26) }}</h3>
              <div class="price">{{ item.price }}$</div>
              <button type="button" class="btnn" @click="detail(item.id)">
                Buy
              </button>
            </div>
          </div>
        </div>
        <div class="more_products">
          <router-link class="btnn btnn_black" :to="'collectionCategory/women'">
            <span>View all Women's Collection &#8594;</span>
          </router-link>
        </div>
      </div>
      <hr />
      <div class="jewelery_cloth">
        <div class="clth_title">Kids Collection:</div>
        <div class="shop_list">
          <div class="shop_box" v-for="item in kids_list" :key="item.id">
            <div class="img_title">
              <div class="img_wrap">
                <img :src="item.image" :alt="item.title" />
              </div>
            </div>
            <div class="product_info">
              <h3>{{ item.title.substr(0, 24) }}</h3>
              <div class="price">{{ item.price }}$</div>
              <button type="button" class="btnn" @click="detail(item.id)">
                Buy
              </button>
            </div>
          </div>
        </div>
        <div class="more_products">
          <router-link class="btnn btnn_black" :to="'collectionCategory/kids'">
            <span>View all Kids Collection &#8594;</span>
          </router-link>
        </div>
      </div>
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
.collections {
  padding: 120px 0 0;
  text-align: center;
}
.collection_title {
  margin-bottom: 40px;
  font-size: 50px;
  font-weight: 900;
}
.shop_list {
  margin-bottom: 30px;
}
.clth_title {
  font-size: 40px;
  font-weight: 400;
  color: #000;
  margin: 20px;
}
.mens_list {
  margin-bottom: 20px;
}
.more_products {
  text-align: center;
  margin-bottom: 60px;
}
.btnn_black {
  background-color: rgb(226, 226, 226);
  color: #000;
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
import "../assets/css/modal.scss";

const dataaa = require("@/assets/clothes.json");

export default {
  data() {
    return {
      show: false,
      list: [],
      men_list: [],
      women_list: [],
      kids_list: [],
      electronics_list: [],
      details: [],
    };
  },
  created() {
    this.list = dataaa;
    for (let i of this.list) {
      if (i.category == "men's clothing") {
        if (this.men_list.length > 3) this.men_list.length = 3;
        this.men_list.push(i);
      }
      if (i.category == "women's clothing") {
        if (this.women_list.length > 3) this.women_list.length = 3;
        this.women_list.push(i);
      }
      if (i.category == "kids") {
        if (this.kids_list.length > 3) this.kids_list.length = 3;
        this.kids_list.push(i);
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