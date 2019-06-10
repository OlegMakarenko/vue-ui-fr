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
        icon: "el-icon-folder",
          children:[
            {
            name:'Мой дом',
            icon: "el-icon-folder",
              children:[
               {
                name: 'Кухня',
                icon: "el-icon-folder",
              },
               {
                name: 'Спальня',
                icon: "el-icon-folder",
              },
           ],
          },
            {
            name:'Дача',
              children:[
               {
                name: 'Пристройка',
                icon: "el-icon-folder",
              },
               {
                name: 'Гараж',
                icon: "el-icon-folder",
              },
           ],
          },
        ],
      },

      dispositif:{
        name: 'Диспетчер устройств',
        icon: "el-icon-search",
          children:[
            {
            name:'Регулятор на кухне дом',
            icon: "el-icon-odometer",
              children:[
               {
                name: 'Кухня',
                icon: "el-icon-odometr",
              },
               {
                name: 'Спальня',
                icon: "el-icon-odometr",
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
