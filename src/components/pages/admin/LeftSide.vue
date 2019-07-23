<template>
  <div>
    <div class="left-side-menu">
      <div style="margin-top: 20px">
        <el-tabs type="card" v-model="activeName" @tab-click="handleClick" class="tabs">
          <el-tab-pane label="Устройства" name="first">
            <Tree
              :treeDataOne="tree1Data"
              :treeDataTwo="2"
              :id="1"
              class="tree_view"/></el-tab-pane>
          <el-tab-pane label="Группы" name="second">
            <Tree
              :treeDataOne="1"
              :treeDataTwo="tree2Data"
              :id="2"
              class="tree_view"/></el-tab-pane>
          <el-tab-pane label="Профили и системные функции" name="third"></el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Tree from "../../Tree.vue";

export default {
  data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
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
  background-color: #f5f9fc;
  border-top: 1.5px solid #d0d0d0;
  display: block;
  text-align: center;
}

.tree_view {

}

.tabs{
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
}

</style>
