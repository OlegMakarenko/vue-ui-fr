<template>
<transition name="modal-fade-none-device">
    <!--Modal window when we don`t have devices-->
    <div class="modal-mask-none-device">
    <div class="modal-backdrop-none-device">

        <div class="modal-none-device"
             role="dialog"
             aria-labelledby="modalTitle"
             aria-describedby="modalDescription">
             <div>
                <button type="button"
                    class="btn-close-none-device"
                    @click="close"
                    aria-label="Close modal">x
                </button>
                
                <p style="text-align: center;
                      font-size: 22px;
                      margin-top: 20px;">Добавление устройства в систему</p>
                <p style="text-align: center;
                      font-size: 20px;
                      margin-top: 5px;">Для добавления устройств в любую группу необходимо, что бы у Вас были устройства</p>      
            </div>

            <div class="add_device_button">
                <button class="center-btn-none-device">Перейти в диспетчер устройств</button>
                <!-- <button class="center-btn2-none-device">Web-браузер на Смартфоне/Планшете</button> -->
            </div>
                <p style="text-align: center;
                      font-size: 20px;
                      margin-top: 15px;">Для добавления устройства, перейдите в менеджер устройств.</p>
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

.modal-mask-none-device{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
}

.modal-backdrop-none-device{
    width: 80%;
    height: 70vh;
    position: fixed;
    display: flex;
    justify-content: center;
}

.modal-none-device{
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

.btn-close-none-device{
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

.add_device_button{
    width:100%;
}

.center-btn-none-device{
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

.modal-fade-none-device-enter, .modal-fade-none-device-leave-active{
    opacity: 0;
}

.modal-fade-none-device-enter-active, .modal-fade-none-device-leave-active{
    transition: opacity .5s ease;
}
</style>
