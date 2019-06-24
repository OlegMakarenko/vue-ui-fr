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
                      cursor: pointer;">
            </i>
            
            <i class="el-icon-s-tools"
               @click="showModal2"  
               style="float:right; 
                      color: grey;
                      font-size: 20px; 
                      cursor: pointer;">
            </i>
            
            <!-- <i class="el-input__icon el-icon-edit" 
               style="float:right; 
                      font-size: 20px; 
                      cursor: pointer; 
                      margin-top: 39%; 
                      margin-right: -10%">
            </i> -->
        </div>
    
        <ModalC v-show="isModalVisible2" @close="closeModal2"/>

        <div class="title" >
            <!-- <input class="tbox" v-model="computedTitle"> -->
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
            hover: false
        }
    },

    components:{
        ModalC
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
        },
        
        showModal2(){
            this.isModalVisible2 = true;
        },

        closeModal2(){
            this.isModalVisible2 = false;
        },
        focusField(title){
            this.editField = title;
        },
        blurField(){
            this.editField = '';
        },
        showField(title){
            return (this.tile[title] == '' || this.editField == title)
        }
    }
}
</script>

<style lang="scss" scoped>
.component{
    width: 200px;
    height: 200px;
    margin: 15.7px;
    padding: 17px;
    border-style: solid;
    border-color: #ebebeb;
    border-width: 1px;
    border-radius: 4px;
    display: inline-block;
    // cursor: pointer;

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
