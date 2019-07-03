<template>
  <div
    class="component-tile"
    @click="onClick"
    v-on:click="onClickTitle"
    @dblclick="onDblclick"
    :class="{selected: isSelected}">
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

    <ModalC v-show="isModalVisible2" @close="closeModal2"/>

    <div class="title">
      <div>{{computedTitle}}</div>
    </div>

    <div class="content">{{content}}</div>
  </div>
</template>

<script>
import ModalC from "../components/modalwindow/modalComponent.vue";

export default {
  props: ["title", "content", "selectedId", "selectedTitle", "id", "type"],
  created() {},
  mounted() {},

  data() {
    return {
      textBeforeTitle: "This is",
      isModalVisible2: false,
      hover: false,
      show_icons: false
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
    }
  },

  methods: {
    onClick() {
      this.$emit("select", this.id);
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

  .title {
    margin-top: 90px;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
  }
  .content {
    margin-top: 30%;
    text-align: right;
    color: #333333;
    cursor: pointer;
  }
  .tbox {
    width: 80%;
    height: 5vh;
    font-size: 17px;
    border: none;
    text-align: center;
    background: transparent;
  }
}
.selected {
  background: #ebeef5;
}
</style>
