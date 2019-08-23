<template>
  <div
    class="component-list"
    @click="onClick"
    v-on:click="onClickTitle"
    @dblclick="onDblclick"
    :class="{selected: isSelected}">

    <div class="left-side-list">
      <i :class="iconClass" class="left-side-icon"></i>
        
      <img src="../icon/img13.jpg" style="width: 40px; height: 40px; display: flex;" v-if="devicePicture">

      <div class="device-model" v-if="iconSettings">
        LTC090
      </div>

      <div class="children-count-list" v-if="childrenCount">Вложения: {{childrenCount}}</div>
      <!-- <i  v-if="isTemperature" class="fa fa-thermometer thermometer-list"></i> -->
      <!-- <div  v-if="isTemperature" style="margin-left: 5px;"> {{temperature}}</div> -->
    </div>

    <ModalC v-show="isModalVisible2" @close="closeModal2"/>

    <div class="center-side-list">
      <div v-if="isTemperature">
        {{temperature+'°'}}
          <i class="el-icon-right" style="color: #666"></i>
        {{preassignedTemp+'°'}}        
      </div>
      <div>{{computedTitle}}</div>
    </div>

    <div class="right-side-list">
      <div class="right-side-icon" v-if="isSelected">
        <i class="el-icon-s-tools"
          @click="showModal2"
          v-if="iconSettings">
        </i>
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
      return this.selectedId == this.id;
    },

    isSelectedTitle() {
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

    indicatorVisible(){
      if (this.type === "device") return true;
      if(this.type === "folder") return false;
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
    onClick(node) {
      this.$emit("select", this.id);
      this.$set(this, "selectedNodeChildrenCount", node.children);
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
  width: 100%;
  height: 40px;
  margin: 15.7px;
  padding: 17px;
  border-style: solid;
  border-color: #ebebeb;
  border-width: 2px;
  border-radius: 8px;
  display: flex;
  cursor: pointer;
  background-color: white;

  .left-side-list{
    width: 25%;
    display: flex;
    color: #606266;
    justify-content: flex-start;
    align-items: center;

    .left-side-icon{
      color: grey;
      font-size: 20px;
      cursor: pointer;
    }

    .device-model{
      padding-left: 15px;
      font-size: 13px;
    }
  }

  .children-count-list{
    margin-left: 10px;
    font-size: 13px;
  }

  .center-side-list {
    width:50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row-reverse;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    color: #606266;
  }

  .thermometer-list{
    font-size:24px;
    color:#606266;
    margin-left: 20px;
    align-items: stretch;
  }

  .right-side-list{
    width:25%;
    height: 100%;
    display: flex;
    align-content: flex-end;
    justify-content: flex-end;
    flex-direction: row;

    .right-side-icon{
      width: 85%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: grey;
      font-size: 20px;
      cursor: pointer;
    }

    .color-indicator{
      width: 15%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;


      .indicator{
        width: 15px;
        height: 15px;
        border: 1px solid #DCDFE6;
        border-radius: 360px;
        background-color: aqua;
        margin-right: 1px;
      }
    }
  }
}
.selected {
  background: #ebeef5;
}
</style>
