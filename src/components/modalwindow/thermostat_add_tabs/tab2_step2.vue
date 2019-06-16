<template>
    <div class="tab2_step2">
        <div class="step2_header">
            <h>2.В доступных WI-FI сетях вашего ноутбука у Вас 
            течение 15 секунд должна появиться новая сеть c 
            составным названием:<br><br> например: vega__123456789011</h>
        </div>
        
        <div class="step2_content">
            <h>Подключите ноутбук к этой сети, введя пароль согласно интсрукции.
               После этого у Вас на новой вкладке браузера откроется новая  
               страница подключения. Здесь вы сможете смотреть на дальнейшие 
               шаги и подсказки. 
            </h>
        </div>
        
            <img src="./waves.png" style="width: 150px; height: 80px; margin-top: 20px;">
        
        <div class="step2_footer">
            <h>Подсказки к этому действию: <br><br>
               -Как мне узнать параметры моей домашней сети?<br>
               -Я не помню логин и пароль своей учетной записи, что мне делать? 
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
.tab2_step2{
    width:100%;
    height: 80%;
}

.step2_header{
    width: 90%;
    margin-top: 10px;
    margin-left: 35px;
    color: #565656;
}

.step2_content{
    width: 90%;
    margin-top: 15px;
    margin-left: 35px;
    color: #565656;
}

.step2_footer{
    width: 90%;
    margin-top: 15px;
    margin-left: 35px;
    color: #565656;
}

</style>

