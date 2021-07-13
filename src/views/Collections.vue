<template>
  <div class="collections">
    <div class="container">
      <div class="man_cloth">
        <div class="clth_title">Men's collection:</div>
        <div class="shop_list">
          <div class="shop_box" v-for="item in men_list" :key="item.id">
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
          <router-link class="btnn btnn_black" :to="'collectionCategory/mens'"
            ><span>View all Men's collection &#8594;</span></router-link
          >
        </div>
      </div>
      <div class="woman_cloth">
        <div class="clth_title">Women's collection:</div>
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
          <router-link class="btnn btnn_black" :to="'collectionCategory/mens'">
            <span>View Women's collection &#8594;</span>
          </router-link>
        </div>
      </div>

      <div class="jewelery_cloth">
        <div class="clth_title">Jewelery collection:</div>
        <div class="shop_list">
          <div class="shop_box" v-for="item in jewelery_list" :key="item.id">
            <div class="img_title">
              <div class="img_wrap">
                <img :src="item.image" :alt="item.title" />
              </div>
            </div>
            <div class="product_info">
              <h3>{{ item.title.substr(0, 27) }}</h3>
              <div class="price">{{ item.price }}$</div>
              <button type="button" class="btnn" @click="detail(item.id)">
                Buy
              </button>
            </div>
          </div>
        </div>
        <div class="more_products">
          <span>View all products &#8594;</span>
        </div>
      </div>

      <div class="electronics_cloth">
        <div class="clth_title">Electronics collection:</div>
        <div class="shop_list">
          <div class="shop_box" v-for="item in electronics_list" :key="item.id">
            <div class="img_title">
              <div class="img_wrap">
                <img :src="item.image" :alt="item.title" />
              </div>
            </div>
            <div class="product_info">
              <h3>{{ item.title.substr(0, 27) }}</h3>
              <div class="price">{{ item.price }}$</div>
              <button type="button" class="btnn" @click="detail(item.id)">
                Buy
              </button>
            </div>
          </div>
        </div>
        <div class="more_products">
          <span>View all products &#8594;</span>
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

    <!-- <vodal :show="show" animation="rotate" @hide="show = false">
      <h3 class="text-center">Cart</h3>
      <hr />
      <div class="modal_wrap">
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
    </vodal> -->
  </div>
</template>

<style lang="scss">
.vodal-dialog {
  width: 900px !important;
  height: 450px !important;
  box-shadow: 0 0 5px 3px #000 inset;
}
.buy_modal {
  text-align: center;

  .modal_title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .modal_wrap {
    height: 90%;
    padding: 20px;
  }
  .modal_product {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    .modal_img {
      width: 180%;
      max-width: 150px;
      max-height: 220px;
      overflow: hidden;
      display: flex;

      img {
        width: 100%;
      }
    }
    .modal_product_info {
      width: 70%;
    }
  }
  form {
    padding: 10px;
    width: 100%;
  }
}
.collections {
  padding: 160px 100px;
}
.shop_list {
  margin-bottom: 30px;
}
.clth_title {
  font-size: 40px;
  font-weight: 700;
  color: #000;
  margin-bottom: 20px;
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
import axios from "axios";

import Vue from "vue";
import Vodal from "vodal";

import "vodal/common.css";
import "vodal/rotate.css";

Vue.component(Vodal.name, Vodal);

const dataaa = require("@/assets/clothes.json");

export default {
  data() {
    return {
      show: false,
      list: [],
      men_list: [],
      women_list: [],
      jewelery_list: [],
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
    }
    axios
      .get(
        "https://fakestoreapi.com/products/category/women's%20clothing?limit=3"
      )
      .then((resp) => {
        this.women_list = resp.data;
      });
    axios
      .get("https://fakestoreapi.com/products/category/jewelery?limit=3")
      .then((resp) => {
        this.jewelery_list = resp.data;
      });
    axios
      .get("https://fakestoreapi.com/products/category/electronics?limit=3")
      .then((resp) => {
        this.electronics_list = resp.data;
      });
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