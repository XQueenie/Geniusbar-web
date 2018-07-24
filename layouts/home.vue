<template>
  <Layout>
    <Header />
    <Content>
      <nuxt />
    </Content>
  </Layout>
</template>

<script>
import Header from "~/components/Home/Header";

export default {
  components: {
    Header
  }
};
</script>
