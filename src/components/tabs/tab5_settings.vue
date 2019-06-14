<template>
<div class="settings_manager">
    <div class="center_side">
            <p class="header_text">Регулятор в пристройке</p>
            <p class="header_paragraph">Щиток</p>
            
            <div class="main_tabs">
                <el-radio-group v-model="radio1" size="mini">
                    <el-radio-button label="В сети"></el-radio-button>
                </el-radio-group>

                <el-radio-group v-model="radio2" size="mini">
                    <el-radio-button label="Ручной"></el-radio-button>
                    <el-radio-button label="По графику"></el-radio-button>
                </el-radio-group>
            </div>

            <div class="main_input">
                <button class="button_p" @click="counter -= 1">
                    <p style="font-size:40px; color: white; margin-top: 25%;">-</p>
                </button>

                <p class="counter_p">{{counter}}<span style="font-size: 50px">&#8451</span></p>
                <button class="button_m" @click="counter += 1">
                    <p style="font-size:40px; color: white; margin-top: 25%;">+</p>
                </button>
            </div>
            
            <!-- <div class="main_input">
                <el-input-number 
                    class="input-number"
                    v-model="num" 
                    @change="handleChange" 
                    :min="1" 
                    :max="60"
                    size="large">
                </el-input-number>
            </div> -->
    </div>

        <div class="right_side">
            <p>123123123123123</p>
            <p>123123123123123</p>
            <br>
            <br>
            <hr>
            <p>123123123123123</p>
            <p>123123123123123</p>
        </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            radio1: 'В сети',
            radio2: 'Ручной',
            counter: 30
        }
    },

    methods:{
        // handleChange(value){
        //     console.log(value);
        // },

        plusMinus(){
            if(this.counter){
                this.counter += 1;
            } else {
                this.counter -= 1;
            }
        }
    }
}
</script>

<style>

.settings_manager{
    margin-left: 12.4%;
    width: 87.8%;
    height: 100%;
}

.first_tab{
    width: 100%;
    height: 100%;
}

/* .main_tabs{
    width: 60%;
    float: right;
} */

.main_input{
    width: 30%;
    height: 10%;
    margin-left: 5%;
    float: left;
    display: block;
} 

.button_p{
    height:10vh;
    width: 20%;
    float: left;
    background-color: #c0d3ef;
    border: none;
    outline: none;
    cursor: pointer;
}

.counter_p{
    width:45%; 
    height:10vh;
    margin-top:0; 
    font-size: 54px;
    float: left; 
    color: white; 
    background-color: #a5c1e9; 
}

.button_m{
    height:10vh;
    width: 20%;
    float: left;
    background-color: #c0d3ef;
    border: none;
    outline: none;
    cursor: pointer;
}

/* .center_side{
    width: 80%;
    text-align: center;
} */

.right_side{
    /* width:10%; */
    /* height: 100%; */
    border-left: 1px solid #666;
    float: right;
}
</style>

