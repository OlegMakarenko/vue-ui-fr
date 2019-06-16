<template>
<transition name="modal-fade">
    <div class="modal-mask-component">
        <div class="modal-backdrop-component">
            <div class="modal-component"
                 role="dialog"
                 aria-labelledby="modalTitle"
                 aria-describedby="modalDescription">
                 <div class="modal-content-componet">
                    <div class="left_side_tabs">
                        <button style="outline: none; background: transparent;"
                                v-for="tab in tabs" 
                                :key="tab" 
                                @click="selected = tab;"
                                :class="['tab-btn', {active: selected === tab}]">{{tab}}
                        </button>

                    <div class="close">
                        <button type="button"
                                class="btn-close2"
                                @click="close"
                                aria-label="Close modal">x
                        </button>
                    </div>
                    </div>
                        <component class="modal-tab" :is="selected"/>
                 </div>
            </div>
        </div>
    </div>
</transition>
</template>

<script>

import tab1 from '../tabs/tab1_scute'
import tab2 from '../tabs/tab2_events'
import tab3 from '../tabs/tab3_graph'
import tab4 from '../tabs/tab4_shedule'
import tab5 from '../tabs/tab5_settings'

export default {
    name: 'modal',

    data(){
        return{
            tabs: ["tab1", "tab2", "tab3", "tab4", "tab5"],

            selected:"tab1",
            
            num: '1',
        };
    },

    components:{
            tab1,
            tab2,
            tab3,
            tab4,
            tab5
    },


    methods: {
        handleChange(value){
            console.log(value);
        },
        close(){
            this.$emit('close');
        },
    }
}
</script>

<style>
.modal-mask-component{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
}

.modal-backdrop-component{
    width: 100%;
    height: 90%;
    position: fixed;
    display: flex;
    justify-content: center;
    cursor: default;
}

.modal-component{
    margin-top: 5%;
    /* padding: 15px; */
    width: 80%;
    height: 90%;
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: none;
    cursor: default;
}

.modal-component-content{
    display: flex;
    height: 100%;/*need take to attention*/
}

.left_side_tabs{
    width:  10%; 
    height: 15%;
    position: fixed;
    float: left;
}

.tab-btn{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.modal-tab{
    flex: 1 auto auto;
}

.allp{
    margin-top: 0;
    font-size: 13px;
    text-align: center; 
}

.active{
    border-right: 3px solid blue;
    outline: none;
}

.btn-close2{
    border: none;
    font-size: 35px;
    cursor: pointer;
    color: #666;
    background: transparent;
    display: flex;
    position: absolute;
    right: 20px;
}

.close{
    position: absolute;
    float: right;
    top: 20px;
    right: 20px;
    left: 1150px;
}

</style>
