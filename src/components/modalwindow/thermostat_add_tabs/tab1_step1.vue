<template>
    <div class="tab1_step1">
            <!-- <button class="btn-device-left" @click="close" style="cursor: pointer;">Назад</button> -->
        <div class="step1_title">
            <h>1. Переключите регулятор в режим точи доступа</h>
        </div>

        <div class="step1_content">
            <img src="./waves.png" class="waves_image">
        </div>

        <div class="step1_footer">
            <h>
                Подсказки к этому действию: <br><br>
                - Как переключить регулятор в режим точки доступа?<br>
                - Устройство не переключается, что мне делать?
            </h>
        </div>
        
    </div>
</template>

<script>
export default {
    props:['title'],

    data(){
        return{
            
        }
    },
    methods:{
        close(){
            this.$emit('close');
        }
    }
}
</script>


<style>
.tab1_step1{
    height: 80%;
    width: 100%;
}

.step1_title{
    width: 80%;
    margin-left: 65px;
    margin-top: 10px;
    color: #565656;
}

.waves_image{
    margin-top: 30px;
    height: 150px;
    width: 300px;
}

.step1_footer{
    width: 80%;
    margin-top: 56px;
    margin-left: 65px;
    color: #565656;
}
</style>

