<template>
  <div class="control-panel">
    <el-row type="flex" justify="space-between" style="border-bottom: 2px solid #d0d0d0; margin-bottom: 10px;">
      <el-col>
        <el-button
          class="btn_add_device"
          type="primary"
          icon="el-icon-plus"
          @click="onAddDeviceClick"
          size="mini"
          v-if="allowaddGroup"
          >Добавить устройство в группу</el-button>

          <el-button
          class="btn_add_group"
          icon="el-icon-folder"
          @click="onAddGroupClick"
          :infoPanel="infoPanel"
          size="mini"
          v-if="allowaddGroup"
        >Добавить группу</el-button>

        <el-button
          class="btn_add_device"
          type="primary"
          icon="el-icon-plus"
          @click="onAddDeviceClick"
          size="mini"
          v-if="allowaddGroup =! allowaddGroup"
          >Подключить устройство</el-button>
      
        <el-button 
          class="btn_add_group" 
          icon="el-icon-delete" 
          size="mini"
          @click="onDelete"
          >Удалить</el-button>
      </el-col>


      <el-col :span="8">
        <!-- <i class="el-icon-info button-right-side" @click="onInfoClick"></i> -->

        <i
          id="button-icon-minus"
          class="el-icon-s-fold"
          v-if="currentView == 'ComponentTile'"
          @click="changeDeviceComponentView"
        ></i>

        <i id="button-icon-grid" class="el-icon-menu" v-else @click="changeDeviceComponentView"></i>
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
    },

    infoPanel(){
      return this.$store.getters.infoPanelData;
    },
    allowaddGroup(){
      return this.$store.getters.content.type === 'folder';
    },
  },

  methods: {
    addNewDevice() {},
    addNewGroup() {},

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

    onAddGroupClick() {
      this.$store.dispatch("ADD_GROUP");
       this.$prompt('Введите имя добавляемой группы', 'Добавить группу', {
          confirmButtonText: 'Применить',
          cancelButtonText: 'Отмена',
          inputValidator: function(value){return value.length},
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: 'Новое имя группы: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Редактирование отменено '
          });       
        });
      }
    },
}
</script>

<style lang="scss" scoped>
.control-panel {
  width: 100%;
  height: 100%;
  background-color: white;

  .el-row {
    padding-bottom: 15px;

    #button-icon-minus {
      float: right;
      background-color: white;
      border: none;
      color: grey;
      margin-top: 5px;
      cursor: pointer;
      font-size: 24px;
      outline: none;
    }

    #button-icon-grid {
      float: right;
      background-color: white;
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
    }

    .btn_add_group {
      font-size:14px;
    }
  }
}
</style>
