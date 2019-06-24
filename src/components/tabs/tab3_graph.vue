<template>
  <div class="graph_manager">
    <div class="graph_header">
      Регулятор в пристройке <br><br>
      Графики
    </div>

    <div class="graph_settings">
      <button class="graph_button_data">21.12.2018 - 03.03.2019</button>
      <div class="graph_button_group">
        <div class="switch_button_graph">
          
          <input type="radio" id="radio-one" name="switch-one" value="1" checked/>
            <label for="radio-one"><div style="margin-top: 37%;">Температура</div></label>
          
          <input type="radio" id="radio-two" name="switch-one" value="2" />
            <label for="radio-two"><div style="margin-top: 37%;">Напряжение</div></label>
          
          <input type="radio" id="radio-three" name="switch-two" value="3" checked/>
            <label for="radio-three"><div style="margin-top: 37%;">Ток</div></label>
          
          <input type="radio" id="radio-four" name="switch-two" value="4" />
            <label for="radio-four"><div style="margin-top: 37%;">Мощность</div></label>
        
        </div>
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

.switch_button_graph {
	display: flex;  
  justify-content: baseline;
  margin-top: 4%;
  width: 100%;
  height: 70%;
}

.switch_button_graph input {
	position: absolute;
  height: 1px;
	width: 1px;
	border: 0;
	overflow: hidden;
}

.switch_button_graph label {
  width: 20%;
	font-size: 14px;
	color: white;
	background-color: white;
	text-align: center;
	border: 1px solid #eee;
	transition: all 0.1s ease-in-out;
}

.switch_button_graph label:hover {
	cursor: pointer;
}

.switch_button_graph input:checked + label {
	background-color: #a5c1e9;
	box-shadow: none;
}

.switch_button_graph label:first-of-type {
	border-radius: 4px 0 0 4px;
}

.switch_button_graph label:last-of-type {
	border-radius: 0 4px 4px 0;
}
</style>

