<template v-if="templateVisible">
  <div class="control-panel">
    <div class="control-panel-container">
    <div class="control-panel-view">
      <div class="control-header-content">
        <div class="header-content-left">
          <!-- {{grs}} -->
          <div class="left-top-content" v-if="timePick">
            <div class="ltc-left" >
              Текущая
            </div> 
            <div class="invisible-ltc" ></div >
            <div class="ltc-right">
              Заданная
            </div>

            <div class="ltc-targetTemp">
              Воздух
            </div>
          </div>

          <div class="left-center-content" v-if="timePick">
            <div class="lcc-left">
              <span v-if="tempMsg">
                {{temperature}}
              </span>
              <span v-if="checkTemperature">
                {{errMsg}}
              </span>
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
              <button 
                @click="minusButton" 
                class="button-minus">
                  <i class="el-icon-minus"></i>
              </button>

              <input 
                type="text" 
                readonly 
                class="input-number" 
                v-model="sliderTemp">

              <button 
                @click="plusButton" 
                class="button-plus">
                  <i class="el-icon-plus"></i>
              </button>
              <!-- <el-input-number 
                style="width: 115px" 
                size="medium" 
                @change="setTemperature"
                :min="0"
                :max="50"
                v-model="sliderTemp">
              </el-input-number> -->
            </div>

            <div class="lcc-targetTemp">
              {{temperatureAir}}
            </div>
          </div>

          <div class="left-bottom-content" v-if="timePick">
            <el-slider 
              style="width: 250px; margin-left: 10px;" 
              v-model="changeSliderTemp" 
              :max="50"
              @change="setTemperatureSlider"
              :show-tooltip="false">
            </el-slider>
            {{changeSliderTemp+'°C'}}
            <!-- <input 
              class="left-bottom-content-slider"
              type="range" 
              value="0"
              min="1" max="50"
              @change="slider"
              v-model="sliderTemp"> -->
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
          Реле 
          <!-- <el-switch v-model="value1"
            @change="getRelayState"  
            active-text="Выкл"
            inactive-text="Вкл">
          </el-switch> -->
          <el-switch v-model="value1"
            :value="getRelay" 
            @change="getRelay"  
            active-text="Выкл"
            inactive-text="Вкл">
          </el-switch>
          </div>

          <div class="right-center-content">
            <el-button 
              type="info" 
              @click="troubleButton"
              plain 
              style="width: 200px">
              Спящий режим
            </el-button>
            <el-button 
              :class="timePickClass"
              @click="timePickFunc" 
              v-if="sensorVisible">
                Режим работы без датчика
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
              v-model="consPower">
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
            <span style="font-size: 15px">Мгновенная мощность:</span>
            <input 
              type="text" 
              readonly 
              class="input-footer" 
              v-model="power">
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
          <!-- {{checkTargetTemp}} -->
          <!-- {{showDataCurrent}} -->
        </div>
      </div>
      <div style="width: 100%; height: 60%; margin-left: -20px">
        <Chart 
          :toolbar="false"
          :axesButton="true"
          :data="chartData"
        />
      </div>
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

  props:['id'],

  created(){
    //  this.$store.dispatch("DEVICE_INFO");
    //  this.$store.dispatch('getChartControl', {id: this.id});
    //  this.$store.dispatch("getTemperature");
  },

  mounted(){
    // this.$store.dispatch("getFilterOptions");
     this.$store.dispatch('getChartControl', {firstTime: this.showDataPast, secondTime: this.showDataCurrent});

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
        value1: true,
        chartVisible: true,
        errMsg: "Error",
        tempMsg: true,
        //sliderTemp: 0,
      };
    },

  computed: {
     sliderTemp:{
      get(){
        // this.minusButton
        // return this.$store.getters.temperature
        if(this.deviceData != null){
          console.log("TARGET TEMP", this.deviceData.targetTemp)
          return Math.round(this.deviceData.targetTemp);
        }
      },
      set(value){
        this.$store.commit("temperature", value);
        this.$store.commit("sensorId", parseInt(this.id))
      }
    },

    changeSliderTemp:{
      get(){
        return this.$store.getters.temperature
        // if(this.deviceData != null){
          // console.log("TARGET TEMP", this.deviceData.targetTemp)
          // return this.deviceData.targetTemp;
        // }
      },
      set(value){
        this.$store.commit("temperature", value);
        this.$store.commit("sensorId", parseInt(this.id))
      }
    },

    grs(){
      if(this.deviceData != null)
      return this.deviceData.releState
    },

    // checkTargetTemp(){
    //   var targetTempUnkn = this.checkTarget
    //   targetTempUnkn = this.sliderTemp

    //   return targetTempUnkn
    // },

    deviceData(){
      return this.$store.getters.getDeviceDataById(this.id)
    },

    showDataCurrent(){
      var now = new Date();
      var year = now.getFullYear();
      var hour = now.getHours();
      var day = now.getDate();
      var month = now.getMonth()+1;
      var min = "0" + now.getMinutes();
      var sec = "0" + now.getSeconds();

      var humanDate = day + "." + month + "." + year
      var timeStamp = new Date(humanDate.split(".").reverse().join(".")).getTime()/1000 + 90000;

      return timeStamp;
    },

    showDataPast(){
      var now = new Date();
      var year = now.getFullYear();
      var hour = now.getHours();
      var day = now.getDate();
      var month = now.getMonth()+1;
      var min = "0" + now.getMinutes();
      var sec = "0" + now.getSeconds();

      var humanDate = day + "." + month + "." + year
      var timeStamp = new Date(humanDate.split(".").reverse().join(".")).getTime()/1000 - 1000;

      return timeStamp;
    },

    setDeviceChart(){
      if(this.id === 2){
        this.$store.dispatch("getChartControl", {deviceView: "vega/2 temp#1"});
      }
    },

    chartData(){
      return this.$store.getters.chartData;
    },

    allPosts(){
      return this.$store.getters.allPosts;
    },

    consPower(){
      if(this.deviceData != null)
        return this.deviceData.consPower + ' А';
    },

    power(){
      let kvtData = this.deviceData.power
      if(this.deviceData != null)
        // return Math.round(this.deviceData.power) / 1000 + ' кВт';
        return kvtData.toPrecision(2) / 1000 + ' кВт'
    },

    voltage(){
      if(this.deviceData != null)
        return Math.round(this.deviceData.voltage) + ' В';
    },

    temperature(){
      if(this.deviceData != null){
        return this.deviceData.temp["1"] + '°'
      } 
    },

    checkTemperature(){
      if(this.temperature < "0" || this.temperature > "90"){
        this.tempMsg = false
        return this.errMsg
      }
    },

    temperatureAir(){
      if(this.deviceData != null){
        return Math.round(this.deviceData.temp["2"]) + '°'
      }
    },

    status(){
      if(this.deviceData != null)
        return this.deviceData.status + ' дБм'
    },  

    targetTemp:{
      get(){
        if(this.deviceData != null)
          return Math.round(this.deviceData.targetTemp += 1);
      },
      set(value){
        this.setTemperature(value)
      }
    },

    releState(){
      if(this.$store.getters.deviceData.releState === 1){
        return 1
      } else if (this.$store.getters.deviceData.releState === 0){
        return 0
      } else {
        return -1
      }
    },

    tempView(){
      if (this.deviceData != null && this.deviceData.temp["1"] > this.sliderTemp){
         this.iconUp = false;
         this.iconDown = true;
      } else if (this.deviceData != null && this.deviceData.temp["1"]  < this.sliderTemp){
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
     setTemperature(value){
        this.$store.commit("temperature", value)
        this.$store.dispatch("getTemperature", {id: this.id})
    },

    setTemperatureSlider(value){
        this.$store.commit("temperature", value)
        this.$store.dispatch("getTemperatureSlider", {id: this.id})
    },
//getTemperatureSlider
    getRelayState(){
      if(this.deviceData != null && this.value1 === true){
        console.log("Rele ON", this.deviceData.releState)
        return this.deviceData.releState = 1
      } else if (this.deviceData != null && this.value1 === false){
        console.log("Rele OFF", this.deviceData.releState)
        return this.deviceData.releState = 0
      } else if(this.deviceData != null && this.deviceData.releState === 0 || this.deviceData.releState === 1){
        console.log("Rele in auto")
        return this.deviceData.releState
      }
    },

    plusButton(){
      // this.sliderTemp += 1
       if(this.deviceData != null){
         var plusTemp = Math.round(this.deviceData.targetTemp += 1) ;
         this.$store.dispatch("getTemperature", {id: this.id, targetTemp: plusTemp})
       } else {
         var plusTemp = Math.round(this.deviceData.targetTemp -= 1) ;
         this.$store.dispatch("getTemperature", {id: this.id, targetTemp: plusTemp})
       }
    },

    minusButton(){
      // this.sliderTemp += 1
       if(this.deviceData != null){
         var plusTemp = Math.round(this.deviceData.targetTemp -= 1) ;
         this.$store.dispatch("getTemperature", {id: this.id, targetTemp: plusTemp})
       }
    },

    slider(){
      if(this.deviceData != null){
         var plusTemp = Math.round(this.deviceData.targetTemp += 1) ;
         this.$store.dispatch("getTemperature", {id: this.id, targetTemp: plusTemp})
       } else if (this.deviceData != null){
         var minusTemp = Math.round(this.deviceData.targetTemp -= 1) ;
         this.$store.dispatch("getTemperature", {id: this.id, targetTemp: minusTemp})
       }
    },

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
    
    getRelay(value){
      this.$store.commit("relayState", value)
      this.$store.dispatch("getRelay", {id: parseInt(this.id)})
    },
    
    relayState(){
       if(this.deviceData != null && this.deviceData.releState === 1){
         return 1
       } else if (this.deviceData != null && this.deviceData.releState === 0) {
         return 0
       } else {
         return -1
       }
    },
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
              width: 25%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 15px;
            }

            .invisible-ltc{
              width: 25%;
              height: 100%;
            }

            .ltc-right{
              width: 25%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 15px;
            }

            .ltc-targetTemp{
              width: 25%;
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
              width: 25%;
              height:100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .lcc-center{
              width: 25%;
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
              width: 25%;
              height:100%;
              display: flex;
              align-items: center;
              justify-content: center;

              .input-number{
                width: 50px; 
                height: 30px; 
                text-align: center; 
                // border-radius: 4px; 
                border: 1px solid #DCDFE6; 
                border-left: none;
                border-right: none;
                outline: none;
                color: #606266;
                cursor: default;
              }

              .button-plus{
                height: 34px; 
                text-align: center; 
                border: 1px solid #DCDFE6; 
                border-top-right-radius: 3px;
                border-bottom-right-radius: 3px;
                background-color: #f7f7f7;
                outline: none;
                color: #606266;
                cursor: pointer;
              }

              .button-minus{
                height: 34px; 
                text-align: center; 
                border: 1px solid #DCDFE6; 
                border-top-left-radius: 3px;
                border-bottom-left-radius: 3px;
                background-color: #f7f7f7;
                outline: none;
                color: #606266;
                cursor: pointer;
              }
            }

            .lcc-targetTemp{
              width: 25%;
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

            .left-bottom-content-slider {
              -webkit-appearance: none;
              width: 250px;
              height: 5px;
              background: #d3d3d3;
              outline: none;
              opacity: 0.7;
              -webkit-transition: .2s;
              transition: opacity .2s;
            }

            .left-bottom-content-slider:hover {
              opacity: 1;
            }

            .left-bottom-content-slider::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              border-radius: 360px;
              width: 20px;
              height: 20px;
              border: 2px solid #d3d3d3;
              background: white;
              cursor: pointer;
            }

            .left-bottom-content-slider::-moz-range-thumb {
              border-radius: 360px;
              width: 20px;
              height: 20px;
              border: 2px solid #d3d3d3;
              background: white;
              cursor: pointer;
            }
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
              width: 33%;
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

            .ongo-mode-button{
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

          .rightc-content{
            width: 100%;
            height: 25%;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }

          .right-center-content{
            width: 100%;
            height: 20%;
            display: flex;
            justify-content: space-between;
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
}
</style>
