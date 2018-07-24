<template>
  <div>
    <Header class="header">
      <div class="logo">Genius Bar</div>

      <div class="user-message">
        <Menu theme="dark" mode="horizontal" v-if="!isLogin">
          <MenuItem name="1"><nuxt-link to="/auth/login">用户名</nuxt-link></MenuItem>
        </Menu>
      </div>
    </Header>
    <div>
      <h2 class="start-recycle">开始回收</h2>
      <div id="progress-bar">
        <Steps :current="2" >
          <Step title="选择属性"></Step>
          <Step title="线上评估"></Step>
          <Step title="提交订单"></Step>
          <Step title="订单处理"></Step>

        </Steps>
      </div>
      <div id="cont-wrapper">
        <h1 class="title">订单已提交,我们将尽快为您处理...</h1>

        <div id="button"><router-link to="/"><Button style="    width: 200px;height: 40px;" type="primary" size="large">返回首页</Button></router-link> </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "Recyclesubmit",
  cityList: [
    {
      value: "New York",
      label: "New York"
    },
    {
      value: "New York",
      label: "New York"
    }
  ],
  model1: ""
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
  .start-recycle{
    font-size: 24px;
    height: 40px;
    font-weight: 900;
    line-height: 40px;
    background-color: #fff;
    text-align: center;
    color: #007AFF;
    padding: 20px 0 10px 0;
  }
  #progress-bar{
    text-align center;
    margin-top 40px;
    margin-bottom: 20px;
  }
  #cont-wrapper{
    background-color #F4F6FA
    min-height 600px;
    padding-top 20px;
    padding-bottom 20px;
    text-align center;
  }


  #button{
    text-align center;
    margin-top 30px;
  }

</style>
