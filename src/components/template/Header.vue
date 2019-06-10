<template>
  <div>
    <div class="top">
      <nav>
          <div class="lcorner">
            <router-link class="home" to="/">LOGOHERE</router-link>
          </div>

          <!-- <div class="rcorner_icon">
            <i style="cursor: pointer; font-size: 30px;" class="el-icon-user-solid"></i>
          </div> -->
      
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

.top {
  background-color: #ffffff;
  width: 100%;
  height: 10%;
  padding-top: 15px;
  padding-bottom: 20px;
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
  top:19px;
  float: right;
}
</style>
