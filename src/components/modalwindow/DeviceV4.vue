<template>
    <transition name="modal-device-vega-fade">
        <div class="modal-mask-device-vega-manage">
            <div class="modal-backdrop-device-vega-manage">
                <div class="modal-device-vega-manage"
                    role="dialog"
                    aria-labelledby="modalTitle"
                    aria-describedby="modalDescription">
                            
                    <div class="tab-manager">
                        <div class="modal-device-vega-content">
                    
                    <div class="modal-device-vega-header">
                        <div class="modal-device-vega-name">
                            Подключение Wi-Fi терморегулятора через браузер на ПК
                        </div>
                        <div class="modal-device-vega-button">
                            <button @click="onClick">x</button>
                        </div>
                    </div>

                    <div class="modal-device-vega-body">
                        <div class="device-vega-body-content">
                            Для аксессуара устройства выберите тип подключаемого устройства
                        </div>

                        <div class="device-vega-body-button">

                        </div>
                    </div>
                    
                    <div class="modal-device-vega-footer">
                        <div>
                            После выбора типа акссесуара Вам будут показаны
                            соотвотствующие шаги подключения его в учетную
                            запись.
                        </div>
                    </div>

                    <deviceVega v-if="vegaVisible" @buttonClick="close"/>
                </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
    name: 'modal',

    data(){
        return{
        };
    },

    components:{
    },


    methods: {
        handleChange(value){
            console.log(value);
        },
        close(){
            this.$emit('close');
        },

        controlClick(){
            if(this.controlTabVisible === false){
                this.controlTabVisible = true
                this.eventTabVisible = false
                this.graphicTabVisible = false
                this.scheduleTabVisible = false
                this.settingsTabVisible = false
            } 
        },

        eventClick(){
            if(this.eventTabVisible === false){
                this.eventTabVisible = true
                this.controlTabVisible = false
                this.graphicTabVisible = false
                this.scheduleTabVisible = false
                this.settingsTabVisible = false
            }
        },

        graphicClick(){
            if(this.graphicTabVisible === false){
                this.graphicTabVisible = true
                this.controlTabVisible = false
                this.eventTabVisible = false
                this.scheduleTabVisible = false
                this.settingsTabVisible = false
            } 
        },

        scheduleClick(){
            if(this.scheduleTabVisible === false){
                this.scheduleTabVisible = true
                this.graphicTabVisible = false
                this.eventTabVisible = false
                this.controlTabVisible = false
                this.settingsTabVisible = false
            }
        },

        settingsClick(){
            if(this.settingsTabVisible === false){
                this.settingsTabVisible = true
                this.eventTabVisible = false
                this.controlTabVisible = false
                this.graphicTabVisible = false
                this.scheduleTabVisible = false
            }
        },
        onClick(){
            this.$emit('buttonClick')
        },
    }
}
</script>

<style>
.modal-mask-device-vega-manage{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    z-index: 2;
}

.modal-backdrop-device-vega-manage{
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    cursor: default;
}

.modal-device-vega-manage{
    width: 55%;
    height: 65%;
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: none;
    cursor: default;
    padding: 10px;
}

.modal-device-vega-content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

}

.modal-device-vega-header{
    width: 100%;
    height: 10%;
    display: flex;

}

.modal-device-vega-name{
    width: 96%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: #606266;
}

.modal-device-vega-button{
    display: flex;
    align-items: center;
    justify-content: center;
}
.vega-button-close{
    font-size: 30px;
    color: #a1adb2;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    float: right;
}

.modal-device-vega-body{
    width: 100%;
    height: 80%;
    color: #606266;
}

.device-vega-body-content{
    width: 100%;
    height: 10%;
    font-size: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #606266;
}

.device-vega-body-button{
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.modal-device-vega-footer{
    width: 100%;
    height: 10%;  
    font-size: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #606266;
}

.allp{
    margin-top: 0;
    font-size: 13px;
    text-align: center; 
}

.modal-device-vega-fade-enter, .modal-device-vega-fade-leave-active{
    opacity: 0;
}

.modal-device-vega-fade-enter-active, .modal-device-vega-fade-leave-active{
    transition: opacity .5s ease
}
</style>
