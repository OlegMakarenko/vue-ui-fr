<template>
  <div class="info-panel">
    <transition name="slide-fade">
      <!-- the right side where we have Device manager info-->
      <div class="right-side-menu">
        <div class="info-title">
        <h3 style="font-size: 18px;
                 font-weight: 500;"
        >{{infoPanel.name}}</h3>

          <i class="el-icon-edit" @click="editTitle" style="font-size:19px; cursor: pointer"></i>
        </div>


        <div v-if="infoPanel.childrenCount" style="width:96.5%;height: 8%;margin-top: 15px;margin-left: 15px; border-bottom: 1px solid #d0d0d0">
          <p class="description" >
              Вложения: {{infoPanel.childrenCount}}
          </p>
        </div>

        <div  v-if="typeof infoPanel.activity !== 'undefined' && infoPanel.activity !== null"
        style="width:96.5%;height: 10%;margin-top: 6px;margin-left: 15px; border-bottom: 1px solid #d0d0d0">
          <p
            class="description" >
              Активность: {{infoPanel.activity}}
          </p></div>

        <div v-if="typeof infoPanel.info !== 'undefined' && infoPanel.info !== null"
        style="width:96.5%;height: 8%;margin-top: 7px;margin-left: 15px; border-bottom: 1px solid #d0d0d0">
          <p
            class="description"
            >
              Информация: {{infoPanel.info}}
          </p>
        </div>

        <div v-if="typeof infoPanel.temp !== 'undefined' && infoPanel.temp !== null"
        style="width:96.5%;height: 8%;margin-top: 7px;margin-left: 15px; border-bottom: 1px solid #d0d0d0">
        <p
          class="description">
            Температура: {{infoPanel.id}}
        </p></div>

        <div style="width:96.5%;height: 14%;margin-top: 7px;margin-left: 15px; border-bottom: 1px solid #d0d0d0">
          <p
          class="description">
          В этом пункте меню Вы можете подключать
          устройства к своей учетной записи
        </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {

  computed:{
    infoPanel(){
      return this.$store.getters.infoPanelData;
    }
  },

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
        this.$store.dispatch("NODE_RENAME", {nodeId: this.infoPanel.id, name: value});
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
  padding-top: 7.5px;
  padding-right: 20px;
  width: 300px;
  border-top: 1.5px solid #d0d0d0;
  border-left: 1.5px solid #d0d0d0;
  background-color: #f5f9fc;
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
    border-radius: 20px;
    // text-align: center;
    display: flex;
    flex-direction: column;
    background-color: #f5f9fc;
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
    height: 8%;
    margin-left: 15px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .description{
    float: left;
    text-align: left;
    color: #9e9e9e;
  }
}
</style>
