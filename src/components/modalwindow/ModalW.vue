<template>
<transition name="modal-device-fade">
    <div class="modal-mask-device-manage">
        <div class="modal-backdrop-device-manage">
            <div class="modal-device-manage"
                role="dialog"
                aria-labelledby="modalTitle"
                aria-describedby="modalDescription">
                <div class="modal-device-content">
                    
                    <div class="modal-device-header">
                        <div class="modal-device-name">
                            Подключение устройства
                        </div>
                        <div class="modal-device-button">
                            <i class="el-icon-close button-close" @click="close"></i>
                        </div>
                    </div>

                    <div class="modal-device-body">
                        <div class="device-body-content">
                            <!-- Для аксессуара устройства выберите тип подключаемого устройства -->
                        </div>

                        <div class="device-body-button">
                            <!-- <el-button class="button-vega" @click="wifiClick">Аксессуар VEGA 4</el-button>
                            <el-button class="button-vega">Аксессуар VEGA 1S</el-button> -->
                            <div class="body-text">Введите ID подключаемого устройства: </div>
                            <el-input class="input-body" v-model="inputBody"></el-input>
                        </div>
                    </div>
                    
                    <div class="modal-device-footer">
                        <!-- <div>
                            После выбора типа акссесуара Вам будут показаны
                            соотвотствующие шаги подключения его в учетную
                            запись.
                        </div> -->
                            <el-button type="primary" @click="addDevice">Подключить устройство</el-button>                    
                    </div>

                    <modalWifi v-if="modalWifiVisible" @buttonClose="closeWifiModal"/>
                    
                </div>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
import modalWifi from './modalWifi.vue'

export default {
    name: 'modal',

    data(){
        return{
            modalWifiVisible: false,
            inputBody: '2019040000_LTC090_1',
            id: ''
        };
    },

    computed:{
        content() {
            return this.$store.getters.content;
        },
    },

    components:{
        modalWifi
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

        wifiClick(){
            this.modalWifiVisible = true
        },

        wifiClose(){
            this.modalWifiVisible = false
        },

        closeWifiModal(){
            this.modalWifiVisible = false
        },

        addDevice(){
            let deviceId = null;
            switch(this.inputBody) {
                case '2019040000_LTC090_1':
                    deviceId = 1;
                    break;
                case '2019040000_LTC070_1':
                    deviceId = 2;
                    break;
                case '2019040000_LTC030_1':
                    deviceId = 3;
                    break;
            }

            if(deviceId != null)
                this.$store.dispatch("getDeviceById", {id: deviceId})
                    .then(() => this.close());
            else
                this.$notify.error({message: "FALSE DEVICE ID"});
            // if(this.inputBody === '2019040000_LTC090_1'){
            //     this.$store.dispatch("getDeviceById", {id: 1})
            //     //this.$store.dispatch("getTreeGroup")
            // } else if (this.inputBody === '2019040000_LTC070_1'){
            //     this.$store.dispatch("getDeviceById", {id: 2})
            //     //this.$store.dispatch("getTreeGroup")
            // } else if(this.inputBody === '2019040000_LTC030_1'){
            //     this.$store.dispatch("getDeviceById", {id: 3})
            //     //this.$store.dispatch("getTreeGroup")
            // } else {
            //     return console.error("FALSE DEVICE ID")
            // }
        }
    }
}
</script>

<style>
.modal-mask-device-manage{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    z-index: 2;
}

.modal-backdrop-device-manage{
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    cursor: default;
}

.modal-device-manage{
    width: 50%;
    height: 40%; /* 60% */
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: none;
    cursor: default;
    padding: 10px;
}

.allp{
    margin-top: 0;
    font-size: 13px;
    text-align: center; 
}

.modal-device-content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

}

.modal-device-header{
    width: 100%;
    height: 10%;
    display: flex;

}

.modal-device-name{
    width: 96%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: #606266;
}

.modal-device-button{
    display: flex;
    align-items: center;
    justify-content: center;
}
.button-close{
    font-size: 26px;
    color: #a1adb2;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    float: right;
}

.modal-device-body{
    width: 100%;
    height: 80%;
    color: #606266;
}

.device-body-content{
    width: 100%;
    height: 10%;
    font-size: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #606266;
}

.device-body-button{
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.body-text{
    margin: 20px;
}

.input-body{
    width: 400px;
}

.button-vega{
    height: 120px;
    width: 200px;
    font-size: 18px;
}

.modal-device-footer{
    width: 100%;
    height: 30%;  
    font-size: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #606266;
}

.modal-device-fade-enter, .modal-device-fade-leave-active{
    opacity: 0;
}

.modal-device-fade-enter-active, .modal-device-fade-leave-active{
    transition: opacity .5s ease
}
</style>
