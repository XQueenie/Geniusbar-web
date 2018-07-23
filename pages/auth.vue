// 应用入口：登录/注册
<template>
  <Layout :style="{minHeight: '100vh'}">
    <Content class="entry">
      <div class="bg" :style="{backgroundImage: `url(${bg})`}"></div>
      <div class="container">
        <nuxt-child />
      </div>
    </Content>
  </Layout>
</template>

<script>
export default {
  middleware: "auth",
  meta: {
    roles: ["guest"]
  },
  data() {
    return {
      bg: "/temp.jpg"
    };
  }
};
</script>

<style lang="stylus" scoped>
.entry {
  align-items center
  justify-content center
  display flex
}
.bg {
  background-color #ddd;
  background-size: cover;
  background-position: center;
  height 100%
  width 100%
  position absolute
  filter blur(3px)
}
.container {
  width 300px
}
</style>
