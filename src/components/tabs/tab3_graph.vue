<template>
  <div class="graph_manager">
    <div class="graph_header">
      Регулятор в пристройке <br><br>
      Графики
    </div>

    <div class="graph_settings">
      <button class="graph_button_data">21.12.2018 - 03.03.2019</button>
      <div class="graph_button_group">
        <button class="button_group_graph_first" style="color: white; background-color: #a5c1e9;">Температура</button>
        <button class="button_group_graph" style="color: #a5c1e9; background-color: white;">Напряжение</button>
        <button class="button_group_graph" style="color: white; background-color: #a5c1e9;">Ток</button>
        <button class="button_group_graph" style="color: #a5c1e9; background-color: white;">Мощность</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default{ 
    data() {
      return {
      }
    }
  }
</script>

<style>
.graph_manager{
  margin-left: 12.4%;
  width: 77%;
  height: 100%;
}

.graph_header{
  width: 100%; 
  height: 10%;
  text-align: center;
}

.graph_settings{
  width: 100%;
  height:20%;
  margin-top: 3%;
}

.graph_button_data{
  width: 35%;
  height: 70%;
  float: left;
  margin-top: 2%;
  margin-left: 9%;
  justify-content: baseline;
  font-size: 15px;
  color: white;
  background-color: #a5c1e9;
  border: none;
  border-radius: 4px;
}

.graph_button_group{
  width: 47%;
  height:100%;
  float: right;
  margin-left: 9%;
}

.button_group_graph_first{
  width: 20%;
  height: 70%;
  float: left;
  margin-top: 4%;
  display: table;
  align-content: stretch;
  justify-content: baseline;
  font-size: 15px;
  border: none;
  border-top: 1px solid #a5c1e9;
  border-left: 1px solid #a5c1e9;
  border-bottom: 1px solid #a5c1e9;
  color: white;
  background-color: #a5c1e9;
  word-wrap: break-word;
}

.button_group_graph{
  width: 20%;
  height: 70%;
  float: left;
  margin-top: 4%;
  display: table;
  align-content: stretch;
  justify-content: baseline;
  font-size: 15px;
  border: none;
  border-top: 1px solid #a5c1e9;
  border-right: 1px solid #a5c1e9;
  border-bottom: 1px solid #a5c1e9;
  word-wrap: break-word;
  /* border-left: none; */
}
</style>

