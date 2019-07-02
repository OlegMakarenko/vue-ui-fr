<template>
  <div>
    <div class="left-side-menu">
      <Tree class="tree_view"/> <!--here is our tree component-->
   </div>
  </div>
</template>

<script>
import Tree from '../../Tree.vue'

export default {
  data(){
    return{

    }
  },

  components:{
    Tree
  }
}
</script>

<style scoped>

.left-side-menu {
  line-height: 2;
  width: 20%;
  min-height: 100vh;
  float: left;
  background-color: #ebeef5;
  display: block;
  text-align: center;
}

.tree_view{
  margin-top: 20px;
}
</style>
