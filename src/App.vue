<template>
  <div id="app">
    <siteHeader></siteHeader>
    <router-view />
    <siteFooter></siteFooter>
  </div>
</template>

<style>
@import url("assets/css/_reset.min.css");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap");

#app {
  font-family: "Montserrat", sans-serif;
  background-color: rgb(255, 255, 255);
}
</style>
 

<script>
import siteHeader from "@/components/header.vue";
import siteFooter from "@/components/footer.vue";

export default {
  components: {
    siteHeader,
    siteFooter,
  },
};
</script>
