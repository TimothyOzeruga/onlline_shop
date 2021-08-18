<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="logo">
            <router-link to="/"><div class="logo_name">MONO</div></router-link>
          </div>
          <ul class="contact-nav">
            <li class="menu_item">
              <router-link to="/" class="item_link">Home</router-link>
            </li>
            <li class="menu_item">
              <router-link to="/collections" class="item_link"
                >Collections</router-link
              >
            </li>
            <li class="menu_item">
              <router-link to="/blog" class="item_link">Blog</router-link>
            </li>
            <li class="menu_item">
              <router-link to="/contacts" class="item_link"
                >Contacts</router-link
              >
            </li>
          </ul>
          <ul class="social">
            <li v-for="soc in soc_list" :key="soc.title">
              <a
                :href="soc.link"
                target="_blank"
                rel="noopener nofollow"
                :title="soc.title"
                ><i :class="soc.icon"></i
              ></a>
            </li>
          </ul>
          <h6>© 2019 - MONO, All Right Reserved</h6>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import url("../assets/css/icofont.min.css");

footer {
  background-color: rgba(20, 20, 20, 0.9);
  text-align: center;
  padding: 50px;
}

.logo {
  margin-bottom: 20px;

  .logo_name {
    font-size: 50px;
    font-weight: 700;
    color: #fff;
  }
}
.contact-nav {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  li {
    margin-right: 30px;
    a {
      font-size: 14px;
      color: #fff;
      text-decoration: none;
      text-transform: uppercase;
      position: relative;
      &:hover::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background-color: #fff;
        position: absolute;
        top: 18px;
      }
    }
  }
}
.social {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  li {
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }
  a {
    color: #fff;
    position: relative;

    .icofont-facebook {
      color: #fff;
      &:hover {
        color: #1515ff;
      }
    }
    .icofont-twitter {
      color: #fff;
      &:hover {
        color: #00c1ff;
      }
    }
    .icofont-instagram {
      color: #fff;
      &:hover {
        color: #ff00ae;
      }
    }
  }
}
h6 {
  color: #fff;
}

@media screen and (max-width: 450px) {
  .contact-nav {
    flex-direction: column;

    li {
      margin: 0 0 10px;
    }
  }
}
</style>

<script>
export default {
  name: "siteFooter",
  data() {
    return {
      soc_list: [
        {
          title: "Facebook",
          icon: "icofont-facebook",
          link: "https://facebook.com",
        },
        {
          title: "Twitter",
          icon: "icofont-twitter",
          link: "https://twitter.com",
        },
        {
          title: "Instagram",
          icon: "icofont-instagram",
          link: "https://dribbble.com",
        },
      ],
    };
  },
};
</script>
