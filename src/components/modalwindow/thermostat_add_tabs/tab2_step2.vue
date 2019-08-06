<template>
    <div class="tab2-step">
        <div class="tab2-header">
            2.В доступных WI-FI сетях вашего ноутбука у Вас 
            течение 15 секунд должна появиться новая сеть c 
            составным названием:
        </div>
        
        <div class="tab2-body">
             например: vega__123456789011<br><br>
            Подключите ноутбук к этой сети, введя пароль согласно интсрукции.
            После этого у Вас на новой вкладке браузера откроется новая  
            страница подключения. Здесь вы сможете смотреть на дальнейшие 
            шаги и подсказки.
            <img src="./waves.png" style="width: 150px; height: 80px; margin-top: 20px;">

        </div>

        <div class="tab2-footer">
            <div class="tab2-invisible-div">
                <el-button @click="backClick">Назад</el-button>
            </div>

            <div class="tab2-footer-content">
                Подсказки к этому действию: <br>
               -Как мне узнать параметры моей домашней сети?<br>
               -Я не помню логин и пароль своей учетной записи, что мне делать? 
            </div>

            <div class="tab2-footer-button">
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
.tab2-step{
    height: 97%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;

    .tab2-header{
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tab2-body{
        width: 100%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .tab2-footer{
        width: 100%;
        height: 25%;
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;

        .tab2-invisible-div{
            width: 20%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .tab2-footer-content{
            width: 60%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .tab2-footer-button{
            width: 20%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>

