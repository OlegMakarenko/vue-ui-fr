<template>
  <div>
    <div class="left">
<br>
      <div>
        <el-tree
          :data="data"
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

        </el-tree>
      </div>
<br>
      <div>
        <el-tree
          :data="data"
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
  
        <span slot-scope="{ node, data }">
            <i class="el-icon-odometer"></i>
          <span>{{node.label}}</span>
        </span>

      </el-tree>
     </div>
   </div>
  </div>
</template>

<script>

import Tree from "./Tree.vue"

export default {
  name:'lside',
  props:['treeData', 'isDraggable'],
      data() {
        return {
          data: [{
            label: 'Level one 1',
            children: [{
              label: 'Level two 1-1',
              children: [{
                label: 'Level three 1-1-1'
              }]
            }]
          }, {
            label: 'Level one 2',
            children: [{
              label: 'Level two 2-1',
              children: [{
                label: 'Level three 2-1-1'
              }]
            }, {
              label: 'Level two 2-2',
              children: [{
                label: 'Level three 2-2-1'
              }]
            }]
          }, {
            label: 'Level one 3',
            children: [{
              label: 'Level two 3-1',
              children: [{
                label: 'Level three 3-1-1'
              }]
            }, {
              label: 'Level two 3-2',
              children: [{
                label: 'Level three 3-2-1'
              }]
            }]
          }],
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
          return draggingNode.data.label.indexOf('Level three 3-1-1') === -1;
        }
      }
    };
  </script>

<style scoped>
.el-tree{
  background-color: #ebeef5;
}

.left {
  line-height: 2;
  width: 20%;
  /* height: 20%; */
  float: left;
  background-color: #ebeef5;
  /* margin-top: 7px; */
  display: block;
  text-align: center;
  border-width: 4px;
  border-color: black;
}



</style>

