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
        <Steps :current="1" >
          <Step title="选择属性"></Step>
          <Step title="线上评估"></Step>
          <Step title="提交订单"></Step>
          <Step title="订单处理"></Step>

        </Steps>
      </div>
      <div id="cont-wrapper">
        <div id="left-content">
          <div >
            <div  id="price" >
              <h3>评估报价</h3>
              <h2 style="color: #007aff">¥45</h2>
            </div>
            <div id="button"><router-link to="/recycle/order"><Button type="primary" size="large">立即换钱</Button></router-link> </div>
            <hr/>
            <div>
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
              <div id="button1"><router-link to="/recycle/attribute"><Button type="ghost" size="large">重新选择</Button></router-link></div>
            </div>
          </div>
        </div>
        <div id="right-content">
          <div id="pic-block"><img src="/mac/mac1.jpeg"/>
            <h2>macbook air</h2></div>

        </div>
      </div>


    </div>
  </div>

</template>

<script>
export default {
  name: "RecycleAsse",
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

  #button{
    margin-left: 400px;

    display  inline-block;
  }
  #pic-block{
    text-align center;
  }
  #price{
    display: inline-block;
    vertical-align middle;
  }
  .card{
    width: 200px;
    height: 50px;
    display inline-block;
    margin-left: 40px;
    margin-top: 20px;
  }
  #button1{
    margin-left: 500px;
    margin-top: 40px;
  }
</style>
