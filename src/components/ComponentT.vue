<template>
  <div
    class="component-tile"
    @click="onClick"
    v-on:click="onClickTitle"
    @dblclick="onDblclick"
    :class="{selected: isSelected}">
    <div class="tile-header">
      <i
        :class="iconClass"
        style="float:left; 
              color: grey;
              font-size: 20px; 
              cursor: pointer;"
      ></i>
      <div v-if="isSelected">
      <i
        class="el-icon-s-tools"
        @click="showModal2"
        style="float:right; 
               color: grey;
               font-size: 20px; 
               cursor: pointer;"
      ></i>
    </div>

    </div>


    <ModalC v-show="isModalVisible2" @close="closeModal2"/>

    <div class="tile-body">
      <div>{{computedTitle}}</div>
    </div>

    <div v-if="isTemperature">Температура: {{temperature}}</div>
    <div class="tile-footer" v-if="childrenCount">Вложения: {{childrenCount}}</div>
  </div>
</template>

<script>
import ModalC from "../components/modalwindow/modalComponent.vue";

export default {
  props: ["title", "content", "selectedId", "selectedTitle", "id", "type", 'childrenCount', 'data'],
  created() {},
  mounted() {},

  data() {
    return {
      textBeforeTitle: "This is",
      isModalVisible2: false,
      hover: false,
      show_icons: false,
    };
  },

  components: {
    ModalC
  },

  computed: {
    computedTitle() {
      if (this.title) return this.title.toUpperCase();
    },

    isSelected() {
      return this.selectedId == this.id;
    },

    isSelectedTitle(){
      return this.selectedTitle == this.title;
    },

    iconClass() {
      if (this.type === "device") return "el-icon-odometer";
      if (this.type === "folder") return "el-icon-folder";
    },

    isTemperature(){
      if(!this.data)  return false;
      if(this.data.temperature === 'undefined' || this.data.temperature == null) return false;
      return true;
    },

    temperature(){
      return this.data.temperature;
    }

  },

  methods: {
    onClick() {
      console.log(this.data.temperature)
      this.$emit("select", this.id);
      // this.$set(this, "selectedNodeChildrenTemp", node.children.length);
    },

    onClickTitle() {
      this.$emit("click", this.title);
    },

    mouseOver() {
      this.hover = true;
      this.show_icons = true;
    },

    mouseLeave() {
      this.hover = false;
      this.show_icons = false;
    },

    onDblclick() {
      this.$emit("open", this.id);
    },

    showModal2() {
      this.isModalVisible2 = true;
    },

    closeModal2() {
      this.isModalVisible2 = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.component-tile {
  width: 200px;
  height: 200px;
  margin: 15.7px;
  padding: 17px;
  border-style: solid;
  border-color: #ebebeb;
  border-width: 1px;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;

  .tile-header{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
  }

  .tile-body {
    width: 100%;
    height: 100px;
    display: table-cell; 
    vertical-align: middle;
    font-size: 18px;
    cursor: pointer;
  }
  .tile-footer {
    width:100%;
    height: 50px;
    flex-direction: column;
    color: #333333;
  }
}
.selected {
  background: #ebeef5;
}
</style>
