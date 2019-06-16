<template>
    <div>
        <transition name="slide-fade"> <!-- the right side where we have Device manager info-->
            <div class="right" v-if="shows">
                <h3 style="font-size: 18px; bold: none; float: left; font-weight: 500; margin-top: 65px;">Project info</h3><br><br>

                <!-- <el-header style="float:left;" > dynamic title

                </el-header> -->

                <p v-if="selectedComponent"
                    style="text-align: center;
                           font-weight: 500;
                           margin-top: 60px;
                           width: 300px;">
                    {{selectedComponent}}
                </p> <!--dynamic title-->

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
                  <i class="fa fa-plus" style="margin-top: 2px; margin-right: 6px;"></i> Подключить устройство
            </button>

            <button
                  style="font-size: 15px; text-align: right"
                  class="btn_add_group">
                  <i class="fa fa-folder" style="margin-top: 2px; margin-right: 6px;"></i> Добавить группу
            </button>


            <!-- <div class="el-modal-window">
                <el-button type="text" @click="centerDialogVisible = true">Click to open the Dialog</el-button>
                <el-dialog
                    title="Warning"
                    :visible.sync="centerDialogVisible"
                    width="50%"

                    center>
                <div style="height: 700px;">
                  <el-tabs tab-position="left" style="height: 500px;">
                    <el-tab-pane style="height: 200px;">
                      <div slot="label" style="height: 200px; font-size: 50px"><i class="el-icon-date"></i></div>
                      Route
                    </el-tab-pane>
                      <el-tab-pane style="height: 200px;">
                      <div slot="label" style="height: 200px; font-size: 50px"><i class="el-icon-search"></i></div>
                      Route
                    </el-tab-pane>
                     </el-tabs>
                </div>

                <span slot="footer" class="dialog-footer">
                  <el-button @click="centerDialogVisible = false">Cancel</el-button>
                  <el-button type="primary" @click="centerDialogVisible = false">Confirm</el-button>
                </span>
              </el-dialog>
            </div> -->

            <ModalW v-show="isModalVisible" @close="closeModal"/>

            <i class="el-icon-info btn3" @click="shows = !shows"></i><!--this button showing right side-->

              <!--There is our component switching button-->
              <button
                id="btn3"
                class="el-icon-minus"
                v-if="showc == ComponentT"
                @click="showComponents">
              </button>

              <button
                id="btn3"
                class="el-icon-s-grid"
                v-else
                @click="showComponents">
              </button>

              <button
                id="btn3"
                class="el-icon-s-tools">
              </button>
          </div>

          <div class="breadcrumb">
            <el-breadcrumb separator="/" style="margin-left: 35px;">
            <el-breadcrumb-item :to="{ path: '/' }">Моя Система</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">Мой дом</a></el-breadcrumb-item>
            <el-breadcrumb-item>Кухня</el-breadcrumb-item>
            </el-breadcrumb>
          </div>

          <div class="compo"><!--Component part, under center part, where we have info about devices-->
            <component
              v-for="item in dataForComponents"
              :is="showc"
              :title="item.title"
              :content="item.content"
              :key="item.title"
              @select="onComponentSelect"
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
import ChildComponent from './ChildComponent.vue'


export default {

    components: {
        "ComponentT": ComponentT,
        "ComponentL": ComponentL,
        ChildComponent,
        ModalW
    },

    data(){
        return{

          ComponentT: "ComponentT",
          ComponentL: "ComponentL",
          centerDialogVisible: false,

            dataForComponents: [
                { id: 0, title: " Temperature device", content: "Temp 10C" },
                { id: 1, title: " Himiditry device", content: "Hum: 40%" },
                { id: 2, title: " Himiditry device1", content: "Hum: 40%" },
                { id: 3, title: " Himiditry device2", content: "Hum: 40%" },
                { id: 4, title: " Himiditry device3", content: "Hum: 40%" },
                { id: 5, title: " Himiditry device4", content: "Hum: 40%" },
                { title: " Himiditry device5", content: "Hum: 40%" },
                { title: " Himiditry device6", content: "Hum: 40%" },
                { title: " Himiditry device7", content: "Hum: 40%" }
            ],

            visible: true,

            showc: null, //show components

            shows: true, //showing right side

            radio1: null, //our radio buttons for switching components blocks - list

            isModalVisible: false, //modal window

            selectedComponent: null,
        }
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

    showComponents(){
      if(this.showc == this.ComponentT){
        this.showc = this.ComponentL;
      } else {
        this.showc = this.ComponentT;
      }
    },

    onComponentSelect(title){
      this.selectedComponent = title;
    }

  }
}
</script>


<style scoped>

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
  /* overflow-y: auto; */
}


.right {
  width: 20%;
  min-height: 100vh;
  float: right;
  text-align: center;
  display: block;
  border-top: 1px solid #ebeef5;
  background-color: #ffffff;
}

/* .center_h_tag{
  font-size:30px;
  float: left;
  font-weight: 400;
  margin-left:0;
} */

.btn1 {
  width: 200px;
  height: 40px;
  float: left;
  margin-top: 2%;
  margin-left: 5px;
  /* display: flex;  */
  /* justify-content: flex-start; */
  /* margin: 4px 2px 2px 4px; */
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
  margin-left: 5px;
  display: flex; justify-content: flex-start;
  border: none;
  /* outline:none; */
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
  display: flex; justify-content: flex-start;
  border: 1px solid #ebeef5;
  /* outline:none; */
  border-radius: 8px;
  background-color: white;
  color: #c1c0c0;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}

#btn3{
  /* width: 20px; */
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
  /* width: 20px; */
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

.active_hover{
  background: #ebeef5;
}

::-webkit-scrollbar { width: 3px; height: 3px;}
::-webkit-scrollbar-track {  background-color: #999;}
::-webkit-scrollbar-thumb { height: 50px; background-color: #666; border-radius: 3px;}
::-webkit-resizer { background-color: #666;}


</style>
