<template>
<transition name="modal-fade-add-device">
    <!--Modal window when we have devices-->
    <div class="modal-mask-add-device">
    <div class="modal-backdrop-add-device">

        <div class="modal-add-device"
             role="dialog"
             aria-labelledby="modalTitle"
             aria-describedby="modalDescription">
             <div>
                <button type="button"
                    class="btn-close-add-device"
                    @click="close"
                    aria-label="Close modal">x
                </button>
                
                <p style="text-align: center;
                      font-size: 22px;
                      margin-top: 20px;">Добавление устройства в систему</p>
            </div>

            <div class="button-choose-device">
                    <button class="button-choose-device-name">Выберите устройство в учетной записи</button>
            </div>

                <p style="text-align: center;
                      font-size: 20px;
                      margin-top: 15px;">Добавление устройства. Устройство будет добавлено
                                         в текущую группу в Моей системе. После добавления
                                         появится компонент для управления им.</p>
            
            <div class="add_device_button">
                <button class="center-btn-add-device">Добавить</button>
            </div>
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

.modal-mask-add-device{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
}

.modal-backdrop-add-device{
    width: 80%;
    height: 70vh;
    position: fixed;
    display: flex;
    justify-content: center;
}

.modal-add-device{
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

.btn-close-add-device{
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

.button-choose-device{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
}

.button-choose-device-name{
    width: 400px;
    font-size: 20px; 
    text-align: center;
    cursor: pointer;
    background-color: #ccdbee;
    border-radius: 12px;
    border: none;
}

.add_device_button{
    width:100%;
}

.center-btn-add-device{
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

.modal-fade-add-device-enter, .modal-fade-add-device-leave-active{
    opacity: 0;
}

.modal-fade-add-device-enter-active, .modal-fade-add-device-leave-active{
    transition: opacity .5s ease;
}
</style>
