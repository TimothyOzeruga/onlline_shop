<template>
  <div class="container contacts_section">
    <Email></Email>
    <MapComponent></MapComponent>
  </div>
</template>

<style lang="scss">
.contacts_section {
  padding: 160px 0 100px;
}
</style>

<script>
// import contact from "../components/contact.vue";
import Email from "../components/Email.vue";
import MapComponent from "../components/map.vue";

export default {
  data() {
    return {};
  },
  components: {
    // contact,
    Email,
    MapComponent,
  },
};
</script>