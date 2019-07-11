<template>
  <div>
    <div class="left-side-menu">
      <Tree 
        :treeData="tree1Data" 
        :id="1" 
        class="tree_view"/>
    </div>
  </div>
</template>

<script>
import Tree from "../../Tree.vue";

export default {
  data() {
    return {};
  },

  components: {
    Tree
  },

  computed: {
    tree1Data() {
      return this.$store.getters.tree1Data;
    }
  }
};
</script>

<style scoped>
.left-side-menu {
  line-height: 2;
  width: 300px;
  min-height: 100vh;
  float: left;
  background-color: #ebeef5;
  display: block;
  text-align: center;
}

.tree_view {
  margin-top: 20px;
}
</style>
