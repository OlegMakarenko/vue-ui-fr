<template>
  <div
    class="component-tile"
    @click="onClick"
    v-on:click="onClickTitle"
    @dblclick="onDblclick"
    :class="{selected: isSelected}">

    <div class="tile-header">
      <div class="folder-odometer-icon">
        <i :class="iconClass"></i>
        <img src="./img13.jpg" style="width: 40px; height: 40px;" v-if="devicePicture" ondragstart="return false;">
      </div>

      <div class="computed-title" v-if="iconSettings">
        <!-- {{computedTitle}} -->
        LTC090
      </div>

      <div class="icon-tool" v-if="isSelected">
        <i 
          object="componentSettings"
          v-if="iconSettings"
          class="el-icon-s-tools"
          @click="showModal2">
        </i>
    </div>
        <ModalC v-show="isModalVisible2" @close="closeModal2"/>
    </div>


    <div class="tile-body">
      <div class="text-body">
        {{computedTitle}}
      </div>

      <div class="temperature-content"  v-if="isTemperature">
        <div class="temperature-output">
          {{temperature+'°'}}
        </div>
        <div class="icon-right">
          <i class="el-icon-right" style="color: #666"></i>
        </div>
        <div class="preassigned-output">
          {{preassignedTemp+'°'}}
        </div>
      </div>
    </div>

    <div class="tile-footer">
      <div class="tile-footer-count" v-if="childrenCount">
        Вложения: {{childrenCount}}
      </div>

      <div class="color-indicator">
        <div v-if="indicatorVisible" class="indicator"></div>
      </div>
    </div>
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
      devicePicture: false,
      selectedNodeChildrenCount: 0,
      preassignedTemp: 30,

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
      // console.log(this.id)
      return this.selectedId == this.id;
    },

    isSelectedTitle(){
      return this.selectedTitle == this.title;
    },

    iconClass() {
      if (this.type === "device") return this.devicePicture = true;
      if (this.type === "folder") return "el-icon-folder";
    },

    iconSettings(){
      if (this.type === "device") return "el-icon-s-tools"
      if (this.type === "folder") return false;
    },

    isTemperature(){
      if(!this.data)  return false;
      if(this.data.temperature === 'undefined' || this.data.temperature == null) return false;
      return true;
    },

    temperature(){
      return this.data.temperature;
    },

    indicatorVisible(){
      if (this.type === "device") return true;
      if(this.type === "folder") return false;
    }

  },

  methods: {
    onClick() {
      // console.log(this.data.temperature)
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
  border-width: 2px;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  background-color: white;
}

  .tile-header{
    width: 100%;
    height: 40px;
    color: #606266;
    font-size: 20px;
    display: flex;
    // justify-content: space-between;

    .folder-odometer-icon{
      width: 20%;
      height: 100%;
    }

    .computed-title{
      width: 60%;
      height: 100%;
      font-size: 13px;
      display: flex;
      align-items: center;
      text-align: left;
      padding-left: 15px;
    }

    .icon-tool{
      width: 20%;
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
    }
  }

  .tile-body {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    font-size: 18px;
    color: #606266;
  }

  .text-body{
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
  }

  .temperature-content{
      width: 100%;
      height: 60%;
      font-size: 22px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .temperature-output{
        width:40%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }

      .icon-right{
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .preassigned-output{
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
    }

  .tile-footer{
    width: 100%;
    height: 40px;
    color: #606266;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;

    .tile-footer-count{
      width: 50%;
      height: 100%;
      display:flex;
      align-items: flex-end;
      justify-content: center;
    }

    .color-indicator{
      width:50%;
      height: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;


      .indicator{
        width: 45px;
        height: 6px;
        border: 1px solid #DCDFE6;
        border-radius: 36px;
        background-color: aqua;
        margin: 5px;
      }
    }
  }

.selected {
  background: #ebeef5;
}
</style>
