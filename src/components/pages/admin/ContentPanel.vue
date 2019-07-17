<template>
  <div class="content-panel">
    <div class="content-panel-container">
      <div class="control-panel">
        <ControlPanel @onInfoClick="onInfoClick" @changeView="changeDeviceComponentView"/>
      </div>

      <!-- <input type="text" v-model="selectedId">
      <input type="text" v-model="selectedTitle"> -->
      <div class="content-panel-view">
        <!-- <ModalC v-show="isModalVisible2" @close="closeModal2"/> -->
        <component
          v-for="node in content"
          :is="deviceComponentView"
          :title="node.name"
          :type="node.type"
          :content="node.content"
          :key="node.name"
          :id="node.id"
          :selectedId="selectedId"
          :childrenCount="node.children ? node.children.length: null"
          :data="node.data"
          @open="onComponentOpen"
          @select="onComponentSelect(node)"
          @click="onComponentSelect2"/>
      </div>
    </div>
    <div class="info-panel">
      <InfoPanel v-if="isInfoPanel" 
                 :title="selectedTitle" 
                 :id="selectedId" 
                 :childrenCount="selectedNodeChildrenCount"/>
    </div>
  </div>
</template>

<script>
import ControlPanel from "./ControlPanel.vue";
import InfoPanel from "./InfoPanel.vue";
import ComponentTile from "../../ComponentT.vue";
import ComponentList from "../../ComponentL.vue";
import ModalSettings from "../../modalwindow/modalComponent.vue";

export default {
  components: {
    ControlPanel,
    InfoPanel,
    ComponentTile,
    ComponentList,
    ModalSettings
  },

  computed: {
    content() {
      if (this.$store.getters.content)
        return this.$store.getters.content.children;
    }
  },

  data() {
    return {
      deviceComponentView: "ComponentTile",
      selectedId: null,
      selectedTitle: null,
      isInfoPanel: true,
      selectedNodeChildrenCount: 0,
    };
  },

  methods: {
    changeDeviceComponentView(changedView) {
      this.$set(this, "deviceComponentView", changedView); // this.deviceComponentView = changedView;
    },

    onComponentSelect(node) {
      this.$set(this, "selectedId", node.id);
      console.log(node)

      this.$store.dispatch("NODE_SELECTED", node);
      
      if(node.children)
      this.$set(this, "selectedNodeChildrenCount", node.children.length);
    },

    onComponentSelect2(title){
      this.$set(this, "selectedTitle", title)
    },

    onComponentOpen(id) {
      this.$set(this, "selectedId", null);
      this.$store.dispatch("OPEN_NODE", {
        nodeId: id,
        treeId: 1
      });
    },

    onInfoClick() {
      this.isInfoPanel = !this.isInfoPanel;
    }
  }
};
</script>

<style lang="scss" scoped>
.content-panel {
  display: flex;
  height: 100%;

  .content-panel-container {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px;
    border-top: 1.5px solid #d0d0d0;
    border-left: 1.5px solid #d0d0d0;
    border-right: 1.5px solid #d0d0d0;
    border-radius: 15px 15px 0px 0px;
    margin-left: 5px;
    margin-right: 5px;

    .control-panel {
      flex: 0 0 auto;
    }

    .content-panel-view {
      flex: 1 1 auto;
      //display: flex;
      //justify-content: space-around;
      flex-wrap: wrap;
    }
  }

  .info-panel {
    flex: 0 0 auto;
  }
}
</style>