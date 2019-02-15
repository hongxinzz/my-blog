<template>
      <div class="blog-admin-login">
        <div class="from-wrap">
          <h3>{{showText}}</h3>
          <Form >
              <div>
                  <label>
                      USER NAME
                  </label>
                  <input type="text" v-model="formInline.userName" placeholder="请输入账号"  />
              </div>
                <div>
                    <label>
                        PASSWORD
                    </label>
                    <input type="password" v-model="formInline.password" placeholder="请输入密码" />
                </div>

            <div class="btn-wrap">
              <Button type="primary" @click="handleSubmit()">{{showText}}</Button>
                <span @click="checkText()">{{btnText}}</span>
            </div>
          </Form>
        </div>
      </div>
</template>

<script>
export default {
  name: 'blog-admin',
  data () {
    return {
        showText:'LOGIN',
        btnText:'REGISTER',
      formInline: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit () {
        let that = this;
      if(this.showText === "LOGIN"){
          this.axios.post('/api/login', {
              userName: this.formInline.userName,
              password: this.formInline.password
          }).then(function (data) {
              console.log(data);
              if(data.data === "error"){
                  return
              }else if(data.data.code === 401){
                  that.$router.push('/admin')
              };
              window.localStorage.setItem('USER_LOGIN_TOKEN',data.data.token);
              that.$router.push('/admin-home')
          })
      }else{
          this.axios.post('/api/user_reg', {
              userName: this.formInline.userName,
              password: this.formInline.password
          }).then(function (data) {
              console.log(data);
              if(data.data === "error"){
                  return
              }
          })
      }
    },
      checkText(){
        if(this.showText === "LOGIN"){
            this.showText = "REGISTER";
            this.btnText = "LOGIN"
        }else{
            this.btnText = "REGISTER";
            this.showText = "LOGIN"
        }
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
    background: linear-gradient(to right, #36d1dc, #5b86e5);;
    .from-wrap{
      box-sizing: border-box;
      width: 380px;
      padding:34px 30px;
      border-radius: 4px;
      background: #fff;
      h3{
        margin-bottom: 20px;
        font-size: 24px;
          color: rgba(0,0,0,.7);
      }
        div{
            display: flex;
            flex-direction: column;
            margin-bottom: 24px;
            label{
                color: rgba(0,0,0,.6);
            }
            input{
                height: 32px;
                line-height: 32px;
                padding-left: 15px;
                margin-top: 10px;
                outline: none;
                border: 1px solid #dcdcdc;
            }
        }
        .btn-wrap{
            flex-direction: row;
            margin-top: 45px;
            margin-bottom: 0;
            align-items: center;
            button{
                width: 96px;
                height: 40px;
                color: #fff;
                font-size: 16px;
                outline: none;
                text-align: center;
                line-height: 40px;
                background: #927e7d;
            }
            span{
                margin-left: auto;
                color: rgba(0,0,0,.7);
            }
        }
      .ivu-form-item:last-child{
        text-align: center;
        margin-bottom: 0;
      }
    }
  }
</style>
