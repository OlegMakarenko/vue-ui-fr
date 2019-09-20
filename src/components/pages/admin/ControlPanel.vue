<template>
  <div class="control-panel">
    <el-row type="flex" justify="space-between">
      <el-col class="manage_buttons">
        <el-button
          class="btn_add_device"
          type="primary"
          icon="el-icon-plus"
          @click="addGroupClick"
          size="mini"
          v-if="manageButtons"
          >Добавить устройство в группу</el-button>

          <el-button
            class="btn_add_group"
            icon="el-icon-folder"
            @click="onAddGroupClick"
            :infoPanel="infoPanel"
            size="mini"
            v-if="manageButtons"
            >
              Добавить группу
          </el-button>         


        <el-button
          class="btn_add_device"
          type="primary"
          icon="el-icon-plus"
          @click="onAddDeviceClick"
          size="mini"
          v-if="manageButtons =! manageButtons"
          >Подключить устройство</el-button>

        <el-button
          class="btn_add_group"
          icon="el-icon-delete"
          size="mini"
          @click="onDelete"
          >Удалить</el-button>
<!-- 
          <el-button
          class="btn_add_group"
          size="mini"
          @click="colorSw"
          >Изменить фон</el-button> -->

        <!-- <i class="el-icon-info button-right-side" @click="onInfoClick"></i> -->

        <i
          id="button-icon-minus"
          class="el-icon-s-fold"
          v-if="currentView == 'ComponentTile'"
          @click="changeDeviceComponentView"
        ></i>

        <i id="button-icon-grid" class="el-icon-menu" v-else @click="changeDeviceComponentView"></i>

      <Breadcrumb class="bread-crumb" :path="path"/>

      </el-col>

    </el-row>
    <!-- <ModalAddDevice v-if="showAddDevice" @close="onAddDeviceClose"/> -->

    <ModalAddGroup v-if="showAddGroup" @close="addGroupClose"/>

    <addDeviceModal v-if="showAddDevice"  @close="onAddDeviceClose"/>
  </div>
</template>

<script>
import Breadcrumb from "../../Breadcrumb.vue";
// import ModalAddDevice from "../../modalwindow/systemdevice/modalAddDevice.vue";
import ModalAddGroup from "../../modalwindow/creategroup/modalAddGroup.vue";
import addDeviceModal from "../../modalwindow/ModalW.vue"
import BaseComponent from '../../BaseComponent.vue'

export default {
  extends: BaseComponent,
  components: {
    Breadcrumb,
    addDeviceModal,
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
    },

    infoPanel(){
      return this.$store.getters.infoPanelData;
    },
    
    manageButtons(){
        return this.$store.getters.content.type === 'devices';
      }
  },

  methods: {
    addNewDevice() {
      
    },
    addNewGroup() {},

    colorSw(){
      this.$store.dispatch('COLOR_SWITCH')
    },

    onDelete(){
        this.$confirm('Вы действительно хотите удалить "' + this.$store.getters.selectedNode.name + '"?', 'Удаление', {
          confirmButtonText: 'Удалить',
          cancelButtonText: 'Отмена',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch("NODE_DELETE");
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Удаление отменено'
          });
        });
      },

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

    addGroupClick() {
      this.showAddGroup = true;
    },

    addGroupClose() {
      this.showAddGroup = false;
    },

    onAddGroupClick() {
      this.$store.dispatch("ADD_GROUP");
       this.$prompt('Введите имя добавляемой группы', 'Добавить группу', {
          confirmButtonText: 'Применить',
          cancelButtonText: 'Отмена',
          inputValidator: function(value){return value.length},
        }).then(({ value }) => {
          this.$store.dispatch("addGroup", {nodeId: /*this.infoPanel.id*/ '0', name: value});
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Редактирование отменено '
          });
        });
      },
    },
}
</script>

<style lang="scss" scoped>
.control-panel {
  width: 100%;
  height: 100%;
  background-color: #f5f9fc;

  .el-row {
    padding-bottom: 5px;

    .manage_buttons{
      width: 100%;
      border-bottom: 1.5px solid #d0d0d0;
      align-content: space-around;
      padding: 20px;

      #button-icon-minus {
        float: right;
        background-color: #f5f9fc;
        border: none;
        color: grey;
        margin-top: 5px;
        cursor: pointer;
        font-size: 24px;
        outline: none;
      }

      #button-icon-grid {
        float: right;
        background-color: #f5f9fc;
        border: none;
        color: grey;
        margin-top: 5px;
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

      .btn_add_device{
        font-size: 14px;
        height: 30px;
      }

      .btn_add_group {
        font-size:14px;
        height: 30px;
      }

      .bread-crumb{
        margin-top: 20px;
      }
    }
  }
}
</style>
