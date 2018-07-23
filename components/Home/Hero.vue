<template>
  <div>
    <div class="hero" :style="{backgroundImage: `url(${hero})`}">
      <div class="block">
        <div class="text">{{text}}</div>
        <div class="buttons">
          <vk-button type="primary" size="large">我要维修</vk-button>
          <vk-button type="secondary" size="large">我要回收</vk-button>
        </div>
      </div>

    </div>
    <div  id="footer">
      <div class="footer-block">
        <img src="/home/footer1.png" >
        <div>查找机型</div>
      </div>
      <div class="footer-block">
        <img src="/home/footer2.png"/>
      </div>
      <div class="footer-block">
        <img src="/home/footer3.png" >
        <div>线上评估</div>
      </div>
      <div class="footer-block">
        <img src="/home/footer2.png"/>
      </div>
      <div class="footer-block">
        <img src="/home/footer5.png" >
        <div>提交订单</div>
      </div>
      <div class="footer-block">
        <img src="/home/footer2.png"/>
      </div>
      <div class="footer-block">
        <img src="/home/footer4.png" >
        <div>订单处理</div>
      </div>

    </div>
    <div id="content">
      <div id="content-block">
        <div class="sub-title">请选择您的机型</div>

        <Tabs :animated="false">
          <TabPane :label="label1" ><div id="type">
            <div class="sub-title">{{type}} 相关机型</div>
            <ul>
              <li class="type-block">
                <router-link  to="/recycle/attribute">
                  <div><img src="/home/type.png"/></div>
                  <h5>苹果iphone SE</h5>
                </router-link>
              </li>
              <li class="type-block">
                <router-link  to="/recycle/attribute">
                  <div><img src="/home/type.png"/></div>
                  <h5>苹果iphone SE</h5>
                </router-link>
              </li>
              <li class="type-block">
                <a href="Hero.vue">
                  <div><img src="/home/type.png"/></div>
                  <h5>苹果iphone SE</h5>
                </a>
              </li>
              <li class="type-block">
                <a href="Hero.vue">
                  <div><img src="/home/type.png"/></div>
                  <h5>苹果iphone SE</h5>
                </a>
              </li>
              <li class="type-block">
                <a href="Hero.vue">
                  <div><img src="/home/type.png"/></div>
                  <h5>苹果iphone SE</h5>
                </a>
              </li>
              <li class="type-block">
                <a href="Hero.vue">
                  <div><img src="/home/type.png"/></div>
                  <h5>苹果iphone SE</h5>
                </a>
              </li>
              <li class="type-block">
                <a href="Hero.vue">
                  <div><img src="/home/type.png"/></div>
                  <h5>苹果iphone SE</h5>
                </a>
              </li>
              <li class="type-block">
                <a href="Hero.vue">
                  <div><img src="/home/type.png"/></div>
                  <h5>苹果iphone SE</h5>
                </a>
              </li>
            </ul>
          </div></TabPane>
          <TabPane :label="label1">标签二的内容</TabPane>
          <TabPane :label="label2">标签三的内容</TabPane>
          <TabPane :label="label3">标签二的内容</TabPane>
          <TabPane :label="label4">标签三的内容</TabPane>
          <TabPane :label="label5">标签三的内容</TabPane>
        </Tabs>

      </div>

    </div>
    <div id="about">About us</div>

  </div>

</template>
<script>
export default {
  data() {
    return {
      hero: "/home/hero.jpg",
      text: "这是文案",
      type: "苹果",
      label1: h => {
        return h("div", [h("img", { attrs: { src: "/home/brand1.png" } })]);
      },
      label2: h => {
        return h("div", [h("img", { attrs: { src: "/home/brand2.png" } })]);
      },
      label3: h => {
        return h("div", [h("img", { attrs: { src: "/home/brand3.png" } })]);
      },
      label4: h => {
        return h("div", [h("img", { attrs: { src: "/home/brand4.png" } })]);
      },
      label5: h => {
        return h("div", [h("img", { attrs: { src: "/home/brand5.png" } })]);
      },
      label6: h => {
        return h("div", [h("img", { attrs: { src: "/home/brand6.png" } })]);
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.hero {
  height 45rem
  background-color #eee
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment fixed
  display flex
  justify-content center
  align-items center
}
.text {
  text-align center
  font-size 50px
  margin-bottom 2rem
}
.buttons > * {
  margin 1rem
}
#footer{
  text-align center
}
.footer-block{
  display inline-block;
  vertical-align middle;
  margin 40px;
}
#content{
  text-align center;
  background-color #e7e9ef;

}
#brand{
  border-bottom-width 1px;
  border-bottom-color #c4c6cc;
  border-bottom-style solid;
}
.sub-title{
  color #222;
  font-size 20px;
  padding-top 10px;
  padding-bottom  10px;
}
#content-block{
  margin-right: 250px;
  margin-left: 250px;
}
li{
  display inline-block
}
.type-block{
  background-color: white;
  padding: 10px;
  margin 10px;
  border: 1px;
  border-style: solid;
  border-color: gainsboro;
}
#about{
  height  100px;
  width inherit;
  background-color #495060;
  color white;
}
</style>
