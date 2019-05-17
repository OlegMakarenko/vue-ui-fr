<template>
    <div>
        
                <p style="text-align: center; margin-top: 0;">
                   Подключение WI-FI терморегулятора через браузер на ПК
                </p>

                <!-- <button type="button"
                    class="btn-close"
                    @click="close"
                    aria-label="Close modal">x
                </button> -->
                
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="User1" name="first">
                                <p class="allp">
                                    1. Переключите регулятор в режим точки доступа
                                </p>
                                <button class="btn-left">Назад</button>
                                <button class="btn-right">Вперед</button>
                    </el-tab-pane>

                    <el-tab-pane label="User2" name="second">
                            <p class="allp">
                                2. В доступных WI-FI сетях вашего ноутбукау вас в течение
                            </p>
                        <button class="btn-left">Назад</button>
                        <button class="btn-right">Вперед</button>
                    </el-tab-pane>

                    <el-tab-pane label="User3" name="third">
                            <p class="allp">
                                3. На странице подключения вам понадобится ввести
                            </p>
                        <button class="btn-left">Назад</button>
                        <button class="btn-right">Вперед</button>
                    </el-tab-pane>

                    <el-tab-pane label="User4" name="fourth">
                                <p class="allp">
                                    4. Устройство, получив эти параметры перейдет
                                </p>
                                <button type="button"
                                    class="btn-blue"
                                    @click="close"
                                    aria-label="Close modal">Add device
                                </button>
                    </el-tab-pane>
                </el-tabs> 
            <!-- <el-button style="margin-top: 12px; width: 100px;" @click="next">Next step</el-button> -->
    </div>
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
    height: 55vh;
    width: 59.1%;
    position: fixed;
    display: flex;
    justify-content: center;
}

.modal{
    padding: 15px;
    width: 65%;
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}

.modal-footer, .modal-body {
    padding: 15px;
}

.modal-footer{
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
}

.btn-close{
    width: 24px;
    float: left;
    border: none;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #6f92be;
    background: transparent;
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