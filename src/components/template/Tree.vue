<template>
  <div>

   <div @click="expanded = !expanded"
        :style="{'margin-left': `${depth * 20}px`}"
        class="node">

     <span class="el-icon-folder"></span>
     {{node.name}}
   </div>

    <Tree v-if="expanded"
          v-for="child in node.children"
          :key="child.name"
          :node="child"
          :depth="depth + 1"/>
  </div>
</template>

<script>
export default {
  name: 'Tree',

  props:{
    node: Object,

    depth:{
      type: Number,
      default: 0
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
  font-size: 20px;
  color: gray;

}

</style>
