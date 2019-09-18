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
                                    <button class="vega-button-close" @click="onClick">x</button>
                                </div>
                            </div>

                            <div class="modal-device-vega-body">
                                <div class="vega-top-tabs">
                                    <el-steps style="width: 400px;" align-center :active="active"  finish-status="success">
                                        <el-step></el-step>
                                        <el-step></el-step>
                                        <el-step></el-step>
                                        <el-step></el-step>

                                    </el-steps>
                                </div>
                                 <component 
                                    :is="selectedTab" 
                                    @buttonNext="next" 
                                    @buttonBack="back"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import step1 from '../modalwindow/thermostat_add_tabs/tab1_step1.vue'
import step2 from '../modalwindow/thermostat_add_tabs/tab2_step2.vue'
import step3 from '../modalwindow/thermostat_add_tabs/tab3_step3.vue'
import step4 from '../modalwindow/thermostat_add_tabs/tab4_step4.vue'


export default {
    name: 'modal',

    data(){
        return{
            deviceTabs: ['step1', 'step2', 'step3', 'step4'],
            selectedTab: 'step1',
            active:0,
            stepVisible: false,
        };
    },

    components:{
        step1,
        step2,
        step3,
        step4
    },


    methods: {
        handleChange(value){
            console.log(value);
        },
        close(){
            this.$emit('close');
        },
        onClick(){
            this.$emit('buttonClick')
        },
        next() {
            if (this.active < 3) this.active++;

            switch(this.active){
                case 0:
                    this.selectedTab = 'step1';
                    break;
                case 1:
                    this.selectedTab = 'step2';
                    break;
                case 2:
                    this.selectedTab = 'step3';
                    break;
                case 3:
                    this.selectedTab = 'step4'; 
                    break;
            }
        },

        back(){
            if (this.active < 4) this.active--;

            switch(this.active){
                case 0:
                    this.selectedTab = 'step1';
                    break;
                case 1:
                    this.selectedTab = 'step2';
                    break;
                case 2:
                    this.selectedTab = 'step3';
                    break;
                case 3:
                    this.selectedTab = 'step4';
                    break;
            }
        }
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

@-moz-document url-prefix() {
  .modal-backdrop-device-vega-manage {
    width: 100%;
    height: 57em;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    cursor: default;
  }
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

@-moz-document url-prefix() {
  .modal-device-vega-manage {
    width: 55%;
    height: 37em;
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: none;
    cursor: default;
    padding: 10px;
  }
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
    font-size: 20px;
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
    height: 90%;
    color: #606266;
}

.vega-top-tabs{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.vega-step-button{
    width: 100%;
    display: flex;
    justify-content: space-between;
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
