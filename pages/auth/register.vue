<template>
  <Card :bordered="false">
    <p slot="title">
      <Icon type="person-add"></Icon>用户注册
    </p>
    <nuxt-link to="/" slot="extra">返回首页<Icon type="forward"></Icon></nuxt-link>
    <Form ref="registerForm" :model="form" :rules="rules">
      <FormItem prop="username">
        <Input v-model="form.username" placeholder="请输入用户名">
          <span slot="prepend">
            <Icon :size="16" type="person"></Icon>
          </span>
        </Input>
      </FormItem>
      <FormItem prop="email">
        <Input type="email" v-model="form.email" placeholder="请输入邮箱">
          <span slot="prepend">
            <Icon :size="16" type="email"></Icon>
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
          <Button @click="handleRegister" type="primary" long>注册</Button>
      </FormItem>
    </Form>
    <nuxt-link to="/auth/login"><Icon type="arrow-left-c"></Icon>返回登录</nuxt-link>
  </Card>
</template>

<script>
export default {
  // layout: "entry",
  data() {
    return {
      title: "用户注册",
      form: {
        username: "",
        email: "",
        password: ""
      },
      rules: {
        userName: [
          {
            type: "email",
            required: true,
            message: "账号不能为空",
            trigger: "blur"
          },
          {}
        ],
        email: [
          {
            required: true,
            message: " 邮箱不能为空",
            trigger: "blur"
          },
          { type: "email", message: "邮箱格式错误", trigger: "blur" }
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
    handleRegister() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          console.log("登录成功");
        }
      });
    }
  }
};
</script>
