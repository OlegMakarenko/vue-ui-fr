<template>
    <div class="component-tile" 
         @click="onClick"
         @dblclick="onDblclick" 
         @mouseenter="mouseOver"
         @mouseleave="mouseLeave"
         :class="{active_hover: hover}">

        <div v-if="show_icons">
            <i class="el-icon-odometer"
               style="float:left; 
                      color: grey;
                      font-size: 20px; 
                      cursor: pointer;">
            </i>
            
            <i class="el-icon-s-tools"
               @click="showModal2"  
               style="float:right; 
                      color: grey;
                      font-size: 20px; 
                      cursor: pointer;">
            </i>
        </div>
    
        <ModalC v-show="isModalVisible2" @close="closeModal2"/>

        <div class="title" >
            <h>{{computedTitle}}</h>    
        </div>
            
        <div class="content">
            {{content}}
        </div>
    </div>
</template>

<script>

import ModalC from '../modalwindow/modalComponent'

export default {
    props: [ 'title', 'content' ],
    created(){},
    mounted(){},

    data(){
        return{
            textBeforeTitle: "This is",
            isModalVisible2: false,
            hover: false,
            show_icons: false,
        }
    },

    components:{
        ModalC,
    },

    computed: {
    computedTitle(){
        if(this.title)
            return this.title.toUpperCase();
     },
    },

    methods:{
        onClick(){

            this.$emit("select", this.title);
            if(this.hover == true){
                this.hover = false;
                this.mouseOver = false;
                this.mouseLeave = false;
                this.show_icons = false;                    
            } else {
                this.hover = true;
                this.show_icons = true;
            }
        },

        mouseOver(){
            this.hover = true; 
            this.show_icons = true;
        },

        mouseLeave(){
            this.hover = false; 
            this.show_icons = false
        },

         onDblclick(){
            this.$emit("open", this.title);
        },
        
        showModal2(){
            this.isModalVisible2 = true;
        },

        closeModal2(){
            this.isModalVisible2 = false;
        },

    }
}
</script>

<style lang="scss" scoped>
.component-tile{
    width: 200px;
    height: 200px;
    margin: 15.7px;
    padding: 17px;
    border-style: solid;
    border-color: #ebebeb;
    border-width: 1px;
    border-radius: 4px;
    display: inline-block;
    cursor: pointer;

    .title{
        margin-top: 90px;
        font-size: 18px;
        cursor: pointer;
    }
    .content{
        margin-top: 30%;
        text-align: right; 
        color: #333333;
        cursor: pointer;
    }
    .tbox{
        width: 80%;
        height: 5vh;
        font-size: 17px;
        border: none;
        text-align: center;
        background: transparent;
    }
}
</style>
