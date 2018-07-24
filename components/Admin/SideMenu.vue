<template>
  <!-- <Sider :style="{minHeight: '100vh'}" collapsible :collapsed-width="78" v-model="isCollapsed"> -->
    <Menu theme="dark" width="auto">
      <Submenu v-for="item in menu" :key="item.title" :name="item.title">
        <template slot="title">
          {{item.title}}
        </template>
        <MenuItem v-for="link in item.links"
          :key="link.to"
          :name="link.to">{{link.title}}</MenuItem>
      </Submenu>
    </Menu>
  <!-- </Sider> -->
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AdminSideMenu",
  // data() {
  //   return {
  //     isCollapsed: false
  //   };
  // },
  computed: {
    ...mapState({
      menu: state => state.menu.menu
    })
  }
};
</script>

<style lang="stylus">
.collapsed-menu span{
  width: 0px;
  transition: width .2s ease;
}
</style>
