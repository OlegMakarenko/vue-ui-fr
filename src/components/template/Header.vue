<template>
  <div>
    <div class="top">
      <img class="brand" 
           src="./backgroundFractal.png" 
           alt="fractal" 
           style="float: left;
                  margin-top: 5px; 
                  margin-left: 5px;" 
                  width="50" 
                  height="50" />
      <div class="header-text">
        <div class="header-brand">Fractal</div>
      </div>
      <nav>

          
            <i style="cursor: pointer; 
                      font-size: 30px; 
                      float: right; 
                      margin-top: 16px; 
                      margin-right: 5px;
                      color: #565656" 
                      class="fa fa-user-circle-o"></i>
          
      
          <!-- <div class="rcorner">
            <router-link class="reg" to="/alert">Alert</router-link>
          </div> -->

      </nav>
    </div>
      <Lside />
      <Main />
  </div>
</template>

<script>
import Lside from './Lside.vue'
import Main from './Main.vue'

export default {
  name: 'Header',
  components: {
    Main,
    Lside
  }
}
</script>

<style>

.top {
  background-color: #ffffff;
  width: 100%;
  height: 60px;
  /* padding-top: 15px; */
  padding-bottom: 0px;
  overflow: auto;
}

.home, .reg{
  padding: 5px;
}

.lcorner {
  top: 19px;
  float: left;
  position: fixed;
}

.rcorner {
  float: right;
}

.rcorner_icon{
  /* top:19px; */
  margin-top:-40px;
  float: right;
}

.header-text{
  float: left;
  margin-top: 15px;
  margin-left: 20px;
}

.header-brand {
  font-size: 27px;
  color: #565656;
}
</style>
