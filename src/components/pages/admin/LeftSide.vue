<template>
  <div>
    <div class="left-side-menu" id="colorSwitch">
      <div style="margin-top: 20px; flex: 1 1 auto;">
        <el-tabs type="card" v-model="activeName" @tab-click="handleClick" class="tabs"> 
          <el-button
          class="profile-system"
          type="primary"
          size="mini"
          @click="getTreeData"
          >Профиль и системные функции</el-button> <!--@click="getTreeData"-->

          <el-divider></el-divider>

          <el-tab-pane label="Устройства" name="first" class="tab-tree1">
            <Tree
              object="devicesTree"
              :treeData="tree2Data"
              :id="2"
              class="tree_view"/>
            </el-tab-pane>
          <el-tab-pane label="Группы" name="second" class="tab-tree1">
            <Tree  
              object="groupsTree"
              :treeData="tree1Data"
              :id="1"
              class="tree_view"/>
          </el-tab-pane>
        </el-tabs>        
      </div>
      <div style="height: 150px; width: 300px; background-color: #8a999f; flex: 0 0 auto;">
        {{tree1Data}}
     </div>
    </div>
  </div>
</template>

<script>
import Tree from "../../Tree.vue";

export default {
  data() {
    return {
      activeName: 'first',
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },

  components: {
    Tree
  },

  computed: {
    tree1Data() {
      return this.$store.getters.manageTree;
    },

    tree2Data() {
      return this.$store.getters.tree2Data;
    },

    getTreeData(){
      return this.$store.dispatch('getManageTree');
    },
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
  display: flex;
  flex-direction: column;
  text-align: center;
}

.profile-system{
  font-size: 14px;
  height: 30px;
}

.tabs{
  margin-left: 15px;
  margin-right: 15px;
}
</style>
