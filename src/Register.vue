<template>
  <div class="register-page">
    <nav class="register-header">
      <el-row :gutter="20" type="flex" justify="center">
        <div class="register-header-content">
          <div class="header-text">
            <div class="header-brand">
              <img
                class="brand"
                src="../src/components/pages/admin/vega.jpg"
                alt="fractal"
                style="
                margin-top: 12px;
                width: 180px;"
                height="35"
              />
            </div>
          </div>
        </div>
      </el-row>
    </nav>

    <div class="form-wrapper">
      <el-form :model="registerForm" ref="registerForm">
        <el-form-item>
          <el-row class="register-label">Регистрация</el-row>
        </el-form-item>

        <el-form-item>
          <el-input v-model="registerForm.name" placeholder="Введите ваше Имя" type="text"></el-input>
        </el-form-item>

        <el-form-item>
          <el-input
            v-model="registerForm.secondName"
            placeholder="Введите вашу Фамилию"
            type="text"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-input
            v-model="registerForm.phoneNumber"
            placeholder="Введите ваш номер телефона"
            type="text"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-input v-model="registerForm.email" placeholder="Введите ваш e-mail" type="email"></el-input>
        </el-form-item>

        <el-form-item>
          <el-input v-model="registerForm.password" placeholder="Введите пароль" type="password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-input
            v-model="registerForm.secondPassword"
            placeholder="Повторите введеный пароль"
            type="password"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            class="register-button"
            type="primary"
            @click="submitForm('registerForm')"
          >Зарегистрироваться</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerForm: {
        name: "",
        secondName: "",
        phoneNumber: "",
        email: "",
        password: "",
        secondPassword: ""
      }
    };
  },

  methods: {
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
          this.auth(
            form.model.name,
            form.model.secondName,
            form.model.email,
            form.model.password,
            form.model.secondPassword
          );
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
        if (!form.model.phonbeNumber) {
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
.register-header {
  height: 100px;
  border-bottom: 1px solid #c6c3d4;
  background: white;
  min-height: 100px;
}

.register-header-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  padding-right: 30px;
  padding-left: 30px;
  min-width: 330px;
}

.register-content {
  background-color: #f5f9fc;
}

.register-page {
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

.register-page::after {
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

.brand {
  margin-right: 20px;
  margin-top: 23px;
  width: 50px;
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

.register-label {
  font-size: 24px;
  color: #444;
  justify-content: center;
  display: flex;
}

.register-button {
  width: 100%;
}
</style>
