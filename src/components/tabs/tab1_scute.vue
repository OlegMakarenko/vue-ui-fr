<template>
<div class="scute_manager">
    <div class="scute_center_side">
        <div class="right_side">
            <p>123123123123123</p>
            <p>123123123123123</p>
            <br>
            <br>
            <hr>
            <p>123123123123123</p>
            <p>123123123123123</p>
        </div>

        <div class="scute_header">
            Регулятор в пристройке <br><br>
            Щиток
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

        <div class="main_tabs">
            <button class="btn_online">В сети</button>
            
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

.btn_online{
    width: 20%; 
    height: 30px; 
    margin-left: 14.5%;
    color: white;
    background-color: #a5c1e9;
    border: 1px solid #a5c1e9;
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

</style>

