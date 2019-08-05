<template>
<transition name="modal-fade-device">
    <div class="modal-backdrop-device">
        <div class="modal-device" 
             role="dialog" 
             aria-labelledby="modalTitle"
             aria-describedby="modalDescription">
             <div class="content_device">
                 <p style="text-align: center; margin-top: 0;">
                    Подключение WI-FI терморегулятора через браузер на ПК
                </p>
                <button @click="onClick">x</button>
                <div class="top_tabs">
                    <button 
                        style="outline: none; background: transparent; background: #ccc; cursor: pointer"
                        v-for="step in deviceTabs" 
                        :key="step" 
                        @click="selectedTab = step;"
                        :class="['top-tab-btn', {active_device_v4: selectedTab === step}]">{{step}}
                    </button>
                </div>
                <component :is="selectedTab"/>
            <button class="btn-device-left"  style="cursor: pointer;">Назад</button>
            <button class="btn-device-right" style="cursor: pointer;">Вперед</button>
             </div>

        <!-- <el-button style="margin-top: 12px; width: 100px;" @click="next">Next step</el-button> -->
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

        };
    },

    components:{
        step1,
        step2,
        step3,
        step4
    },

    methods: {
        handleClick(tab, event){
            console.log(tab, event);
        },

        onClick(){
            this.$emit('buttonClick')
        },
    }
}
</script>

<style scoped>

.allp{
    text-align: center; 
    margin-top: 0;
    font-size: 13px;
}

.modal-backdrop-device{
    margin-top: -11%;
    margin-left: -15%;
    height: 60vh;
    width: 70%;
    position: fixed;
    display: flex;
    justify-content: center;
}

.modal-device{
    margin-top: 0px;
    padding: 15px;
    width: 65%;
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}

.content_device{
    width: 100%;
    height: 100%;
}

.top_tabs{
    width:  2.5%; 
    height: 4%;
    margin-left: 32%;
    /* position: fixed; */
    display: flex;
    flex-direction: row;
    /* float: left; */
}

.top-tab-btn{
    width: 100%;
    height: 100%;
    border-radius: 200px;
    margin-left: 30px;
    border: none;
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: stretch; */
}

.btn-blue{
    margin-top: 37%;
    float: right;
    color: white;
    background: #6f92be;
    border: 1px solid #6f92be;
    border-radius: 2px;
}

.btn-device-left{
    /* margin-top: 37%; */
    float: left;
    border: 1px solid #6f92be;
    border-radius: 2px;
    background: #6f92be;
    color: White;
}

.btn-device-right{
    /* margin-top: 37%; */
    float: right;
    border: 1px solid #6f92be;
    border-radius: 2px;
    background: #6f92be; 
    /* position: fixed; */
    color: White;
}

.active_device_v4{
    background-color: #6f92be;
    /* border-right:1px solid red; */
}

.modal-fade-device-enter, .modal-fade-device-leave-active{
    opacity: 0;
}

.modal-fade-device-enter-active, .modal-fade-device-leave-active{
    transition: opacity .5s ease
}
</style>