<template>
  <div class="graphic-panel">
    <div class="graphic-panel-container">
      <!-- <div class="graphic-control-panel">
        <div class="graphic-control-header">
        График 
        </div>

        <div class="graphic-button-header">
          <button class="button-close" @click="onClick">x</button>
        </div>
      </div> -->
      

      <div class="graphic-panel-view">
        <div class="graphic-panel-content">
          <div class="graphic-date-picker" >
            Дата:
            <div>
             <el-date-picker
                v-model="value2"
                type="datetimerange"
                :picker-options="pickerOptions"
                range-separator="-"
                start-placeholder="Start"
                end-placeholder="End"
                align="right">
              </el-date-picker>
            </div>
          </div>

          <div class="graphic-param">
            Параметр
            <div class="graphic-param-content">
              <el-select
                v-model="value2"
                multiple
                clearable
                collapse-tags
                placeholder="Select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>

              <el-button icon="el-icon-delete" circle></el-button>
            </div>
          </div>
        </div>
      </div>
      <Chart 
          :object="pickerOptions"
  		  	:toolbar="false"
	    		:axesButton="false"/>
    </div>

    <div class="graphic-info-panel">
      <div class="info-part1">
        <div class="info-content">
          {{infoPanel.name}}
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
  </div>
</template>

<script>
import Chart from '../../chart/Chart.vue'

export default {
  props: ['object'],
  components: {
    Chart
  },

  // created(){
  //   this.$store.dispatch("TRENDS")
  // },

  mounted(){
        this.$store.dispatch("createComponent", this);
        console.warn('INSTANCES', this.$store.state.instances)
  },

  computed: {
    infoPanel(){
      return this.$store.getters.infoPanelData;
    },
  },

  data() {
    return {

      class:'modalChart',

        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value2: [],

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
        value2: ''
    }
  },

  methods: {
    onClick(){
      this.$emit('buttonClick')
    },
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
    border-top: 1px solid #DCDFE6;

    .graphic-control-panel {
      flex: 0 0 auto;
      border-bottom: 1px solid #DCDFE6;
      display: flex;

      .graphic-control-header{
        width: 96%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .graphic-button-header{
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

    .graphic-panel-view {
      flex: 1 1 auto;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      overflow: auto;
      padding: 20px;

      .graphic-panel-content{
        width :100%;
        height: 100%;
        display: flex; 
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        .graphic-date-picker{
          width: 50%;
          display: flex;
          flex-direction: column;
          text-align: left;
          font-size: 16px;
        }

        .graphic-param{
          width: 50%;
          display: flex;
          flex-direction: column;
          text-align: left;
          font-size: 16px;

          .graphic-param-content{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
        }
      }
    }
  }

  .graphic-info-panel {
    flex: 0 0 auto;
    display: flex;
    width: 200px;
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
      border-top: 1px solid #DCDFE6;
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
