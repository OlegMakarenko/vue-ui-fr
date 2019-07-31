<template>
  <div class="schedule-panel">

    <div class="schedule-panel-container">
      <div class="schedule-control-panel">
          Расписание <button class="button-close" @click="onClick">x</button>
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
      </div>
    </div>

    <div class="schedule-info-panel">
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
        scheduleRightSide: true,

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

      .button-close{
        font-size: 30px;
        color: #a1adb2;
        border: none;
        outline: none;
        background: transparent;
        cursor: pointer;
        float: right;
      }

      .schedule-info{
          float: right;
          cursor: pointer;
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
        }

        .oneinput-schedule{
            height:40px; 
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
            height: 45px;
            font-size: 20px;
            color: white;
            background-color: #a1adb2;
            border: 1px solid #a1adb2;
            text-align: center;
        }

        .schedule-off-btn{
            width: 250px;
            height: 45px;
            font-size: 20px;
            color: #a1adb2;
            background-color: white;
            border: 1px solid #a1adb2;
            text-align: center;
        }

        .twoinput-schedule{
            height: 45px;
            width: 200px;
            font-size: 20px;
            border: 1px solid #a1adb2;
            background-color: #a1adb2;
            color: white;
            text-align: center;
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
    }

    .info-part2{
      width: 100%;
    }
  }
}
</style>
