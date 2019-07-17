<template>
  <div>
    <div class="left-side-menu">
      <Tree 
        :treeDataOne="tree1Data" 
        :treeDataTwo="tree2Data"
        :id="0"
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
    },

    tree2Data() {
      return this.$store.getters.tree2Data;
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
  background-color: white;
  border-top: 1.5px solid #d0d0d0;
  border-left: 1.5px solid #d0d0d0;
  border-right: 1.5px solid #d0d0d0;
  border-radius: 15px 15px 0px 0px;
  display: block;
  text-align: center;
}

.tree_view {
  margin-top: 20px;
}
</style>
