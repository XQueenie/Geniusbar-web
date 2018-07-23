<template>
  <Layout>
    <nuxt-child />
  </Layout>
</template>


<script>
import menuConfig from "./user/menu";
export default {
  layout: "admin",

  created() {
    this.$store.commit("menu/MENU_SET", menuConfig);
    // this.$route.redirect("/user");
    // console.log(this.$router);
  }
};
</script>
