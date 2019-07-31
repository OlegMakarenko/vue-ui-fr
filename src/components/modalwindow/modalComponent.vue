<template>
    <transition name="modal-component-fade">
        <div class="modal-mask-component-manage">
            <div class="modal-backdrop-component-manage">
                <div class="modal-component-manage"
                    role="dialog"
                    aria-labelledby="modalTitle"
                    aria-describedby="modalDescription">
                    <div class="tab-manager">
                        <div class="tab-buttons">
                            <el-button 
                                class="tab-buttons-group" 
                                @click="controlClick" 
                                icon="el-icon-s-platform">
                            </el-button>

                            <el-button 
                                class="tab-buttons-group" 
                                @click="eventClick" 
                                icon="el-icon-document">
                            </el-button>
                            
                            <el-button 
                                class="tab-buttons-group" 
                                @click="settingsClick" 
                                icon="el-icon-s-tools">
                            </el-button>

                            <el-button 
                                class="tab-buttons-group" 
                                @click="graphicClick" 
                                icon="el-icon-data-line">
                            </el-button>

                            <el-button 
                                class="tab-buttons-group" 
                                @click="scheduleClick" 
                                icon="el-icon-date">
                            </el-button>

                        </div>
                        <controlTab @buttonClick="close" v-if="controlTabVisible"/>
                        <eventTab @buttonClick="close" v-if="eventTabVisible"/>
                        <graphicTab @buttonClick="close" v-if="graphicTabVisible"/>
                        <scheduleTab @buttonClick="close" v-if="scheduleTabVisible"/>
                        <settingsTab @buttonClick="close" v-if="settingsTabVisible"/>
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
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
}

.tab-buttons{
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.tab-buttons-group{
    height: 100%;
    font-size: 45px;
}

.el-button+.el-button {
    margin-left: 0px;
}

.modal-component-fade-enter, .modal-component-fade-leave-active{
    opacity: 0;
}

.modal-component-fade-enter-active, .modal-component-fade-leave-active{
    transition: opacity .5s ease
}
</style>
