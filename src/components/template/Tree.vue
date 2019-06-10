<template>
  <div>

   <div
        :style="{'margin-left': `${depth * 18}px`}"
        class="node">

    <span @click="expanded = !expanded">
       {{expanded ? '&#9662;' : '&#9656;'}}
       
       <i :class="node.icon"></i>
       <i class="el-input__icon el-icon-edit"
          style="font-size: 17px;
                 cursor: pointer;
                 line-height: 34px;
                 float: right;"></i>
    </span>
    {{node.name}}
   </div>

    <Tree v-if="expanded"
          v-for="child in node.children"
          :data="treeData"
          :key="child.name"
          :node="child"
          :depth="depth + 2"/>
  </div>
</template>
<script>
export default {
  name: 'Tree',
  props:['treeData', 'isDraggable'],

  props:{
    node: Object,

    depth:{
      type: Number,
      default: 1
    }
  },

  data(){
    return{
      expanded: false,
    }
  }
}

</script>

<style scoped>

.node{
  cursor: pointer;
  text-align: left;
  font-size: 17px;
  color: gray;


}

</style>
