<template>
    <div class="component" 
         @click="onClick"
         @dblclick="onDblclick" 
         @mouseover="hover = true; 
                     show_icons = true"
         @mouseleave="hover = false; 
                      show_icons = false"
         :class="{active_hover: hover}">

        <div v-if="show_icons">
            
            <i class="el-icon-s-folder"
               style="float:left; 
                      color: grey;
                      font-size: 20px; 
                      cursor: pointer;">
            </i>

        </div>

        <div class="title" >
            <h>{{computedTitle}}</h>
        </div>
            
        <div class="content">
            {{content}}
        </div>
    </div>
</template>

<script>

export default {
    props: [ 'title', 'content' ],
    created(){},
    mounted(){},

    data(){
        return{
            hover: false
        }
    },

    components:{
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

         onDblclick(){
            this.$emit("open", this.title);
        },
    }
}
</script>

<style lang="scss" scoped>
.component{
    width: 200px;
    height: 75px;
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
