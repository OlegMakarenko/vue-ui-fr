<template>
  <div class="control-panel">

    <div class="control-panel-container">
      <div class="control-content-panel">
          Управление <button class="button-close" @click="onClick">x</button>
      </div>
      <div class="control-panel-view">
            <div class="input-number">
              <div class="inpunt-number-control">
                <el-input-number v-model="inputNum"></el-input-number>
                <el-slider v-model="inputNum" :max="50"></el-slider>
              </div>
                
            </div>

            <div class="control-manage-buttons">
                <button class="scute-on-btn" @click="switchButtonsScute" v-if="showbscute == button11scute">
                    В сети
                </button>
                <button class="scute-off-btn" @click="switchButtonsScute" v-else>
                    В сети
                </button>

                <el-radio-group v-model="radioButton" size="mini">
                    <el-radio-button label="Ручной"></el-radio-button>
                    <el-radio-button label="По графику"></el-radio-button>
                </el-radio-group>

                <div class="control-input">
                    <el-input class="input" size="mini" placeholder="A = 3мKa"></el-input>
                    <el-input class="input" size="mini" placeholder="V = 12.5 B"></el-input>
                    <el-input class="input" size="mini" placeholder="P = 0.4 кВт/час"></el-input>
                </div>
            </div>
            
      </div>
      
      <div class="control-footer">
        <div class="control-switch-button">
          <div>
            <h style="font-size: 18px;">Режим отъезда</h>
            <el-switch v-model="leaveButton"></el-switch>
          </div>

          <div>
            <h style="font-size: 18px;">Обогрев</h>
            <el-switch v-model="heatingButton"></el-switch>
          </div>

          <div>
            <h style="font-size: 18px;">Охлаждение</h>
            <el-switch v-model="coolingButton"></el-switch>
          </div>
        </div>
      </div>
    </div>

    <div class="control-info-panel">
        <div class="info-part1">Статус Сети:</div>
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
      scuteRightSide: true,
      showbscute: null,
      button11scute: 'btn11',
      button21scute: 'btn21',
      selectedComponent: null,
      inputNum: 1,
      radio1: 'В сети',
      radioButton: 'Ручной',
      leaveButton: false,
      heatingButton: false,
      coolingButton: false
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

    .control-panel-view {
      flex: 1 1 auto;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      overflow: auto;
      padding: 20px;

      .input-number{
        width: 40%;
        height:100px;
        display: flex;
        align-items: center;
        justify-content: center;
        
          .inpunt-number-control{
            width: 100%;
            margin-left: 15px;
          }
      }

      .control-manage-buttons{
          width: 50%;
          height: 100px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-around;    
            
            .scute-on-btn{
                width: 20%; 
                height: 27px; 
                font-size: 14px;
                color: white;
                background-color: #a1adb2;
                border: 1px solid #a1adb2;
                border-radius: 4px;
                outline: none;
                text-align: center;
                cursor: pointer;
            }

            .scute-off-btn{
                width: 20%; 
                height: 27px; 
                font-size: 14px;
                color: #a1adb2;
                border-radius: 4px;
                background-color: white;
                border: 1px solid #a1adb2;
                outline: none;
                text-align: center;
                cursor: pointer;
            }

            .control-input{
                display: flex;
                justify-content: space-evenly;
                width: 80%;

                .input{
                    width: 120px;
                }
            }
        }
    }

    .control-footer{
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
        
        .control-switch-button{
        display:flex;
        width: 100%;
        justify-content: space-around;
      }
    }
}

  .control-info-panel {
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
      font-size: 18px;
    }

    .info-part2{
      width: 100%;
      font-size: 18px;
    }
  }
}
</style>
