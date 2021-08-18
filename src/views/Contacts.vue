<template>
  <div class="contacts_section">
    <div class="container">
      <h5 class="contact_upper_title">Get in Touch</h5>
      <h2 class="contacts_title">Contact Us</h2>
      <hr />
      <div class="contact_info_wrap">
        <div class="first_contact_info">
          <h3 class="contact_info_title">WE ARE ALWAYS CONNECTED!</h3>
          <p class="text_info">
            You can always contact us by phone numbers indicated in the header
            of the site. You can also send your request / complaint / proposal
            using the following form.
          </p>
          <div class="phone_numbers">
            <div class="phone_title">Phone Numbers:</div>
            <div class="phone_wrap">
              +38 067 6782018, +38 093 194 23 30, +38 067 0102025, +38 066
              5564277
            </div>
          </div>
          <div class="adress">
            Address: 65000, Ukraine, Odessa, st. Pushkinskaya, 31.
          </div>
          <div class="emaill">Email: infomono@gmail.com</div>
        </div>

        <div class="second_contact_info">
          <h3 class="contact_info_title">WE ACCEPT ORDERS 24/7!</h3>
          <p class="text_info">
            Orders are processed during the working hours of our managers. If
            you have any comments or suggestions on the work of the site, write
            to us at: helpmono@gmail.com
          </p>
          <div class="sales_department">Sales department:</div>
          <div class="days">Monday - Sunday: 9:00 am to 6:00 pm</div>
          <div class="sales_department">Returns department:</div>
          <div class="days">Monday - Friday: 9:00 am to 6:00 pm</div>
        </div>
      </div>
      <hr />
      <div class="form_map_wrap">
        <form class="form" method="GET" @submit.prevent="sendData">
          <h3 class="form_title">WRITE US A LETTER</h3>
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
            <textarea
              v-model="message"
              type="text"
              class="form_input textarea"
              name="message"
              placeholder="Your Message"
            />
            <label for="message" class="form-label"></label>
          </div>
          <button :disabled="!isValid" type="submit" class="btnn">Send</button>
        </form>
        <MapComponent class="map"></MapComponent>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.contacts_section {
  padding: 100px 0 100px;
  text-align: center;
  background: url("https://st.depositphotos.com/1027431/2529/i/600/depositphotos_25299009-stock-photo-white-silk-background.jpg")
    no-repeat;
  background-size: cover;
}
.contact_upper_title {
  font-family: "Merriweather", serif;
  font-size: 32px;
}
.contacts_title {
  font-family: "Merriweather", serif;
  margin-bottom: 30px;
  font-size: 46px;
  font-weight: 700;
}
.contact_info_wrap {
  padding: 30px 0 60px;
  display: flex;
  justify-content: space-between;
}
.first_contact_info {
  padding-right: 20px;
  text-align: start;
}
.contact_info_title {
  margin-bottom: 10px;
}
.text_info {
  color: rgb(102, 102, 102);
  margin-bottom: 20px;
}
.phone_title {
  font-weight: 700;
  margin-bottom: 6px;
}
.phone_wrap {
  margin-bottom: 20px;
}
.adress {
  color: rgb(102, 102, 102);
  margin-bottom: 4px;
}
.emaill {
  color: rgb(102, 102, 102);
}
.second_contact_info {
  text-align: start;
}
.sales_department {
  font-weight: 700;
  margin-bottom: 4px;
  font-size: 16px;
}
.days {
  color: rgb(102, 102, 102);
  margin-bottom: 12px;
}

/* */
.form_map_wrap {
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .form {
    width: 48%;
  }
}
.form_input {
  background-color: rgb(238, 235, 235);
  margin-bottom: 10px;
}
.textarea {
  resize: none;
  height: 120px;
}
.form_title {
  font-weight: 400;
  margin-bottom: 20px;
  font-size: 24px;
}
.inputbox {
  position: relative;
}
.error_div {
  font-size: 13px;
  top: 96% !important;
}
@media screen and (max-width: 1070px) {
  .fields_wrap {
    flex-direction: column;
    .form_input {
      margin-bottom: 20px;
    }
  }
  .error_div {
    font-size: 13px;
    top: 80% !important;
  }
}
@media screen and (max-width: 690px) {
  .contact_info_wrap {
    padding-bottom: 30px;
    flex-direction: column;
  }
  .first_contact_info {
    margin-bottom: 30px;
  }
  .form_map_wrap {
    flex-direction: column;

    .form {
      width: 90%;
      margin-bottom: 40px;
      .inputbox {
        margin-bottom: 0 !important;
      }
    }
    #mapContainer {
      width: 90%;
    }
  }
}
</style>

<script>
import axios from "axios";
// import contact from "../components/contact.vue";
import MapComponent from "../components/map.vue";

export default {
  data() {
    return {
      name: "",
      phone: "",
      message: "",
      isTouched: false,
    };
  },
  components: {
    // contact,
    MapComponent,
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