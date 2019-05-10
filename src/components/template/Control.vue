<template>
    <div class="center">
      <h5 style="float: left; margin: 2px 0px 0px 2px">Device Manager</h5><br>
      <button class="btn1">+Подключить устройство</button>
      <button class="btn3">I</button>
      <button class="btn4">P</button>
    </div>
</template>

<script>

import ModalW from '../modalwindow/ModalW'

export default {
    components:{
      ModalW
    }
}
</script>

<style>
.center {
  width: 60%;
  height: 13vh;
  float: left;
  margin-top: 7px;
  background-color: #ccc;
}

.btn1 {
  width: 20%;
  float: left; 
  margin: 4px 2px 2px 4px;
  border: none;
  border-radius: 5px;
  background-color: blue;
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
  background-color: none;
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
 }
</style>
