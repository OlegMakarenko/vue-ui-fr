<template>
  <div>
    <div class="left">
      <div>
        <button class="btn2" @click="showTree = !showTree">Моя система</button>
          <Tree
          :node="root1"
          v-if="showTree"
          :treeData="root"
          />


        <br>
            <p class="allp">Здесь Вы можете группировать свои устройства и управлять ими.</p>
      </div>

      <div id="lside">


      </div>

      <div>
        <button class="btn2" @click="showTree2 = !showTree2">Диспетчер устройств</button>
          <!-- <Tree v-if="showTree2" :treeData="mySystem2" /> -->
      </div>
    </div>
  </div>
</template>

<script>

import Tree from "./Tree.vue"

export default {
  name:'lside',

  data(){
    return{
      showTree: false,
      showTree2: false,
      root1:{
        name: 'Мой дом',
        children:[
          {
            name:'Кухня',
          },
          {
            name: 'Спальня',
          }
        ]
      }
    }
  },

    components:{
      Tree,
      showTree: false,
      showTree2: false,
    },

    methods:{
      showTree(){
        this.showTree = true
      },
      showTree2(){
        this.showTree2 = true
      }
    }
}
</script>

<style scoped>

.left {
  width: 20%;
  min-height: 100vh;
  float: left;
  background-color: #ccdbee;
  /* margin-top: 7px; */
  display: block;
  text-align: center;
  border-width: 4px;
  border-color: black;
}

.btn2 {
  width: 99%;
  height: 12.5vh;
  color: #dfe0e0;
  margin: 2px;
  border: 1px solid #dddddc;
  border-radius: 2px;
  background-color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 24px;
  cursor: pointer;
}

</style>
