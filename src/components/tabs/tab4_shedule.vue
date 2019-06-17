<template>
    <div class="schedule_manager">
        <div class="schedule_right_side">
                <p>123123123123123</p>
                <p>123123123123123</p>
                <br>
                <br>
                <hr>
                <p>123123123123123</p>
                <p>123123123123123</p>
            </div>

        <div class="schedule_header">
            <div>Регулятор в пристройке</div>
            <div style="margin-top:16px;">Расписание</div>
        </div>


        <div class="schedule_content">
            <input type="text" class="oneinput_schedule" v-model="input_day1">
            <input type="button" class="twoinput_schedule" v-model="inpur_temp1">
            <button class="schedule_onoff_btn" @click="switchButtons" v-if="showb == button1">
                ВКЛ
            </button>
            <button class="schedule_onoff_btn" @click="switchButtons" v-else>
                ВЫКЛ
            </button>
            <input type="button" class="twoinput_schedule" v-model="inpur_temp2">

            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            showb: null, //showing buttons
            button1: 'btn1',
            button2: 'btn2',
            input_day1: 'ПН',
            inpur_temp1: '22*C',
            inpur_temp2: '22*C'
        }
    },

    components:{
        // 'btn1': button1,
        // 'btn2': button2
    },

    methods:{
        switchButtons(){
            if (this.showb == this.button1) {
                this.showb = this.button2;
            } else {
                this.showb = this.button1;
            }
        },
    }
}
</script>

<style>
.schedule_manager{
    margin-left: 12.4%;
    width: 87.8%;
    height: 100%;
}

.schedule_header{
    height: 20%;
}

.schedule_content{
    width: 100%;
    padding: 0;
    margin: 0;
    /* display: table-header-group; */
    /* align-self: center; */
}

.oneinput_schedule{
    height:40px; 
    width:40px;
    font-size: 20px;
    border: 1px solid #84b2f3;
    background-color: white;
    color: #a5c1e9;
    text-align: center;
}

.schedule_onoff_btn{
    width: 250px;
    height: 45px;
    font-size: 20px;
    color: #a5c1e9;
    background-color: white;
    border: 1px solid #84b2f3;
    text-align: center;
}

.twoinput_schedule{
    height: 45px;
    width: 200px;
    font-size: 20px;
    border: 1px solid #84b2f3;
    background-color: #a5c1e9;
    color: white;
    text-align: center;
}

.schedule_right_side{
    width: 10%;
    height: 100%;
    border-left: 1px solid #666;
    float: right;
    word-wrap: break-word;
}
</style>

