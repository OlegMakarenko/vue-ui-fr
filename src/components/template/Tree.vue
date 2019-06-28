<template>
<div>
  <div class="tree-style">
    <el-tree
      :data="MySystem"
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
      label="name">

      <span class="tree-node" slot-scope="{ node, data }"> <!-- node, data-->
        <span>
          <i v-if="node.data.type=='folder'" class="el-icon-folder"></i>
          <i v-if="node.data.type=='device'" class="el-icon-odometer"></i>
          <span>{{node.data.name}}</span>
        </span>

        <span class="tree-node-edit">
          <i class="el-icon-edit"></i>
        </span>
      </span>
    </el-tree>


    <el-tree
      :data="devices"
      node-key="id"
      :default-expanded-keys="[0]"
      @node-drag-start="handleDragStart"
      @node-drag-enter="handleDragEnter"
      @node-drag-leave="handleDragLeave"
      @node-drag-over="handleDragOver"
      @node-drag-end="handleDragEnd"
      @node-drop="handleDrop"
      @node-click="onNodeClick"
      draggable
      :allow-drop="allowDrop"
      :expand-on-click-node="false"
      :allow-drag="allowDrag2"
      label="name">

      <span class="tree-node" slot-scope="{ node, data }"> <!-- node, data-->
        <span>
          <i v-if="node.data.type=='folder'" class="el-icon-folder"></i>
          <i v-if="node.data.type=='device'" class="el-icon-odometer"></i>
          <span>{{node.data.name}}</span>
        </span>

        <span class="tree-node-edit">
          <i class="el-icon-edit"></i>
        </span>
      </span>
    </el-tree>
  </div>
</div>
</template>

<script>
export default {
  label:'lside',
  props:['treeData', 'isDraggable'],
    data() {
      return {
        showTree: false,
        showtile: false,
        MySystem:[
          {
            id:0,
            name: 'Моя система',
            type: "folder",
            children:[
              {
                id: 1,
                name: 'Мой дом',
                type: "folder",
                children: [
                  {
                    id: 2,
                    name:'Кухня',
                    type: "folder",
                    children:[
                      {
                        id: 3,
                        name:'Устройство 1',
                        type: "device",
                      },
                    ],
                },
              {name: 'Ванная',
              type: 'folder'}]
            },]
        },],

        devices:[
          {
            id: 0,
            name: 'Диспетчер устройств',
            type: "folder",
            children:[
              {
                id: 1,
                name: 'Регулятор на кухне дом',
                type: "device",
                children: [
                  {
                    id: 2,
                    name:'Kitchen',
                    type: "device",
                    children:[
                      {
                        id: 3,
                        name:'Device 1',
                        type: "device",
                      },
                    ],
                },
              {name: 'Регулятор ванная',
              type: 'device'}]
            },]
        },],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },

  components:{

  },

  methods: {
    handleDragStart(node, ev) {
      console.log('drag start', node);
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      console.log('tree drag enter: ', dropNode.name);
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      console.log('tree drag leave: ', dropNode.name);
    },
    handleDragOver(draggingNode, dropNode, ev) {
      console.log('tree drag over: ', dropNode.name);
    },
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      console.log('tree drag end: ', dropNode && dropNode.name, dropType);
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      console.log('tree drop: ', dropNode.name, dropType);

      console.warn("Send to server", "Device: " + draggingNode.data.name + "To folder " + dropNode.data.name )
    },
    allowDrop(draggingNode, dropNode, type) {
      if (dropNode.data.name === 'Level two 3-1') {
        return type !== 'inner';
      } else {
        return true;
      }
    },
    allowDrag(draggingNode) {
      return draggingNode.data.name.indexOf('Моя система') === -1;
    },
    allowDrag2(draggingNode) {
      return draggingNode.data.name.indexOf('Диспетчер устройств') === -1;
    },
    onNodeClick(node){
      this.$store.commit('OPEN_FOLDER', node)
    }
  }
};
</script>

<style scoped>

.el-tree{
  background-color: #ebeef5;
}

.tree-node{
  display: flex;
  justify-content: space-between;
  width: 100%;

}

.tree-node-edit{
  padding-right: 10px;
}

.el-tree-node__content{
  height: 50px;
}
</style>
