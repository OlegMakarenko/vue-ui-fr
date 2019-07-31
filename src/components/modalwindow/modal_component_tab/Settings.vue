<template>
  <div class="settings-panel">

    <div class="settings-panel-container">
      <div class="settings-control-panel">
          Настройки <button class="button-close" @click="onClick">x</button>
      </div>
      <div class="settings-panel-view">
        <div class="settings-config">
          Настройка конфигурации
          <div class="config-content">

            <div class="config-line1">
              <div class="config-termo">
                <span class="span-text-termo">Тип терморегулятора</span>
                <el-switch 
                  v-model="typeThermo"
                  inactive-text="1"
                  active-text="2">
                </el-switch>
              </div>

              <div class="contact-type">
                <span class="span-type">Тип контакта</span>
                <el-switch 
                  v-model="contactType"
                  inactive-text="З"
                  active-text="Р">
                </el-switch></div>
            </div>

            <div class="config-line2">
              <div class="config-hysteresis">
                
                  <el-slider 
                    style="width: 60%;" 
                    :format-tooltip="formatTooltip" 
                    v-model="hysteresis">
                  </el-slider>  

                  <el-input 
                    style="width: 60px;" 
                    size="mini" 
                    v-model="hysteresis">
                  </el-input>
              </div>
              
              <div class="control-type">
                <span class="span-type">Тип управления</span>
                <el-switch 
                  v-model="heatCold"
                  inactive-text="Н"
                  active-text="О">
                </el-switch>
              </div>
            </div>
          </div>
        </div>

        <div class="mode-operation">
          Режимы работы
        </div>

        <div class="settings-common">
          Общие настройки 
          <!-- <button @click="dropdown = !dropdown"></button> -->
          <div class="settings-switch-button" > <!--v-if="dropdown" -->

            <div class="settings-button-content">
              <span class="demonstration">Цвет устройства</span>
              <el-color-picker v-model="color" size="mini"></el-color-picker>
            </div>

            <div class="settings-button-content">
              <h style="font-size: 18px;">Блокировка кнопок</h>
              <el-switch v-model="blockButton"></el-switch>
            </div>

            <div class="settings-button-content">
              <el-button @click="resetSet" size="small">Сбросить настройки</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="settings-info-panel">
        <div class="info-part1">Какая-то информация</div>
        <el-divider></el-divider>
        <div class="info-part2">Какая-то информация</div>
    </div>
  </div>
</template>

<script>


export default {
  components: {

  },

  computed: {

  },

  data() {
    return {
      blockButton: false,
      typeThermo: false,
      heatCold: false,
      contactType: false,
      color: '#409EFF',
      dropdown: true,
      hysteresis: 10,
    };
  },

  methods: {
    onClick(){
      this.$emit('buttonClick')
    },

    resetSet() {
      this.$confirm('Вы действительно хотите сбросить устройство до заводских настроек?', 'Внимание', {
        confirmButtonText: 'Применить',
        cancelButtonText: 'Отменить',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Настройки успешно сброшены'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Сброс настроек отменён'
        });          
      });
    },

    formatTooltip() {
      return this.hysteresis / 10;
    }
  }
};
</script>

<style lang="scss" scoped>
.settings-panel {
  display: flex;
  height: 100%;
  width: 100%;
  
  .settings-panel-container {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    // width: 90%;

    .settings-control-panel {
      flex: 0 0 auto;
      
      .button-close{
        font-size: 30px;
        color: #a1adb2;
        border: none;
        outline: none;
        background: transparent;
        cursor: pointer;
        float: right;
      }
    }

    .settings-panel-view {
      flex: 1 1 auto;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      overflow: auto;
      padding: 20px;

      .settings-config{
        width: 100%;
        height: 32%;
        border-bottom: 1px solid #DCDFE6;

        .config-content{
          width: 100%;
          height: 90%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          .config-line1{
            width: 100%;
            height: 50%;
            display: flex;
            justify-content: space-between;

            .config-termo{
              width: 45%;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }

            .contact-type{
              width: 45%;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          }

          .config-line2{
            width: 100%;
            height: 50%;
            display: flex;
            justify-content: space-between;

            .config-hysteresis{
              width: 45%;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }

            .control-type{
              width: 45%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              
            }
          }
        }
      }

      .mode-operation{
        width: 100%;
        height: 32%;
        border-bottom: 1px solid #DCDFE6;
      }

      .settings-common{
        width: 100%;
        height: 32%;
        // display: flex;
        // justify-content: baseline;
        
        
        .settings-switch-button{
          display:flex;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: space-between;

          .settings-button-content{
            display: flex;
            width: 30%;
            align-items: center;
            justify-content: space-evenly;
          }
        }
      }

      .settings-content{
        width: 100%;
        height: 100%;
      }
    }

    .settings-footer{
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
        
      
    }
  }

  .settings-info-panel {
    display: flex;
    flex: 0 0 auto;
    width: 15%;
    word-wrap:break-word;
    border-left: 1px solid #DCDFE6;    
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .info-part1{
      width: 100%;
    }

    .info-part2{
      width: 100%;
    }
  }
}
</style>
