<template>
<transition name="modal-fade">
    <div class="modal-backdrop">
        <div class="modal" 
             role="dialog" 
             aria-labelledby="modalTitle"
             aria-describedby="modalDescription">
             
             <div class="modal_device_content">
                 sdlfnjlasdfsfb
                 sdf;nasldfnsdfls
                 sdf;mslfnsdfl
             </div>
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

.modal_device_content{
    width: 100%;
    height: 100%;
}

.modal-fade-enter, .modal-fade-leave-active{
    opacity: 0;
}

.modal-fade-enter-active, .modal-fade-leave-active{
    transition: opacity .5s ease
}
</style>