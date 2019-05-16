<template>
    <div class="component">
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
    border-radius: 3px;
    cursor: pointer;

    .title{
        font-size: 18px;
    }
    .content{
        color: #333333;
    }
}
</style>
