<template>
  <div class="blogg">
    <div class="container">
      <div class="blog_title">
        <h5>BLOG STORIES</h5>
        <h2>Check Our News</h2>
        <hr />
      </div>

      <div class="blog_list">
        <div class="blog-card" v-for="item in list_blog" :key="item.id">
          <div class="meta">
            <div class="photo"><img :src="item.image" :alt="item.title" /></div>
            <ul class="details">
              <li class="author">
                {{ item.author }}
              </li>
              <li class="date">{{ item.date }}</li>
            </ul>
          </div>
          <div class="description">
            <h1>{{ item.title.substr(0, 24) }}</h1>
            <h2>{{ item.short_decription.substr(0, 20) }}</h2>
            <p>{{ item.description.substr(0, 150) + "..." }}</p>
            <p class="read-more">
              <router-link :to="'blog/' + item.id">Read More</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
};
</script>



<style lang="scss">
$color_white: #fff;
$color_prime: #12649b;
$color_grey: #e2e2e2;
$color_grey_dark: #a2a2a2;

.blog-card {
  width: calc(50% - 20px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem auto;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  margin-bottom: 1.6%;
  background: $color_white;
  line-height: 1.4;
  font-family: sans-serif;
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;
  a {
    color: inherit;
    &:hover {
      color: $color_prime;
    }
  }
  &:hover {
    .photo {
      transform: scale(1.3) rotate(3deg);
    }
  }
  .meta {
    position: relative;
    z-index: 0;
    height: 200px;
  }
  .photo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    transition: transform 0.2s;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .details,
  .details ul {
    margin: auto;
    padding: 0;
    list-style: none;
  }

  .details {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -100%;
    margin: auto;
    transition: left 0.2s;
    background: rgba(#000, 0.6);
    color: $color_white;
    padding: 10px;
    width: 100%;
    font-size: 0.9rem;
    a {
      text-decoration: dotted underline;
    }
    ul li {
      display: inline-block;
    }
    .tags {
      li {
        margin-right: 2px;
        &:first-child {
          margin-left: -4px;
        }
      }
    }
  }
  .description {
    padding: 1rem;
    background: $color_white;
    position: relative;
    z-index: 1;
    h1,
    h2 {
      font-family: Poppins, sans-serif;
    }
    h1 {
      line-height: 1;
      margin: 0;
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1rem;
      font-weight: 300;
      text-transform: uppercase;
      color: $color_grey_dark;
      margin-top: 5px;
    }
    .read-more {
      text-align: right;
      a {
        color: $color_prime;
        display: inline-block;
        position: relative;

        &:hover:after {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background-color: $color_prime;
          position: absolute;
          top: 20px;
        }
      }
    }
  }
  p {
    position: relative;
    margin: 1rem 0 0;
    &:first-of-type {
      margin-top: 1.25rem;
      &:before {
        content: "";
        position: absolute;
        height: 5px;
        background: $color_prime;
        width: 35px;
        top: -0.75rem;
        border-radius: 3px;
      }
    }
  }
  &:hover {
    .details {
      left: 0%;
    }
  }

  @media (min-width: 1040px) {
    flex-direction: row;
    max-width: 700px;
    .meta {
      flex-basis: 40%;
      height: auto;
    }
    .description {
      flex-basis: 60%;
      &:before {
        transform: skewX(-3deg);
        content: "";
        background: #fff;
        width: 30px;
        position: absolute;
        left: -10px;
        top: 0;
        bottom: 0;
        z-index: -1;
      }
    }
    &.alt {
      flex-direction: row-reverse;
      .description {
        &:before {
          left: inherit;
          right: -10px;
          transform: skew(3deg);
        }
      }
      .details {
        padding-left: 25px;
      }
    }
  }
}
@media (max-width: 600px) {
  .blog-card {
    width: 80%;
  }
}

/* */
.blogg {
  background: url("https://st.depositphotos.com/1027431/2529/i/600/depositphotos_25299009-stock-photo-white-silk-background.jpg")
    no-repeat;
  background-size: cover;
  padding: 100px 0 60px;
}
.blog_title {
  font-family: "Merriweather", serif;
  text-align: center;
  margin-bottom: 30px;

  h5 {
    font-size: 28px;
  }
  h2 {
    font-size: 46px;
    margin-bottom: 30px;
  }
}
.blog_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.blog-box {
  max-width: 350px;
  width: calc(33.3333% - 10px);
  margin-bottom: 30px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.7);
  transition: all 2 ease;

  &:hover {
    transform: scale(105%);
  }
  .img_wrap {
    img {
      width: 100%;
      height: 100%;
      max-height: 235px;
    }
  }

  h3 {
    text-transform: uppercase;
    padding: 20px 10px 10px 20px;
  }
}
</style>