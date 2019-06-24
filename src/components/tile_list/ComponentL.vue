<template>
    <div class="component"
         @click="onClick" 
         @mouseover="hover = true"
         @mouseleave="hover = false"
         v-on:mouseover="show_icons = true"
         v-on:mouseleave="show_icons = false"
         :class="{active_hover: hover}">

        <div v-if="show_icons">
            <i class="el-icon-folder" 
               style="float:left; 
                      color: grey;
                      font-size: 20px; 
                      margin-top:3px;
                      cursor: pointer;">
            </i>

            <i class="el-icon-s-tools"
               @click="showModal2" 
               style="float:right;
                      color: grey;
                      font-size: 20px; 
                      margin-top:3px;
                      cursor: pointer;">
            </i>

        </div>
            
            <div class="title" 
            >
                <!-- <input class="tbox" v-model="computedTitle">                    
                    <i class="el-input__icon el-icon-edit" 
                       style="font-size: 20px; 
                              cursor: pointer;">
                    </i> -->
                   {{computedTitle}}
            </div>
            <div class="content">
                {{content}}
            </div>

        <ModalC v-show="isModalVisible2" @close="closeModal2"/>

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
            this.activeBtn = 'ccc';
            this.$emit("select", this.title);
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
.component{
    width: 85%;
    height: 3.5vh;
    margin: 15.7px;
    padding: 17px;
    border-style: solid;
    border-color: #ebebeb;
    border-width: 1px;
    border-radius: 4px;
    display: inline-block;
    // text-align: left;
    // cursor: pointer;
    -webkit-touch-callout: none; /* iOS Safari */
     -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */

    .title{
        width: 100%;
        // display: flex;
        // justify-content: center;
        font-size: 18px;
        text-align: center;
        cursor: pointer;

    }

    .content{
        margin-top: -28px; 
        float: right;
        text-align: center;
        cursor: pointer;
    }
    .tbox{
        width: auto;
        height: 5vh;
        font-size: 17px;
        border: none;
        background: transparent;
        text-align: center;
    }

    .active_icon{

    }
}
</style>

