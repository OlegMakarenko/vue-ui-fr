<template>
  <div>
    <div class="left">
      <div>
        <button class="btn2" @click="showTree = !showTree">Моя система</button>
        <br>
          <Tree v-if="showTree" :treeData="mySystem" />
          <Tree v-if="showTree" :treeData="[{children:[{}]}]" />
            <p class="allp">Здесь Вы можете группировать свои устройства и управлять ими.</p>
      </div>

      <div>
        <button class="btn2">Диспетчер устройств</button>
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
        mySystem: [{
          id: 1,
          label: 'Мой дом',

          children: [{
            id: 4,
            label: 'Спальня',
            children: [{
                id: 9,
                label: 'Кухня'
            }, {
                id: 10,
                label: 'Ванная'
            }]
            }]
            }, {

            id: 2,
            label: 'Дача',
            children: [{
                id: 5,
                label: 'Пристройка'
            }, {
                id: 6,
                label: 'Гараж'
            }]
            }, {

            id: 3,
            label: 'Дом родителей',
                children: [{
                    id: 7,
                    label: 'Кухня'
                }, {
                    id: 8,
                    label: 'Сад'
                }]
        }]
      }
    },

    components:{
      Tree
    }
}
</script>

<style>

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
