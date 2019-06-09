<template>
  <div>
    <div class="left">
<br>
      <div>
        <Tree
         :node="system"
         :treeData="system"
        />
      </div>

      <div>
        <Tree
         :node="dispositif"
         :treeData="dispositif"
        />
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
      system:{
        name: 'Моя система',
          children:[
            {
            name:'Мой дом',
              children:[
               {
                name: 'Кухня',
              },
               {
                name: 'Спальня',
              },
           ],
          },
            {
            name:'Дача',
              children:[
               {
                name: 'Пристройка',
              },
               {
                name: 'Гараж',
              },
           ],
          },
        ],
      },

      dispositif:{
        name: 'Диспетчер устройств',
          children:[
            {
            name:'Регулятор на кухне дом',
              children:[
               {
                name: 'Кухня',
              },
               {
                name: 'Спальня',
              },
           ],
          },
            {
            name:'Регулятор на улице дом',
              children:[
               {
                name: 'Пристройка',
              },
               {
                name: 'Гараж',
              },
           ],
          },
        ],
      },
    }
  },

    components:{
      Tree,
    },

    methods:{

    }
}
</script>

<style scoped>

.left {
  line-height: 2;
  width: 20%;
  min-height: 100vh;
  float: left;
  background-color: #ebeef5;
  /* margin-top: 7px; */
  display: block;
  text-align: center;
  border-width: 4px;
  border-color: black;
}



</style>
