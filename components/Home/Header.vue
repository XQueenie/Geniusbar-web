<template>
  <Header class="header">
    <div class="logo">Genius Bar</div>

    <!-- <Menu class="menu" theme="dark" mode="horizontal">
      <div class="nav">
        <MenuItem></MenuItem>
      </div>
    </Menu> -->
    <div class="user-message">
      <Menu theme="dark" mode="horizontal" v-if="!isLogin">
        <MenuItem name="1"><nuxt-link to="/auth/login">登录</nuxt-link></MenuItem>
        <MenuItem name="2"><nuxt-link to="/auth/register">注册</nuxt-link></MenuItem>
      </Menu>
    </div>
  </Header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HomeHeader",
  computed: {
    ...mapGetters({
      isLogin: "user/isLogin"
    })
  }
};
</script>



<style lang="stylus" scoped>
.header {
  display flex
  align-items center
  justify-content space-between
  color white
  a {
    color white
    font-weight bold
    &:hover {
      color rgba(255, 255, 255, 0.75)
    }
  }
}
.logo {
  // color: white
  font-size 24px
}
.user-message {

}
</style>
