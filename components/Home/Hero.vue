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
          <TabPane :label="label1" ><div >
            <div class="sub-title">苹果相关机型</div>
            <ul>
              <li class="type-block">
                <router-link  to="/recycle/attribute">
                  <div><img src="/mac/mac1.jpeg"/></div>
                  <h5>macbook air</h5>
                </router-link>
              </li>
              <li class="type-block">
                <router-link  to="/recycle/attribute">
                  <div><img src="/mac/mac2.jpeg"/></div>
                  <h5>macbook pro</h5>
                </router-link>
              </li>
              <li class="type-block">
                <router-link  to="/recycle/attribute">
                  <div><img src="/mac/mac3.jpeg"/></div>
                  <h5>macbook</h5>
                </router-link>
              </li>
              <li class="type-block">
                <router-link  to="/recycle/attribute">
                  <div><img src="/mac/mac4.jpeg"/></div>
                  <h5>macbook pro new</h5>
                </router-link>
              </li>
            </ul>
          </div></TabPane>
          <TabPane :label="label2" ><div >
            <div class="sub-title">惠普相关机型</div>
            <ul>
              <li class="type-block">
                <router-link  to="/recycle/attribute">
                  <div><img src="/hp/hp1.jpeg"/></div>
                  <h5> 348 G3</h5>
                </router-link>
              </li>
              <li class="type-block">
                <router-link  to="/recycle/attribute">
                  <div><img src="/hp/hp2.jpeg"/></div>
                  <h5> EliteBook 1030 G1</h5>
                </router-link>
              </li>
              <li class="type-block">
                <router-link  to="/recycle/attribute">
                  <div><img src="/hp/hp3.jpeg"/></div>
                  <h5> ENVY 13-ab026TU</h5>
                </router-link>
              </li>
              <li class="type-block">
                <router-link  to="/recycle/attribute">
                  <div><img src="/hp/hp4.jpeg"/></div>
                  <h5> ENVY X360</h5>
                </router-link>
              </li>
              <li class="type-block">
                <router-link  to="/recycle/attribute">
                  <div><img src="/hp/hp5.jpeg"/></div>
                  <h5>Pavilion bc217TX</h5>
                </router-link>
              </li>
              <li class="type-block">
                <router-link  to="/recycle/attribute">
                  <div><img src="/hp/hp6.jpeg"/></div>
                  <h5> Spectre w022TU</h5>
                </router-link>
              </li>
              <li class="type-block">
                <router-link  to="/recycle/attribute">
                  <div><img src="/hp/hp7.jpeg"/></div>
                  <h5>pavilion 15-cb075TX</h5>
                </router-link>
              </li>
              <li class="type-block">
                <router-link  to="/recycle/attribute">
                  <div><img src="/hp/hp8.jpeg"/></div>
                  <h5>WASD暗影精灵</h5>
                </router-link>
              </li>
              <li class="type-block">
                <router-link  to="/recycle/attribute">
                  <div><img src="/hp/hp9.jpeg"/></div>
                  <h5>WASD暗影精灵||</h5>
                </router-link>
              </li>
              <li class="type-block">
                <router-link  to="/recycle/attribute">
                  <div><img src="/hp/hp10.jpeg"/></div>
                  <h5>ZBook studio G3</h5>
                </router-link>
              </li>
              <li class="type-block">
                <router-link  to="/recycle/attribute">
                  <div><img src="/hp/hp11.jpeg"/></div>
                  <h5>ZBOOK14 G2</h5>
                </router-link>
              </li>
              <li class="type-block">
                <router-link  to="/recycle/attribute">
                  <div><img src="/hp/hp12.jpeg"/></div>
                  <h5>光影精灵|||代</h5>
                </router-link>
              </li>
            </ul>
          </div></TabPane>
          <TabPane :label="label3"> <div class="sub-title">戴尔相关机型</div></TabPane>
          <TabPane :label="label4"> <div class="sub-title">华为相关机型</div></TabPane>
          <TabPane :label="label5"> <div class="sub-title">微软相关机型</div></TabPane>

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
        return h("div", [h("img", { attrs: { src: "/home/logo1.png" } })]);
      },
      label2: h => {
        return h("div", [h("img", { attrs: { src: "/home/logo2.png" } })]);
      },
      label3: h => {
        return h("div", [h("img", { attrs: { src: "/home/logo3.png" } })]);
      },
      label4: h => {
        return h("div", [h("img", { attrs: { src: "/home/logo4.png" } })]);
      },
      label5: h => {
        return h("div", [h("img", { attrs: { src: "/home/logo5.png" } })]);
      },
      label6: h => {
        return h("div", [h("img", { attrs: { src: "/home/logo6.png" } })]);
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.hero {
  height 42rem
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
  min-height 700px;
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
