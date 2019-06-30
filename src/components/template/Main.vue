<template>
<div class="main_component">
  <transition name="slide-fade"> <!-- the right side where we have Device manager info-->
      <div class="right" v-if="shows">
          <h3 style="font-size: 18px; bold: none; float: left; font-weight: 500; margin-top: 65px; width: 100px">Project info</h3>

          <div style="width:100%;">
            <input class="device_input" type="text" v-model="selectedComponent">
            <i class="el-icon-edit" style="font-size:19px"></i>
          </div>

          <p style="float: left;
                    text-align: left;
                    color: #9e9e9e;
                    width:80%;
                    margin-left: 5px;"
                    class="allp">
            A variety of sizes and densities can be downloaded from this site.
            Our icon set is also available as a git repository make it even
            easier for developers to customize, share and re-use.
          </p>

          <p style="float: left;
                    text-align: left;
                    color: #9e9e9e;
                    width:80%;
                    margin-left: 5px;"
                    class="allp">
            The best way to use these icons on the web is with our icon web font.
            It`s lightweight, easy to use, and hosted by Google Web Fonts. Learn
            how to use font-based icons in our developer guide.
          </p>
      </div>
  </transition>


  <div class="all_components">
      <div class="center">
        <!-- <h5 style="float: left; margin: 2px 0px 0px 2px">Device Manager</h5><br> Part, where we need to add our devices -->
        <button
              style="font-size: 15px;"
              class="btn_add_device"
              @click="showModal">
          <i class="fa fa-plus"
              style="margin-top: 2px; margin-right: 6px;"></i> Подключить устройство
        </button>

        <button @click="showAddGroup"
                style="font-size: 15px; text-align: right"
                class="btn_add_group">
          <i class="fa fa-folder"
              style="margin-top: 2px; margin-right: 6px;"></i> Добавить группу
        </button>

        <ModalW v-show="isModalVisible" @close="closeModal"/>

        <wifiDevice v-show="isWiFiDeviceVisible" @close="closeWiFiDevice"/>

        <addDevice v-show="isAddDeviceVisible" @close="closeAddDevice"/>

        <addGroup v-show="isAddGroupVisible" @close="closeAddGroup" />

        <i class="el-icon-info btn3" @click="shows = !shows"></i><!--this button showing right side-->

          <!--There is our component switching button-->
          <div style="display: flex; flex-direction: column; width: 170px; position: absolute; margin-left: 54%;">
            <button style="font-size: 13px" @click="showAddGroup">Подключение устройства</button> <!--Wi-FI / GSM-->
            <button style="font-size: 13px" @click="showWiFiDevice">Wi-Fi терморегулятор</button> <!--Web-Browser / Web-Browser on smartphone-->
            <button style="font-size: 13px" @click="showAddDevice">Добавление в систему</button> <!--adding device to the system-->
          </div>

          <button
            id="btn3"
            class="el-icon-minus"
            v-if="deviceComponentView == ComponentT"
            @click="changeDeviceComponentView">
          </button>

          <button
            id="btn3"
            class="el-icon-s-grid"
            v-else
            @click="changeDeviceComponentView">
          </button>

          <button
            id="btn3"
            class="el-icon-s-tools"
            @click="dbClick">
          </button>
      </div>
      
      <!-- here is our breadcrumb component -->
      <breadcrumb class="breadcrumb"/>
      

      <div class="compo"><!--Component part, under center part, where we have info about devices-->
        <ModalC v-show="isModalVisible2" @close="closeModal2"/>
        <component
          v-for="node in content"
          :is="deviceComponentView"
          :title="node.name"
          :content="node.content"
          :key="node.name"
          @open="onComponentOpen(node)"
          @select="onComponentSelect(node)"
          />
      </div>

      <!-- <ChildComponent
      class="compo"
        v-for="item in dataForComponents"
        :title="item.title"
        :id="item.id"
        :key="'childCc'+item.id"
        @nameChanged="childNameChanged"
      /> -->

    </div>
</div>
</template>


<script>
import ComponentT from '../tile_list/ComponentT.vue'

import ComponentL from '../tile_list/ComponentL.vue'

import ModalW from '../modalwindow/ModalW'

import ModalC from '../modalwindow/modalComponent.vue'

import ChildComponent from './ChildComponent.vue'

import wifiDevice from '../modalwindow/systemdevice/modalWiFiDevice.vue'

import addDevice from '../modalwindow/systemdevice/modalAddDevice.vue'

import addGroup from '../modalwindow/creategroup/modalAddGroup.vue'

import breadcrumb from './breadcrumb.vue'



export default {

    components: {
      "ComponentT": ComponentT,
      "ComponentL": ComponentL,
      ChildComponent,
      ModalW,
      ModalC,
      wifiDevice,
      addDevice,
      addGroup,
      breadcrumb
    },

    data(){
        return{
          ComponentT: "ComponentT",
          ComponentL: "ComponentL",

          doubleClick: 0,

          centerDialogVisible: false,

          dataForComponents: [
              /* {
                id: 0,
                title: " Temperature device",
                type: "folder",
                content: "Temp 10C",
                children: [
                  { id: 1, title: " Himiditry device", type: "device", content: "Hum: 40%" },
                  { id: 2, title: " Himiditry device1", type: "device", content: "Hum: 40%" }
                ]
              },
              { id: 3, title: " Himiditry device2", type: "device", content: "Hum: 40%" },
              { id: 4, title: " Himiditry device3", type: "device", content: "Hum: 40%" },
              { id: 5, title: " Himiditry device4", type: "device", content: "Hum: 40%" },*/
          ],

            visible: true,

            deviceComponentView: "ComponentT", //show components

            shows: true, //showing right side

            radio1: null, //our radio buttons for switching components blocks - list

            isModalVisible: false, //modal window

            isModalVisible2: false,

            isWiFiDeviceVisible: false,

            isAddDeviceVisible: false,

            isAddGroupVisible: false,

            selectedComponent: null,
        }
    },

    computed:{
      content(){
        return this.$store.getters.currentDeviceList;
      },
    },

    methods:{

    childNameChanged(e){
      console.log(e)
      for(var i=0; i < this.dataForComponents.length; i++)
        if(this.dataForComponents[i].id == e.id)
          this.dataForComponents[i].title = e.newTitle;
    },

    showModal(){
      this.isModalVisible = true;
    },

    closeModal(){
      this.isModalVisible = false;
    },

    showWiFiDevice(){
      this.isWiFiDeviceVisible = true;
    },

    closeWiFiDevice(){
      this.isWiFiDeviceVisible = false;
    },

    showAddDevice(){
      this.isAddDeviceVisible = true;
    },

    closeAddDevice(){
      this.isAddDeviceVisible = false;
    },

    showAddGroup(){
      this.isAddGroupVisible = true;
    },

    closeAddGroup(){
      this.isAddGroupVisible = false;
    },

    changeDeviceComponentView(){
      if(this.deviceComponentView == this.ComponentT){
        this.deviceComponentView = this.ComponentL;
      } else {
        this.deviceComponentView = this.ComponentT;
      }
    },

    // onComponentSelect(node){
    //   this.selectedComponent = node.name;
    //   @click="onComponentSelect(node)"
    // },

    onComponentOpen(node){
      this.$store.commit('OPEN_FOLDER', node);
    },

    onComponentSelect(node){
      this.selectedComponent = node.name;
    },

    showModal2(){
      this.isModalVisible2 = true;
    },

    closeModal2(){
      this.isModalVisible2 = false;
    },

    dbClick(){
      this.doubleClick++
      if(this.doubleClick == 1){
        console.log('clicked once')
      } else if (this.doubleClick == 2){
        console.log('clicked twice')
      }
    }
  }
}
</script>


<style scoped>

.main_component{
  width:100%;
  height: 100%;
}

.breadcrumb{
 display: flow-root;
}

.all_components{
  width: 100%;
  min-width: 80%;
}

.compo {
  height: 75vh;
  min-width: 60%;
  max-width: 90%;
  text-align: center;
  background-color: #ffffff;
  display: block;
  flex-flow: row wrap;
  overflow-y: auto;
}

.center {
  height: 95px;
  text-align: center;
  border-top: 1px solid #ebeef5;
  background-color: #ffffff;
  display: block;
  flex-flow: row wrap;
}


.right {
  width: 20%;
  min-height: 100vh;
  float: right;
  text-align: center;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #ebeef5;
  background-color: #ffffff;
}

.device_input{
  width: 200px;
  height: 40px;
  font-size: 17px;
  border: none;
  background: transparent;
  text-align: center;
}

.btn1 {
  width: 200px;
  height: 40px;
  float: left;
  margin-top: 2%;
  margin-left: 5px;
  border: none;
  border-radius: 5px;
  background-color: #57aaff;
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}

.btn_add_device{
  width: 200px;
  height: 35px;
  float: left;
  margin-top: 25px;
  margin-left: 30px;
  display: flex;
  justify-content: flex-start;
  border: none;
  border-radius: 8px;
  background-color: #57aaff;
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}

.btn_add_group{
  width: 200px;
  height: 35px;
  float: left;
  margin-top: 25px;
  margin-left: 5px;
  display: flex;
  justify-content: flex-start;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  background-color: white;
  color: #c1c0c0;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}

#btn3{
  float: right;
  margin: 4px;
  margin-top: 26px;
  margin-right: 11px;
  background-color: white;
  border: none;
  color: grey;
  cursor: pointer;
  font-size: 28px;
  outline: none;
}

.btn3{
  float: right;
  margin: 4px;
  margin-top: 25px;
  margin-right: 18px;
  background-color: white;
  border: none;
  color: grey;
  cursor: pointer;
  font-size: 28px;
}

.btn4{
  width: auto;
  float: right;
  color: grey;
  margin-top: 30px;
}

.slide-fade-enter-active {
  transition: all .2s ease;
}

.slide-fade-leave-active {
  transition: all .2s ease;
}

.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.active{
  background: #ebeef5;
}

.active_hover{
  background: #ebeef5;
}

::-webkit-scrollbar { width: 3px; height: 3px;}
::-webkit-scrollbar-track {  background-color: #999;}
::-webkit-scrollbar-thumb { height: 50px; background-color: #666; border-radius: 3px;}
::-webkit-resizer { background-color: #666;}


</style>
