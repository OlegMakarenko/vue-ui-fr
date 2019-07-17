<template>
  <div>
    <div class="tree-style">
      <!-- <div style="border-bottom: 1px solid #eee"></div> -->
      <el-tree style="background: white"
        :data="treeData"
        node-key="id"
        :default-expanded-keys="[0]"
        @node-drag-start="handleDragStart"
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"
        @node-drop="handleDrop"
        :expand-on-click-node="false"
        @node-click="onNodeClick"
        draggable
        :allow-drop="allowDrop"
        :allow-drag="allowDrag"
        label="name"
      >
        <span class="tree-node" slot-scope="{ node, data }">
          <!-- node, data-->
          <span>
            <i v-if="node.data.type=='folder'" class="el-icon-folder"></i>
            
            <i v-if="node.data.type=='device'" class="el-icon-odometer"></i>
            <span>{{node.data.name}}</span>
          </span>
          <span class="tree-node-edit">
            <!-- <i v-if="node.data.type!=='isRoot'" class="el-icon-edit" @click="editTitle" style="font-size:19px; cursor: pointer"></i> -->
            <!-- {{infoPanel.childrenCount}} -->
          </span>
        </span>
      </el-tree>
    </div>
  </div>
</template>

<script>
export default {
  label: "lside",
  props: ["treeData", "id", "isDraggable"],

  computed:{
    infoPanel(){
      return this.$store.getters.infoPanelData;
    }
  },

  data() {
    return {};
  },

  components: {},

  methods: {
    handleDragStart(node, ev) {
      console.log("drag start", node);
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      console.log("tree drag enter: ", dropNode.name);
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      console.log("tree drag leave: ", dropNode.name);
    },
    handleDragOver(draggingNode, dropNode, ev) {
      console.log("tree drag over: ", dropNode.name);
    },
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      console.log("tree drag end: ", dropNode && dropNode.name, dropType);
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      console.log("tree drop: ", dropNode.name, dropType);

      console.warn(
        "Send to server",
        "Device: " + draggingNode.data.name + "To folder " + dropNode.data.name
      );
    },
    allowDrop(draggingNode, dropNode, type) {
      if (dropNode.data.name === "Level two 3-1") {
        return type !== "inner";
      } else {
        return true;
      }
    },
    allowDrag(draggingNode) {
      return draggingNode.data.name.indexOf("Моя система") === -1;
    },
    allowDrag2(draggingNode) {
      return draggingNode.data.name.indexOf("Диспетчер устройств") === -1;
    },
    onNodeClick(node) {
      console.log(node);
      this.$store.dispatch("OPEN_NODE", {
        nodeId: node.id,
        treeId: this.id,
      });
    },

    editTitle() {
        this.$prompt('Пожалуйста введите новое имя', 'Подсказка', {
          confirmButtonText: 'Применить',
          cancelButtonText: 'Отмена',
          inputValidator: function(value){return value.length},
        }).then(({ value }) => {
          this.$store.dispatch("NODE_RENAME", {nodeId: this.infoPanel.id, name: value});
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Редактирование отменено '
          });
        });
      }
  }
};
</script>

<style scoped>
.el-tree {
  background-color: #ebeef5;
}

.tree-node {
  display: flex;

  justify-content: space-between;
  width: 100%;
}

.tree-node-edit {
  padding-right: 10px;
}

.el-tree-node__content {
  height: 50px;
  margin-top: 10%;
  background-color: white;
}
</style>
