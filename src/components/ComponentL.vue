<template>
    <div class="component-list"
         @click="onClick"
         @dblclick="onDblclick" 
         @mouseenter="mouseOver"
         @mouseleave="mouseLeave"
         :class="{active_hover: hover}">

        
            
            <i class="el-icon-odometer" 
               style="float:left; 
                      color: grey;
                      font-size: 20px; 
                      margin-top:3px;
                      cursor: pointer;">
            </i>
        <div v-if="show_icons">
            <i class="el-icon-s-tools"
               @click="showModal2" 
               style="float:right;
                      color: grey;
                      font-size: 20px; 
                      margin-top:3px;
                      cursor: pointer;">
            </i>

        </div>
            
            <div class="title">
                   {{computedTitle}}
            </div>
            <div class="content">
                {{content}}
            </div>

        <ModalC v-show="isModalVisible2" @close="closeModal2"/>

    </div>
</template>

<script>

import ModalC from '../components/modalwindow/modalComponent.vue'

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
        ModalC
    },

    computed: {
        computedTitle:{
            get(){
            if(this.title)
                return this.title; 
            },
            set(value){
                this.title = value
            }
            
        }
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
.component-list{
    width: 90%;
    height: 20px;
    margin: 15.7px;
    padding: 17px;
    border-style: solid;
    border-color: #ebebeb;
    border-width: 1px;
    border-radius: 4px;
    display: inline-block;
    cursor: pointer;
    -webkit-touch-callout: none; /* iOS Safari */
     -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */

    .title{
        width: 100%;
        // align-content: center;
        justify-content: baseline;
        font-size: 18px;
        text-align: center;
        cursor: pointer;
    }

    .content{
        // margin-top: -28px; 
        display: flex;
        justify-content: baseline;
        float: right;
        text-align: center;
        cursor: pointer;
    }
    .tbox{
        width: auto;
        height: 5%;
        font-size: 17px;
        border: none;
        justify-content: baseline;
        background: transparent;
        text-align: center;
    }
}
</style>

