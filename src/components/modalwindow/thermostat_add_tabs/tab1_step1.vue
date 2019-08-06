<template>
    <div class="tab1_step">
        <div class="tab1-header">
            1. Переключите регулятор в режим точки доступа
        </div>
        
        <div class="tab1-body">
            <img src="./waves.png" class="waves_image">

        </div>

        <div class="tab1-footer">
            <div class="invisible-div">

            </div>

            <div class="footer-content">
                Подсказки к этому действию: <br>
                - Как переключить регулятор в режим точки доступа?<br>
                - Устройство не переключается, что мне делать?
            </div>

            <div class="footer-button">
                <el-button @click="nextClick">Вперед</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data(){
        return{
            
        }
    },
    methods:{
        nextClick(){
            this.$emit('buttonNext')
        },

        backClick(){
            this.$emit('buttonBack')
        }
    }
}
</script>


<style lang="scss" scoped>
.tab1_step{
    height: 97%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;

    .tab1-header{
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tab1-body{
        width: 100%;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tab1-footer{
        width: 100%;
        height: 25%;
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;

        .invisible-div{
            width: 20%;
            height: 100%;
        }

        .footer-content{
            width: 60%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .footer-button{
            width: 20%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

    }
}
</style>

