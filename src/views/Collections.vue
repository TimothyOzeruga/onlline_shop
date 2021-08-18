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
        <div class="more_products_last">
          <router-link class="btnn btnn_black" :to="'collectionCategory/kids'">
            <span>View all Kids Collection &#8594;</span>
          </router-link>
        </div>
      </div>
    </div>

    <vodal class="buy_modal" :show="show" animation="rotate" @hide="reset">
      <h2 class="modal_title">CART</h2>
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

        <div class="center">
          <form class="form" method="GET" @submit.prevent="sendData">
            <div class="fields_wrap">
              <div class="inputbox">
                <input
                  v-model="name"
                  type="text"
                  class="form_input"
                  name="name"
                  placeholder="Your Name"
                  :class="{ error: isErrorName }"
                  @blur="isTouched = true"
                />
                <label for="name" class="form-label"></label>
                <div class="error_div" v-if="isErrorName">Min 4 letters</div>
              </div>
              <div class="inputbox">
                <input
                  v-model="phone"
                  type="number"
                  class="form_input"
                  name="phone"
                  placeholder="Your Phone"
                  :class="{ error: isErrorPhone }"
                  @blur="isTouched = true"
                />
                <label for="phone" class="form-label"></label>
                <div class="error_div" v-if="isErrorPhone">Min 7 numbers</div>
              </div>
            </div>
            <div class="message_wrap">
              <input
                v-model="message"
                type="text"
                class="form_input"
                name="message"
                placeholder="Your Message"
              />
              <label for="message" class="form-label"></label>
            </div>
            <button :disabled="!isValid" type="submit" class="btnn">Buy</button>
          </form>
        </div>
      </div>
    </vodal>
  </div>
</template>

<style lang="scss">
.collections {
  background: url("https://st.depositphotos.com/1027431/2529/i/600/depositphotos_25299009-stock-photo-white-silk-background.jpg")
    no-repeat;
  background-size: cover;
  padding: 100px 0 60px;
  text-align: center;
}
.collection_title {
  font-family: "Merriweather", serif;
  margin-bottom: 30px;
  font-size: 50px;
  font-weight: 900;
}
.shop_list {
  margin-bottom: 30px;
}
.clth_title {
  font-family: "Merriweather", serif;
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
.more_products_last {
  margin-bottom: 0;
}
.btnn_black {
  background-color: rgb(226, 226, 226);
  color: #000;
  &:hover {
    background-color: #000;
    color: #fff;
  }
}
.error_div {
  top: 140%;
}
.clth_title {
  font-size: 40px;
  font-weight: 400;
  color: #000;
  margin: 20px;
}
@media screen and (max-width: 500px) {
  .collection_title {
    font-size: 32px;
  }
  .clth_title {
    font-size: 26px;
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

import axios from "axios";
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
      name: "",
      phone: "",
      message: "",
      isTouched: false,
    };
  },
  computed: {
    isErrorName() {
      return this.name.length < 4 && this.isTouched;
    },
    isErrorPhone() {
      return this.phone.length < 7 && this.isTouched;
    },
    isValid() {
      return (
        this.name != "" &&
        this.phone != "" &&
        !this.isErrorName &&
        !this.isErrorPhone
      );
    },
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
    reset() {
      this.show = false;
      this.name = "";
      this.phone = "";
      this.message = "";
      this.isTouched = false;
    },
    detail(idd) {
      for (let i of this.list) {
        if (i.id == idd) {
          this.details = i;
          this.show = true;
        }
      }
    },
    sendData() {
      const topPanel = {
        success(text = "Some text here", autoclose = true) {
          this.showPanel(text, "success", autoclose);
        },
        warning(text = "Some text here", autoclose = false) {
          this.showPanel(text, "warning", autoclose);
        },
        showPanel(text, type, autoclose) {
          let btn = autoclose
            ? ""
            : '<button onclick="topPanel.closePanel()>&times;</button>';
          let h = `<div id="top_panel" class="panel_${type}">
              <p>${text}</p>${btn}<div></div>`;
          if (document.getElementById("top_panel") !== null) {
            this.closePanel();
          }
          document
            .getElementsByTagName("body")[0]
            .insertAdjacentHTML("afterbegin", h);
          if (autoclose) {
            const _this = this;
            setTimeout(function () {
              _this.closePanel();
            }, 3000);
          }
        },
        closePanel() {
          document.getElementById("top_panel").remove();
        },
      };
      const BOT_TOKEN = "1868758005:AAFgwAos7OsqEj3SOED9FgCKKspGO5USmGQ";
      const CHAT_ID = "-1001207500168";
      const text =
        "Name: " +
        this.name +
        "Phone: " +
        this.phone +
        "Message: " +
        this.message;
      axios
        .get(
          "https://api.telegram.org/bot" +
            BOT_TOKEN +
            "/sendMessage?chat_id=" +
            CHAT_ID +
            "&text=" +
            text
        )
        .then((resp) => {
          if (resp.data.ok === true) {
            topPanel.success("Your data has been sent", true);
            this.name = "";
            this.phone = "";
            this.message = "";
            this.isTouched = false;
          } else {
            topPanel.warning("error", true);
          }
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>