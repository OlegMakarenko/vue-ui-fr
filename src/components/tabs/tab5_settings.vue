<template>
    <div class="settings_manager">
        <div class="settings_header">
            <button @click="showDeviceHave">
                When have devices
            </button>
            
            <button>
                When don`t have devices
            </button>
        </div>
    </div>
</template>

<script>

export default {
    
    data(){
        return{
            isDeviceHaveVisible: false,
        }
    },

    components:{
        // devicehave
    },

    methods:{
        showDeviceHave(){
            this.isDeviceHaveisible = true;
        },

        closeDeviceHave(){
            this.isDeviceHaveVisible = false;
        },

        closeDevice(){
            this.$emit('close');
        },
    }
}
</script>

<style>

.settings_manager{
    width: 100%;
    height: 80%;
}

</style>
