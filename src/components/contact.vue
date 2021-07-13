<template>
  <section id="contact-us" class="contact">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h5>CONTACT US</h5>
          <h2>Get in Touch</h2>
        </div>
      </div>

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
              @input="input"
            />
            <div class="error_div" v-if="isEmailError"></div>
          </div>
          <button :disabled="!isEmailValid" type="submit" class="btnn btn_sub">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.contact {
  padding-top: 160px;
}
.has_err input,
.has_err textarea,
.has_err select {
  border-color: tomato;
}
.error_div {
  color: tomato;
  height: 20px;
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
  name: "contact",
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      email: "",
      isEmailTouched: false,
    };
  },

  methods: {
    input(e) {
      let value = e.target.value;
      this.$emit("input", value);
    },
    isEmailValid() {
      return emailCheckRegex.test(this.email);
    },

    isEmailError() {
      return !this.isEmailValid && !this.isEmailTouched;
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

// import axios from "axios";
// import jQuery from "jquery";
// const $ = jQuery;
// window.$ = $;

// export default {
//   name: "contact",
//   data() {
//     return {
//       email: "",
//     };
//   },
//   created() {
//     $(function () {
//       $("#feedback_form").on("submit", function (e) {
//         e.preventDefault();
//         sendMessage($(this));
//       });
//       $("input, textarea").on("focus", function () {
//         if ($(this).parents(".form_row").hasClass("has_err")) {
//           if ($(this).attr("name") !== "email") {
//             $(this).parents(".form_row").removeClass("has_err");
//             $(this).next("div").text("");
//           }
//         }
//       });
//       $("input[name='email']").on("keyup", function () {
//         if (!validateEmail($(this).val())) {
//           $(this).parents(".form_row").addClass("has_err");
//           $(this).next("div").text("Invalid email adress");
//         } else {
//           $(this).parents(".form_row").removeClass("has_err");
//           $(this).next("div").text("");
//         }
//       });
//     });

//     function validateEmail(email) {
//       const re =
//         /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//       return re.test(email);
//     }

//     function sendMessage() {
//       const BOT_TOKEN = "1868758005:AAFgwAos7OsqEj3SOED9FgCKKspGO5USmGQ";
//       const CHAT_ID = "-1001207500168";
//       console.log(this.email);
//       const text = "Email: " + this.email;

//       let valid = true;
//       $("form")
//         .find("*[data-required]")
//         .each(function () {
//           if ($(this).val() === "") {
//             valid = false;
//             $(this).parents(".form_row").addClass("has_err");
//             $(this).next("div").text("Field is requaired");
//           } else {
//             if ($(this).attr("name") === "email") {
//               if (!validateEmail($(this).val())) {
//                 valid = false;
//                 $(this).parents(".form_row").addClass("has_err");
//                 $(this).next("div").text("Invalid email adress");
//               }
//             }
//           }
//         });
//       if (valid) {
//         axios
//           .get(
//             "https://api.telegram.org/bot" +
//               BOT_TOKEN +
//               "/sendMessage?chat_id=" +
//               CHAT_ID +
//               "&text=" +
//               text
//           )
//           .then((resp) => {
//             console.log(resp.data.ok);
//             if (resp.data.ok === true) {
//               topPanel.success("Ваши данные отправленны", true);
//               $("#feedback_form").trigger("reset");
//             } else {
//               topPanel.warning("error", true);
//             }
//           })
//           .catch((err) => {
//             alert(err);
//           });
//       }
//     }

//     const topPanel = {
//       info(text = "Some text here", autoclose = true) {
//         this.showPanel(text, "info", autoclose);
//       },
//       success(text = "Some text here", autoclose = true) {
//         this.showPanel(text, "success", autoclose);
//       },
//       danger(text = "Some text here", autoclose = false) {
//         this.showPanel(text, "danger", autoclose);
//       },
//       warning(text = "Some text here", autoclose = false) {
//         this.showPanel(text, "warning", autoclose);
//       },
//       showPanel(text, type, autoclose) {
//         let btn = autoclose
//           ? ""
//           : '<button onclick="topPanel.closePanel()>&times;</button>';
//         let h = `<div id="top_panel" class="panel_${type}">
//               <p>${text}</p>${btn}<div></div>`;
//         if (document.getElementById("top_panel") !== null) {
//           this.closePanel();
//         }
//         document
//           .getElementsByTagName("body")[0]
//           .insertAdjacentHTML("afterbegin", h);
//         if (autoclose) {
//           const _this = this;
//           setTimeout(function () {
//             _this.closePanel();
//           }, 3000);
//         }
//       },
//       closePanel() {
//         document.getElementById("top_panel").remove();
//       },
//     };
//   },
// };
</script>