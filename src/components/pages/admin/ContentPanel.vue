<template>
  <div class="content-panel">

    <div class="content-panel-container">
      <div class="control-panel">
        <ControlPanel 
          :title="selectedTitle"
          :id="selectedId"
          @onInfoClick="onInfoClick" 
          @changeView="changeDeviceComponentView"
        />
      </div>
      <div class="content-panel-view">
        <!-- <ModalC v-show="isModalVisible2" @close="closeModal2"/> -->
        <component
          v-for="node in content"
          :is="deviceComponentView"
          :title="node.name"
          :content="node.content"
          :key="node.name"
          :id="node.id"
          :info="node.info"
          :selectedId="selectedId"
          :type="node.type"
          :childrenCount="node.children ? node.children.length: null"
          :data="node.data"
          @open="onComponentOpen"
          @select="onComponentSelect(node)"
          @click="onComponentSelect2"/> <!--object="deviceContent"-->
          <!-- :type="node.type"  -->
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
// import BaseComponent from '../../BaseComponent.vue'

export default {
  // extends: BaseComponent,
  components: {
    ControlPanel,
    InfoPanel,
    ComponentTile,
    ComponentList,
    ModalSettings
  },

  mounted(){
     return this.$store.dispatch("changeCurrentTree", 2);
  },

  computed: {
    content() {
        return this.$store.getters.content;
    },
  },

  data() {
    return {
      // class: "ContentPanel",
      // content: [],
      deviceComponentView: "ComponentTile",
      selectedId: null,
      selectedTitle: null,
      isInfoPanel: true,
      selectedNodeChildrenCount: 0,
    };
  },

  methods: {
    doSetData(data){
      this.$set(this, "content", data)
    },

    changeDeviceComponentView(changedView) {
      this.$set(this, "deviceComponentView", changedView); // this.deviceComponentView = changedView;
    },

    onComponentSelect(node) {
      this.$set(this, "selectedId", node.id);
      // console.log(node.id)

      this.$store.dispatch("NODE_SELECTED", node);

      if(node.children)
        this.$set(this, "selectedNodeChildrenCount", node.children);
    },

    onComponentSelect2(title){
      this.$set(this, "selectedTitle", title)
    },

    onComponentOpen(node) {
      // this.$set(this, "selectedId", null);
      this.$store.dispatch("OPEN_NODE", node.children)
      // this.$store.dispatch("OPEN_NODE", {
      //   nodeId: id,
      //   treeId: 1
      // });
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
    border-top: 1.5px solid #d0d0d0;
    border-left: 1.5px solid #d0d0d0;
    background-color: #f5f9fc;

    .control-panel {
      flex: 0 0 auto;
    }

    .content-panel-view {
      // flex: 1 1 auto;
      display: flex;
      // justify-content: space-evenly;
      flex-wrap: wrap;
      overflow: auto;
      padding: 20px;
    }
  }

  .info-panel {
    flex: 0 0 auto;
  }
}
</style>
