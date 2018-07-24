<template>
  <Layout :style="{minHeight: '100vh'}">
    <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
      <SideMenu :class="menuitemClasses" />
    </Sider>
    <Layout>
      <Header />
      <Content :style="{padding: '0 16px 16px'}">
        <nuxt />
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import SideMenu from "~/components/Admin/SideMenu";
import Header from "~/components/Admin/Header";

export default {
  components: { Header, SideMenu },
  data() {
    return {
      isCollapsed: false
    };
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  }
};
</script>
