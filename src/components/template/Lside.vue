<template>
  <div>
    <div class="left">
<br>
      <div class="tree-style">
<!-- 
        <component v-for="concom in children" 
                   :is="showw" 
                   :key="concom"
                   :id="concom.id"
                   :title="concom.title"
                   :content="concom.content"/> -->

        <el-tree
          v-for="con in MySystem"
          :key="con.title"
          :data="MySystem"
          node-key="id"
          default-expand-all
          @node-drag-start="handleDragStart"
          @node-drag-enter="handleDragEnter"
          @node-drag-leave="handleDragLeave"
          @node-drag-over="handleDragOver"
          @node-drag-end="handleDragEnd"
          @node-drop="handleDrop"
          @node-click="onNodeClick"
          draggable
          :allow-drop="allowDrop"
          :allow-drag="allowDrag">

          <span class="tree-node" slot-scope="{ node }"> <!-- node, data-->
            <span>
              <i v-if="node.type=='foler'" class="el-icon-folder"></i>
              <i class="el-icon-folder"></i>
              <span>{{node.label}}</span>
              <tileComponent v-show="showtile"/>
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

        <span class="tree-node" slot-scope="{ node }"> <!-- node, data-->
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
import listComponent from '../tile_list/ComponentL.vue'

import tileComponent from '../tile_list/ComponentT.vue'



export default {
  name:'lside',
  props:['treeData', 'isDraggable'],
      data() {
        return {
          showTree: false,
          showtile: false,
          MySystem:[{
            label: 'My system',
            children:[
              {label: 'My home',
              children: [
                {label:'Kitchen',
                  contentdevice:[
                    {id:'0',
                     title:'Hum device',
                     type:'deivce',
                     content: 'Hum: 40%'},],
                 },
                {label: 'Badroom'}]
              },]
          },],

          // system: [{
          //   label: 'Моя система',
          //   children: [{
          //     label: 'Мой дом',
          //     children: [{
          //       label: 'Кухня',
          //       children:[
          //         { id: 1, title: " Himiditry device", type: "device", content: "Hum: 40%" },
          //         { id: 2, title: " Himiditry device1", type: "device", content: "Hum: 40%" }
          //       ]
          //     }, {
          //       label: 'Спальня'
          //     }],
          //   },
          //   {
          //     label: 'Дача',
          //     children: [{
          //       label: 'Пристройка',
          //     }, {
          //       label: 'Гараж',
          //     }]
          //   },]
          // },],


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

      components:{
        listComponent,
        tileComponent,
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
        },
        onNodeClick(n){
          this.MySystem = n.contentdevice,
          console.log('Label are clicked(Successful working of function)'),
          this.showtile = true
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
