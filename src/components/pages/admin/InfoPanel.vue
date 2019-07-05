<template>
  <div class="info-panel">
    <transition name="slide-fade">
      <!-- the right side where we have Device manager info-->
      <div class="right-side-menu">
        <div class="info-title">
        <h3
          style="font-size: 18px;
                 font-weight: 500;"
        >{{title}}</h3>
          <i class="el-icon-edit" @click="editTitle" style="font-size:19px; cursor: pointer"></i>
        </div>
        

        <p class="description" v-if="childrenCount">
          Вложения: {{childrenCount}}
        </p>

        <p
          class="description">
          Активность: {{activity}}
        </p>

        <p
          class="description">
          В этом пункте меню Вы можете подключать 
          устройства к своей учетной записи
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props:['title', 'id', 'childrenCount'],
  
  data(){
    return{

    }
  },

  methods:{
    editTitle() {
        this.$prompt('Пожалуйста введите новое имя', 'Подсказка', {
          confirmButtonText: 'Применить',
          cancelButtonText: 'Отмена',
          inputValidator: function(value){return value.length},
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: 'Новое имя устройства: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Редактирование отменено '
          });       
        });
      }
  },
};
</script>

<style lang="scss" scoped>
.info-panel {
  height: 100%;
  padding-top: 40px;
  // padding-left: 10px;
  padding-right: 20px;
  width: 300px;
  .slide-fade-enter-active {
    transition: all 0.2s ease;
  }

  .slide-fade-leave-active {
    transition: all 0.2s ease;
  }

  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

  .right-side-menu {
    width: 100%;
    height: 100%;
    float: right;
    // text-align: center;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
  }

  .device_input {
    width: 200px;
    height: 40px;
    font-size: 17px;
    border: none;
    background: transparent;
    text-align: center;
  }

  .info-title{
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .description{
    float: left;
    text-align: left;
    color: #9e9e9e;
  }
}
</style>

