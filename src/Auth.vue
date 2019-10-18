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
      <el-form v-if="registerFormVisible">
        <div class="register-form-content">
          <span class="register-span">Регистрация</span>
          <div class="regContent">
            Укажите адрес электронной почты, на который Вам прийдет
            код подтверждения регистрации пользователя
          </div>
        </div>
          <el-col>
           <el-col>
            <el-form-item>
              <el-input 
                type="text" 
                placeholder="E-mail"
                style="font-size: 12.5px"
                v-model="newEmail">
              </el-input>
            </el-form-item>
          </el-col>

          <el-row :gutter="10" style="display: flex">
          <el-col>
            <el-form-item>
              <el-input 
                type="password" 
                placeholder="Введите пароль"
                style="font-size: 12.5px"
                v-model="firstPassword" 
                show-password>
              </el-input>
            </el-form-item>
          </el-col>

          <el-col>
            <el-form-item>
              <el-input 
                type="password" 
                placeholder="Подтвердите пароль"
                style="font-size: 12.5px"
                v-model="secondPassword" 
                show-password>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        </el-col>
        <el-row :gutter="20" style="display: flex">
          <el-col>
            <el-form-item>
              <el-button style="width: 100%" @click="backToAuth">
                  Войти
              </el-button>
            </el-form-item>
          </el-col>

          <el-col>
            <el-form-item>
              <el-button 
                style="width: 100%"  
                type="primary"
                @click="submitRegisterForm">
                  Регистрация
              </el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <el-form v-if="confirmFormVisible">
        <div class="confirm-form-content">
        <span class="confirm-span">Подтверждение регистрации</span>
          <div class="regContent">
              Введите код подтверждения регистрации пользователся из письма,
              отправленного на укзанный электронный адрес.
          </div>
        </div>
          <el-col>
            <el-col>
              <el-form-item>
                <el-input 
                  type="text"
                  placeholder="Введите код"
                  style="font-size: 12.5px"
                  v-model="confirmRegister">
                </el-input>
              </el-form-item>
            </el-col>
          </el-col>
          <el-row :gutter="20" style="display: flex">
            <el-col>
              <el-form-item>
                <el-button style="width: 100%">
                    Отправить ещё раз
                </el-button>
              </el-form-item>
            </el-col>

            <el-col>
              <el-form-item>
                <el-button 
                  style="width: 100%"  
                  type="primary"
                  @click="sendConfirmAccount">
                    Подтвердить
                </el-button>
              </el-form-item>
            </el-col>
          </el-row>
      </el-form>

      <el-form v-if="resetFormVisible">
        <div class="recovery-form-content">
          <span class="recovery-span">Восстановление доступа</span>
            <div class="regContent">
                Введите код восстановления доступа к учетной записи 
                пользователся из письма, отправленного на укзанный
                электронный адрес.
            </div>
        </div>
        <el-form ref="recoveryForm">
          <el-col>
            <el-col>
              <el-form-item>
                <el-input 
                  type="text"
                  placeholder="Введите код"
                  style="font-size: 12.5px"
                  v-model="recoveryAccount">
                </el-input>
              </el-form-item>
            </el-col>
          </el-col>
          <el-row :gutter="20" style="display: flex">
            <el-col>
              <el-form-item>
                <el-button style="width: 100%">
                    Отправить ещё раз
                </el-button>
              </el-form-item>
            </el-col>

            <el-col>
              <el-form-item>
                <el-button 
                  style="width: 100%"  
                  type="primary"
                  @click="sendRecoveryCode">
                    Подтвердить
                </el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-form>
      
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
                @click="registerSubmit">
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
            </el-form-item>
          </el-col>

          <el-col>
            <el-form-item style="float: right; color: #565656; cursor: pointer">
              <span @click="recoveryPassword">Забыли пароль?</span>
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
      authForm:{
        email: '',
        password: ''
      },

      //----------------
      registerFormVisible: false,
      newEmail: '',
      firstPassword: '',
      secondPassword:'',
      //----------------
      confirmFormVisible: false,
      confirmRegister: '',
      //----------------
      resetFormVisible: false,
      recoveryAccount: '',
    };
  },

  methods:{
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

    registerSubmit(){
      if(this.registerFormVisible === false){
        this.registerFormVisible = true;
        this.confirmFormVisible = false;
        this.resetFormVisible = false;
        this.authVisible = false;
      }
    },

    submitRegisterForm(){
      // if(this.firstPassword === '' && 
      //    this.secondPassword === '' && 
      //    this.newEmail === ''){
      //     this.$notify.error({
      //       title: `Ошибка`,
      //       message: "Пожалуйста заполните все поля",
      //       type:"error"
      //     });
      // }

      if(this.firstPassword != this.secondPassword){
        this.$notify.error({
          title: `Ошибка`,
          message: "Пожалуйста введите два одинаковых пароля",
          type:"error"
        });
      } else if (this.newEmail === ''){
         this.$notify.error({
          title: `Ошибка`,
          message: "Пожалуйста введите ваш e-mail",
          type:"error"
        });
      } else {
        this.registerFormVisible = false;
        this.confirmFormVisible = true;
        this.resetFormVisible = false;
        this.authVisible = false;
      }
    },

    sendConfirmAccount(){
      this.$notify.success({
          title: `Готово`,
          // message: "Пожалуйста введите ваш e-mail",
          type:"error"
        });
      this.registerFormVisible = false;
      this.confirmFormVisible = false;
      this.resetFormVisible = false;
      this.authVisible = true;
    },

    backToAuth(){
      if(this.registerFormVisible === true){
        this.registerFormVisible = false;
        this.confirmFormVisible = false;
        this.resetFormVisible = false;
        this.authVisible = true;
      }
    },

    recoveryPassword(){
      if(this.authForm.email === ''){
        this.$notify.error({
              title: `Ошибка`,
              message: "Пожалуйста введите e-mail для восстановления пароля",
              type:"error"
            });
      } else if(this.resetFormVisible === false){
          this.registerFormVisible = false;
          this.confirmFormVisible = false;
          this.resetFormVisible = true;
          this.authVisible = false;
      }
    },
    sendRecoveryCode(){
       this.$notify.success({
          title: `Готово`,
          // message: "Пожалуйста введите ваш e-mail",
          type:"error"
        });
      this.registerFormVisible = false;
      this.confirmFormVisible = false;
      this.resetFormVisible = false;
      this.authVisible = true;
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

.register-form-content{
  width: 350px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #565656;
  margin-bottom: 15px;
}

.register-span{
  margin-bottom: 30px;
  font-size: 25px;
}


.confirm-form-content{
  width: 350px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #565656;
  margin-bottom: 15px;
}

.confirm-span{
  margin-bottom: 30px;
  font-size: 25px;
}

.regContent{
  margin-left: 10px;
  margin-right: 10px;
  font-size: 15px;
}

.recovery-form-content{
  width: 350px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #565656;
  margin-bottom: 15px;
}

.recovery-span{
  margin-bottom: 30px;
  font-size: 25px;
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
