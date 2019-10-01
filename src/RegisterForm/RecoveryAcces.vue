<template>
  <div class="recovery-page">
    <nav class="recovery-header">
      <el-row :gutter="20" type="flex" justify="center">
        <div class="recovery-header-content">
          <div class="header-text">
            <div class="header-brand">
              <img
                class="brand"
                src="../../src/icon/vega.jpg"
                alt="fractal"
                style="
                width: 200px;"
                height="55"
              />
            </div>
          </div>
        </div>
      </el-row>
    </nav>

    <div class="form-wrapper">
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
                v-model="recovery">
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
                @click="submitPassword">
                  Подтвердить
              </el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
        recovery: '',
        authVisible: false,
    };
  },

  components:{

  },

  methods: {
    submitPassword(){
      if(this.recovery === '' ){
        this.$notify.error({
          title: `Ошибка ввода кода`,
          message: "Пожалуйста введите код",
          type: "error"
        });
      } else {
        this.authVisible = true
        this.$notify.success({
          title: `Готово`,
          message: "",
          type: "succes"
        });
      }
    },

    submitForm(formName) {
      const form = this.$refs[formName];

      form.validate(isValid => {
        if (
          isValid &&
          form.model.name &&
          form.model.secondName &&
          form.model.phoneNumber &&
          form.model.email &&
          form.model.password &&
          form.model.secondPassword
        )
          // this.auth(
          //   form.model.name,
          //   form.model.secondName,
          //   form.model.email,
          //   form.model.password,
          //   form.model.secondPassword
          // )
          ;
        else if (!form.model.name) {
          this.$notify.error({
            title: `Ошибка регистрации`,
            message: "Пожалуйста введите ваше имя",
            type: "error"
          });
        }
        if (!form.model.secondName) {
          this.$notify.error({
            title: `Ошибка регистрации`,
            message: "Пожалуйста введите вашу Фамилию",
            type: "error"
          });
        }
        if (!form.model.phoneNumber) {
          this.$notify.error({
            title: `Ошибка регистрации`,
            message: "Пожалуйста введите ваш номер телефона",
            type: "error"
          });
        }
        if (!form.model.email) {
          this.$notify.error({
            title: `Ошибка регистрации`,
            message: "Пожалуйста введите ваш e-mail",
            type: "error"
          });
        }
        if (!form.model.password) {
          this.$notify.error({
            title: `Ошибка регистрации`,
            message: "Пожалуйста введите ваш пароль",
            type: "error"
          });
        }
        if (!form.model.secondPassword) {
          this.$notify.error({
            title: `Ошибка регистрации`,
            message: "Пожалуйста введите ваш пароль повторно",
            type: "error"
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.recovery-header {
  height: 100px;
  border-bottom: 1px solid #c6c3d4;
  background: white;
  min-height: 100px;
}

.recovery-header-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  padding-right: 30px;
  padding-left: 30px;
  min-width: 330px;
}

.recovery-content {
  background-color: #f5f9fc;
}

.recovery-page {
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
  flex-direction: column;
  height: 100%;
}

.form-wrapper > form {
  width: 350px;
  max-width: 350px;
  z-index: 1000;
}

.recovery-page::after {
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

.regContent{
  margin-left: 10px;
  margin-right: 10px;
  font-size: 15px;
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

.recovery-label {
  font-size: 24px;
  color: #444;
  justify-content: center;
  display: flex;
}

.recovery-button {
  width: 100%;
}
</style>
