<template>
  <div class="settings-panel">
    <div class="settings-panel-container">
      <!-- <div class="settings-control-panel">
        <div class="settings-control-header">
          Настройка 
        </div>

        <div class="settings-button-header">
          <button class="button-close" @click="onClick">x</button>
        </div>
      </div> -->
      <div class="settings-panel-view">
        <div class="mode-operation">
          Режимы работы
          <div class="mode-content">
            <div class="select-sensor">
              <div class="select-button-group">
                <button 
                  class="button-group-first"
                  :class="firstButton" 
                  @click="onClickFirst">
                    Все датчики
                </button>
                <button 
                  class="button-group-second"
                  :class="secondButton" 
                  @click="onClickSecond">
                    Без датчика
                  </button>
                <button 
                  class="button-group-third"
                  :class="thirdButton" 
                  @click="onClickThird">
                    RF датчик
                  </button>
              </div>


              <el-button 
                size="large" 
                type="primary"
                @click="innerVisible = true">
                  Настройка датчиков
              </el-button>
            </div>

            <div class="shim-mode">
              <div class="input-group">
                <div class="input-group-first" v-if="inputFirst">
                  <div style="display: flex; flex-direction: row; width: 100%; height: 25%;">
                    <div style="width: 50%; font-size: 16px; text-align: left;">
                      Регулировка
                    </div>

                      <div style="width: 50%; font-size: 16px; text-align: left;">
                        <span style="margin-left: 5px;">Отсечение</span>
                      </div>
                    </div>
                  <div class="inputFirst">
                    <el-select v-model="valueSelect" placeholder="Выбрать" style="width: 49%">
                      <el-option 
                        v-for="item in optionsGroup"
                        :key="item.valueGroup"
                        :label="item.labelGroup"
                        :value="item.valueGroup">
                      </el-option>
                    </el-select> 
                    <el-select v-model="valueSelect" placeholder="Выбрать" style="width: 49%">
                      <el-option 
                        v-for="item in optionsGroup"
                        :key="item.valueGroup"
                        :label="item.labelGroup"
                        :value="item.valueGroup">
                      </el-option>
                    </el-select> 
                  </div>
                </div>

                <div class="input-group-second" v-if="inputSecond">
                  <div style="display: flex; flex-direction: row; width: 100%; height: 25%;">
                    <div style="width: 50%; font-size: 16px; text-align: left;">
                      Регулировка
                    </div>
                  </div>
                  <div class="inputSecond">
                    <el-select v-model="valueSelect" placeholder="Выбрать" style="width: 100%">
                      <el-option 
                        v-for="item in optionsGroup"
                        :key="item.valueGroup"
                        :label="item.labelGroup"
                        :value="item.valueGroup">
                      </el-option>
                    </el-select>
                  </div>
                </div>

                <div class="input-group-third" v-if="inputThird">
                  <div style="display: flex; flex-direction: row; width: 100%; height: 25%;">
                    <div style="width: 50%; font-size: 16px; text-align: left;">
                      Регулировка
                    </div>

                      <div style="width: 50%; font-size: 16px; text-align: left;">
                        <span style="margin-left: 5px;">Отсечение</span>
                      </div>
                    </div>
                  <div class="inputThird">
                    <el-select v-model="valueSelect" placeholder="Выбрать" style="width: 49%">
                      <el-option 
                        v-for="item in optionsGroup"
                        :key="item.valueGroup"
                        :label="item.labelGroup"
                        :value="item.valueGroup">
                      </el-option>
                    </el-select>  
                    <el-select v-model="valueSelect" placeholder="Выбрать" style="width: 49%">
                      <el-option 
                        v-for="item in optionsGroup"
                        :key="item.valueGroup"
                        :label="item.labelGroup"
                        :value="item.valueGroup">
                      </el-option>
                    </el-select>
                  </div>
                </div>
              </div>
              <!-- все датчики 2 RF-provodnoy/ без датчика 1 / RF датчик 2-->
            </div>
          </div>
        </div>

        <div class="settings-config">
          Настройка конфигурации
          <div class="config-content">

            <div class="config-line1">
              <div class="config-hysteresis">
                <div class="hysteresis-title">Гистерезис</div>
                <div class="hysterio">
                  <div class="hysterio-content">
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
                </div>
              </div>

              <div class="contact-type">
                <div class="contact">
                  <span class="span-type">Тип контакта</span>
                  <el-switch 
                    v-model="contactType"
                    inactive-text="З"
                    active-text="Р">
                  </el-switch>
                </div>

                <div class="manage">
                  <span class="span-type">Тип управления</span>
                  <el-switch 
                    v-model="manageType"
                    inactive-text="Н"
                    active-text="О">
                  </el-switch>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="settings-common">
          Общие настройки 
          <!-- <button @click="dropdown = !dropdown"></button> -->
          <div class="settings-switch-button" > <!--v-if="dropdown" -->

            <div class="settings-button-content">
              <span class="demonstration">Цвет устройства</span>
              <el-color-picker 
                v-model="color" 
                change 
                :predefine="predefineColors" 
                size="mini">
              </el-color-picker>
            </div>

            <!-- <el-button @click="changeColor">Применить цвет</el-button> -->

            <div class="settings-button-content">
              <h style="font-size: 18px;">Блокировка кнопок</h>
              <el-switch v-model="blockButton"></el-switch>
            </div>

            <div class="settings-button-content">
              <el-button @click="resetSet" size="small">
                Сбросить настройки
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      width="40%"
      title="Настройка датчиков"
      :visible.sync="innerVisible"
      append-to-body>
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center">
          <div style="height: 250px; width: 80%; display: flex;  justify-content: flex-start; flex-direction: column;" >
            <div 
              style="
                height:30%; 
                width: 100%;
                margin-top: 0;
                display: flex; 
                align-items: center; 
                justify-content: space-between;
                font-size: 18px;">
              Датчик SM031
              <el-select 
                size="small" 
                v-model="value" 
                filterable 
                placeholder="Выберите сопротивление">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>

            <div 
              style="
                height:30%; 
                width: 100%;
                display: flex; 
                align-items: center; 
                justify-content: space-between;
                font-size: 18px;">
              Датчик RF 12
              <el-select 
                size="small" 
                v-model="valuerf" 
                filterable 
                placeholder="Выберите сопротивление">
                <el-option
                  v-for="item in optionsRf"
                  :key="item.valuerf"
                  :label="item.labelrf"
                  :value="item.valuerf">
                </el-option>
              </el-select>
            </div>

            <div 
              style="
                height:30%; 
                width: 100%;
                display: flex; 
                align-items: center; 
                justify-content: space-between;
                font-size: 18px;">
              Датчик RF 12
              <el-select 
                size="small" 
                v-model="value" 
                filterable 
                placeholder="Выберите сопротивление">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div style=" 
                width: 100%;
                display: flex; 
                align-items: center; 
                justify-content: space-between">
            <el-button size="medium" type="primary" @click="innerVisible = false">Сохранить</el-button>
            <el-button size="medium"  @click="innerVisible = false">Отменить</el-button>
          </div>
        </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['object'],
  components: {

  },

  mounted(){
        this.$store.dispatch("createComponent", this);
        console.warn('INSTANCES', this.$store.state.instances)
  },

  computed: {
    firstButton(){
      if(this.firstB == true){
        return 'handle-pick-grey'
      } else if (this.firstB == false) {
         return 'handle-pick-white'
      }
    },

    secondButton(){
      if(this.secondB == true){
        return 'handle-pick-grey'
      } else if (this.secondB == false) {
         return 'handle-pick-white'
      }
    },

    thirdButton(){
      if(this.thirdB == true){
        return 'handle-pick-grey'
      } else if (this.thirdB == false) {
         return 'handle-pick-white'
      }
    },
  },

  data() {
    return {
      class: 'modalSettings',
      blockButton: false,
      typeThermo: false,
      heatCold: false,
      contactType: false,
      manageType: false,
      modeSensor: false,
      modeShim: false,
      color: '#e91e63',
      dropdown: true,
      hysteresis: 10,
      innerVisible: false,
      slectedId: null,
      firstB: true,
      secondB: false,
      thirdB: false,
      inputFirst: true,
      inputSecond: false,
      inputThird: false,

      optionsGroup: [{
          valueGroup: 'Датчик SM031',
          labelGroup: 'Датчик SM031'
        }, {
          valueGroup: 'Датчик RF 12',
          labelGroup: 'Датчик RF 12'
        }, {
          valueGroup: 'Датчик RF 12',
          labelGroup: 'Датчик RF 12/1'
        }],
        valueGroup: '',



      options: [{
        value: 'Option1',
        label: '4.7 кОм'
      }, {
        value: 'Option2',
        label: '6.8 кОм'
      }, {
        value: 'Option3',
        label: '10 кОм'
      }, {
        value: 'Option4',
        label: '12 кОм'
      }, {
        value: 'Option5',
        label: '14 кОм'
      }],

      optionsRf: [{
        valuerf: 'Option1',
        labelrf: '4.7 кОм'
      }, {
        valuerf: 'Option2',
        labelrf: '6.8 кОм'
      }, {
        valuerf: 'Option3',
        labelrf: '10 кОм'
      }, {
        valuerf: 'Option4',
        labelrf: '12 кОм'
      }, {
        valuerf: 'Option5',
        labelrf: '14 кОм'
      }],

      optionsSensor: [{
          valueSensor: 'Option1',
          labelSensor: 'Датчик SM031'
        }, {
          valueSensor: 'Option2',
          labelSensor: 'Датчик RF 12'
        }, {
          valueSensor: 'Option3',
          labelSensor: 'Датчик RF 12'
        }],
        valueSensor2: [],

        optionsMode: [{
          valueMode: 'Option1',
          labelMode: 'По проводному датчику + RF беспроводной датчик'
        }, {
          valueMode: 'Option2',
          labelMode: 'В режиме ШИМ'
        }, {
          valueMode: 'Option3',
          labelMode: 'В режиме ШИМ + RF беспроводной датчик'
        }],
        valueMode2: [],

      predefineColors: [
        '#e91e63',
        '#673ab7',
        '#2196f3',
        '#00bcd4',
        '#4caf50',
        '#cddc39',
        '#ffc107',
        '#ff5722',
      ],

      value: '',
      valuerf: '',
      availableValue2: '',
      valueSelect: ''
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
    },

    changeColor(){
     return document.body.style.backgroundColor('#673AB7')
    },

    onClickFirst(){
      if(this.firstB == true && this.inputFirst == true){
        this.secondB = false
        this.thirdB = false
        this.inputSecond = false
        this.inputThird = false 
      } else if (this.firstB === false && this.inputFirst == false){
        this.firstB = true
        this.inputFirst = true
        this.secondB = false
        this.thirdB = false
        this.inputSecond = false
        this.inputThird = false 
      }
    },

    onClickSecond(){
      if(this.secondB == false && this.inputSecond == false){
        this.firstB = false
        this.secondB = true
        this.thirdB = false
        this.inputFirst = false
        this.inputSecond = true
        this.inputThird = false 
      }
    },

    onClickThird(){
      if(this.thirdB == false && this.inputThird == false){
        this.firstB = false
        this.secondB = false
        this.thirdB = true
        this.inputFirst = false
        this.inputSecond = false
        this.inputThird = true 
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.settings-panel {
  display: flex;
  height: 100%;
  width: 100%;

  .dialog-content{
    display: flex;

    .dialog-sensor-type{
      display: flex;
      height: 200px;
    }

    .dialog-available-type{
      height: 50%;
    }
  }
  
  .settings-panel-container {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    border-top: 1px solid #DCDFE6;

    .settings-control-panel {
      flex: 0 0 auto;
      border-bottom: 1px solid #DCDFE6;
      display: flex;

      .settings-control-header{
        width: 96%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .settings-button-header{
        width:4%;

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
        height: 20%;
        // border-bottom: 1px solid #DCDFE6;

        .config-content{
          width: 100%;
          height: 90%;
          display: flex;
          align-items: center;
          // justify-content: center;
          flex-direction: column;

          .config-line1{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #DCDFE6;


            .config-hysteresis{
              width: 40%;
              display: flex;
              flex-direction: column;
              text-align: left;
              // align-items: center;
              // justify-content: space-between;

              .hysteresis-title{
                height: 30%;
                display: flex;
                align-items: flex-end;
                justify-content: flex-start;
              }

              .hysterio{
                width: 100%;
                height: 70%;
                display: flex;
                align-items: flex-start;
                // justify-content: space-between;

                .hysterio-content{
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                }
              }
            }


            .contact-type{
              width: 60%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;

              .contact{
                width: 50%;
                height: 50%;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
              }

              .manage{
                width: 50%;
                height: 50%;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
              }
            }
          }
        }
      }

      .mode-operation{
        width: 100%;
        height: 32%;
        border-bottom: 1px solid #DCDFE6;

        .mode-content{
          width: 100%;
          height: 88%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .select-sensor{
            width: 100%;
            height: 45%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .select-button-group{
              width: 50%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;

              .button-group-first{
                height: 40px;
                width: 33%;
                background-color: #ffffff;
                border: 1px solid #DCDFE6;
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
                color: #606266;
                cursor: pointer;
                outline: none;
              }

              .button-group-second{
                height: 40px;
                width: 33%;
                background-color: #ffffff;
                border-top: 1px solid #DCDFE6;
                border-bottom: 1px solid #DCDFE6;
                border-left: none;
                border-right: none;
                color: #606266;
                cursor: pointer;
                outline: none;
              }

              .button-group-third{
                height: 40px;
                width: 33%;
                background-color: #ffffff;
                border: 1px solid #DCDFE6;
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
                color: #606266;
                cursor: pointer;
                outline: none;
              }

              .handle-pick-white{
                background-color: #ffffff;
                transition: all .3s cubic-bezier(.645,.045,.355,1);
              }

              .handle-pick-grey{
                background-color: #8A999F;
                color: #ffffff;
                transition: all .3s cubic-bezier(.645,.045,.355,1);
              }
            }
          }

          .shim-mode{
            width: 100%;
            height: 45%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .input-group{
              width: 50%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }

            .input-group-first{
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: space-around;
              align-items: center;
              flex-direction: column;

              .spanFirst{
                width:100%; 
                height:10%; 
                display: flex; 
                justify-content: flex-start; 
                align-items: flex-start
              }

              .inputFirst{
                width:100%; 
                height: 75%; 
                display: flex; 
                justify-content: space-between; 
                align-items: flex-start;
              }
            }

            .input-group-second{
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: space-around;
              align-items: center;
              flex-direction: column;

              .inputSecond{
                width:100%; 
                height: 75%; 
                display: flex; 
                justify-content: space-between; 
                align-items: flex-start;
              }

            }

            .input-group-third{
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: space-around;
              align-items: center;
              flex-direction: column;

              .inputThird{
                width:100%; 
                height: 75%; 
                display: flex; 
                justify-content: space-between; 
                align-items: flex-start;
              }
            }
          }
        }
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
}
</style>
