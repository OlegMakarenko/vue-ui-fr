<template>
    <div class="tab3-step">
        <div class="tab3-header">
            3. На странице подключения Вам понадобится ввести параметры своей 
               домашней сети Wi-Fi сети(название, пароль), к которой вы хотите 
               подключить устройство, параметры учетной записи(логин, пароль) для 
               верификации этого добавления у нас на сервере.
        </div>
        
        <div class="tab3-body">
             <img src="../../../icon/waves.png" style="width: 300px; height: 120px;">
        </div>

        <div class="tab3-footer">
            <div class="tab3-invisible-div">
                <el-button @click="backClick">Назад</el-button>
            </div>

            <div class="tab3-footer-content">
                Подсказки к этому действию: <br>
               -Как мне узнать параметры моей домашней сети?<br>
               -Я не помню логин и пароль своей учетной записи, что мне делать?   
            </div>

            <div class="tab3-footer-button">
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
.tab3-step{
    height: 97%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;

    .tab3-header{
        width: 100%;
        height: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tab3-body{
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .tab3-footer{
        width: 100%;
        height: 25%;
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;

        .tab3-invisible-div{
            width: 20%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .tab3-footer-content{
            width: 60%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .tab3-footer-button{
            width: 20%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>
