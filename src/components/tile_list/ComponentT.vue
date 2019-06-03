<template>
    <div class="component" @click="onClick">

        <div>
            <i class="el-icon-folder" 
               style="float:left; 
                      font-size: 20px; 
                      cursor: pointer;">
            </i>
            
            <i class="el-icon-delete" 
               style="float:right; 
                      font-size: 20px; 
                      cursor: pointer;">
            </i>
            
            <i class="el-input__icon el-icon-edit" 
               style="float:right; 
                      font-size: 20px; 
                      cursor: pointer; 
                      margin-top: 39%; 
                      margin-right: -10%">
            </i>
        </div>
    
        <div class="title" >
            <input class="tbox" v-model="computedTitle">
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
            textBeforeTitle: "This is"
        }
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
    cursor: pointer;

    .title{
        margin-top: 80px;
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
    }
}
</style>
