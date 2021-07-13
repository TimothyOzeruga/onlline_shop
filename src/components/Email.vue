<template>
  <div class="contacts_wrapper">
    <div class="blackbox blackbox2" style="margin-bottom: 20px">
      <div class="text">GET DISCOUNTS AND GIFTS</div>
      <form class="sub" id="sub_form" @submit.prevent="sendData">
        <div class="form_row">
          <label for="email" class="form-label"></label>
          <input
            id="email"
            name="email"
            placeholder="Your email"
            v-model="email"
            type="email"
            @blur="isEmailTouched = true"
            :class="{ error: isEmailError }"
          />
          <div class="error_div" v-if="isEmailError">Invalid Email</div>
        </div>
        <button :disabled="!isEmailValid" type="submit" class="btnn btn_sub">
          Subscribe
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.form_row {
  position: relative;
}
.error_div {
  position: absolute;
  top: 130%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: tomato;
  padding: 4px;
  height: 20px;
}
.error {
  border-color: red;
}
.blackbox2 {
  text-align: center;
  margin-bottom: 0;
  .sub {
    display: flex;
    justify-content: center;
  }
  .form_row {
    margin-right: 30px;

    input {
      font-family: "Montserrat", sans-serif;
      width: 250px;
      padding: 10px;
      color: #000;

      &::placeholder {
        color: #000;
      }
      &:focus {
        background-color: rgba(219, 216, 216);
      }
    }
  }
  .btn_sub {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    padding: 5px 10px;
    height: 40px;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
}

#top_panel {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  background-color: rgba(90, 90, 90, 0.8);
  color: #fff;
  z-index: 999999999;
}
#top_panel button {
  position: absolute;
  right: 20px;
  top: 50%;
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;
  font-size: 24px;
  color: red;
  cursor: pointer;
  line-height: 16px;
  margin-top: -8px;
}
#top_panel.panel_success {
  background-color: rgba(9, 153, 20, 0.8);
}
#top_panel.panel_warning {
  background-color: rgba(235, 166, 13, 0.8);
}
</style>

<script>
import axios from "axios";

const emailCheckRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default {
  data() {
    return {
      email: "",
      isEmailTouched: false,
    };
  },
  computed: {
    isEmailValid() {
      return emailCheckRegex.test(this.email);
    },

    isEmailError() {
      return !this.isEmailValid && this.isEmailTouched;
    },
  },

  methods: {
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
      const text = "Email: " + this.email;
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
          console.log(resp.data.ok);
          if (resp.data.ok === true) {
            topPanel.success("Your data has been sent", true);
            this.email = "";
            this.isEmailTouched = false;
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