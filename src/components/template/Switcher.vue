<template>
    <transition name="component-fade">
        <div>
            <component v-bind:is="view"></component>
        </div>
    </transition>
</template>

<script>
export default {
    data(){
        return{
            view: 'v-a'
        }
    },

    components:{
        'v-a': {
            template: '<div>Component A</div>'
        },
        'v-b': {
            template: '<div>Component B</div>'
        }
    }   
}
</script>

<style>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
