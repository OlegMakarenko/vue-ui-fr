<template>
<transition name="modal-fade-add-group">
    <!--Modal window for adding accessorises-->
    <div class="modal-mask-add-group">
    <div class="modal-backdrop-add-group">

        <div class="modal-add-group"
             role="dialog"
             aria-labelledby="modalTitle"
             aria-describedby="modalDescription">
             <div>
                <button type="button"
                    class="btn-close-add-group"
                    @click="close"
                    aria-label="Close modal">x
                </button>
                
                <p style="text-align: center;
                      font-size: 22px;
                      margin-top: 20px;">Создание группы</p>
                <p style="text-align: center;
                      font-size: 20px;
                      margin-top: 5px;">Для добавления лобой группы необходимо, чтобы у Вас были устройства</p>      
            </div>

            <div class="add_group_button">
                <button class="center-btn-add-group">Перейти в диспетчер устройств</button>
                <!-- <button class="center-btn2-add-device">Web-браузер на Смартфоне/Планшете</button> -->
            </div>
                <p style="text-align: center;
                      font-size: 20px;
                      margin-top: 15px;">Для добавления устройств, перейдите в менеджер устройств.</p>
            <!-- <div>
                <button type="button"
                    class="btn-blue"
                    @click="close"
                    aria-label="Close modal">Add device
                </button>
            </div> -->
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

        };
    },

    methods: {
        close(){
            this.$emit('close');
        },
    },
}
</script>

<style scoped>

.allp{
    margin-top: 0;
    font-size: 13px;
    text-align: center; 
}

.modal-mask-add-group{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
}

.modal-backdrop-add-group{
    width: 80%;
    height: 70vh;
    position: fixed;
    display: flex;
    justify-content: center;
}

.modal-add-group{
    margin-top: 13%;
    margin-left: 20%;
    padding: 15px;
    width: 50%;
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    /* overflow-x: auto; */
    display: flex;
    flex-direction: column;
}

.btn-close-add-group{
    border: none;
    font-size: 35px;
    cursor: pointer;
    /* font-weight: bold; */
    color: #666;
    background: transparent;
    display: flex;
    position: fixed;
    /* top: 160px; */
    /* margin-top: 0px; */
    margin-left: 38%;
}

.add_group_button{
    width:100%;
}

.center-btn-add-group{
    float: left;
    margin-left: 35%;
    width: 170px;
    height: 90px;
    font-size: 20px; 
    text-align: center;
    cursor: pointer;
    background-color: #ccdbee;
    border-radius: 15px;
    border: none;

}

.modal-fade-add-group-enter, .modal-fade-add-group-leave-active{
    opacity: 0;
}

.modal-fade-add-group-enter-active, .modal-fade-add-group-leave-active{
    transition: opacity .5s ease;
}
</style>
