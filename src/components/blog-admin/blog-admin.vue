<template>
      <div class="blog-admin-login">
        <div class="from-wrap">
          <h3>My Bolg</h3>
          <Form >
            <label>
              <input type="text" v-model="formInline.userName" placeholder="请输入账号"  />
            </label>
            <label>
              <input type="password" v-model="formInline.password" placeholder="请输入密码" />
            </label>
            <label>
              <Button type="primary" @click="handleSubmit()">登录</Button>
            </label>
          </Form>
        </div>
      </div>
</template>

<script>
export default {
  name: 'blog-admin',
  data () {
    return {
      formInline: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      this.axios.post('/api/login', {
        userName: this.formInline.userName,
        password: this.formInline.password
      }).then(function (data) {
        console.log(data)
        if(data.data === "error") return
        window.localStorage.setItem('USER_LOGIN','true');
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .blog-admin-login{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: linear-gradient(#aa4b6b,#6b6b83,#3b8d99);
    .from-wrap{
      width: 380px;
      padding: 15px;
      border-radius: 4px;
      background: #fff;
      h3{
        margin-bottom: 10px;
        text-align: center;
        font-size: 18px;
        color: #ed4040;
      }
      .ivu-form-item:last-child{
        text-align: center;
        margin-bottom: 0;
      }
    }
  }
</style>
