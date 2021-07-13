<template>
  <header>
    <div id="mobile_menu_block">
      <div class="mmb_top">
        <div class="mmb_logo">
          <a href="#">MONO</a>
        </div>
        <button class="hamburger hamburger--elastic" type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <nav class="mobile_menu">
        <ul>
          <li class="menu_item"><a href="#Home">Home</a></li>
          <li class="menu_item"><a href="#About">About</a></li>
          <li class="menu_item"><a href="#Services">Services</a></li>
          <li class="menu_item"><a href="#Works">Works</a></li>
          <li class="menu_item"><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div id="menu_shadow"></div>
    <a href="#" class="scrollup"></a>

    <div class="header">
      <div class="header_container">
        <div class="logo">
          <a href="#">MONO</a>
        </div>
        <nav>
          <ul class="menu_list">
            <li class="menu_item"><a href="#Home">Home</a></li>
            <li class="menu_item"><a href="#About">About</a></li>
            <li class="menu_item"><a href="#Services">Services</a></li>
            <li class="menu_item"><a href="#Works">Works</a></li>
            <li class="menu_item"><a href="#Contact">Contact</a></li>
          </ul>
        </nav>
        <button class="hamburger hamburger--elastic" type="button">
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
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
  name: "siteHeader",

  data() {
    return {
      show: false,
    };
  },
  created() {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 100) {
        $(".header").addClass("fixed");
        $(".logo_img").addClass("small_logo");
      } else {
        $(".header").removeClass("fixed");
        $(".logo_img").removeClass("small_logo");
      }
    });

    $(".hamburger, #menu_shadow").click(function () {
      $(".hamburger").toggleClass("is-active");
      $("body").toggleClass("open");
    });

    $(".mobile_menu a").click(function () {
      $(".hamburger").removeClass("is-active");
      $("body").removeClass("open");
    });

    $(".mobile_menu a, .menu_list a").click(function (e) {
      e.preventDefault();
      let top = $($(this).attr("href")).offset().top;
      $("html, body").animate({ scrollTop: top }, 600);
    });
  },
};
</script>