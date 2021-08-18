<template>
  <header>
    <div id="mobile_menu_block">
      <div class="mmb_top">
        <div class="mmb_logo">MONO</div>
        <button
          @click="close"
          class="hamburger hamburger--elastic"
          type="button"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <nav class="mobile_menu">
        <ul>
          <li class="menu_item" @click="close">
            <router-link to="/" class="item_link">Home</router-link>
          </li>
          <li class="menu_item" @click="close">
            <router-link to="/collections" class="item_link"
              >Collections</router-link
            >
          </li>
          <li class="menu_item" @click="close">
            <router-link to="/blog" class="item_link">Blog</router-link>
          </li>
          <li class="menu_item" @click="close">
            <router-link to="/contacts" class="item_link">Contacts</router-link>
          </li>
        </ul>
      </nav>
      <ul class="mobile_soc_list">
        <li @click="close">
          <a
            href="https://www.facebook.com/"
            class="facebook"
            target="_blank"
            rel="noopener nofollow"
            ><i class="icon-facebook"></i
          ></a>
        </li>
        <li @click="close">
          <a
            href="https://twitter.com/"
            class="twitter"
            target="_blank"
            rel="noopener nofollow"
            ><i class="icon-twitter"></i
          ></a>
        </li>
        <li @click="close">
          <a
            href="https://www.instagram.com/"
            class="instagram"
            target="_blank"
            rel="noopener nofollow"
            ><i class="icon-instagram"></i
          ></a>
        </li>
      </ul>
    </div>
    <div id="menu_shadow" @click="close"></div>
    <div class="header">
      <div class="header_container">
        <div class="logo">
          <router-link to="/" class="logo_name">MONO</router-link>
        </div>
        <nav>
          <ul class="menu_list">
            <li class="menu_item">
              <router-link to="/" class="item_link whitee">Home</router-link>
            </li>
            <li class="menu_item">
              <router-link to="/collections" class="item_link whitee"
                >Collections</router-link
              >
            </li>
            <li class="menu_item">
              <router-link to="/blog" class="item_link whitee"
                >Blog</router-link
              >
            </li>
            <li class="menu_item">
              <router-link to="/contacts" class="item_link whitee"
                >Contacts</router-link
              >
            </li>
          </ul>
        </nav>
        <ul class="soc_list">
          <li>
            <a
              href="https://www.facebook.com/"
              class="facebook"
              target="_blank"
              rel="noopener nofollow"
              ><i class="icon-facebook"></i
            ></a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              class="twitter"
              target="_blank"
              rel="noopener nofollow"
              ><i class="icon-twitter"></i
            ></a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              class="instagram"
              target="_blank"
              rel="noopener nofollow"
              ><i class="icon-instagram"></i
            ></a>
          </li>
        </ul>
        <button
          @click="mobMenu"
          class="hamburger hamburger--elastic"
          type="button"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import url("../assets/css/common/mobile_menu.min.css");
@import url("../assets/css/hamburger.min.css");
@import url("../assets/css/icons.css");

.hamburger {
  display: none;
}

@media screen and (max-width: 1060px) {
  .header_container {
    nav {
      display: none;
    }
    .soc_list {
      display: none;
    }
  }
  .hamburger {
    display: block;
  }
}
</style>

<script>
export default {
  name: "siteHeader",

  data() {
    return {
      show: false,
      isOpenMobMenu: false,
    };
  },
  methods: {
    mobMenu() {
      this.isOpenMobMenu = true;
      document.body.classList.add("open");
      document.querySelector(".hamburger").classList.add("is-active");
    },
    close() {
      this.isOpenMobMenu = false;
      document.body.classList.remove("open");
      document.querySelector(".hamburger").classList.remove("is-active");
    },
  },
};
</script>