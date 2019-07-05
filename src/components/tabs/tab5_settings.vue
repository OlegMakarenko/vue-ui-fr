<template>
    <div class="settings_manager">
        <div class="settings_header">
            Регулятор в пристройке<br><br><br>
            Щиток
        </div>

        <div class="display_settings">
            <button class="display_button">Фото</button>
            <button class="display_button">Цвет</button>
        </div>

        <div class="settings_content">
            <button class="settings_button">Режим работы</button>
            <button class="settings_button">Совмеcтный доступ</button>
            <button class="settings_button">Прошивка</button>
            <button class="settings_button">Дополнительные настройки</button>
        </div>

    </div>
</template>

<script>

export default {

    data(){
        return{
            isDeviceHaveVisible: false,
        }
    },

    components:{
        // devicehave
    },

    methods:{
        showDeviceHave(){
            this.isDeviceHaveisible = true;
        },

        closeDeviceHave(){
            this.isDeviceHaveVisible = false;
        },

        closeDevice(){
            this.$emit('close');
        },
    }
}
</script>

<style>

.settings_manager{
    width: 100%;
    height: 80%;
}

.settings_header{
  width: 100%;
  height: 10%;
  text-align: center;
}

.settings_content{
    width: 40%;
    height: 90%;
    margin-left: 25%;
    margin-top: 10%;
    float: left;
    display: table;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: stretch;
}

.settings_button{
    width: 50%;
    height:50%;
}

.display_settings{
    width: 20%;
    height: 50%;
    margin-top: 10%;
    margin-right: 14.9%;
    float: right;
    display: table;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: stretch;
}

.display_button{
    width: 100%;
    height: 90%;
}

</style>
