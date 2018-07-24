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
        <div class="content">

          <h1 class="title">订单详情</h1>
          <hr style="width: 1150px" />
          <div id="pic">

            <img src="/mac/mac1.jpeg"/>
            <h3>macbook air</h3>
          </div>
          <div id="data">
            <Card class="card" >

              <p>型号版本  </p>
            </Card>
            <Card class="card" >

              <p>机身内存  </p>
            </Card>
            <Card class="card" >

              <p>机身颜色  </p>
            </Card>
            <Card class="card" >

              <p>机身外观  </p>
            </Card>
            <Card class="card" >

              <p>屏幕外观  </p>
            </Card>
            <Card class="card" >

              <p>屏幕显示  </p>
            </Card>
          </div>
          <div id="price">
            <h3>回收估价</h3>
            <h1 style="color: #007AFF ">¥45</h1>
          </div>

        </div>
        <div class="content">
          <h3 class="title">联系方式</h3>
          <h4>格式待定</h4>
        </div>
        <div id="button"><router-link to="/recycle/submit"><Button style="    width: 200px;height: 40px;" type="primary" size="large">提交订单</Button></router-link> </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "Recycleorder",
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
  .content{
    background-color: #fff;
    width: 1200px;
    padding-bottom 20px
    border-color: #e3e5e8;
    border-style: solid;
    border-width: 1px;
    margin-left 8%;
    display inline-block;
    vertical-align top;
    padding-left 20px;
  }
  .title{
    font-weight: 400;
    margin-top: 20px;
  }
  .card{
    width: 100px;
    height: 50px;
    margin-left: 20px;
    display: inline-block;
  }
  #pic{
    display: inline-block;
    vertical-align: middle;
  }
  #data{
    display: inline-block;
    margin-left 50px;
  }
  #price{
    display: inline-block;
    margin-left: 50px;
    text-align: center;
  }
  #button{
    text-align center;
    margin-top 30px;
  }

</style>
