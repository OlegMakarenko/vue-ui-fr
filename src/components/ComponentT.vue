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
        <img src="../icon/ltc090.png" style="width: 40px; height: 40px;" v-if="ltc090Func" ondragstart="return false;">
        <img src="../icon/ltc070.png" style="width: 40px; height: 40px;" v-if="ltc070Func" ondragstart="return false;">
        <img src="../icon/ltc030.png" style="width: 40px; height: 40px;" v-if="ltc030Func" ondragstart="return false;">
        <img src="../icon/ltc030.png" style="width: 40px; height: 40px;" v-if="ltc030FuncTest" ondragstart="return false;">

      </div>

      <div class="computed-title" v-if="iconSettings">
        <!-- {{computedTitle}} -->
        {{ltc030TextTest}} 
        {{ltc090Text}} 
        {{ltc070Text}} 
        {{ltc030Text}} 
      </div>

      <div class="icon-tool" v-if="isSelected">
        <i 
          object="componentSettings"
          v-if="iconSettings"
          class="el-icon-s-tools"
          @click="showModal2">
        </i>
    </div>
        <ModalC v-show="isModalVisible2" @close="closeModal2"  :visibleControl="this.visibleControl"/>
    </div>


    <div class="tile-body">
      <div class="text-body">
        {{computedTitle}}
      </div>

      <div class="temperature-content"  v-if="isTemperature">
        <div class="temperature-output">
          {{temperature}}
        </div>
        <div class="icon-view">
          <img
            :class="tempView" 
            class="up-down-heating"
            v-if="iconDown" 
            src="../icon/heating-icon-down.png">

          <img
            :class="tempView" 
            class="up-down-heating"
            v-if="iconUp" 
            src="../icon/heating-icon-up.png">
        </div>
        <div class="preassigned-output">
          {{sliderTemp+'°'}}
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
  props: ["title", "content", "selectedId", "selectedTitle", "id", "type", 'childrenCount', 'data', 'info'],

  data() {
    return {
      textBeforeTitle: "This is",
      isModalVisible2: false,
      hover: false,
      show_icons: false,
      devicePicture: false,
      selectedNodeChildrenCount: 0,
      preassignedTemp: 22,
      visibleControl: true,
      iconUp: true,
      iconDown: false,
      ltc090: true,
      ltc030: true,
      ltco70: true,
    };
  },

  components: {
    ModalC
  },

  computed: {
    computedTitle() {
      if (this.title) return this.title.toUpperCase();
    },

    infoPanel(){
      return this.$store.getters.infoPanelData;
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
      if(!this.type === "folder")  return false;
      if(this.type === 'undefined' || this.type == null) return false;
      return true;
    },

    ltc030FuncTest(){
      if(this.id === '0' ) return this.ltc030 = true
      else if(this.type === "folder") return this.ltc030 = false
    },

    ltc090Func(){
      if(this.id === '1') return this.ltc090 = true
      else if(this.type === "folder") return this.ltc090 = false
    },

    ltc070Func(){
      if(this.id === '2') return this.ltc070 = true
      else if(this.type === "folder") return this.ltc070 = false
    },

    ltc030Func(){
      if(this.id === '3' ) return this.ltc030 = true
      else if(this.type === "folder") return this.ltc030 = false
    },

    ltc030TextTest(){
      if(this.id === '0' ) return 'LTC030'
    },

    ltc090Text(){
      if(this.id === '1') return 'LTC090'
    },

    ltc070Text(){
      if(this.id === '2') return 'LTC070'
    },

    ltc030Text(){
      if(this.id === '3' ) return 'LTC030'
    },

    deviceIcon(){
      if(this.id === '0') return
    },

    tempView(){
      if (this.$store.getters.deviceData.temp > this.sliderTemp){
         this.iconUp = false;
         this.iconDown = true;
      } else if (this.$store.getters.deviceData.temp < this.sliderTemp){
        this.iconUp = true;
        this.iconDown = false;
      }
    },

    temperature(){
      return this.$store.getters.deviceData.temp + '°';
    },

    sliderTemp:{
      get(){
        return this.$store.getters.temperature
      },
      set(value){
        this.$store.commit("temperature", value);
      }
    },

    indicatorVisible(){
      if(this.type === "device") return true;
      if(this.type === "folder") return false;
    }

  },

  methods: {
    onClick() {
      // console.log(this.data.temperature)
      this.$emit("select", this.id);
      // this.$set(this, "selectedNodeChildrenTemp", node.children.length);
    },

    // tempChange(value){
    //   this.$store.commit("temperature", value)
    //   this.$store.dispatch("getTemperature")
    // },

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

    onDblclick(node) {
      console.log(node);
        this.$store.dispatch("OPEN_NODE", {
          nodeId: node.id,
          treeId: this.id,
        });
    },

    showModal2() {
      this.isModalVisible2 = true;
      // this.$store.dispatch("DEVICE_INFO");
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
  height: 160px;
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
    height: 100px;
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

      .icon-view{
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;

        .up-down-heating{
          width: 25px;
          height: 25px;
        }
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
    height: 20px;
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
        // margin: 5px;
      }
    }
  }

.selected {
  background: #ebeef5;
}
</style>
