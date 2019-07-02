<template>
    <div class="breadcrumb">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item 
                v-for="item in _path"  
               
                :key="'breadcrumb' + item.id" 
                :to="{ path: '/' }"><span  @click="onClick(item.id)">{{item.label}}</span>
               
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    props:['path'],
    data(){
        return{

        }
    },
    computed: {
        _path(){
            return this.path;
        } 
    },

    methods: {
        onClick(id){
             this.$store.dispatch('OPEN_NODE', {
                nodeId: id,
                treeId: 1,
            })
        }
    }
}
</script>

<style scoped>

</style>
