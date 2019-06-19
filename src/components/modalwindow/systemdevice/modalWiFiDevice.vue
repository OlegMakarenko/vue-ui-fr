<template>
<transition name="modal-fade-wifi-termo">
    <!--Modal window for adding accessorises-->
    <div class="modal-mask-wifi-termo">
    <div class="modal-backdrop-wifi-termo">

        <div class="modal-wifi-termo"
             role="dialog"
             aria-labelledby="modalTitle"
             aria-describedby="modalDescription">
             <div>
                <button type="button"
                    class="btn-close-wifi-termo"
                    @click="close"
                    aria-label="Close modal">x
                </button>
                
                <p style="text-align: center;
                      font-size: 22px;
                      margin-top: 20px;">Подключение Wi-Fi турморегулятора</p>
                <p style="text-align: center;
                      font-size: 20px;
                      margin-top: 5px;">Что бы подключить Wi-Fi турморегулятор вы можете воспользоваться двумя путями:</p>      
            </div>

            <div>
                <button class="center-btn-wifi-termo">Web-браузер на ПК</button>
                <button class="center-btn2-wifi-termo">Web-браузер на Смартфоне/Планшете</button>
            </div>
                <p style="text-align: center;
                      font-size: 20px;
                      margin-top: 15px;">После выбора пользовательского устройства
                                        Вам будет показаны соответствующие шаги 
                                        подключения его в учетную запись.</p>
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
            isDeviceV4Visible: false,

            activeName: 'first'
        };
    },

    methods: {
        showDeviceV4(){
            this.isDeviceV4Visible = true;
        },

        closeDeviceV4(){
            this.isDeviceV4Visible = false;
        },

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

.modal-mask-wifi-termo{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
}

.modal-backdrop-wifi-termo{
    width: 80%;
    height: 70vh;
    position: fixed;
    display: flex;
    justify-content: center;
}

.modal-wifi-termo{
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

.btn-close-wifi-termo{
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
.center-btn-wifi-termo{
    float: left;
    margin-left: 90px;
    width: 170px;
    height: 90px;
    font-size: 20px; 
    text-align: center;
    cursor: pointer;
    background-color: #ccdbee;
    border-radius: 15px;
    border: none;
    display: block;
}

.center-btn2-wifi-termo{
    float: right;
    margin-right: 90px;
    width: 170px;
    height: 90px;
    font-size: 20px;
    text-align: center;
    cursor: pointer; 
    background-color: #ccdbee;
    border-radius: 15px;
    border: none;
    display: block;
}

.modal-fade-wifi-termo-enter, .modal-fade-wifi-termo-leave-active{
    opacity: 0;
}

.modal-fade-wifi-termo-enter-active, .modal-fade-wifi-termo-leave-active{
    transition: opacity .5s ease;
}
</style>
