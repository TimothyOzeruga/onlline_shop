<template>
  <div class="blog blog_detail">
    <div class="container">
      <div class="blog_wrap">
        <div class="blog_details">
          <h2>{{ list_blog.title }}</h2>
          <div class="description">{{ list_blog.description }}</div>
          <div class="author">{{ list_blog.author }}</div>
          <div class="date">{{ list_blog.date }}</div>
        </div>
        <div class="blog_img_wrap">
          <img :src="list_blog.image" :alt="list_blog.title" />
        </div>
      </div>
      <hr />

      <div class="coments">Comments:</div>
      <blogComments class="blog_comments" :blog_id="id"></blogComments>
    </div>
  </div>
</template>


<script>
import blogComments from "@/components/blog_comments.vue";
const blogData = require("@/assets/blog.json");

export default {
  name: "blog_detail",
  components: {
    blogComments,
  },
  data() {
    return {
      id: 0,
      item: {},
      list_blog: [],
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.item = blogData;
    for (let i of this.item) {
      if (i.id == this.id) {
        this.list_blog = i;
      }
    }
  },
};
</script>




<style lang="scss">
.blog {
  padding-top: 160px;
  background: url("https://st.depositphotos.com/1027431/2529/i/600/depositphotos_25299009-stock-photo-white-silk-background.jpg")
    no-repeat;
  background-size: cover;
}

.blog_wrap {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  .blog_details {
    width: 48%;
    font-weight: 700;
    h2 {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 30px;
    }
    .description {
      font-weight: 400;
      padding-right: 30px;
      margin-bottom: 40px;
    }
    .author {
      margin-bottom: 6px;
    }
  }
  .blog_img_wrap {
    width: 48%;

    img {
      width: 100%;
    }
  }
}

.coments {
  font-size: 30px;
  font-weight: 700;
  margin: 40px 0 20px;
}
.blog_comments {
  margin-bottom: 40px;
}

@media (max-width: 900px) {
  .blog_wrap {
    flex-direction: column;
    align-items: center;

    .blog_details {
      width: 90%;
      margin-bottom: 30px;
    }
    .blog_img_wrap {
      width: 70%;
    }
  }
}
</style>