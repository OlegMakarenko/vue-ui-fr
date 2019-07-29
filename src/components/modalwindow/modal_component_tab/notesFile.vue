<template>
<div class="event-manager">
    <div class="event-center-side" >
        <div class="event-content">
            <el-table
                :data="tableData"
                max-height="450">

                <el-table-column type="expand">
                    <template slot-scope="props">
                        <p>Тип события: {{props.row.eventMsg}}</p>
                    </template>
                </el-table-column>

                <el-table-column 
                    width="400" 
                    label="Время события"
                    prop="date">
                </el-table-column>

                <el-table-column 
                    width="400" 
                    label="Причина события" 
                    prop="event">
                </el-table-column>
            </el-table>
        
        </div>
        <i class="el-icon-info event-info" @click="eventRightSide = !eventRightSide"></i>
            <div class="event-right-side" v-if="eventRightSide">
                <p>123123123123123</p>
                <p>123123123123123</p>
                <br>
                <br>
                <hr>
                <p>123123123123123</p>
                <p>123123123123123</p>
            </div>
    </div>
</div>
</template>

<script>
export default {

    data(){
        return{
            eventRightSide: false,

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
        }
    },

    methods:{
        
    }
}
</script>

<style scoped>

.event-manager{
    width: 100%;
    height: 100%;
}

.event-content{
    width: 90%;
    height: 90%;
    display: flex;
    padding: 20px;
}

.event-center-side{
    width: 100%;
    height: 100%;
    display: flex;
}

.event-right-side{
    width: 10%;
    height: 100%;
    border-left: 1px solid #666;
    float: right;
    word-wrap: break-word;
}

.event-info{
    float: right;
    display: flex;
    color: #565656;
    font-size: 25px;
    cursor: pointer;
    margin-top: 12px;
}

</style>

