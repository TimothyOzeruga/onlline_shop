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
          <p>{{ item.email }}</p>
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
  border: 2px solid #000;
  box-shadow: 0 0 5px 3px #000 inset;
  margin-bottom: 10px;
}
.user_data {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &::after {
    content: "";
    display: block;
    background-color: #000;
    width: 1px;
    height: 128%;
    position: absolute;
    top: -20px;
    right: -20px;
  }
}
.comment {
  width: 75%;

  h5 {
    font-size: 20px;
    margin-bottom: 8px;
    text-transform: uppercase;
  }
}
.user_pic {
  width: 120px;
  margin-bottom: 10px;
  border: 1px solid #000;
  img {
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