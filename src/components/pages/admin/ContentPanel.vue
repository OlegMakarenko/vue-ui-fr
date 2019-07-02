<template>
    <div class="content-panel">
        <div class="content-panel-container">
            <div class="control-panel">
                <ControlPanel 
                    @onInfoClick="onInfoClick"
                    @changeView="changeDeviceComponentView"/>
            </div>

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
                    @open="onComponentOpen"
                    @select="onComponentSelect"
                />
            </div>
        </div>
        <div class="info-panel">
            <InfoPanel v-if="isInfoPanel"/>
        </div>
    </div>
</template>

<script>
import ControlPanel from "./ControlPanel.vue"
import InfoPanel from "./InfoPanel.vue"
import ComponentTile from "../../ComponentT.vue"
import ComponentList from "../../ComponentL.vue"
import ModalSettings from "../../modalwindow/modalComponent.vue"


export default {
    components:{
        ControlPanel,
        InfoPanel,
        ComponentTile,
        ComponentList,
        ModalSettings,

    },

    computed:{
      content(){
        return this.$store.getters.currentDeviceList;
      },
    },
    
    data(){
        return{
            deviceComponentView: "ComponentTile",
            selectedId: null,
            isInfoPanel: false,
        }
    },

    methods:{
        changeDeviceComponentView(changedView){
            this.$set(this, "deviceComponentView", changedView); // this.deviceComponentView = changedView;
        },

        onComponentSelect(id){
            this.$set(this, 'selectedId', id);
        },

        onComponentOpen(id){
            this.$set(this, 'selectedId', null);
        },

        onInfoClick(){
            this.isInfoPanel = !this.isInfoPanel;
        }
    }
}
</script>

<style lang="scss" scoped>
.content-panel{
    display:flex;
    height: 100%;
    
    .content-panel-container{
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        height: 100%;

        .control-panel{
            flex: 0 0 auto;
            height: 110px;
        }

        .content-panel-view{
            flex: 1 1 auto;
            //display: flex;
            //justify-content: space-around;
            flex-wrap: wrap;
        }
    }

    .info-panel{
        flex: 0 0 auto;
    }
}
</style>