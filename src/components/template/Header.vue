<template>
  <div>
    <div class="top">
      <nav>
          <div class="lcorner">
            <router-link class="home" to="/">LOGOHERE</router-link>
          </div>

          <div class="rcorner_icon">
            <i style="cursor: pointer; font-size: 30px;" class="el-icon-user-solid"></i>
          </div>
      
          <div class="rcorner">
            <router-link class="reg" to="/alert">Alert</router-link>
          </div>

          
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

  /* * {
    margin: 0;
    padding: 0;
  } */

.top {
  background-color: #ffffff;
  height: 11vh;
  /* padding-top: 30px; */
  /* padding-bottom: 30px; */
  overflow: auto;
}

.home, .reg{
  padding: 5px;
}

.lcorner {
  margin-top: 2.1%;
  float: left;
  position: fixed;
}

.rcorner {
  margin-top: 2.1%;
  float: right;
}

.rcorner_icon{
  margin-top: 1.8%;
  float: right;
}
</style>
