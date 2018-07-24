<template>
  <Card :bordered="false">
    <p slot="title">
      <Icon type="log-in"></Icon>用户登录
    </p>
    <nuxt-link to="/" slot="extra">返回首页<Icon type="forward"></Icon></nuxt-link>
    <Form ref="loginForm" :model="form" :rules="rules">
      <FormItem prop="username">
        <Input v-model="form.username" placeholder="请输入用户名">
          <span slot="prepend">
            <Icon :size="16" type="person"></Icon>
          </span>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="form.password" placeholder="请输入密码">
          <span slot="prepend">
            <Icon :size="14" type="locked"></Icon>
          </span>
        </Input>
      </FormItem>
      <FormItem>
          <Button @click="handleLogin" type="primary" long>登录</Button>
      </FormItem>
    </Form>
    <nuxt-link to="/auth/register">没有账号？注册<Icon type="arrow-right-c"></Icon></nuxt-link>
  </Card>
</template>

<script>
export default {
  // layout: "entry",
  data() {
    return {
      title: "登录",
      form: {
        username: "",
        password: ""
      },
      rules: {
        userName: [
          { required: true, message: "账号不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  head() {
    return {
      title: this.title
    };
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          console.log("登录成功");
        }
      });
    }
  }
};
</script>
