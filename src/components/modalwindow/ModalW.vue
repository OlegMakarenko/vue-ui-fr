<template>
<transition name="modal-fade">
    <div class="modal-mask">
    <div class="modal-backdrop">

        <div class="modal"
             role="dialog"
             aria-labelledby="modalTitle"
             aria-describedby="modalDescription">
             <div>
                <button type="button"
                    class="btn-close"
                    @click="close"
                    aria-label="Close modal">x
                </button>
                
                <p style="text-align: center;
                      font-size: 22px;
                      margin-top: 20px;">Подключение аксессуара</p>
                <p style="text-align: center;
                      font-size: 20px;
                      margin-top: 5px;">Для аксессуара устройства выберите тип подключаемого устройства</p>      
            </div>

            <div>
                <button class="center-btn" @click="showDeviceV4">Аксессуар VEGA 4</button>
                    <DeviceV4 v-show="isDeviceV4Visible" @close="closeDeviceV4"/>
                <button class="center-btn2">Аксессуар VEGA 1S</button>
            </div>
                <p style="text-align: center;
                      font-size: 20px;
                      margin-top: 15px;">После выбора типа акссесуара Вам будут показаны
                                        соотвотствующие шаги подключения его в учетную
                                        запись.</p>
            <!-- <div>
                <button type="button"
                    class="btn-blue"
                    @click="close"
                    aria-label="Close modal">Add device
                </button>
            </div> -->
        </div>
    </div>
    </div>
</transition>
</template>

<script>

import DeviceV4 from './DeviceV4'

export default {
    name: 'modal',

    components:{
        DeviceV4
    },

    data(){
        return{
            isDeviceV4Visible: false,

            activeName: 'first'
        };
    },

    methods: {
        showDeviceV4(){
            this.isDeviceV4Visible = true;
        },

        closeDeviceV4(){
            this.isDeviceV4Visible = false;
        },

        close(){
            this.$emit('close');
        },
    },
}
</script>

<style>

.allp{
    margin-top: 0;
    font-size: 13px;
    text-align: center; 
}

.modal-mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
}

.modal-backdrop{
    width: 80%;
    height: 70vh;
    position: fixed;
    display: flex;
    justify-content: center;
}

.modal{
    margin-top: 13%;
    margin-left: 25%;
    padding: 15px;
    width: 50%;
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    /* overflow-x: auto; */
    display: flex;
    flex-direction: column;
}

.btn-close{
    border: none;
    font-size: 35px;
    cursor: pointer;
    /* font-weight: bold; */
    color: #666;
    background: transparent;
    display: flex;
    position: absolute;
    top: 160px;
    right: 170px;
}
.center-btn{
    float: left;
    margin-left: 90px;
    width: 170px;
    height: 90px;
    font-size: 22px; 
    text-align: center;
    cursor: pointer;
    background-color: #ccdbee;
    border-radius: 15px;
    border: none;
    display: block;
}

.center-btn2{
    float: right;
    margin-right: 90px;
    width: 170px;
    height: 90px;
    font-size: 22px;
    text-align: center;
    cursor: pointer; 
    background-color: #ccdbee;
    border-radius: 15px;
    border: none;
    display: block;
}

.modal-fade-enter, .modal-fade-leave-active{
    opacity: 0;
}

.modal-fade-enter-active, .modal-fade-leave-active{
    transition: opacity .5s ease
}
</style>
