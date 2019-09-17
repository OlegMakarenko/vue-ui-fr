<template>
<transition name="modal-device-wifi-wifi-fade">
    <div class="modal-mask-device-wifi-manage">
        <div class="modal-backdrop-device-wifi-manage">
            <div class="modal-device-wifi-manage"
                role="dialog"
                aria-labelledby="modalTitle"
                aria-describedby="modalDescription">
                <div class="modal-device-wifi-content">
                    
                    <div class="modal-device-wifi-header">
                        <div class="modal-device-wifi-name">
                            Подключение устройства
                        </div>
                        <div class="modal-device-wifi-button">
                            <button class="button-close" @click="closeWifi">x</button>
                        </div>
                    </div>

                    <div class="modal-device-wifi-body">
                        <div class="device-wifi-body-content">
                            Для подключения устройства выберите тип подключаемого устройства
                        </div>

                        <div class="device-wifi-body-button">
                            <el-button class="button-wifi-gsm" @click="deviceVegaClick">Wi-Fi терморегулятор</el-button>
                            <el-button class="button-wifi-gsm">GSM терморегулятор</el-button>
                        </div>
                    </div>
                    
                    <div class="modal-device-wifi-footer">
                        <div>
                            После выбора типа устройства Вам будут показаны
                            соотвотствующие шаги подключения его в учетную
                            запись.
                        </div>
                    </div>

                    <deviceVega v-if="vegaVisible" @buttonClick="closeModal"/>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
import deviceVega from './DeviceV4'

export default {
    name: 'modal',

    data(){
        return{
            vegaVisible: false
        };
    },

    components:{
        deviceVega
    },


    methods: {
        handleChange(value){
            console.log(value);
        },
        closeModal(){
           this.vegaVisible = false
        },

        close(){
            this.$emit('close')
        },

        deviceVegaClick(){
            this.vegaVisible = true
        },

        deviceVegaClose(){
            this.vegaVisible = false
        },

        closeWifi(){
            this.$emit('buttonClose')
        }
    }
}
</script>

<style>
.modal-mask-device-wifi-manage{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: rgba(0, 0, 0, .5); */
    display: table;
    z-index: 2;
}

.modal-backdrop-device-wifi-manage{
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    cursor: default;
}

@-moz-document url-prefix() {
  .modal-backdrop-device-wifi-manage {
    width: 100%;
    height: 63.5em;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    cursor: default;  
  }
}

.modal-device-wifi-manage{
    width: 50%;
    height: 60%;
    background: #ffffff;
    /* box-shadow: 2px 2px 20px 1px; */
    overflow-x: none;
    cursor: default;
    padding: 10px;
}

.allp{
    margin-top: 0;
    font-size: 13px;
    text-align: center; 
}

.modal-device-wifi-content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

}

.modal-device-wifi-header{
    width: 100%;
    height: 10%;
    display: flex;

}

.modal-device-wifi-name{
    width: 96%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: #606266;
}

.modal-device-wifi-button{
    display: flex;
    align-items: center;
    justify-content: center;
}
.button-close{
    font-size: 30px;
    color: #a1adb2;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    float: right;
}

.modal-device-wifi-body{
    width: 100%;
    height: 80%;
    color: #606266;
}

.device-wifi-body-content{
    width: 100%;
    height: 10%;
    font-size: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #606266;
}

.device-wifi-body-button{
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.button-wifi-gsm{
    height: 120px;
    width: 200px;
    font-size: 16px;
}

.modal-device-wifi-footer{
    width: 100%;
    height: 10%;  
    font-size: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #606266;
}

.modal-device-wifi-fade-enter, .modal-device-wifi-fade-leave-active{
    opacity: 0;
}

.modal-device-wifi-fade-enter-active, .modal-device-wifi-fade-leave-active{
    transition: opacity .5s ease
}
</style>
