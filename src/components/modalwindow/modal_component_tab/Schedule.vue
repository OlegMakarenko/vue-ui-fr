<template>
  <div class="schedule-panel">

    <div class="schedule-panel-container">
      <div class="schedule-control-panel">
         <div class="schedule-control-header">
          Расписание 
        </div>

        <div class="schedule-button-header">
          <button class="button-close" @click="onClick">x</button>
        </div>
      </div>
      <div class="schedule-panel-view">
          <div class="schedule-content">
            <div class="schedule-day1">
                <input type="text" class="oneinput-schedule" v-model="input_day1">
                <input type="button" class="twoinput-schedule" v-model="input_temp1_1">
                <button class="schedule-on-btn" @click="switchButtons" v-if="showb == button11">
                    ВКЛ
                </button>
                <button class="schedule-off-btn" @click="switchButtons" v-else>
                    ВЫКЛ
                </button>
                <input type="button" class="twoinput-schedule" v-model="input_temp2_1">
            </div>

            <div class="schedule-day1">
                <input type="text" class="oneinput-schedule" v-model="input_day2">
                <input type="button" class="twoinput-schedule" v-model="input_temp1_2">
                <button class="schedule-on-btn" @click="switchButtons2" v-if="showb2 == button12">
                    ВКЛ
                </button>
                <button class="schedule-off-btn" @click="switchButtons2" v-else>
                    ВЫКЛ
                </button>
                <input type="button" class="twoinput-schedule" v-model="input_temp2_2">
            </div>

            <div class="schedule-day1">
                <input type="text" class="oneinput-schedule" v-model="input_day3">
                <input type="button" class="twoinput-schedule" v-model="input_temp1_3">
                <button class="schedule-on-btn" @click="switchButtons3" v-if="showb3 == button13">
                    ВКЛ
                </button>
                <button class="schedule-off-btn" @click="switchButtons3" v-else>
                    ВЫКЛ
                </button>
                <input type="button" class="twoinput-schedule" v-model="input_temp2_3">
            </div>

            <div class="schedule-day1">
                <input type="text" class="oneinput-schedule" v-model="input_day4">
                <input type="button" class="twoinput-schedule" v-model="input_temp1_4">
                <button class="schedule-on-btn" @click="switchButtons4" v-if="showb4 == button14">
                    ВКЛ
                </button>
                <button class="schedule-off-btn" @click="switchButtons4" v-else>
                    ВЫКЛ
                </button>
                <input type="button" class="twoinput-schedule" v-model="input_temp2_4">
            </div>

            <div class="schedule-day1">
                <input type="text" class="oneinput-schedule" v-model="input_day5">
                <input type="button" class="twoinput-schedule" v-model="input_temp1_5">
                <button class="schedule-on-btn" @click="switchButtons5" v-if="showb5 == button15">
                    ВКЛ
                </button>
                <button class="schedule-off-btn" @click="switchButtons5" v-else>
                    ВЫКЛ
                </button>
                <input type="button" class="twoinput-schedule" v-model="input_temp2_5">
            </div>

            <div class="schedule-day1">
                <input type="text" class="oneinput-schedule" v-model="input_day6">
                <input type="button" class="twoinput-schedule" v-model="input_temp1_6">
                <button class="schedule-on-btn" @click="switchButtons6" v-if="showb6 == button16">
                    ВКЛ
                </button>
                <button class="schedule-off-btn" @click="switchButtons6" v-else>
                    ВЫКЛ
                </button>
                <input type="button" class="twoinput-schedule" v-model="input_temp2_6">
            </div>

            <div class="schedule-day1">
                <input type="text" class="oneinput-schedule" v-model="input_day7">
                <input type="button" class="twoinput-schedule" v-model="input_temp1_7">
                <button class="schedule-on-btn" @click="switchButtons7" v-if="showb7 == button17">
                    ВКЛ
                </button>
                <button class="schedule-off-btn" @click="switchButtons7" v-else>
                    ВЫКЛ
                </button>
                <input type="button" class="twoinput-schedule" v-model="input_temp2_7">
            </div>
        </div>
        <div class="schedule-departure">
            Отъезд
            <div class="departure-content">
                <h style="float:left; font-size: 12px;">Понизить температуру на: {{value+'°C'}}</h>
            <br>
                <div class="input-number-control">
                    <div style="width: 50%">
                        <el-slider
                            :max="50"
                            v-model="value"
                            show-input>
                        </el-slider>
                    </div>
                </div>

                <div class="schedule-buttons">
                <el-button>24 часа</el-button>
                <el-button>Неделя</el-button>
                <el-button>Месяц</el-button>
            </div>
            
            <h style="float:left; font-size: 12px;">Выберите период</h>
            <br>
             <div class="block">
                <el-date-picker
                v-model="value1"
                type="datetimerange"
                range-separator="До"
                start-placeholder="Start date"
                end-placeholder="End date">
                </el-date-picker>
            </div>
            </div>
            
        </div>
      </div>
    </div>

    <div class="schedule-info-panel">
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
        scheduleRightSide: true,
        value: 0,

        showb: null, //showing buttons day1
        button11: 'btn11',
        button21: 'btn21',
        input_day1: 'ПН',
        input_temp1_1: '22*C',
        input_temp2_1: '22*C',
        
        showb2: null, //showing buttons day2
        button12: 'btn12',
        button22: 'btn22',
        input_day2: 'ВТ',
        input_temp1_2: '23*C',
        input_temp2_2: '23*C',

        showb3: null, //showing buttons day3
        button13: 'btn13',
        button23: 'btn23',
        input_day3: 'СР',
        input_temp1_3: '24*C',
        input_temp2_3: '24*C',

        showb4: null, //showing buttons day4
        button14: 'btn14',
        button24: 'btn24',
        input_day4: 'ЧТ',
        input_temp1_4: '25*C',
        input_temp2_4: '25*C',

        showb5: null, //showing buttons day5
        button15: 'btn15',
        button25: 'btn25',
        input_day5: 'ПТ',
        input_temp1_5: '26*C',
        input_temp2_5: '26*C',

        showb6: null, //showing buttons day6
        button16: 'btn16',
        button26: 'btn26',
        input_day6: 'СБ',
        input_temp1_6: '27*C',
        input_temp2_6: '27*C',

        showb7: null, //showing buttons day7
        button17: 'btn17',
        button27: 'btn27',
        input_day7: 'ВС',
        input_temp1_7: '28*C',
        input_temp2_7: '28*C',

        pickerOptions: {
          shortcuts: [{
            text: 'Last week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last 3 months',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
    };
  },

  methods: {
    switchButtons(){
        if (this.showb == this.button11) {
            this.showb = this.button21;
        } else {
            this.showb = this.button11;
        }
    },
    switchButtons2(){
        if (this.showb2 == this.button12) {
            this.showb2 = this.button22;
        } else {
            this.showb2 = this.button12;
        }
    },
    switchButtons3(){
        if (this.showb3 == this.button13) {
            this.showb3 = this.button23;
        } else {
            this.showb3 = this.button13;
        }
    },
    switchButtons4(){
        if (this.showb4 == this.button14) {
            this.showb4 = this.button24;
        } else {
            this.showb4 = this.button14;
        }
    },
    switchButtons5(){
        if (this.showb5 == this.button15) {
            this.showb5 = this.button25;
        } else {
            this.showb5 = this.button15;
        }
    },
    switchButtons6(){
        if (this.showb6 == this.button16) {
            this.showb6 = this.button26;
        } else {
            this.showb6 = this.button16;
        }
    },
    switchButtons7(){
        if (this.showb7 == this.button17) {
            this.showb7 = this.button27;
        } else {
            this.showb7 = this.button17;
        }
    },

    onClick(){
      this.$emit('buttonClick')
    }
  }
};
</script>

<style lang="scss" scoped>
.schedule-panel {
  display: flex;
  height: 100%;
  width: 100%;
  
  .schedule-panel-container {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 90%;

    .schedule-control-panel {
     flex: 0 0 auto;
      border-bottom: 1px solid #DCDFE6;
      display: flex;

      .schedule-control-header{
        width: 96%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .schedule-button-header{
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

    .schedule-panel-view {
      flex: 1 1 auto;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      overflow: auto;
      padding: 20px;

        .schedule-content{
            width: 100%;
            height: 60%;
        }

        .oneinput-schedule{
            height:20px; 
            width:40px;
            font-size: 20px;
            border: 1px solid #a1adb2;
            background-color: white;
            color: #a1adb2;
            text-align: center;
        }

        .schedule-day1{
            margin-top:12px;
            width: 100%;
        }

        .schedule-on-btn{
            width: 250px;
            height: 25px;
            font-size: 20px;
            color: white;
            background-color: #a1adb2;
            border: 1px solid #a1adb2;
            text-align: center;
        }

        .schedule-off-btn{
            width: 250px;
            height: 25px;
            font-size: 20px;
            color: #a1adb2;
            background-color: white;
            border: 1px solid #a1adb2;
            text-align: center;
        }

        .twoinput-schedule{
            height: 25px;
            width: 200px;
            font-size: 20px;
            border: 1px solid #a1adb2;
            background-color: #a1adb2;
            color: white;
            text-align: center;
        }

        .schedule-departure{
            width: 100%;
            height: 40%;

            .departure-content{
                width: 100%;
                height: 90%;
                    
                    .input-number-control{
                        width: 100%;
                        height: 30%;
                        margin-left: 15px;
                    }
                
                .schedule-buttons{
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                }

                .block{
                    display: flex;
                    justify-content: flex-start;
                }
            }
        }
    }
  }

  .schedule-info-panel {
    flex: 0 0 auto;
    display: flex;
    width: 15%;
    word-wrap:break-word;
    border-left: 1px solid #DCDFE6;    
    align-items: center;
    justify-content: center;
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
        align-items: center;
      }
    }

    .info-part2{
      width: 100%;
      height: 50%;
    }
  }
}
</style>
