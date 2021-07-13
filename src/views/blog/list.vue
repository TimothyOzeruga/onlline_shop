<template>
  <div class="blog">
    <div class="container">
      <div class="blog_title">
        <h5>BLOG STORIES</h5>
        <h2>Check Our News</h2>
      </div>
      <!-- <div class="blog_list">
        <div class="blog-box" v-for="item in cutItems()" :key="item.id">
          <router-link :to="'blog/' + item.id">
            <img :src="item.image" :alt="item.title" />
            <h3>{{ item.title }}</h3>
          </router-link>
        </div>
      </div> -->
      <div class="blog_list">
        <div class="blog-box" v-for="item in list_blog" :key="item.id">
          <router-link :to="'blog/' + item.id">
            <img :src="item.image" :alt="item.title" />
            <h3>{{ item.title }}</h3>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.blog {
  padding-top: 100px;
}
.blog_title {
  text-align: center;
  margin-bottom: 40px;

  h5 {
    font-size: 20px;
  }
  h2 {
    font-size: 35px;
  }
}
.blog_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;
}
.blog-box {
  max-width: 350px;
  width: calc(33.3333% - 10px);
  margin-bottom: 20px;
  box-shadow: 2px 2px 5px #000;
  transition: all 2 ease;

  &:hover {
    transform: scale(105%);
  }
  .img_wrap {
    img {
      width: 100%;
    }
  }

  h3 {
    text-transform: uppercase;
    padding: 20px 10px 10px 20px;
  }
}
</style>

<script>
// import axios from "axios";

const blogData = require("@/assets/blog.json");

export default {
  name: "blog_list",
  data() {
    return {
      list_item: [],
      list: [],
      list_blog: [],
      limit: 21,
    };
  },
  created() {
    this.list = blogData;
    for (let i of this.list) {
      this.list_blog.push(i);
    }
  },
  // mounted() {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((resp) => {
  //     this.list_item = resp.data;
  //   });
  // },
  // methods: {
  //   cutItems() {
  //     let rez = [];
  //     for (let i = 0; i < this.limit; i++) {
  //       this.list_item[i].image =
  //         "https://via.placeholder.com/350/0000FF/?text=" +
  //         this.list_item[i].title.substr(0, 25);
  //       rez.push(this.list_item[i]);
  //     }
  //     return rez;
  //   },
  // },
};
</script>