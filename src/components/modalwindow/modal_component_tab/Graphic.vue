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
      </div>                 :value="trendsDate"
                @change="dateChange"-->
      

      <div class="graphic-panel-view">
        <div class="graphic-panel-content">
          <div class="graphic-date-picker" >
            Дата:
            <div>
             <el-date-picker
                v-model="trendsDate"
                type="daterange"
                align="right"
                range-separator="До"
                start-placeholder="Начальная дата"
                end-placeholder="Конечная дата"
                :picker-options="pickerOptions"
                value-format="timestamp"
                >
              </el-date-picker>
            </div>
          </div>

          <div class="graphic-param">
            Параметр
            <div class="graphic-param-content">
              <el-select
                :value="trendsFilters"
                @change="filterChange"
                multiple
                clearable
                collapse-tags
                placeholder="Выбрать">
                <el-option
                  v-for="item in trendsFiltersOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>      
            </div>
          </div>
          <el-button icon="el-icon-delete" circle class="clear-button"></el-button>
        </div>
      </div>
      <Chart 
        :object="pickerOptions"
        :toolbar="true"
        :axesButton="true"
        :data="chartData"
      />
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
    this.$store.dispatch("getFilterOptions");
  },

  computed: {
    chartData(){
      return this.$store.getters.chartData;
    },

    trendsDate:{
      get() {
      return this.$store.getters.trendsDate;
      },
      set(value) {
        this.$store.commit("trendsDate", value)
        this.$store.dispatch("getChart");
      }
    },
    
    trendsFilters(){
      return this.$store.getters.trendsFilters;
    },

    trendsFiltersOptions(){
      return this.$store.getters.trendsFiltersOptions
    },

    getSensFilterOptions(){
      return this.$store.dispatch("getSensFilterOptions", {id: this.id})
    }
  },

  data() {
    return {
      class:'modalChart',

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

    filterChange(value){
      this.$store.commit("trendsFilters", value);
      this.$store.dispatch("getChart");
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
  
      flex-wrap: wrap;
      overflow: auto;
      padding: 20px;

      .graphic-panel-content{
        width :100%;
        height: 100%;
        display: flex; 
        flex-direction: row;
        align-items: center;
        

        .graphic-date-picker{
          display: flex;
          flex-direction: column;
          text-align: left;
          font-size: 16px;
          margin-right: 20px;
        }

        .graphic-param{
   
          display: flex;
          flex-direction: column;
          text-align: left;
          font-size: 16px;
          margin-right: 20px;

          .graphic-param-content{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .clear-button{
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
