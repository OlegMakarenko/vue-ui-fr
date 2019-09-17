<template>
    <transition name="modal-component-fade">
        <div class="modal-mask-component-manage">
            <div class="modal-backdrop-component-manage">
                <div class="modal-component-manage"
                    role="dialog"
                    aria-labelledby="modalTitle"
                    aria-describedby="modalDescription">

                    <div class="tab-header">
                        <div class="tab-header-title">
                            <span v-if="controlTabVisible">{{control}}</span>
                            <span v-if="eventTabVisible">{{event}}</span>
                            <span v-if="graphicTabVisible">{{graphic}}</span>
                            <span v-if="scheduleTabVisible">{{schedule}}</span>
                            <span v-if="settingsTabVisible">{{settings}}</span>
                        </div>
                        <div class="tab-header-close">
                            <i class="el-icon-close tab-header-button" @click="close"></i>
                        </div>
                    </div>
                    
                    <div class="tab-manager">
                        <div class="tab-buttons">
                            <button 
                                class="tab-buttons-group"
                                :class="onFocusControl" 
                                @click="controlClick"> 
                                <i class="el-icon-s-platform"></i>
                            </button>

                            <button
                                :class="onFocusEvent"
                                class="tab-buttons-group" 
                                @click="eventClick">
                                <i class="el-icon-document"></i>
                            </button> 

                            <button
                                :class="onFocusSettings"
                                class="tab-buttons-group" 
                                @click="settingsClick">
                                <i class="el-icon-s-tools"></i>
                            </button>

                            <button
                                :class="onFocusGraphic"
                                class="tab-buttons-group" 
                                @click="graphicClick">
                                <i class="el-icon-data-line"></i>
                            </button>

                            <button
                                :class="onFocusSchedule"
                                class="tab-buttons-group-end" 
                                @click="scheduleClick">
                                <i class="el-icon-date"></i>
                            </button>

                        </div>
                        <controlTab @buttonClick="close" object="controlTab" v-if="controlTabVisible"/>
                        <eventTab @buttonClick="close" object="eventTab" v-if="eventTabVisible"/>
                        <graphicTab @buttonClick="close" object="graphicTab" v-if="graphicTabVisible"/>
                        <scheduleTab @buttonClick="close" object="scheduleTab" v-if="scheduleTabVisible"/>
                        <settingsTab @buttonClick="close" object="settingsTab" v-if="settingsTabVisible"/>
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

    computed:{
        onFocusControl(){
            if(this.controlTabVisible == true){
                return 'pick-grey'
            } else if (this.controlTabVisible == false) {
                return 'pick-white'
            }
        },

        onFocusEvent(){
            if(this.eventTabVisible == true){
                return 'pick-grey'
            } else if (this.eventTabVisible == false) {
                return 'pick-white'
            }
        },

        onFocusGraphic(){
            if(this.graphicTabVisible == true){
                return 'pick-grey'
            } else if (this.graphicTabVisible == false) {
                return 'pick-white'
            }
        },

        onFocusSchedule(){
            if(this.scheduleTabVisible == true){
                return 'pick-grey'
            } else if (this.scheduleTabVisible == false) {
                return 'pick-white'
            }
        },

        onFocusSettings(){
            if(this.settingsTabVisible == true){
                return 'pick-grey'
            } else if (this.settingsTabVisible == false) {
                return 'pick-white'
            }
        },

    },

    data(){
        return{
            controlTabVisible: true,
            eventTabVisible: false,
            graphicTabVisible: false,
            scheduleTabVisible: false,
            settingsTabVisible: false,
            selectedId: null,
            control: 'Управление',
            event: 'События',
            graphic: 'График',
            schedule: 'Расписание',
            settings: 'Настройки'
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

        tabHeader(){
            if(this.controlTabVisible === true){
                this.eventTabVisible = false
                this.graphicTabVisible = false
                this.scheduleTabVisible = false
                this.settingsTabVisible = false
            } else if (this.controlTabVisible === false){
                this.controlTabVisible = true
                this.eventTabVisible = false
                this.graphicTabVisible = false
                this.scheduleTabVisible = false
                this.settingsTabVisible = false
            }
        },

        controlClick(){
            if(this.controlTabVisible === true){
                this.eventTabVisible = false
                this.graphicTabVisible = false
                this.scheduleTabVisible = false
                this.settingsTabVisible = false
            } else if (this.controlTabVisible === false){
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
    /* flex: 1 1 auto; */
    align-items: center;
    justify-content: center;
    cursor: default;
}

@-moz-document url-prefix() {
  .modal-backdrop-component-manage {
    width: 100%;
    height: 48.3em;
    display: flex;
    /* flex: 1 1 auto; */
    align-items: center;
    justify-content: center;
    cursor: default;
  }
}

.modal-component-manage{
    width: 90%;
    height: 90%;
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

.tab-header{
    width: 100%;
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.tab-header-title{
    width: 98%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.tab-header-close{
    width: 2%;
    height: 100%;
}

.tab-header-button{
    height: 100%;
    width: 100%;
    font-size: 28px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.tab-manager{
    width: 100%;
    height: 95%;
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
    width: 200px;
    height: 100%;
    background-color: #ffffff;
    color: #606266;
    border: 1px solid #DCDFE6;    
    font-size: 45px;
    cursor: pointer;
    outline: none;
    border-bottom: none;
}

.tab-buttons-group-end{
    width: 200px;
    height: 100%;
    background-color: #ffffff;
    color: #606266;
    border: 1px solid #DCDFE6;    
    font-size: 45px;
    cursor: pointer;
    outline: none;
}

.pick-white{
    background-color: #ffffff;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
}

.pick-grey{
    background-color: #8A999F;
    color: #ffffff;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
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
