<template>
    <div class="component">
        <div>
            <i class="el-icon-folder" 
               style="float:left; 
                      font-size: 20px; 
                      margin-top:3px;">
            </i>

            <i class="el-icon-delete" 
               style="float:right;
                      font-size: 20px; 
                      margin-top:3px;
                      margin-right:140px;">
            </i>
        </div>
         <div class="list">
            <div class="title">
                {{textBeforeTitle + computedTitle}}
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
    computedTitle(){
        if(this.title)
            return this.title.toUpperCase();
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
    cursor: pointer;

    .title{
        margin-top: 4px;
        margin-left: 20px;
        font-size: 18px;
        text-align: center;
    }

    .content{
        margin-top: -22px; 
        float: right;
        text-align: center;
    }
}
</style>

