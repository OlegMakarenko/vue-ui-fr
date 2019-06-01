<template>
<transition name="modal-fade">
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
                      margin-top: 0;">Подключение аксессуара</p>
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

.modal-backdrop{
    width: 59.1%;
    height: 50vh;
    position: fixed;
    display: flex;
    justify-content: center;
}

.modal{
    padding: 15px;
    width: 65%;
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}

.btn-close{
    float: right;
    width: 24px;
    margin-left: 95%;
    border: none;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #6f92be;
    background: transparent;
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

::-webkit-scrollbar { width: 3px; height: 3px;}
::-webkit-scrollbar-track {  background-color: #999;}
::-webkit-scrollbar-thumb { height: 50px; background-color: #666; border-radius: 3px;}
::-webkit-resizer { background-color: #666;}

</style>
