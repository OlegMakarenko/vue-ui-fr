<template>
<transition name="modal-fade">
    <div class="modal-backdrop">

        <div class="modal"
             role="dialog"
             aria-labelledby="modalTitle"
             aria-describedby="modalDescription">

             <el-steps :active="active" align-center finish-status="succes">
                 <el-step title="Step 1"></el-step>
                 <el-step title="Step 2"></el-step>
                 <el-step title="Step 3"></el-step>
             </el-steps>

            <header class="modal-header" id="modalTitle">
                <slot name="header">
                    Введите название вашего устройства
                    <button type="button"
                            class="btn-close"
                            @click="close"
                            aria-label="Close modal">x
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
                        <!-- Complete area -->
                    <button type="button"
                            class="btn-blue"
                            @click="close"
                            aria-label="Close modal">Complete
                    </button>
                </slot>
            </footer>

            <el-button style="margin-top: 12px; width: 100px;" @click="next">Next step</el-button>
        </div>
    </div>
</transition>
</template>

<script>
export default {
    name: 'modal',

    data(){
        return{
            active: 0
        };
    },

    methods: {
        next(){
            if(this.active++ > 2) this.active = 0;
        },

        close(){
            this.$emit('close');
        },
    },
}
</script>

<style>

.modal-backdrop{
    height: 52vh;
    width: 59.1%;
    position: fixed;
    display: flex;
    justify-content: center;
    /* align-content: center; */
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

.modal-header, .modal-footer, .modal-body {
    padding: 15px;
    /* display: flex; */
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

/* .modal-body{
    padding: 15px;
     position: relative; 
     padding: 20px 10px; 
} */

.btn-close{
    border: none;
    font-size: 20px;
    /* padding: 10px; */
    cursor: pointer;
    font-weight: bold;
    color: blue;
    background: transparent;
}

.btn-blue{
    color: white;
    background: blue;
    border: 1px solid #4aae9b;
    border-radius: 2px;
    margin-top: 10%;
    float: right;
}

.modal-fade-enter, .modal-fade-leave-active{
    opacity: 0;
}

.modal-fade-enter-active, .modal-fade-leave-active{
    transition: opacity .5s ease
}


</style>
