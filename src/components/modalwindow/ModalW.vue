<template>
<transition name="modal-fade">
    <div class="modal-backdrop">

        <div class="modal"
             role="dialog"
             aria-labelledby="modalTitle"
             aria-describedby="modalDescription">
             <div>
                <button type="button"
                    class="btn-close"
                    @click="close"
                    aria-label="Close modal">x
                </button>
                
                <p style="text-align: center;
                      font-size: 22px;
                      margin-top: 0;">Подключение аксессуара</p>
                <p style="text-align: center;
                      font-size: 20px;
                      margin-top: 5px;">Для аксессуара устройства выберите тип подключаемого устройства</p>      
            </div>

            <div>
                <button class="center-btn">Аксессуар VEGA 4</button>
                <button class="center-btn2">Аксессуар VEGA 1S</button>
            </div>
                <p style="text-align: center;
                      font-size: 20px;
                      margin-top: 15px;">После выбора типа акссесуара Вам будут показаны
                                        соотвотствующие шаги подключения его в учетную
                                        запись.</p>
            <!-- <div>
                <button type="button"
                    class="btn-blue"
                    @click="close"
                    aria-label="Close modal">Add device
                </button>
            </div> -->
        </div>
    </div>
</transition>
</template>

<script>
export default {
    name: 'modal',

    props:['smt'],

    data(){
        return{
            activeName: 'first'
        };
    },

    methods: {

        close(){
            this.$emit('close');
        },
    },
}
</script>

<style>

.allp{
    text-align: center; 
    margin-top: 0;
    font-size: 13px;
}

.modal-backdrop{
    height: 50vh;
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

.btn-close{
    width: 24px;
    float: right;
    border: none;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #6f92be;
    background: transparent;
    margin-left: 95%;
}
.center-btn{
    margin-left: 100px;
    float: left;
    width: 170px;
    height: 90px;
    text-align: center;
    font-size: 22px; 
    cursor: pointer;
    background-color: #ccdbee;
    border-radius: 15px;
    border: none;
    display: block;
}

.center-btn2{
    margin-right: 100px;
    float: right;
    width: 170px;
    height: 90px;
    text-align: center;
    font-size: 22px;
    cursor: pointer; 
    background-color: #ccdbee;
    border-radius: 15px;
    border: none;
    display: block;
}
/* .btn-blue{
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
} */

.modal-fade-enter, .modal-fade-leave-active{
    opacity: 0;
}

.modal-fade-enter-active, .modal-fade-leave-active{
    transition: opacity .5s ease
}

::-webkit-scrollbar { width: 3px; height: 3px;}
::-webkit-scrollbar-track {  background-color: #999;}
::-webkit-scrollbar-thumb { height: 50px; background-color: #666; border-radius: 3px;}
::-webkit-resizer { background-color: #666;}

</style>
