<template>
    <div>

        <transition name="slide-fade"> <!-- the right side where we have Device manager info-->
            <div class="right" v-if="shows">
                <h3 style="font-size: 18px; bold: none; float: left">Project info</h3><br><br>
                <p style="float: left; text-align: left; color: #9e9e9e" class="allp">
                  hello my name ishello my name ishello my name ishello my name ishello my name is
                  hello my name ishello my name ishello my name ishello my name ishello my name is
                  hello my name ishello my name ishello my name ishello my name ishello my name 
                </p>
                <p style="float: left; text-align: left; color: #9e9e9e" class="allp">
                  hello my name ishello my name ishello my name ishello my name ishello my name is
                  hello my name ishello my name ishello my name ishello my name ishello my name is
                  hello my name ishello my name ishello my name ishello my name ishello my name 
                </p>
              <el-header v-if="selectedComponent"> <!--dynamic title-->
                {{selectedComponent}}
              </el-header>
            </div>
        </transition>

      <div class="all_components">
          <div class="center">
            <!-- <h5 style="float: left; margin: 2px 0px 0px 2px">Device Manager</h5><br> Part, where we need to add our devices -->
            <button 
                  class="btn1" 
                  @click="showModal">
                      <h class="center_h_tag">+ </h><h>Подключить устройство</h>
            </button>
            
            <ModalW v-show="isModalVisible" @close="closeModal"/>

            <i class="el-icon-info btn3" @click="shows = !shows"></i><!--this button showing right side-->

              <!--There is our component switching button-->
              <button 
                id="btn3" 
                class=" fa fa-align-justify" 
                v-if="showc == ComponentT" 
                @click="showComponents">
              </button>
              
              <button 
                id="btn3" 
                class="fa fa-th-large" 
                v-else 
                @click="showComponents">
              </button>
          </div>

          <div class="compo"><!--Component part, under center part, where we have info about devices-->
            <component
              v-for="item in dataForComponents"
              :is="showc"
              :title="item.title"
              :content="item.content"
              :key="item.title"
              @select="onComponentSelect"/>
          </div>

        </div>
    </div>

</template>


<script>

import ComponentT from '../tile_list/ComponentT.vue'
import ComponentL from '../tile_list/ComponentL.vue'
import ModalW from '../modalwindow/ModalW'


export default {

    components: {
        "ComponentT": ComponentT,
        "ComponentL": ComponentL,
        ModalW
    },

    data(){
        return{

          ComponentT: "ComponentT",
          ComponentL: "ComponentL", 

            dataForComponents: [
                { title: " Temperature device", content: "Temp 10C" },
                { title: " Himiditry device", content: "Hum: 40%" },
                { title: " Himiditry device1", content: "Hum: 40%" },
                { title: " Himiditry device2", content: "Hum: 40%" },
                // { title: " Himiditry device3", content: "Hum: 40%" },
                // { title: " Himiditry device4", content: "Hum: 40%" },
                // { title: " Himiditry device5", content: "Hum: 40%" },
                // { title: " Himiditry device6", content: "Hum: 40%" },
                // { title: " Himiditry device7", content: "Hum: 40%" }
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
.all_components{
  width: 100%;
  min-width: 80%;
}

.compo {
  height: 76%;
  text-align: center;
  background-color: #ffffff;
  display: block;
  flex-flow: row wrap;
  overflow-y: auto;
}

.center {
  height: 14%;
  text-align: center;
  border-top: 1px solid #ebeef5;
  background-color: #ffffff;
  display: block;
  flex-flow: row wrap;
  overflow-y: auto;
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

.center_h_tag{
  font-size:30px;
  float: left; 
  font-weight: 400; 
  margin-left:0;
}

.btn1 {
  width: 20%;
  height: 40px;
  float: left;
  margin-top: 16px;
  margin-left: 5px;
  /* margin: 4px 2px 2px 4px; */
  border: none;
  border-radius: 5px;
  background-color: #57aaff;
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}

#btn3{
  /* width: 20px; */
  float: right;
  margin: 4px;
  margin-top: 19px;
  margin-right: 10px;
  background-color: white;
  border: none;
  color: grey;
  cursor: pointer;
  font-size: 30px;
  outline: none;
}

.btn3{
  /* width: 20px; */
  float: right;
  margin: 4px;
  margin-top: 18px;
  margin-right: 15px;
  background-color: white;
  border: none;
  color: grey;
  cursor: pointer;
  font-size: 30px;
}

.btn4{
  width: auto;
  float: right;
  color: grey;
  margin-top: 30px;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
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

</style>
