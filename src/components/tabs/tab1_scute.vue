<template>
<div class="scute_manager">
    <div class="scute_center_side" >
        <transition name="scute_slide_fade">
            <div class="right_side" v-if="scute_right_side">
                <p>123123123123123</p>
                <p>123123123123123</p>
                <br>
                <br>
                <hr>
                <p>123123123123123</p>
                <p>123123123123123</p>
            </div>
        </transition>


        <div class="scute_header">
            Регулятор в пристройке <br><br>
            Щиток
        </div>

        <i class="el-icon-info scute_info" @click="scute_right_side = !scute_right_side"></i>

        <div class="main_input">
            <button class="button_p" @click="counter -= 1">
                <p style="font-size:40px; color: white; margin-top: 40%;">-</p>
            </button>

            <p class="counter_p">{{counter}}<span style="font-size: 50px">{{'&#8451'}}</span></p>
            
            <button class="button_m" @click="counter += 1">
                <p style="font-size:40px; color: white; margin-top: 40%;">+</p>
            </button>
        </div>

        <div class="main_tabs">
                <button class="scute_on_btn" @click="switchButtonsScute" v-if="showbscute == button11scute">
                    В сети
                </button>
                <button class="scute_off_btn" @click="switchButtonsScute" v-else>
                    В сети
                </button>
            
            
            <button style="width:20%; 
                            margin-right: 18.5%; 
                            color: #a5c1e9; 
                            background-color: white" 
                    class="group_btn">По графику</button>

            <button class="group_btn" style="width:20%;">Ручной</button>

            <div class="input_value">
                <input class="all_input" type="text" v-model="title_1">
                <input class="all_input" type="text" v-model="title_2">
                <input class="all_input" type="text" v-model="title_3">
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    // props:['title_1','title_2', 'title_3'],

    data(){
        return{
            scute_right_side: true,

            showbscute: null, //showing buttons online-offline
            button11scute: 'btn11',
            button21scute: 'btn21',
            selectedComponent: null,

            radio1: 'В сети',
            radio2: 'Ручной',
            counter: 30,
            title_1: 'A = 3 мкА',
            title_2: 'V = 12.5В',
            title_3: 'P = 0.4 кВт/Час'
        }
    },

    methods:{
        // handleChange(value){
        //     console.log(value);
        // },

        switchButtonsScute(){
            if (this.showbscute == this.button11scute) {
                this.showbscute = this.button21scute;
            } else {
                this.showbscute = this.button11scute;
            }
        },

        plusMinus(){
            if(this.counter){
                this.counter += 1;
            } else {
                this.counter -= 1;
            }
        },

        close(){
            this.$emit('close');
        },
    }
}
</script>

<style>

.scute_manager{
    margin-left: 12.4%;
    width: 87.6%;
    height: 100%;
}

.scute_center_side{
    width: 100%;
    height: 100%;
}

.scute_header{
  width: 100%; 
  height: 10%;
  text-align: center;
}

.first_tab{
    width: 100%;
    height: 100%;
}

.main_tabs{
    width: 60%;
    margin-top: 2%;
    float: right;
}

.right_side{
    width: 10%;
    height: 100%;
    border-left: 1px solid #666;
    float: right;
    word-wrap: break-word;
}

.scute_info{
    margin-left: 86.5%;
    /* float: right; */
    /* margin-right: 10px; */
    display: flex;
    color: #565656;
    font-size: 25px;
    cursor: pointer;
}

.main_input{
    width: 25%;
    height: 14%;
    margin-top: 2%;
    margin-left: 4%;
    float: left;
    display: block;
} 

.button_p{
    height:100%;
    width: 20%;
    float: left;
    background-color: #c0d3ef;
    border: none;
    outline: none;
    cursor: pointer;
}

.counter_p{
    width:50%; 
    height:100%;
    margin-top:0; 
    font-size: 54px;
    float: left; 
    color: white; 
    background-color: #a5c1e9; 
}

.button_m{
    height:100%;
    width: 20%;
    float: left;
    background-color: #c0d3ef;
    border: none;
    outline: none;
    cursor: pointer;
}

.scute_on_btn{
    width: 20%; 
    height: 30px; 
    margin-left: 14.5%;
    font-size: 14px;
    color: white;
    background-color: #a5c1e9;
    border: 1px solid #84b2f3;
    text-align: center;
}

.scute_off_btn{
    width: 20%; 
    height: 30px; 
    margin-left: 14.5%;
    font-size: 14px;
    color: #a5c1e9;
    background-color: white;
    border: 1px solid #84b2f3;
    text-align: center;
}

.group_btn{
    /* display:table-row-group; */
    height:30px;
    float: right;
    color: white;
    background-color: #a5c1e9;
    border: 1px solid #a5c1e9;
}

.input_value{
    margin-top: 5%;
}

.all_input{
    width:20%; 
    height: 23px;
    margin-right: 5px;
    color: #c0d3ef;
    border: 1px solid #c0d3ef;
    text-align: center;
    font-size: 15px;   
}

.scute-slide-fade-enter-active {
  transition: all .2s ease;
}

.scute-slide-fade-leave-active {
  transition: all .2s ease;
}

.scute-slide-fade-enter, .scute-slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}

</style>

