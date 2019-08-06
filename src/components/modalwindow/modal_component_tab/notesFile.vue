<template>
    <div class="tab4_step4">
        <div class="step4_header">
            <h>4. Устройство, получив эти параметры перейдет в режим подключения к сети и 
               зарегистрируется в вашей учетной записи. Ваш ноутбук отключится от точки
               доступа устройства. После этого он пытается подключиться к вашей домашней 
               сети и в течение 5 минут после отправки данных устройством, страница 
               подключения обновится и выдаст информацию с сервера о подключении устройства.
            </h>
        </div>
        
        <div class="step4_content">
            <h>
            </h>
        </div>
        
            <img src="./waves.png" style="width: 300px; height: 90px; margin-top: 10px;">
        
        <div class="step4_footer">
            <h>Подсказки к этому действию: <br><br>
               - У меня не обновилась страница подключения, что мне делать?<br>
               - У меня не подключилось устройство, что мне делать? 
            </h>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>

<style>
.tab4_step4{
    width:100%;
    height: 80%;
}

.step4_header{
    width: 90%;
    margin-top: 10px;
    margin-left: 35px;
    color: #565656;
}

.step4_content{
    width: 90%;
    margin-top: 15px;
    margin-left: 35px;
    color: #565656;
}

.step4_footer{
    width: 90%;
    margin-top: 25px;
    margin-left: 35px;
    color: #565656;
}
</style>

