<template>
    <div class="component">
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
    border-radius: 3px;
    display: inline-block;
    text-align: left;
    cursor: pointer;

    .title{
        font-size: 18px;
    }

    .content{
        text-align: center;
    }
}
</style>

