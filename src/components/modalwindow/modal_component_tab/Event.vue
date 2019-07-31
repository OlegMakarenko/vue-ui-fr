<template>
  <div class="event-panel">

    <div class="event-panel-container">
      <div class="event-control-panel">
          События <button class="button-close" @click="onClick">x</button>
      </div>
      <div class="event-panel-view">
          <el-table
                :data="tableData">

                <el-table-column type="expand">
                    <template slot-scope="props">
                        <p>Тип события: {{props.row.eventMsg}}</p>
                    </template>
                </el-table-column>

                <el-table-column 
                    width="350" 
                    label="Время события"
                    prop="date">
                </el-table-column>

                <el-table-column 
                    width="350" 
                    label="Причина события" 
                    prop="event">
                </el-table-column>
            </el-table>
      </div>
    </div>

    <div class="event-info-panel">
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
            }]
    };
  },

  methods: {
    onClick(){
      this.$emit('buttonClick')
    }
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

    .scute-info{
        float: right;
        cursor: pointer 
    }

    .event-panel-view {
      flex: 1 1 auto;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      overflow: auto;
      padding: 20px;
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
    }

    .info-part2{
      width: 100%;
    }
  }
}
</style>
