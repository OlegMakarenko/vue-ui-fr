<template>
  <div class="event-panel">

    <div class="event-panel-container">
      <div class="event-control-panel">
        <div class="event-control-header">
          События 
        </div>

        <div class="event-button-header">
          <button class="button-close" @click="onClick">x</button>
        </div>
      </div>
      <div class="event-panel-view">

        <div class="block">
          <div class="date-picker">
            <el-date-picker
              v-model="value2"
              type="datetimerange"
              :picker-options="pickerOptions"
              range-separator="-"
              start-placeholder="Start"
              end-placeholder="End"
              align="right">
            </el-date-picker>

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
          <el-table height="353px"
            :data="tableData"
            style="width: auto">
            <el-table-column
              prop="date"
              label="Время события"
              width="200">
            </el-table-column>
            <el-table-column
              prop="event"
              label="Причина соытия"
              width="200">
              <template slot-scope="scope">
                <div slot="reference" class="event-wrapper">
                  <el-tag size="medium">{{ scope.row.event }}</el-tag>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="eventMsg"
              label="Тип события">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>

    <div class="event-info-panel">
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


export default {
  components: {

  },

  computed: {
    infoPanel(){
      console.log(this.$store.getters.infoPanelData);
      return this.$store.getters.infoPanelData;
    }
  },

  data() {
    return {
      eventRightSide: true,
      tableData:[{
          date: '21:13 06.03.19',
          event: 'Пользователь',
          eventMsg: 'Переход в ручной режим'
      },{
          date: '01:15 05.04.19',
          event: 'Регулятор',
          eventMsg: 'Конец нагрева с 21*С на 24*С'
      },{
          date: '14:20 04.03.19',
          event: 'Регулятор',
          eventMsg: 'Начало нагрева с 21*С на 24*С'
      },{
          date: '18:33 03.03.19',
          event: 'Пользователь',
          eventMsg: 'Переход в режим по графику'
      },{
          date: '21:48 02.03.19',
          event: 'Регулятор',
          eventMsg: 'Повышение температуры'
      },{
          date: '21:48 02.03.19',
          event: 'Регулятор',
          eventMsg: 'Повышение температуры'
      }],
      value2: '',
    };
  },

  methods: {
    onClick(){
      this.$emit('buttonClick')
    },

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
          display: flex; 
          justify-content: space-between;
        }

        .pagination{
          width: 45%;
          display: flex; 
          justify-content: center;
        }
      }

      .event-content{
        width: 99.9%;
        height: 100%;
      }
    }
  }

  .event-info-panel {
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
