<template>
  <div class="blog blog_detail">
    <div class="container">
      <!-- <h1>Article Title</h1> -->
      <div class="row">
        <h2>{{ item.title }}</h2>
        <hr />
        <div>{{ item.body }}</div>
      </div>
      <div class="coments">Comments:</div>
      <blogComments class="blog_comments" :blog_id="id"></blogComments>
    </div>
  </div>
</template>

<style lang="scss">
.blog {
  padding-top: 160px;
}
.row {
  margin-bottom: 50px;

  h2 {
    text-transform: uppercase;
  }
}
.coments {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
}
.blog_comments {
  margin-bottom: 40px;
}
</style>

<script>
import axios from "axios";
import blogComments from "@/components/blog_comments.vue";

export default {
  name: "blog_detail",
  components: {
    blogComments,
  },
  data() {
    return {
      //   id: this.$route.params.id,
      id: 0,
      item: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + this.id)
      .then((resp) => {
        this.item = resp.data;
        console.log(this.item);
      });

    // axios
    //   .get("https://dummyapi.io/data/api/post/" + this.id + "/comment?limit=10")
    //   .then((resp) => {
    //     this.item = resp.data;
    //     console.log(this.item);
    //   });

    // axios
    //   .get(
    //     "https://newsapi.org/v2/everything?q=apple&from=2021-07-07&to=2021-07-07&sortBy=popularity&apiKey=1b6df4931c854c21bc9840d2c55e4d66"
    //   )
    //   .then((resp) => {
    //     console.log(resp.data);
    //   });
  },
};
</script>