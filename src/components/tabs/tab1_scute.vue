<template>
    <div id="own">
        <div class="first-tab">
            <div>
                <el-radio-group v-model="radio1" size="mini" class="tabn1">
                    <el-radio-button label="Ручной"></el-radio-button>
                    <el-radio-button label="По графику"></el-radio-button>
                </el-radio-group>

                <el-radio-group v-model="radio2" size="mini" class="tabn2">
                    <el-radio-button label="В сети"></el-radio-button>
                </el-radio-group>
            </div>

            <el-input-number 
                class="input-number"
                v-model="num" 
                @change="handleChange" 
                :min="1" 
                :max="60"
                size="large"></el-input-number>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            num: '1',
            radio1: 'Ручной',
            radio2: 'В сети'
        }
    },

    methods:{
        handleChange(value){
            console.log(value);
        },
    }
}
</script>

<style>
.first-tab{
    margin-top: 0%;
    width: 80%;
    height: 70vh;
    margin-left: 15%;
    float: left;
    position: relative;
    border-right: 1px solid #666;
}

.tabn1{
    margin-top: 5%;
    margin-right: 2%;
    float: right;
}

.tabn2{
    margin-top: 5%;
    margin-right: 10%;
    float: right;
}

.input-number{
    margin-top: 4.5%;
    margin-left: 15%;
    float: left;
}
</style>

