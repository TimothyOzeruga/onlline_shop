<template>
  <div class="first_screem_bg">
    <div class="container">
      <VueSlickCarousel :arrows="true" v-bind="settings" class="main_slider">
        <router-link to="collections" class="slide_item">
          <img
            src="https://static-sl.insales.ru/r/1jmP7psiql4/fit/1408/0/ce/1/plain/files/1/6059/16398251/original/Frame.jpg"
            alt="slide_item"
          />
        </router-link>
        <router-link to="collections" class="slide_item">
          <img
            src="https://static-sl.insales.ru/r/PL7Zf02fx9A/fit/1408/0/ce/1/plain/files/1/6060/16398252/original/Frame-1.jpg"
            alt="slide_item"
          />
        </router-link>
        <router-link to="collections" class="slide_item">
          <img
            src="https://static-sl.insales.ru/r/MkEEqSg8d-8/fit/1920/0/ce/1/plain/files/1/6318/16398510/original/222.jpg@webp"
            alt="slide_item"
          />
        </router-link>
        <router-link to="collections" class="slide_item">
          <img
            src="https://static-sl.insales.ru/r/IBL1Ctw74ts/fit/1920/0/ce/1/plain/files/1/6319/16398511/original/333.jpg@webp"
            alt="slide_item"
          />
        </router-link>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<style lang="scss">
.first_screem_bg {
  padding: 160px 0 100px;
}
.main_slider {
  width: 90%;
  margin: auto;

  .slide_item {
    width: 100%;
    position: relative;
    &:hover {
      opacity: 0.8;
    }
    img {
      width: 100%;
    }
  }

  .slick-arrow {
    width: 30px;
    height: 30px;
    border: solid #000;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    top: 45%;
  }
  .slick-prev {
    -webkit-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    transform: rotate(135deg);
    left: -50px;
    &::before {
      display: none;
    }
  }
  .slick-next {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    right: -50px;
    &::before {
      display: none;
    }
  }
}
@media screen and (max-width: 950px) {
  .first_screem_bg {
    padding: 100px 0 60px;
  }
  .main_slider {
    .slick-prev {
      left: -30px;
    }
    .slick-next {
      right: -30px;
    }
  }
}
@media screen and (max-width: 450px) {
  .main_slider {
    .slick-arrow {
      display: none !important;
    }
  }
}
</style>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  data() {
    return {
      settings: {
        fade: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "ease",
        lazyLoad: "ondemand",
      },
    };
  },
  components: {
    VueSlickCarousel,
  },
};
</script>