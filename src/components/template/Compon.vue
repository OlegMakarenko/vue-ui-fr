<template>
    <div>
        <div class="center">
            <h5 style="float: left; margin: 2px 0px 0px 2px">Device Manager</h5><br> <!--Part, where we need to add our devices-->
            <button class="btn1" @click="showModal">+Подключить устройство</button>
            <ModalW v-show="isModalVisible" @close="closeModal"/>
            <i class="el-icon-info btn3" @click="shows = !shows"></i><!--this button showing right side-->
            <i class="el-icon-menu btn4"></i><!--this button must change our list in component part blocks->lists->blocks -->
        </div>

        <transition name="slide-fade"> <!-- the right side where we have Device manager info-->
            <div class="right" v-if="shows">
                <h3>Диспетчер устройств</h3>
                <br><br>Вложений пока нет <br><br><hr><br> Действий пока нет <br><br><hr><br>
                В этом пункте меню Вы можете подключить к своей учетной записи устройствo
            </div>
        </transition>

        <div class="compo"><!--Component part, under center part, where we have info about devices-->
            <ComponentE
                v-for="item in dataForComponents"
                :title="item.title"
                :content="item.content"
                :key="item.title"
            />
        </div>
    </div>
</template>

<script>

import ComponentE from '../ComponentE.vue'
import ModalW from '../modalwindow/ModalW'

export default {
    components: {
        ComponentE,
        ModalW
    },

    data(){
        return{
            shows: true, //showing right side

            isModalVisible: false, //modal window

            dataForComponents: [
                { title: " Temperature device", content: "Temp 10C" },
                { title: " Himiditry device", content: "Hum: 40%" },
                { title: " Himiditry device1", content: "Hum: 40%" },
                // { title: " Himiditry device2", content: "Hum: 40%" },
                // { title: " Himiditry device3", content: "Hum: 40%" },
                // { title: " Himiditry device4", content: "Hum: 40%" },
                // { title: " Himiditry device5", content: "Hum: 40%" },
                // { title: " Himiditry device6", content: "Hum: 40%" },
                // { title: " Himiditry device7", content: "Hum: 40%" }
            ],
        }
    },

    methods:{
    showModal(){
      this.isModalVisible = true;
    },

    closeModal(){
      this.isModalVisible = false;
    }
  }
}
</script>


<style scoped>

.compo {
  width: 60%;
  height: 87vh;
  float: left;
  text-align: center;
  border: 0.11px solid #ccc;
  background-color: #ffffff;
  display: flex; 
  flex-flow: row wrap;
  overflow-y: auto;
}

.center {
  width: 60%;
  height: 13vh;
  float: left;
  /* margin-top: 7px; */
  display: block;
  border: 0.11px solid #ccc;
  background-color: #ffffff;
  display: block;
}

.btn1 {
  width: 20%;
  float: left;
  margin: 4px 2px 2px 4px;
  border: none;
  border-radius: 5px;
  background-color: #6f92be;
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}

.btn3, .btn4{
  width: 20px;
  float: right;
  margin: 4px 2px 2px 4px;
  margin-top: 42px;
  border: none;
  border-radius: 5px;
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}

.right {
  width: 19.8%;
  min-height: 100vh;
  float: right;
  text-align: center;
  /* margin-top: 7px; */
  display: block;
  border: 1.2px solid #ccc;
  background-color: #ffffff;
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

</style>
