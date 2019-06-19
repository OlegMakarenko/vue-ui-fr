<template>
  <div>
    <div class="left">
<br>
      <div class="tree-style">
        <el-tree
          :data="system"
          node-key="id"
          default-expand-all
          @node-drag-start="handleDragStart"
          @node-drag-enter="handleDragEnter"
          @node-drag-leave="handleDragLeave"
          @node-drag-over="handleDragOver"
          @node-drag-end="handleDragEnd"
          @node-drop="handleDrop"
          draggable
          :allow-drop="allowDrop"
          :allow-drag="allowDrag">

          <span class="tree-node" slot-scope="{ node, data }">
            <span>
              <i v-if="node.type=='foler'" class="el-icon-folder"></i>
              <i class="el-icon-folder"></i>
              <span>{{node.label}}</span>
            </span>

            <span class="tree-node-edit">
              <i class="el-icon-edit"></i>
            </span>         
          </span>

        </el-tree>
      </div>

      <div>
        <el-tree

          :data="devices"
          node-key="id"
          default-expand-all
          @node-drag-start="handleDragStart"
          @node-drag-enter="handleDragEnter"
          @node-drag-leave="handleDragLeave"
          @node-drag-over="handleDragOver"
          @node-drag-end="handleDragEnd"
          @node-drop="handleDrop"
          draggable
          :allow-drop="allowDrop"
          :allow-drag="allowDrag2">

        <span class="tree-node" slot-scope="{ node, data }">
            <span>
              <i class="el-icon-odometer"></i>
              <span>{{node.label}}</span>
            </span>

            <span class="tree-node-edit">
              <i class="el-icon-edit"></i>
            </span>         
          </span>

      </el-tree>
     </div>
   </div>
  </div>
</template>

<script>

export default {
  name:'lside',
  props:['treeData', 'isDraggable'],
      data() {
        return {
          showTree: false,
          system: [{
            label: 'Моя система',
            children: [{
              label: 'Мой дом',
              children: [{
                label: 'Кухня'
              }, {
                label: 'Спальня'
              }],
            },
            {
              label: 'Дача',
              children: [{
                label: 'Пристройка',
              }, {
                label: 'Гараж',
              }]
            },]
          },],


          devices:[{
            label: 'Диспетчер устройств',
            children: [{
              label: 'Регулятор на кухне дом',
              children: [{
                label: 'Термостат'
              }, {
                label: 'Датчик'
              }],
            },
            {
              label: 'Регулятор на улицу дача',
              children: [{
                label: 'Термостат',
              }, {
                label: 'Датчик',
              }]
            }, {
              label: 'Регулятор на улице родители'
            }, {
              label: 'Регулятор в пристройке'
            }]
          },],
          defaultProps: {
            children: 'children',
            label: 'label'
          }
        };
      },
      methods: {
        handleDragStart(node, ev) {
          console.log('drag start', node);
        },
        handleDragEnter(draggingNode, dropNode, ev) {
          console.log('tree drag enter: ', dropNode.label);
        },
        handleDragLeave(draggingNode, dropNode, ev) {
          console.log('tree drag leave: ', dropNode.label);
        },
        handleDragOver(draggingNode, dropNode, ev) {
          console.log('tree drag over: ', dropNode.label);
        },
        handleDragEnd(draggingNode, dropNode, dropType, ev) {
          console.log('tree drag end: ', dropNode && dropNode.label, dropType);
        },
        handleDrop(draggingNode, dropNode, dropType, ev) {
          console.log('tree drop: ', dropNode.label, dropType);

          console.warn("Send to server", "Device: " + draggingNode.data.label + "To folder " + dropNode.data.label )
        },
        allowDrop(draggingNode, dropNode, type) {
          if (dropNode.data.label === 'Level two 3-1') {
            return type !== 'inner';
          } else {

            return true;
          }
        },
        allowDrag(draggingNode) {
          return draggingNode.data.label.indexOf('Моя система') === -1;
        },
        allowDrag2(draggingNode) {
          return draggingNode.data.label.indexOf('Диспетчер устройств') === -1;
        }
      }
    };
  </script>

<style scoped>
.tree-style{


}
.el-tree{
  background-color: #ebeef5;
}

.left {
  line-height: 2;
  width: 20%;
  min-height: 100vh;
  float: left;
  background-color: #ebeef5;
  display: block;
  text-align: center;
  
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
