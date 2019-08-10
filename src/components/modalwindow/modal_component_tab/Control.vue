<template>
  <div class="control-panel">
    <div class="control-panel-container">
      <div class="control-content-panel">
        <div class="control-control-header">
          Управление 
        </div>

        <div class="control-button-header">
          <button class="button-close" @click="onClick">x</button>
        </div>
      </div>
      <div class="control-panel-view">
        <!-- <div class="input-number">
          <div class="inpunt-number-control">
            <div style="display: flex; flex-direction: column">
              <h style="font-size: 15px">Текущая</h>
              {{inputNum+'°C'}}
            </div>

            <i class="el-icon-bottom-right" style="color: darkturquoise; font-size: 30px; margin-top: 17px;"></i>
            
            <div style="display: flex; flex-direction: column">
              <h style="font-size: 15px">Заданная</h>
              <el-input-number style="width: 140px" size="large" v-model="inputNum2"></el-input-number>
            </div>
            
          </div>
          <div style="width:100%; display: flex; justify-content: space-between; align-items: center">
            <el-slider style="width: 300px;" v-model="inputNum" :max="50"></el-slider>
              {{inputNum+'°C'}}
          </div>
        </div>

        <div class="control-manage-buttons">
          <el-radio-group v-model="radioButton" size="large">
            <el-radio-button label="Ручной"></el-radio-button>
            <el-radio-button label="Расписание"></el-radio-button>
            <el-radio-button label="Отъезд"></el-radio-button>
          </el-radio-group>

          <el-button 
              style="margin-top: 11px;" 
              size="large" 
              type="primary"
              @click="innerVisible = true">Выбор датчиков</el-button>
        </div> -->

        <div class="control-header-content">
          <div class="header-content-left">
            <div class="left-top-content">
              <div class="ltc-left">Текущая</div> 
              <div class="invisible-ltc"></div>
              <div class="ltc-right">Заданная</div>
            </div>

            <div class="left-center-content">
              <div class="lcc-left">
                {{inputNum+'°C'}}
              </div>

              <div class="lcc-center">
                <i class="el-icon-bottom-right" style="color: darkturquoise; font-size: 25px;"></i>
              </div>

              <div class="lcc-right">
                <el-input-number style="width: 115px" size="medium" v-model="inputNum2"></el-input-number>
              </div>
            </div>
            
            <div class="left-bottom-content">
              <el-slider style="width: 300px;" v-model="inputNum" :max="50"></el-slider>
              {{inputNum+'°C'}}
            </div>

          </div>

          <div class="header-content-right">
            <div class="right-top-content">
              <el-radio-group v-model="radioButton" size="large">
                <el-radio-button label="Ручной"></el-radio-button>
                <el-radio-button label="Расписание"></el-radio-button>
                <el-radio-button label="Отъезд"></el-radio-button>
              </el-radio-group>
            </div>

            <div class="right-center-content">
              <el-button @click="troubleButton">Аварийное отключение устройства</el-button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="control-footer">
        <div class="control-footer-content">
          <div class="footer-content">
            <h style="font-size: 15px">Сила тока:</h>
            <input type="text" readonly class="input-footer" v-model="amper">
          </div>
          <div class="footer-content"> 
            <h style="font-size: 15px">Напряжение:</h>
            <input type="text" readonly class="input-footer" v-model="voltage">
          </div>
          <div class="footer-content">
            <h style="font-size: 15px">Потр. мощность:</h>
            <input type="text" readonly class="input-footer" v-model="kilovatt">
          </div>
          <div class="footer-content">
            <h style="font-size: 15px">Статус сети:</h>
            <div class="footer-content-status">
              <input type="text" readonly class="input-footer-status" v-model="status">
              <input type="text" readonly class="input-footer-status" v-model="statusHub">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="control-info-panel">
      <div class="info-part1">
        <div class="info-content">
          All HUB кухня
        </div>
        
        <div class="info-content">
          Тип: LTC090
        </div>
        
        <div class="info-content">
          Версия прошивки: 123456789
        </div>

        <div class="info-content">
          Тип терморегулятора: 1
        </div>

        <div class="info-content">
          Тип управления: Н
        </div>
      </div>
      <div class="info-part2">

      </div>
    </div>

    <el-dialog
      width="40%"
      title="Выбор датчиков и RF устройства"
      :visible.sync="innerVisible"
      append-to-body>
        <div class="dialog-content">
          <div style="height: 200px;">
            <div style="height:50%; 
                        display: flex; 
                        align-items: center; 
                        justify-content: space-between">
              Тип проводного датчика температуры
              <el-select size="large" v-model="value" filterable placeholder="Выберите сопротивление">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>

            <div style="height:50%; 
                        display: flex; 
                        align-items: center; 
                        justify-content: space-between">
              Выбрать доступный датчик / "RF" устройство
              <el-select size="large" v-model="availableValue" filterable placeholder="Выберите сопротивление">
                <el-option
                  v-for="item in sensorOptions"
                  :key="item.availableValue"
                  :label="item.sensorType"
                  :value="item.availableValue">
                </el-option>
              </el-select>
            </div>
          </div>

          <el-button type="primary" @click="innerVisible = false">Добавить выбранное</el-button>
        </div>
    </el-dialog>
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
      scuteRightSide: true,
      selectedComponent: null,
      inputNum: 24,
      inputNum2: 22,
      amper: "3 мКа",
      voltage: "12.5 В",
      kilovatt: "0.4 кВт • ч",
      status: "Wi-Fi",
      statusHub: 'ALL-HUB',
      radio1: 'В сети',
      radioButton: 'Программный',
      leaveButton: false,
      innerVisible: false,

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
        value: '',

        sensorOptions: [{
          availableValue: 'Option1',
          sensorType: 'Wi-Fi'
        }, {
          availableValue: 'Option2',
          sensorType: 'RF'
        }, {
          availableValue: 'Option3',
          sensorType: 'RF Thermo'
        }],
        availableValue: ''
    };
  },

  methods: {
    switchButtonsScute(){
        if (this.showbscute == this.button11scute) {
            this.showbscute = this.button21scute;
        } else {
            this.showbscute = this.button11scute;
        }
    },

    onClick(){
      this.$emit('buttonClick')
    },

    handleClose(done) {
      this.$confirm('Are you sure to close this dialog?')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },

    troubleButton() {
        this.$confirm('Вы действительно хотите отключить устройство?', 'Внимание', {
          confirmButtonText: 'Применить',
          cancelButtonText: 'Отмена',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: 'Отключение устройства завершено'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Отключение устройства отменено'
          });          
        });
      }
  }
};
</script>

<style lang="scss" scoped>
.control-panel {
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
  
  .control-panel-container {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 90%;

    .control-content-panel {
      flex: 0 0 auto;
      border-bottom: 1px solid #DCDFE6;
      display: flex;

      .control-control-header{
        width: 96%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .control-button-header{
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

    .control-panel-view {
      flex: 1 1 auto;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      overflow: auto;
      padding: 20px;

      .control-header-content{
        width: 100%;
        height: 35%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items:center;

        .header-content-left{
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items:center;

          .left-top-content{
            width: 100%;
            height: 20%;
            display: flex;
            align-items: flex-end;
            justify-content: space-around;
            flex-direction: row;

            .ltc-left{
              width: 33%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 15px;
            }

            .invisible-ltc{
              width: 30%;
              height: 100%;
            }

            .ltc-right{
              width: 36%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 15px;
            }
          }

          .left-center-content{
            width: 100%;
            height: 30%;
            display: flex;
            align-items: center;
            // justify-content: space-around;
            flex-direction: row;

            .lcc-left{
              width: 33%;
              height:100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .lcc-center{
              width: 33%;
              height:100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .lcc-right{
              width: 33%;
              height:100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }

          .left-bottom-content{
            width: 100%;
            height: 50%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
          }
        }

        .header-content-right{
          width: 50%;
          height: 100%;
        }
      } 
    }
  
  .control-footer{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    border-top: 1px solid #DCDFE6;
      
      .control-footer-content{
      display:flex;
      width: 100%;
      justify-content: space-around;

      .footer-content{
        width:25%;
        display: flex; 
        flex-direction: column; 
        align-items: center;

        .input-footer{
          width: 100px; 
          height: 30px; 
          text-align: center; 
          border-radius: 4px; 
          border: 1px solid #DCDFE6; 
          outline: none;
          color: #606266;
          cursor: default;
        }

        .footer-content-status{
          display: flex; 
          flex-direction: row; 
          align-items: center;
          justify-content: space-evenly;

          .input-footer-status{
          width: 40%; 
          height: 30px; 
          text-align: center; 
          border-radius: 4px; 
          border: 1px solid #DCDFE6; 
          outline: none;
          color: #606266;
          cursor: default;
          }
        }
      }
    }
  }
}

  .control-info-panel {
    flex: 0 0 auto;
    display: flex;
    width: 15%;
    word-wrap:break-word;
    border-left: 1px solid #DCDFE6;    
    flex-direction: column;

    .info-part1{
      width: 100%;
      height: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 16px;
      border-bottom: 1px solid #DCDFE6;    


      .info-content{
        width: 95%;
        height: 20%;
        text-align:left;
        display: flex;
        align-items: center
      }
    }

    .info-part2{
      width: 100%;
      height: 50%;
      font-size: 18px;
    }
  }
}
</style>
