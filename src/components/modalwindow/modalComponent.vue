<template>
    <transition name="modal-component-fade">
        <div class="modal-mask-component-manage">
            <div class="modal-backdrop-component-manage">
                <div class="modal-component-manage"
                    role="dialog"
                    aria-labelledby="modalTitle"
                    aria-describedby="modalDescription">

                    <div class="header-text-modal">
                        Настройки
                        <button type="button"
                                class="close-modal"
                                @click="close"
                                aria-label="Close modal">x
                        </button>
                    </div>
                    
                    <div class="tab-manager">
                        <div class="tab-buttons">
                            <el-button @click="controlClick">Управление</el-button>
                            <el-button @click="eventClick">События</el-button>
                            <el-button @click="graphicClick">Графики</el-button>
                            <el-button @click="scheduleClick">Расписание</el-button>
                            <el-button @click="settingsClick">Настройки</el-button>
                        </div>

                        <controlTab v-if="controlTabVisible"/>
                        <eventTab v-if="eventTabVisible"/>
                        <graphicTab v-if="graphicTabVisible"/>
                        <scheduleTab v-if="scheduleTabVisible"/>
                        <settingsTab v-if="settingsTabVisible"/>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import controlTab from './modal_component_tab/Control.vue'
import eventTab from './modal_component_tab/Event.vue'
import graphicTab from './modal_component_tab/Graphic.vue'
import scheduleTab from './modal_component_tab/Schedule.vue'
import settingsTab from './modal_component_tab/Settings.vue'

export default {
    name: 'modal',

    data(){
        return{
            controlTabVisible: false,
            eventTabVisible: false,
            graphicTabVisible: false,
            scheduleTabVisible: false,
            settingsTabVisible: false
        };
    },

    components:{
        controlTab,
        eventTab,
        graphicTab,
        scheduleTab,
        settingsTab
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
        }
    }
}
</script>

<style>
.modal-mask-component-manage{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    z-index: 2;
}

.modal-backdrop-component-manage{
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    cursor: default;
}

.modal-component-manage{
    width: 80%;
    height: 80%;
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: none;
    cursor: default;
}

.header-text-modal{
    width: 100%;
    height: 10%;
    text-align: center;
}

.allp{
    margin-top: 0;
    font-size: 13px;
    text-align: center; 
}

.tab-manager{
    width: 100%;
    display: flex;
    flex-direction: row;
    text-align: center;
}

.tab-buttons{
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.el-button+.el-button {
    margin-left: 0px;
}

.close-modal{
    display: flex;
    float:right;
    font-size: 35px;
    color: #666;
    border: none;
    outline: none;
    cursor: pointer;
    background: transparent;
    margin-right: 20px;
}

.modal-component-fade-enter, .modal-component-fade-leave-active{
    opacity: 0;
}

.modal-component-fade-enter-active, .modal-component-fade-leave-active{
    transition: opacity .5s ease
}
</style>
