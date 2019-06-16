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
        </div>
    </div>
    </transition>
</template>

<script>
export default {
    name: 'modal',

    data(){
        return{

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
    margin-left: -24%;
    height: 60vh;
    width: 70%;
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