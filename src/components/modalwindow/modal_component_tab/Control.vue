<template v-if="templateVisible">
  <div class="control-panel">
    <div class="control-panel-container">
    <div class="control-panel-view">
      <div class="control-header-content">
        <div class="header-content-left">
          <div class="left-top-content" v-if="timePick">
            <div class="ltc-left" >
              Текущая
            </div> 
            <div class="invisible-ltc" ></div >
            <div class="ltc-right">
              Заданная
            </div>
          </div>

          <div class="left-center-content" v-if="timePick">
            <div class="lcc-left">
              {{temperature}}
            </div>

            <div class="lcc-center">
              <img
                :class="tempView" 
                class="up-down-heating"
                v-if="iconDown" 
                src="../../../icon/heating-icon-down.png">

              <img
                :class="tempView" 
                class="up-down-heating"
                v-if="iconUp" 
                src="../../../icon/heating-icon-up.png">
            </div>

            <div class="lcc-right" v-if="timePick">
              <el-input-number 
                style="width: 115px" 
                size="medium" 
                @change="getTemperature"
                :min="0"
                :max="50"
                v-model="getTemperature">
              </el-input-number>
            </div>
          </div>
            
          <div class="left-bottom-content" v-if="timePick">
            <el-slider 
              style="width: 250px; margin-left: 10px;" 
              v-model="getTemperature" 
              :max="50"
              @change="getTemperature"
              :show-tooltip="false">
            </el-slider>
            {{getTemperature+'°C'}}
          </div>

          <div class="left-bottom-content" v-else>
            <el-slider 
              style="width: 250px; margin-left: 10px;"
              v-model="inputNum2" 
              :max="30"
              :show-tooltip="false">
            </el-slider>
            {{inputNum2+' Мин.'}}
          </div>
        </div>

        <div class="header-content-right">
          <div class="invisible-header-content"></div>
          
          <div class="right-top-content">
              <button 
                :class="handleButtonClass" 
                @click="handleFunc" 
                class="handle-mode-button">Ручной</button>

              <button 
                :class="scheduleButtonClass" 
                @click="scheduleFunc" 
                class="schedule-mode-button">Расписание</button>

              <button 
                :class="ongoButtonClass" 
                @click="ongoFunc" 
                class="ongo-mode-button">Отъезд</button>
          </div>

          <div class="rightc-content">
          Реле <el-switch v-model="value1"
                    :value="getRelay" 
                     @change="getRelay"  
                     active-text="Вкл"
                     inactive-text="Выкл"></el-switch>
          </div>

          <div class="right-center-content">
            <el-button 
              :class="timePickClass"
              @click="timePickFunc"
              v-on:click="redraw" 
              v-if="sensorVisible">
                Режим работы без датчика
            </el-button>
            <el-button 
              type="info" 
              @click="troubleButton"
              plain 
              style="width: 200px">
              Спящий режим
            </el-button>
          </div>
        </div>
      </div>

      <div class="control-footer">
        <div class="control-footer-content">
          <div class="footer-content">
            <span style="font-size: 15px">Сила тока:</span>
            <input 
              type="text" 
              readonly 
              class="input-footer" 
              v-model="power">
          </div>

          <div class="footer-content"> 
            <span style="font-size: 15px">Напряжение:</span>
            <input 
              type="text" 
              readonly 
              class="input-footer" 
              v-model="voltage">
          </div>

          <div class="footer-content">
            <span style="font-size: 15px">Потр. мощность:</span>
            <input 
              type="text" 
              readonly 
              class="input-footer" 
              v-model="consPower">
          </div>

          <div class="footer-content">
            <span style="font-size: 15px">Статус сети:</span>
            <div class="footer-content-status">
              <input 
                type="text" 
                readonly 
                class="input-footer-status" 
                v-model="status">
              <input 
                type="text" 
                readonly 
                class="input-footer-status" 
                v-model="statusHub">
            </div>
          </div>
          
        </div>
      </div>
      <div style="width: 100%; height: 60%; margin-left: -20px">
        <Chart
            :toolbar="false"
            :axesButton="false"
            :data="chartData"
            v-if="chartVisible"/>
      </div>
      
      <!-- <div>
        <h2>{{allPosts.title}}</h2>
        <p>{{allPosts.body}}</p>
      </div> -->
    </div>
  </div>

  <div class="control-info-panel">
    <div class="info-part1">
      <div class="info-content">
        <div class="control-info-panel-name">
          {{infoPanel.name}}
          <i class="el-icon-edit" @click="editTitle" style="font-size:19px; cursor: pointer"></i>
        </div>
      </div>
      
      <div class="info-content">
        Тип: LTC090 
      </div>
      
      <div class="info-content">
        Версия прошивки: 123456789
      </div>

      <div class="info-content">
        Тип терморегулятора: 1
        <!-- {{infoPanel.id}} -->
      </div>

      <div class="info-content">
        Тип управления: Н 
      </div>
    </div>

    <div class="info-part2">

    </div>
  </div>
</div>
</template>

<script>
import BaseComponent from '../../BaseComponent.vue'
import Chart from '../../chart/Chart'
import {setTimeout} from 'timers'

export default {
  extends: BaseComponent,

  created(){
    //  this.$store.dispatch("DEVICE_INFO");
    //  this.$store.dispatch('getChartControl');
     this.$store.dispatch("getTemperature");
  },

  mounted(){
    this.$store.dispatch('getChartControl');
  },

  components: {
    Chart
  },
  
    data() {
      return {
        class: 'modalGeneral',
        scuteRightSide: true,
        inputNum2: 22,
        statusHub: 'WI-FI',
        radioButton: 'Программный',
        timePick: true,
        handleMode: true,
        scheduleMode: false,
        ongoMode: false,
        sensorVisible: true,
        iconUp: true,
        iconDown: false,
        contentVisible: true,
        ready: true,
        value1: 1,
        chartVisible: true,
      };
    },

  computed: {
    infoPanel(){
      return this.$store.getters.infoPanelData;
    },

     getTemperature:{
      get(){
        return this.$store.getters.temperature
      },
      set(value){
        this.$store.commit("temperature", value)
        this.$store.dispatch("getTemperature")
      }
    },

    chartData(){
      return this.$store.getters.chartData
    },

    allPosts(){
      return this.$store.getters.allPosts;
    },

    visibleContentGunc(){
      if(this.contentVisible == true)
        return this.$store.dispatch("DEVICE_INFO")
    },

    consPower(){
      return this.$store.getters.deviceData.consPower + '  кВт • ч';
    },

    power(){
      return this.$store.getters.deviceData.power + ' мкА';
    },

    voltage(){
      return this.$store.getters.deviceData.voltage + ' В';
    },

    temperature(){
      return this.$store.getters.deviceData.temp + ' °C';
    },

    status(){
        return this.$store.getters.deviceData.status + ' дБм'
    },  

    releState(){
      if(this.$store.getters.deviceData.releState === 1){
        return 0
      } else if (this.$store.getters.deviceData.releState === 0){
        return 0
      }
    },

    tempView(){
      if (this.$store.getters.deviceData.temp > this.getTemperature){
         this.iconUp = false;
         this.iconDown = true;
      } else if (this.$store.getters.deviceData.temp < this.getTemperature){
        this.iconUp = true;
        this.iconDown = false;
      }
    },

    timePickClass(){
      if(this.timePick == true){
        return 'time-pick-white'
      } else if (this.timePick == false){
        return 'time-pick-grey'
      }
    },

    handleButtonClass(){
      if(this.handleMode == true){
        return 'handle-pick-grey'
      } else if (this.handleMode == false) {
         return 'handle-pick-white'
      }
    },

    scheduleButtonClass(){
      if(this.scheduleMode == true){
        return 'handle-pick-grey'
      } else if (this.scheduleMode == false) {
         return 'handle-pick-white'
      }
    },

    ongoButtonClass(){
      if(this.ongoMode == true){
        return 'handle-pick-grey'
      } else if (this.ongoMode == false) {
         return 'handle-pick-white'
      }
    },
  },


  methods: {
    onClick(){
      this.$emit('buttonClick')
    },

    checkState(){
      console.log("value of SWITCHER", this.value1)
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
    },

    editTitle() {
      this.$prompt('Пожалуйста введите новое имя', 'Подсказка', {
        confirmButtonText: 'Применить',
        cancelButtonText: 'Отмена',
        inputValidator: function(value){return value.length},
      }).then(({ value }) => {
        this.$store.dispatch("rename", {nodeId: this.infoPanel.id, name: value});
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Редактирование отменено '
        });
      });
    },

    tempChange(value){
      this.$store.commit("temperature", value)
      this.$store.dispatch("getTemperature")
    },

    timePickFunc(){
      console.log(' time picker button ' + this.timePick)
      if(this.timePick == false) this.timePick = true
        else if(this.timePick == true) this.timePick = false
    },

    handleFunc(){
      if(this.handleMode == false){
        this.handleMode = true
        this.sensorVisible = true
        this.scheduleMode = false
        this.ongoMode = false
      }
    },

    scheduleFunc(){
      if(this.scheduleMode == false && this.timePick == true){
        this.scheduleMode = true
        this.sensorVisible = false
        this.timePick == false
        this.handleMode = false
        this.ongoMode = false
      }
    },

    ongoFunc(){
      if(this.ongoMode == false && this.timePick == true){
        this.ongoMode = true
        this.sensorVisible = false
        this.timePick == false
        this.handleMode = false
        this.scheduleMode = false
      }
    },

    redraw(){
        this.ready = false;
        setTimeout(()=>{ this.ready = true }, 500);
    },

    
    getRelay(value){
      this.$store.commit("relayState", value)
      this.$store.dispatch("getRelay")
    }
  }
};
</script>

<style lang="scss" scoped>
.control-panel {
  display: flex;
  height: 100%;
  width: 100%;
  
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
      flex-direction: row;
      // justify-content: center;
      flex-wrap: wrap;
      overflow: auto;
      overflow-x: hidden;
      padding: 20px;
      border-top: 1px solid #DCDFE6;

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
            height: 10%;
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
            height: 25%;
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

              .up-down-heating{
                width: 35px;
                height: 35px;
              }
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
            height: 65%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
          }
        }

        .header-content-right{
          width: 50%;
          height: 100%;

          .invisible-header-content{
            width:100%;
            height: 10%;
          }

          .right-top-content{
            width: 100%;
            height: 25%;
            display: flex;
            justify-content: center;
            align-items: center;

            .handle-mode-button{
              height: 40px;
              width: 143px;
              background-color: #ffffff;
              border: 1px solid #DCDFE6;
              border-top-left-radius: 4px;
              border-bottom-left-radius: 4px;
              color: #606266;
              cursor: pointer;
              outline: none;
            }

            .schedule-mode-button{
              height: 40px;
              width: 143px;
              background-color: #ffffff;
              border-top: 1px solid #DCDFE6;
              border-bottom: 1px solid #DCDFE6;
              border-left: none;
              border-right: none;
              color: #606266;
              cursor: pointer;
              outline: none;
            }

            .ongo-mode-button{
              height: 40px;
              width: 143px;
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

          .rightc-content{
            width: 100%;
            height: 25%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
          }

          .right-center-content{
            width: 100%;
            height: 20%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            .time-pick-white{
              background-color: #ffffff;
              transition: all .3s cubic-bezier(.645,.045,.355,1);
            }

            .time-pick-grey{
              background-color: #8A999F;
              color: #ffffff;
              transition: all .3s cubic-bezier(.645,.045,.355,1);
            }
          }
        }
      } 

        .control-footer{
          width: 100%;
          height: 100px;
          display: flex;
          align-items: center;
          border-top: 1px solid #DCDFE6;
          border-bottom: 1px solid #DCDFE6;
        
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
}

  .control-info-panel {
    flex: 0 0 auto;
    display: flex;
    width: 200px;
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
      border-top: 1px solid #DCDFE6;
      border-bottom: 1px solid #DCDFE6;    


      .info-content{
        width: 95%;
        height: 20%;
        text-align:left;
        display: flex;
        align-items: center;

        .control-info-panel-name{
          flex: 1 1 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
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
