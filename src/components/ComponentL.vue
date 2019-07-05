<template>
  <div
    class="component-list"
    @click="onClick"
    v-on:click="onClickTitle"
    @dblclick="onDblclick"
    :class="{selected: isSelected}">

    <div class="left-side-list">
      <i
        :class="iconClass"
        style="float:left; 
              color: grey;
              font-size: 20px; 
              cursor: pointer;"
      ></i>
      <div class="children-count-list" v-if="childrenCount">Вложения: {{childrenCount}}</div>
      <div class="children-count-list" v-if="childrenCount">Температура: {{childrenCount}}</div>
    </div>

    <ModalC v-show="isModalVisible2" @close="closeModal2"/>

    <div class="center-side-list">
      <div>{{computedTitle}}</div>
    </div>

    <div class="right-side-list" v-if="isSelected">
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
</template>

<script>
import ModalC from "../components/modalwindow/modalComponent.vue";

export default {
  props: ["title", "content", "selectedId", "selectedTitle", "id", "type", 'childrenCount'],
  created() {},
  mounted() {},

  data() {
    return {
      textBeforeTitle: "This is",
      isModalVisible2: false,
      hover: false,
      show_icons: false,
      selectedNodeChildrenCount: 0,
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

    isSelectedTitle() {
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
      this.$set(this, "selectedNodeChildrenCount", node.children.length);
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
.component-list {
  width: 90%;
  height: 20px;
  margin: 15.7px;
  padding: 17px;
  border-style: solid;
  border-color: #ebebeb;
  border-width: 1px;
  border-radius: 4px;
  display: flex;

  cursor: pointer;

  .left-side-list{
    width: 30%;
    display: flex;
    justify-content: flex-start;
  }

  .children-count-list{
    margin-left: 20px;

  }

  .center-side-list {
    width:40%;
    // margin-top: 90px;
    display: flex;
    justify-content: center;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
  }

  .right-side-list{
    width:30%;
    display: flex;
    justify-content: flex-end;
  }
}
.selected {
  background: #ebeef5;
}
</style>
