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
          <h3>{{ item.title.substr(0, 20) }}</h3>
          <div class="price">{{ item.price }}$</div>
          <button type="button" class="btnn" @click="detail(item.id)">
            Buy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.man_wrap {
  padding: 120px 0 80px;
}
</style>

<script>
const dataaa = require("@/assets/clothes.json");
export default {
  data() {
    return {
      list: [],
      men_list: [],
    };
  },
  created() {
    this.list = dataaa;
    for (let i of this.list) {
      if (i.category == "men's clothing") {
        this.men_list.push(i);
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