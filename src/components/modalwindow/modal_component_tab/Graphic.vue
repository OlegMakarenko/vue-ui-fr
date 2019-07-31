<template>
  <div class="graphic-panel">

    <div class="graphic-panel-container">
      <div class="graphic-control-panel">
          График <button class="button-close" @click="onClick">x</button>
      </div>
      <div class="graphic-panel-view">
          <div class="graphic-button">
          <button class="graph_button_data">21.12.2018 - 03.03.2019</button>
        <div class="graph_button_group">
            <div class="switch_button_graph">
            <button class="graph_on_btn_temp" @click="switchButtonsTemp" v-if="showbtemp == button11temp">
                Температура
            </button>
            <button class="graph_off_btn_temp" @click="switchButtonsTemp" v-else>
                Температура
            </button>

            <button class="graph_on_btn_default" @click="switchButtonsVolt" v-if="showbvolt == button12volt">
                Напряжение
            </button>
            <button class="graph_off_btn_default" @click="switchButtonsVolt" v-else>
                Напряжение
            </button>

            <button class="graph_on_btn_default" @click="switchButtonsAmper" v-if="showbamper == button13amper">
                Ток
            </button>
            <button class="graph_off_btn_default" @click="switchButtonsAmper" v-else>
                Ток
            </button>

            <button class="graph_on_btn_default-r" @click="switchButtonsPower" v-if="showbpower == button14power">
                Мощность
            </button>
            <button class="graph_off_btn_default-r" @click="switchButtonsPower" v-else>
                Мощность
            </button>
            </div>
        </div>
        </div>
      </div>
    </div>

    <div class="graphic-info-panel">
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
        graphicRightSide: true,

        showbtemp: null, //showing buttons on-off
        button11temp: 'btn11',
        button21temp: 'btn21',

        showbvolt: null,
        button12volt: 'btn12',
        button22volt: 'btn22',

        showbamper: null,
        button13amper: 'btn13',
        button23amper: 'btn23',

        showbpower: null,
        button14power: 'btn14',
        button24power: 'btn24'
    }
  },

  methods: {
    switchButtonsTemp(){
      if (this.showbtemp == this.button11temp) {
          this.showbtemp = this.button21temp;
      } else {
          this.showbtemp = this.button11temp;
      }
    },

    switchButtonsVolt(){
      if (this.showbvolt == this.button12volt) {
          this.showbvolt = this.button22volt;
      } else {
          this.showbvolt = this.button12volt;
      }
    },

    switchButtonsAmper(){
      if (this.showbamper == this.button13amper) {
          this.showbamper = this.button23amper;
      } else {
          this.showbamper = this.button13amper;
      }
    },

    switchButtonsPower(){
      if (this.showbpower == this.button14power) {
          this.showbpower = this.button24power;
      } else {
          this.showbpower = this.button14power;
      }
    },

    onClick(){
      this.$emit('buttonClick')
    }
  }
};
</script>

<style lang="scss" scoped>
.graphic-panel {
  display: flex;
  height: 100%;
  width: 100%;
  
  .graphic-panel-container {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 90%;

    .graphic-control-panel {
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

    .graphic-info{
        float: right;
        cursor: pointer;
    }

    .graphic-panel-view {
      flex: 1 1 auto;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      overflow: auto;
      padding: 20px;

        .graphic-button{
          height: 20%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
      
            .graph_button_data{
            width: 35%;
            height: 70%;
            float: left;
            justify-content: baseline;
            font-size: 15px;
            color: white;
            background-color: #a1adb2;
            border: none;
            border-radius: 4px;
            outline: none;
            cursor: pointer;
            }

            .switch_button_graph{
            width:100%;
            height:100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            }

            .graph_button_group{
            width: 47%;
            height:100%;
            }

            .graph_on_btn_temp{
            width: 22%;
            height: 70%;
            font-size: 13px;
            color: white;
            background-color: #a1adb2;
            border: 1px solid #a1adb2;
            text-align: center;
            word-wrap: break-word;
            border-radius: 4px 0px 0px 4px;
            outline: none;
            cursor: pointer;
            }

            .graph_off_btn_temp{
            width: 22%;
            height: 70%;
            font-size: 13px;
            color: #a1adb2;
            background-color: white;
            border: 1px solid #a1adb2;
            text-align: center;
            word-wrap: break-word;
            border-radius: 4px 0px 0px 4px;
            outline: none;
            cursor: pointer;
            }

            .graph_on_btn_default{
            width: 22%;
            height: 70%;
            font-size: 13px;
            color: white;
            background-color: #a1adb2;
            border: 1px solid #a1adb2;
            text-align: center;
            word-wrap: break-word;
            border-left: none;
            outline: none;
            cursor: pointer;
            }

            .graph_off_btn_default{
            width: 22%;
            height: 70%;
            font-size: 13px;
            color: #a1adb2;
            background-color: white;
            border: 1px solid #a1adb2;
            text-align: center;
            word-wrap: break-word;
            border-left: none;
            outline: none;
            cursor: pointer;
            }

            .graph_on_btn_default-r{
            width: 22%;
            height: 70%;
            font-size: 13px;
            color: white;
            background-color: #a1adb2;
            border: 1px solid #a1adb2;
            text-align: center;
            word-wrap: break-word;
            border-left: none;
            border-radius: 0px 4px 4px 0px;           
            outline: none;
            cursor: pointer; 
            }

            .graph_off_btn_default-r{
            width: 22%;
            height: 70%;
            font-size: 13px;
            color: #a1adb2;
            background-color: white;
            border: 1px solid #a1adb2;
            text-align: center;
            word-wrap: break-word;
            border-left: none;
            border-radius: 0px 4px 4px 0px;
            outline: none;
            cursor: pointer;
            }
        }
    }
  }

  .graphic-info-panel {
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
