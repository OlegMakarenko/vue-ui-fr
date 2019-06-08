<template>
<div class="first_tab">

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
                <!-- <input type="number"
                       v-model="counter"> -->

                <p class="counter_p">{{counter}}*C</p>
                <button class="button_m" @click="counter += 1"><p style="font-size:40px; color: white; margin-top: 25%;">+</p></button>
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
            <br>
            <br>
            <br>
            <br>
            <br>
            <p>123123123123123</p>
            <p>123123123123123</p>
            <br>
            <br>            
            <hr>
            <br>
            <br>
            <br>
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
        handleChange(value){
            console.log(value);
        },

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

.first_tab{
    width: 100%;
    height: 100vh;
}

.header_text{
    margin-top: -63%;
}

.header_paragraph{
    margin-top: 4%;
}

.main_tabs{
    margin-right: 2%;
    float: right;
    display: flex;
}

.main_input{
    width: 30%;
    height: 10vh;
    margin-left: 7%;
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
    font-size: 58px;
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

.center_side{
    width: 80%;
    margin-left: 10%;
    margin-top: 7%;
    text-align: center;
}

.right_side{
    width: 10%;
    margin-top: -45.6%;
    height: 80vh;
    border-left: 1px solid #666;
    word-wrap: break-word;
    float: right;
}

/* #own{
    width: 100%;
} */

/* .main_tabs2{
    margin-top: -40%;
} */

/* .main-tabs{
    width: 20%;
} */

/* .first-tab{
    margin-top: 0%;
    width: 80%;
    height: 70vh;
    margin-left: 15%;
    float: left;
    position: relative;
    border-right: 1px solid #666;
} */
/* .main_tabs{
    width:20%;
    float: left;
    display: block;
}

.main_tabs2{
    margin-top:-10%; 
    width: 60%;
    float: left;
    display: flex;
}


.tabn2{
    margin-right: 20%;
    float: right;
}

.input-number{
    float: left;
} */
</style>

