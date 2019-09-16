<template>
  <div>
    <div class="left-side-menu" id="colorSwitch">
      <div style="margin-top: 20px; flex: 1 1 auto;">
        
          <div class="tree-button">
            <button 
                :class="handleButtonClass" 
                @click="devicesFunction" 
                class="handle-mode-button">Устройства</button>

              <button 
                :class="scheduleButtonClass" 
                @click="groupFunction" 
                class="schedule-mode-button">Группы</button>
          </div>
          <el-button
          class="profile-system"
          type="primary"
          size="mini"
          >Профиль и системные функции</el-button>

          <el-divider></el-divider>

            <Tree
              object="devicesTree"
              v-if="tree2DataVisible"
              :treeData="tree2Data"
              :id="2"
              class="tree_view"/>
            
            <Tree  
              v-if="tree1DataVisible"
              object="groupsTree"
              :treeData="tree1Data"
              :groupFunction="devicesFunction"
              :id="1"
              class="tree_view"/>
             
        <!-- {{tree1Data}} Проверка приходят ли данные -->
      </div>
      <div style="height: 150px; width: 300px; background-color: #8a999f; flex: 0 0 auto;">
        
     </div>
    </div>
  </div>
</template>

<script>
import Tree from "../../Tree.vue";

export default {
  
  created(){
    this.$store.dispatch('getTreeDevices');
  },
  
  data() {
    return {
      activeName: 'first',
      tree2DataVisible: true,
      tree1DataVisible: false,
      handleMode: true,
      scheduleMode: false,
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },

    devicesFunction(node){
      if(this.handleMode == false){
        this.$store.dispatch('getTreeDevices');
        this.handleMode = true
        this.tree2DataVisible = true
        this.tree1DataVisible = false
        this.scheduleMode = false
      }
    },

    groupFunction(node){
      if(this.scheduleMode == false){
        this.$store.dispatch('getTreeGroup');
        this.scheduleMode = true
        this.tree1DataVisible = true
        this.tree2DataVisible = false
        this.handleMode = false
      }
    },
  },

  components: {
    Tree
  },

  computed: {
    tree1Data() {
      const objectToArray1 = [this.$store.getters.tree1Data]
      return objectToArray1;
    },

    tree2Data() {
      const objectToArray2 = [this.$store.getters.tree2Data]
      return objectToArray2
    },

    handleButtonClass(){
      if(this.handleMode == true){
        return 'handle-pick-grey'
      } else if (this.handleMode == false) {
         return 'handle-pick-white'
      }
    },

    scheduleButtonClass(){
      if(this.scheduleMode == true){
        return 'handle-pick-grey'
      } else if (this.scheduleMode == false) {
         return 'handle-pick-white'
      }
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

.handle-mode-button{
  height: 33px;
  width: 117px;
  background-color: #ffffff;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  color: #606266;
  cursor: pointer;
  outline: none;
}

.schedule-mode-button{
  height: 33px;
  width: 117px;
  background-color: #ffffff;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  color: #606266;
  cursor: pointer;
  outline: none;
}

.handle-pick-white{
  background-color: #ffffff;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
}

.handle-pick-grey{
  background-color: #8A999F;
  color: #ffffff;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
}
</style>
