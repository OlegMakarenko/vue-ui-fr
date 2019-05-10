<template>
    <div>
        <div class="compo">
            <div style="display: flex">
            <ComponentE
                v-for="item in dataForComponents"
                :title="item.title"
                :content="item.content"
                :key="item.title"
            />
        </div>
        </div>        
    </div>
</template>

<script>

import ComponentE from '../ComponentE.vue'

export default {
    components: {
        ComponentE
    },

    data(){
        return{
            dataForComponents: [
                { title: " Temperature device", content: "Temp 10C" },
                { title: " Himiditry device", content: "Hum: 40%" }
            ],
        }
    },
}
</script>


<style>
.compo {
  width: 60%;
  height: 87vh;
  float: left;
  text-align: center;
  background-color: whitesmoke;
  
}
</style>

