<template>
  <div>
    <ul class="comment_list">
      <li v-for="item in list" :key="item.id" class="comment_item">
        <div class="user_data">
          <div class="user_pic">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png"
              alt=""
            />
          </div>
          <div class="email">{{ item.email }}</div>
        </div>
        <div class="comment">
          <h5>{{ item.name }}</h5>
          <p>{{ item.body }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.comment_item {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.7);
  margin-bottom: 15px;
  border-radius: 5px;
}
.user_data {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &::after {
    content: "";
    display: block;
    background-color: rgba(0, 0, 0, 0.575);
    width: 1px;
    height: 128%;
    position: absolute;
    top: -20px;
    right: -20px;
  }
}
.comment {
  width: 70%;

  h5 {
    font-size: 20px;
    margin-bottom: 8px;
    text-transform: uppercase;
  }
}
.user_pic {
  width: 120px;
  margin-bottom: 10px;

  display: flex;
  justify-content: center;
  img {
    width: 100%;
    border: 1px solid #000;
    border-radius: 50%;
  }
}
.email {
  font-size: 14px;
  margin: 0 auto;
}
@media (max-width: 1140px) {
  .comment_item {
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .user_data {
    width: 100%;
    margin-bottom: 30px;
    &::after {
      display: none;
    }
    &::before {
      content: "";
      display: block;
      background-color: rgba(0, 0, 0, 0.575);
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: -10px;
      left: 0;
    }
  }
  .comment {
    width: 100%;
  }
}
</style>
    
<script>
import axios from "axios";

export default {
  name: "blogComments",
  props: ["blog_id"],
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts/" +
          this.blog_id +
          "/comments"
      )
      .then((resp) => {
        this.list = resp.data;
      });
  },
};
</script>