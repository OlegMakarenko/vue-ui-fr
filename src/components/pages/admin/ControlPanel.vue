<template>
  <div class="control-panel">
    <el-row type="flex" justify="space-between">
      <el-col>
        <el-button
          class="btn_add_device"
          type="primary"
          icon="el-icon-plus"
          @click="onAddDeviceClick"
          size="mini"
        >Подключить устройство</el-button>

        <el-button
          class="btn_add_group"
          icon="el-icon-folder"
          @click="onAddGroupClick"
          size="mini"
        >Добавить группу</el-button>
      </el-col>

      <el-col :span="8">
        <i class="el-icon-info button-right-side" @click="onInfoClick"></i>

        <i
          id="button-icon-minus"
          class="el-icon-minus"
          v-if="currentView == 'ComponentTile'"
          @click="changeDeviceComponentView"
        ></i>

        <i id="button-icon-grid" class="el-icon-s-grid" v-else @click="changeDeviceComponentView"></i>

        <i id="button-icon-tools" class="el-icon-s-tools"></i>
      </el-col>
    </el-row>

    <el-row>
      <Breadcrumb :path="path"/>
    </el-row>
    <ModalAddDevice v-if="showAddDevice" @close="onAddDeviceClose"/>

    <ModalAddGroup v-if="showAddGroup" @close="onAddGroupClose"/>
  </div>
</template>

<script>
import Breadcrumb from "../../Breadcrumb.vue";
import ModalAddDevice from "../../modalwindow/systemdevice/modalAddDevice.vue";
import ModalAddGroup from "../../modalwindow/creategroup/modalAddGroup.vue";

export default {
  components: {
    Breadcrumb,
    ModalAddDevice,
    ModalAddGroup
  },

  data() {
    return {
      currentView: "ComponentTile",
      showAddDevice: false,
      showAddGroup: false
    };
  },

  computed: {
    path() {
      return this.$store.getters.path;
    }
  },

  methods: {
    addNewDevice() {},
    addNewGroup() {},
    changeDeviceComponentView() {
      if (this.currentView === "ComponentTile") {
        this.currentView = "ComponentList";
      } else {
        this.currentView = "ComponentTile";
      }

      this.$emit("changeView", this.currentView);
    },

    onInfoClick() {
      this.$emit("onInfoClick");
    },

    onAddDeviceClick() {
      this.showAddDevice = true;
    },

    onAddDeviceClose() {
      this.showAddDevice = false;
    },

    onAddGroupClick() {
      this.showAddGroup = true;
    },
    onAddGroupClose() {
      this.showAddGroup = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.control-panel {
  width: 100%;
  height: 100%;

  .el-row {
    padding-bottom: 15px;

    #button-icon-minus {
      float: right;
      margin-right: 15px;
      background-color: white;
      border: none;
      color: grey;
      cursor: pointer;
      font-size: 24px;
      outline: none;
    }

    #button-icon-grid {
      float: right;
      margin-right: 15px;
      background-color: white;
      border: none;
      color: grey;
      cursor: pointer;
      font-size: 24px;
      outline: none;
    }

    #button-icon-tools {
      float: right;
      margin-right: 15px;
      background-color: white;
      border: none;
      color: grey;
      cursor: pointer;
      font-size: 24px;
      outline: none;
    }

    .button-right-side {
      float: right;
      margin-right: 15px;
      background-color: white;
      border: none;
      color: grey;
      cursor: pointer;
      font-size: 24px;
    }
  }
}
</style>
