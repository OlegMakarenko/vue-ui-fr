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

            <el-tabs :tab-position="tabPosition">
                <el-tab-pane label="Щиток">Щиток
                    <div class="first-tab">
                        <div>
                            <el-radio-group v-model="radio1" size="mini" class="tabn1">
                                <el-radio-button label="Ручной"></el-radio-button>
                                <el-radio-button label="По графику"></el-radio-button>
                            </el-radio-group>

                            <el-radio-group v-model="radio2" size="mini" class="tabn2">
                                <el-radio-button label="В сети"></el-radio-button>
                            </el-radio-group>
                        </div>

                        <el-input-number 
                            class="input-number"
                            v-model="num" 
                            @change="handleChange" 
                            :min="1" 
                            :max="60"
                            size="large"></el-input-number>
                    </div>
                </el-tab-pane>

                <el-tab-pane label="События">События
                    <div>

                    </div>
                </el-tab-pane>

                <el-tab-pane label="Графики">Графики
                    <div>

                    </div>
                </el-tab-pane>

                <el-tab-pane label="Расписание">Расписание
                    <div>

                    </div>
                </el-tab-pane>

                <el-tab-pane label="Настройки">Настройки
                    <div>

                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
    </div>
</transition>
</template>

<script>

export default {
    name: 'modal',

    components:{
    },

    data(){
        return{
            tabPosition: 'left',
            radio1: 'Ручной',
            radio2: 'В сети',
            num: '1'
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

.first-tab{
    width: 90%;
    height: 70vh;
    border-right: 1px solid #666;
}

.tabn1{
    margin-top: 5%;
    margin-right: 2%;
    float: right;
}

.tabn2{
    margin-top: 5%;
    margin-right: 10%;
    float: right;
}

.input-number{
    margin-top: 4.5%;
    margin-left: 15%;
    float: left;
}

.el-tabs__item{
    height: 14vh;
    text-align: center;
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
