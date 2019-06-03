<template>
    <div class="component" @click="onClick">
        <div>
            <i class="el-icon-folder" 
               style="float:left; 
                      font-size: 20px; 
                      margin-top:3px;
                      cursor: pointer;">
            </i>

            <i class="el-icon-delete" 
               style="float:right;
                      font-size: 20px; 
                      margin-top:3px;
                      margin-right:140px;
                      cursor: pointer;">
            </i>

        </div>
         <div class="list" >
            <div class="title" >
                <input class="tbox" v-model="computedTitle">                    
                    <i class="el-input__icon el-icon-edit" 
                       style="font-size: 20px; 
                              cursor: pointer;">
                    </i>
            </div>
            <div class="content">
                {{content}}
            </div>
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
        }
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
    text-align: left;
    // cursor: pointer;

    .title{
        margin-top: -0.9%;
        margin-left: 20px;
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
        text-align: center;
    }
}
</style>

