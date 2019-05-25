<template>
<transition name="modal-fade">
    <div class="modal-backdrop">
        <div class="modal" 
             role="dialog" 
             aria-labelledby="modalTitle"
             aria-describedby="modalDescription">
        <p style="text-align: center; margin-top: 0;">
            Подключение WI-FI терморегулятора через браузер на ПК
        </p>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="Шаг 1" name="first">
                            <p class="allp">
                                1. Переключите регулятор в режим точки доступа
                            </p>
                            <button class="btn-left" @click="close" style="cursor: pointer;">Назад</button>
                            <button class="btn-right" style="cursor: pointer;">Вперед</button>
                </el-tab-pane>

                <el-tab-pane label="Шаг 2" name="second">
                        <p class="allp">
                            2. В доступных WI-FI сетях вашего ноутбукау вас в течение
                        </p>
                    <button class="btn-left" style="cursor: pointer;">Назад</button>
                    <button class="btn-right" style="cursor: pointer;">Вперед</button>
                </el-tab-pane>

                <el-tab-pane label="Шаг 3" name="third">
                        <p class="allp">
                            3. На странице подключения вам понадобится ввести
                        </p>
                    <button class="btn-left" style="cursor: pointer;">Назад</button>
                    <button class="btn-right" style="cursor: pointer;">Вперед</button>
                </el-tab-pane>

                <el-tab-pane label="Шаг 4" name="fourth">
                        <p class="allp">
                            4. Устройство, получив эти параметры перейдет
                        </p>
                    <button style="cursor: pointer;"
                            type="button"
                            class="btn-blue"
                            @click="close"
                            aria-label="Close modal">Add device
                    </button>
                </el-tab-pane>
            </el-tabs> 
        <!-- <el-button style="margin-top: 12px; width: 100px;" @click="next">Next step</el-button> -->
        </div>
    </div>
    </transition>
</template>

<script>
export default {
    name: 'modal',

    data(){
        return{
            activeName: 'first'
        };
    },

    methods: {
        handleClick(tab, event){
            console.log(tab, event);
        },

        close(){
            this.$emit('close');
        }
    }
}
</script>

<style scoped>

.allp{
    text-align: center; 
    margin-top: 0;
    font-size: 13px;
}

.modal-backdrop{
    margin-top: -12%;
    margin-left: -34.5%;
    height: 60vh;
    width: 80%;
    position: fixed;
    display: flex;
    justify-content: center;
}

.modal{
    margin-top: 0px;
    padding: 15px;
    width: 65%;
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}

.btn-blue{
    margin-top: 37%;
    float: right;
    color: white;
    background: #6f92be;
    border: 1px solid #6f92be;
    border-radius: 2px;
}

.btn-left{
    margin-top: 37%;
    float: left;
    border: 1px solid #6f92be;
    border-radius: 2px;
    background: #6f92be;
    color: White;
}

.btn-right{
    margin-top: 37%;
    float: right;
    border: 1px solid #6f92be;
    border-radius: 2px;
    background: #6f92be; 
    color: White;
}

.modal-fade-enter, .modal-fade-leave-active{
    opacity: 0;
}

.modal-fade-enter-active, .modal-fade-leave-active{
    transition: opacity .5s ease
}
</style>