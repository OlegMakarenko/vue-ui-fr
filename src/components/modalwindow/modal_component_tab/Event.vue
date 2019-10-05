<template>
  <div class="event-panel">
    <div class="event-panel-container">
      <div class="event-panel-view" >
        <div class="block">
          <div class="date-picker" >
           
            <div style="display: flex;
                        flex-direction: column;
                        text-align: left;
                        font-size: 16px;
                        margin-bottom:20px;">
          Дата:
             <el-date-picker
                v-model="eventData"
                @change="dataChange"
                type="daterange"
                align="right"
                range-separator="До"
                start-placeholder="Начальная дата"
                end-placeholder="Конечная дата"
                :picker-options="pickerOptions"
                value-format="timestamp">
              </el-date-picker>
            </div>

            <el-button icon="el-icon-delete" circle></el-button>
          </div>

          <div class="pagination">
            <el-pagination
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
          </div>
        </div>

        <div class="event-content">
          <el-table class="event-content-table"
            
            :data="eventsDataOutput">

            <!-- :data отвечает за прием сообщения с сервера -->
            <el-table-column
              prop="datetime" 
              label="Время события"
              header
              > 
              <!-- prop отвечает за взятие переменной из сообщения -->
              <template slot-scope="scope">
                <div slot="reference" class="event-wrapper">
                  {{ convertServerDate(scope.row.datetime) }}
                </div>
              </template>
            </el-table-column>
            <!-- <el-table-column
              prop="eventType"
              label="Тип события"
              >
              <template slot-scope="scope">
                <div slot="reference" class="event-wrapper">
                  <el-tag 
                    size="medium" 
                    :type="scope.row.eventType === 'normal' ? 'primary': 'danger'">
                      {{ scope.row.eventType }}
                  </el-tag>
                </div>
              </template>
            </el-table-column> -->
            <el-table-column
              prop="description"
              label="Описание">
            </el-table-column>
            <el-table-column
              width="150px"
              prop="source"
              label="Устройство">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { convertServerDate } from '../../../utils.js'
export default {
  props: ['object'],
  components: {

  },

  created(){
    return this.$store.commit('eventsData')
  },

  mounted(){
    this.$store.dispatch("createComponent", this);
    console.warn('INSTANCES', this.$store.state.instances)
  },

  computed: {
    eventsDataOutput(){
       return this.$store.getters.eventsData //вывод данных с сервера
    },

    eventData:{
      get() {
        return this.$store.getters.eventsDateRange; //запрос на сервер и получение данных
      },
      set(value) {
        this.$store.commit("eventsDateRange", value)
        this.$store.dispatch("getEventData");
      }
    },
  },

  data() {
    return {
      class: 'modalEvent',

      eventRightSide: true,

      pickerOptions: {
      shortcuts: [{
        text: 'Последняя неделя',
        onClick(picker) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
          picker.$emit('pick', [start, end]);
        }
      }, {
        text: 'Последний месяц',
        onClick(picker) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
          picker.$emit('pick', [start, end]);
        }
      }, {
        text: 'Последние 3 месяца',
        onClick(picker) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
          picker.$emit('pick', [start, end]);
        }
      }]
    },
    value2: ''
    };
  },

  methods: {
    onClick(){
      this.$emit('buttonClick')
    },

    dataChange(value){
      this.$store.commit("eventsData", value);
      this.$store.dispatch("getEventData");

      console.warn("Event value == ", value)
    },

    convertServerDate(e){
      return convertServerDate(e);
    },
  }
};
</script>

<style lang="scss" scoped>
.event-panel {
  display: flex;
  height: 100%;
  width: 100%;

  
  .event-panel-container {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 90%;
    border-top: 1px solid #DCDFE6;

    .event-control-panel {
      flex: 0 0 auto;
      border-bottom: 1px solid #DCDFE6;
      display: flex;

      .event-control-header{
        width: 96%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .event-button-header{
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

    .scute-info{
        float: right;
        cursor: pointer 
    }

    .event-panel-view {
      flex: 1 1 auto;
      display: flex;
      flex-wrap: wrap;
      padding: 20px;

      .block{
        width: 100%;
        height: 15%;
        display: flex;
        align-items: center;
        flex-direction: row;

        .date-picker{
          width: 55%;
          height:100%;
          display: flex; 
          justify-content: space-between;
          align-items: center;
        }

        .pagination{
          width: 45%;
          display: flex; 
          justify-content: center;
        }
      }

      .event-content{
        width: 99.9%;
        height: 85%;

        .event-content-table{
          width: 100%;
          height: 65vh;
          overflow: auto;
        }
      }
    }
  }
}
</style>
