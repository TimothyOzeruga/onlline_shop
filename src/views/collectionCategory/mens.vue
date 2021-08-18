<template>
  <div class="man_wrap">
    <div class="clth_title">Men's collection:</div>
    <div class="shop_list">
      <div class="shop_box" v-for="item in men_list" :key="item.id">
        <div class="img_title">
          <div class="img_wrap">
            <img :src="item.image" :alt="item.title" />
          </div>
        </div>
        <div class="product_info">
          <h3>{{ item.title.substr(0, 22) }}</h3>
          <div class="price">{{ item.price }}$</div>
          <button type="button" class="btnn" @click="detail(item.id)">
            Buy
          </button>
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
.man_wrap {
  background: url("https://st.depositphotos.com/1027431/2529/i/600/depositphotos_25299009-stock-photo-white-silk-background.jpg")
    no-repeat;
  background-size: cover;
  text-align: center;
  padding: 120px 0 80px;
}
</style>

<script>
import axios from "axios";
const dataaa = require("@/assets/clothes.json");
export default {
  data() {
    return {
      show: false,
      list: [],
      men_list: [],
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
    for (let i of dataaa) {
      if (i.category == "men's clothing") {
        this.men_list.push(i);
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