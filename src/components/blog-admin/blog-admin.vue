<template>
      <div class="blog-admin-login">
        <div class="from-wrap">
          <h3>My Bolg</h3>
          <Form ref="formInline" >
            <FormItem prop="user">
              <Input type="text" v-model="formInline.userName" placeholder="请输入账号">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="请输入密码">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
            </FormItem>
          </Form>
        </div>
      </div>
</template>

<script>
// import baseApi from '../../shared/baseApi.js'
export default {
  name: 'blog-admin',
  data () {
    return {
      formInline: {
        userName: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '请输入正确的账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入正确的密码.', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码最少为6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      let parma = {
        userName: this.formInline.userName,
        password: this.formInline.password
      }
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log(this.formInline.userName,this.formInline.password)
          this.axios.post('/api/login', {
            userName: this.formInline.userName,
            password: this.formInline.password
          }).then(function (data) {
            console.log(data)
            window.localStorage.setItem('USER_LOGIN','true');
          })
            .catch(function (error) {
              console.log(error)
            })
          // this.$Message.success('Success!')
        } else {
          // this.$Message.error('Fail!')
        }
      })
      // this.baseApi.get('/api/login', parma).then(data => {
      //   console.log(data)
      // })
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
