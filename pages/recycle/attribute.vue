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
        <Steps :current="0" >
        <Step title="选择属性"></Step>
        <Step title="线上评估"></Step>
        <Step title="提交订单"></Step>
        <Step title="订单处理"></Step>

      </Steps>
      </div>
      <div id="cont-wrapper">
        <div id="left-content">
          <div class="block">
            <h3 class="name">型号版本</h3>
            <Select class="choice" v-model="model1" style="width:200px">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
          <div class="block">
            <h3 class="name">机身内存</h3>
            <Select class="choice" v-model="model1" style="width:200px">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
          <div class="block">
            <h3 class="name">机身颜色</h3>
            <Select class="choice" v-model="model1" style="width:200px">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
          <div class="block">
            <h3 class="name">机身外观</h3>
            <Select class="choice" v-model="model1" style="width:200px">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
          <div class="block">
            <h3 class="name">屏幕外观</h3>
            <Select class="choice" v-model="model1" style="width:200px">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
          <div class="block">
            <h3 class="name">屏幕现实</h3>
            <Select class="choice" v-model="model1" style="width:200px">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
        </div>
        <div id="right-content">
          <div id="pic-block"><img src="/mac/mac1.jpeg"/>
            <h2>macbook air</h2></div>

        </div>
        <div id="button"><router-link to="/recycle/assess"><Button type="primary" size="large">立即估价</Button></router-link> </div>
      </div>


    </div>
  </div>

</template>

<script>
export default {
  name: "RecycleAttr",
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
  }
  #left-content{
    background-color: #fff;
    width: 900px;
    padding-bottom 20px
    border-color: #e3e5e8;
    border-style: solid;
    border-width: 1px;
    margin-left 8%;
    display inline-block;
    vertical-align top;
    text-align center;

  }
  #right-content{
    background-color: #fff;
    width: 300px;
    height: 220px;
    border-color: #e3e5e8;
    border-style: solid;
    border-width: 1px;
    display: inline-block;
    margin-left: 10px;
  }
  .name{
    display inline-block;
    vertical-align top;
  }
  .choice{
    display inline-block;
    margin-left 30px;
  }
  .block{
    margin-top: 20px;

  }
  #button{
    margin-left: 500px;
    margin-top: 20px
  }
  #pic-block{
    text-align center;
  }
</style>
