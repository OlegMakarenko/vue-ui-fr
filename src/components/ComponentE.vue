<template>
    <div class="component">

        <div>
            <i class="el-icon-folder" style="float:left; font-size: 20px"></i>
            <i class="el-icon-delete" style="float:right; font-size: 20px"></i>
        </div>
    
        <div class="title">
            {{textBeforeTitle + computedTitle}}
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
    }
    .content{
        margin-top: 30%;
        text-align: right; 
        color: #333333;
    }
}
</style>
