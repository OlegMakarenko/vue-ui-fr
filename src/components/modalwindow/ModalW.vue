<template>
<transition name="modal-fade">
    <div class="modal-backdrop">
        
        <div class="modal"
             role="dialog"
             aria-labelledby="modalTitle"
             aria-describedby="modalDescription">
            
            <header class="modal-header" id="modalTitle">
                <slot name="header">
                    Введите название вашего устройства  
                    <button type="button" 
                            class="btn-close" 
                            @click="close" 
                            aria-label="Close modal">
                        x
                    </button>
                </slot>
            </header>

            <section class="modal-body"
                     id="modalDescription">
                <slot name="body">
                   Textarea to enter device name
                </slot>
            </section>

            <footer class="modal-footer">
                <slot name="footer">
                        Complete area
                    <button type="button" 
                            class="btn-green" 
                            @click="close"
                            aria-label="Close modal">
                        close me.
                    </button>
                </slot>
            </footer>
        </div>
    </div>
</transition>
</template>

<script>
export default {
    name: 'modal',
    
    methods: {
        close(){
            this.$emit('close');
        },
    },
}
</script>

<style>

.modal-backdrop{
    height: 50vh;
    width: 59.1%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-content: center;
}

.modal{
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}

.modal-header, .modal-footer {
    padding: 15px;
    display: flex;
}

.modal-header{
    border-bottom: 1px solid #eeeeee;
    columns: #4aae9b;
    justify-content: space-between;
}

.modal-footer{
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
}

.modal-body{
    position: relative;
    padding: 20px 10px;
}

.btn-close{
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4aae9b;
    background: transparent;
}

.btn-green{
    color: white;
    background: #4aae9b;
    border: 1px solid #4aae9b;
    border-radius: 2px;
}

.modal-fade-enter, .modal-fade-leave-active{
    opacity: 0;
}

.modal-fade-enter-active, .modal-fade-leave-active{
    transition: opacity .5s ease
}


</style>

