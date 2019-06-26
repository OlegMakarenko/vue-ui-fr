<template>
  <div class="graph_manager">
    <div class="graph_header">
      Регулятор в пристройке <br><br>
      Графики
    </div>

    <div class="graph_settings">
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

          <button class="graph_on_btn_default" @click="switchButtonsPower" v-if="showbpower == button14power">
              Мощность
          </button>
          <button class="graph_off_btn_default" @click="switchButtonsPower" v-else>
              Мощность
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
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

  methods:{
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
  }
}
</script>

<style>
.graph_manager{
  margin-left: 12.4%;
  width: 77%;
  height: 100%;
}

.graph_header{
  width: 100%; 
  height: 10%;
  text-align: center;
}

.graph_settings{
  width: 100%;
  height:20%;
  margin-top: 3%;
}


.graph_button_data{
  width: 35%;
  height: 70%;
  float: left;
  margin-top: 2%;
  margin-left: 9%;
  justify-content: baseline;
  font-size: 15px;
  color: white;
  background-color: #a5c1e9;
  border: none;
}

.switch_button_graph{
  width:100%;
  height:100%;

}

.graph_button_group{
  width: 47%;
  height:100%;
  float: right;
  margin-left: 9%;
}

.graph_on_btn_temp{
  width: 22%;
  height: 70%;
  margin-top: 4%;
  float:left;
  font-size: 13px;
  color: white;
  background-color: #a5c1e9;
  border: 1px solid #84b2f3;
  text-align: center;
  word-wrap: break-word;
}

.graph_off_btn_temp{
  width: 22%;
  height: 70%;
  margin-top: 4%;
  float:left;
  font-size: 13px;
  color: #a5c1e9;
  background-color: white;
  border: 1px solid #84b2f3;
  text-align: center;
  word-wrap: break-word;
}

.graph_on_btn_default{
  width: 22%;
  height: 70%;
  margin-top: 4%;
  float:left;
  font-size: 13px;
  color: white;
  background-color: #a5c1e9;
  border: 1px solid #84b2f3;
  text-align: center;
  word-wrap: break-word;
  border-left: none;
}

.graph_off_btn_default{
  width: 22%;
  height: 70%;
  margin-top: 4%;
  float:left;
  font-size: 13px;
  color: #a5c1e9;
  background-color: white;
  border: 1px solid #84b2f3;
  text-align: center;
  word-wrap: break-word;
  border-left: none;
}
</style>

