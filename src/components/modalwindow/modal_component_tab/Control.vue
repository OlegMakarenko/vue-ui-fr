<template>
  <div class="control-panel">

    <div class="control-panel-container">
      <div class="control-content-panel">
          Настройки 
          <i class="el-icon-info scute-info" @click="scuteRightSide = !scuteRightSide"></i>
      </div>
      <div class="control-panel-view">
            <div class="input-number">
                <el-input-number v-model="inputNum" :min="1" :max="50"></el-input-number>
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
                    <el-input class="input" size="mini"></el-input>
                    <el-input class="input" size="mini"></el-input>
                    <el-input class="input" size="mini"></el-input>
                </div>
            </div>
      </div>
    </div>

    <div class="control-info-panel" v-if="scuteRightSide">
        Какая-то информация
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
        radioButton: 'Ручной'
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
      }

      .control-manage-buttons{
          width: 60%;
          height: 100px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-evenly;    
            
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
                    width: 100px;
                }
            }
        }
    }
}

  .control-info-panel {
    flex: 0 0 auto;
    width: 10%;
    word-wrap:break-word;
    border-left: 1px solid #a1adb2;    
  }

  .scute-info{
      float: right;
      cursor: pointer;
  }
}
</style>
