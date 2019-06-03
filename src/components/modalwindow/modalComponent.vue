<template>
<transition name="modal-fade">
    <div class="modal-mask2">
    <div class="modal-backdrop2">

        <div class="modal2"
             role="dialog"
             aria-labelledby="modalTitle"
             aria-describedby="modalDescription">

             <div>
                <button type="button"
                    class="btn-close"
                    @click="close"
                    aria-label="Close modal">x
                </button>
            </div>

            <button style="outline: none"
                    v-for="tab in tabs" 
                    :key="tab" 
                    @click="selected = tab;"
                    :class="['tab-btn', {active: selected === tab}]">{{tab}}
            </button>
                <component :is="selected"/>
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

    components:{
            tab1,
            tab2,
            tab3,
            tab4,
            tab5
    },

    data(){
        return{
            tabs: ["tab1", "tab2", "tab3", "tab4", "tab5"],

            selected:"tab1",
            
            num: '1',
        };
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

.allp{
    margin-top: 0;
    font-size: 13px;
    text-align: center; 
}

.tab-btn{
    width: 10%; 
    height: 200px;
    background: #ffffff;
    cursor: pointer;
    float: left;
    outline: none;
}

.active{
    border-right: 3px solid blue;
    outline: none;
}

.modal-mask2{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
}

.modal-backdrop2{
    width: 100%;
    height: 90vh;
    position: fixed;
    display: flex;
    justify-content: center;
}

.modal2{
    margin-top: 5%;
    margin-left: 0%;
    padding: 15px;
    width: 80%;
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}

.btn-close2{
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

</style>
