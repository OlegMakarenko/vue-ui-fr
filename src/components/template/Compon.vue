<template>
    <div>
        <div class="compo">
            <p>some text here</p>
        </div>

        <!-- <el-main style="display: flex">
            <ComponentE
                v-for="item in dataForComponents"
                :title="item.title"
                :conten="item.content"
                :key="item.title"
            />
        </el-main> -->
    </div>
</template>

<script>

//import ComponentE from './components/ComponentE.vue'

export default {
//     components: {
//         ComponentE
//     },

//     data(){
//         return{
//             dataForComponents: [
//                 {title: 'Temperature device', content: 'Temp 10C'},
//                 {title: 'Himiditry device', content: 'Hum: 40%'}
//             ]
//         }
//     }
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

