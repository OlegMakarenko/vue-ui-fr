<template>
    <div class="tab4-step">
        <div class="tab4-header">
            4. Устройство, получив эти параметры перейдет в режим подключения к сети и 
               зарегистрируется в вашей учетной записи. Ваш ноутбук отключится от точки
               доступа устройства. После этого он пытается подключиться к вашей домашней 
               сети и в течение 5 минут после отправки данных устройством, страница 
               подключения обновится и выдаст информацию с сервера о подключении устройства.
        </div>
        
        <div class="tab4-body">
             <img src="../../../icon/waves.png" style="width: 300px; height: 90px;">
        </div>

        <div class="tab4-footer">
            <div class="tab4-invisible-div">
                <el-button @click="backClick">Назад</el-button>
            </div>

            <div class="tab4-footer-content">
                Подсказки к этому действию: <br><br>
               - У меня не обновилась страница подключения, что мне делать?<br>
               - У меня не подключилось устройство, что мне делать? 
            </div>

            <div class="tab4-footer-button">
                
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
.tab4-step{
    height: 97%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;

    .tab4-header{
        width: 100%;
        height: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tab4-body{
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .tab4-footer{
        width: 100%;
        height: 25%;
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;

        .tab4-invisible-div{
            width: 20%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .tab4-footer-content{
            width: 60%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .tab4-footer-button{
            width: 20%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>
