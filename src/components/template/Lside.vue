<template>
  <div>
    <div class="left">
      <div>
        <button class="btn2" @click="showTree = !showTree">Моя система</button>
        <br>
          <Tree v-if="showTree" :treeData="mySystem" />
            <p class="allp">Здесь Вы можете группировать свои устройства и управлять ими.</p>
      </div>

      <div id="lside">
      <Tree
      :node="root"
      />
      </div>

      <div>
        <button class="btn2" @click="showTree2 = !showTree2">Диспетчер устройств</button>
          <Tree v-if="showTree2" :treeData="mySystem2" />
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
        root:{
          name: '/',
          children:[
            {
              name: 'house',
              children:[
                {
                  name:123123
                },
                {
                  name: '555',
                  children:[
                    {
                      name: '999'
                    }
                  ]
                }
              ]
            }

          ]
        }
      }
    },

    components:{
      Tree
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
