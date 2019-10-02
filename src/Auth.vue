<template>
  <div class="auth-page">
    <nav class="auth-header">
      <el-row :gutter="20" type="flex" justify="center">
          <div class="auth-header-content">
            <div class="header-text">
              <div class="header-brand">
                <img
                  class="brand"
                  src="../src/icon/vega.jpg"
                  alt="vega"
                  style="
                  width: 200px;"
                  height="55"
                />
              </div>
            </div>
          </div>
      </el-row>
    </nav>

    
    <div class="form-wrapper" >

    <registerForm v-if="registerVisible"/>
    <Recovery v-if="recoveryVisible"/>

      <el-form :model="authForm" v-if="authVisible" ref="authForm">
        <el-form-item>
          <el-row class="auth-label">
            Вход
          </el-row>
        </el-form-item>

        <el-form-item prop="email">
          <el-input
            placeholder="email"
            type="email"
            v-model="authForm.email"
            auto-complete="on"
            @keyup.13.native="submitForm('authForm')"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            placeholder="password"
            type="password"
            v-model="authForm.password"
            auto-complete="off"
            @keyup.13.native="submitForm('authForm')"
          >
          </el-input>
        </el-form-item>

        <el-row :gutter="20" style="display: flex">
          <el-col>
            <el-form-item>
              <el-button
                class="register-button"
                @click="showRegister">
                  Регистрация
              </el-button>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item>
              <el-button
                class="auth-button"
                type="primary"
                @click="submitForm('authForm')">
                  Войти
              </el-button>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20" style="display: flex">
          <el-col>
            <el-form-item style="color: #565656">
              <span>Русский</span>
              <!-- <el-button
                class="auth-button"
                type="primary"
                @click="submitForm('authForm')">
                  Войти
              </el-button> -->
            </el-form-item>
          </el-col>

          <el-col>
            <el-form-item style="float: right; color: #565656; cursor: pointer">
              <span @click="recoveryPassword">Забыли пароль?</span>
              <!-- <el-button
                class="register-button"
                @click="showRegister">
                  Регистрация
              </el-button> -->
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import registerForm from './RegisterForm/Register'
import Recovery from './RegisterForm/RecoveryAcces'

export default {
  name: 'authForm',

  components:{
    registerForm,
    Recovery
  },


  computed:{
    content(){
      return this.$store.getters.content;
    }
  },

  data()
  {
    return {
      authVisible: true,
      registerVisible: false,
      confirmVisible: false,
      recoveryVisible: false,
      authForm:{
        email: '',
        password: ''
      }
    };
  },

  methods:
  {
    submitForm(formName)
    {

      const form = this.$refs[formName];

      form.validate((isValid) =>
      {
        if (isValid && form.model.email && form.model.password){
          this.auth(form.model.email, form.model.password);
          this.$store.dispatch("getTreeGroupVisible")
          this.$store.dispatch("getTreeDevicesVisible")
          this.$store.dispatch("DEVICE_INFO")
        }
        else
          if (!form.model.email)
          {
            this.$notify.error({
              title: `Failed to log in`,
              message: "Please enter your email address",
              type:"error"
            });
          }
          else
          this.$notify.error({
            title: `Failed to log in`,
            message: "Please enter your password",
            type:"error"
          });
      });
    },

    auth(email, password)
    {
      this.$store.dispatch("LOG_IN", {email, password})
        .catch(err =>
          this.$notify.error({
            title: `Failed to log in`,
            message: err.message,
            type:"error"
          })
        )
        console.warn('e-mail: ' + email, 'password: ' + password)
    },

    showRegister(){
      if(this.authVisible = true){
        this.registerVisible = true;
        this.authVisible = false;
      }
    },

    recoveryPassword(){
      if(this.authVisible === true){
        this.authVisible = false
        this.registerVisible = false
        this.recoveryVisible = true
      }
    }
  }
}
</script>

<style scoped>
.auth-header {
  height: 100px;
  border-bottom: 1px solid #c6c3d4;
  background: white;
  min-height: 100px;
}

.auth-header-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 30px;
  padding-left: 30px;
  min-width: 330px;
}

.auth-content {
  background-color: #f5f9fc;
}

.auth-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f9fc;
  position: absolute;
  top: 0;
  left: 0;
  overflow: auto;
   overflow-x: hidden;
}

.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.form-wrapper > form {
  width: 350px;
  max-width: 350px;
  z-index: 1000;
}

.auth-page::after {
  content: "";
  opacity: 0.1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: 1;
  background-repeat: no-repeat;
  background-position: -220px 210px;
  background-size: 65vh;
}

.header-text {
  align-self: center;
  margin-top: 20px;
}

.header-brand {
  font-size: 27px;
  color: #565656;
}

.header-info {
  color: #656565;
}

.brand,
.header-text {
  display: inline-block;
}

.auth-label{
  font-size: 24px;
  color: #444;
  justify-content: center;
  display: flex;
}

.auth-button{
  width: 100%;
}

.register-button{
  width: 100%;
  background: white;
  color: #C0C4CC;
}
</style>
