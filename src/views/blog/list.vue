<template>
  <div class="blog">
    <div class="container">
      <div class="blog_title">
        <h5>BLOG STORIES</h5>
        <h2>Check Our News</h2>
      </div>
      <div class="blog_list">
        <div class="blog-box" v-for="item in cutItems()" :key="item.id">
          <router-link :to="'blog/' + item.id">
            <img :src="item.image" :alt="item.title" />
            <h3>{{ item.title }}</h3>
          </router-link>
        </div>
        <!-- <div class="blog-box" v-for="item in list_itemsss" :key="item.id">
          <router-link :to="'blog/' + item.id">
            <div class="img_wrap">
              <img :src="item.image" :alt="item.text" />
            </div>
            <h3>{{ item.text }}</h3>
          </router-link>
        </div> -->
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
import axios from "axios";

export default {
  name: "blog_list",
  data() {
    return {
      list_item: [],
      list_itemsss: [],
      limit: 21,
    };
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((resp) => {
      this.list_itemsss = resp.data;
    });
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((resp) => {
      this.list_item = resp.data;
    });
    //   const options = {
    //     method: "GET",
    //     url: "https://dummyapi.io/data/api/post?limit=10/60d0fe4f5311236168a109ca",
    //     headers: {
    //       "app-id": "60e6fab9a1aa7dc2336930cf",
    //     },
    //   };

    //   axios.request(options).then((resp) => {
    //     this.list_itemsss = resp.data.data;
    //   });
  },
  methods: {
    cutItems() {
      let rez = [];
      for (let i = 0; i < this.limit; i++) {
        this.list_item[i].image =
          "https://via.placeholder.com/350/0000FF/?text=" +
          this.list_item[i].title.substr(0, 25);
        rez.push(this.list_item[i]);
      }
      return rez;
    },
  },
  //   methods: {
  //     cutItems() {
  //       let rez = [];
  //       for (let j = 0; j < this.list_itemsss; j++) {
  //         for (let i = 0; i < this.limit; i++) {
  //           console.log(this.list_itemsss[j]);
  //           this.list_item[i].image =
  //             "https://via.placeholder.com/350/0000FF/FFFFFF/?text=" +
  //             this.list_item[i].title.substr(0, 25);
  //           rez.push(this.list_item[i]);
  //         }
  //       }
  //       return rez;
  //     },
  //   },
};
</script>