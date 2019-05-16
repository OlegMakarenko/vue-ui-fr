<template>
  <div>
    <div class="top">
      <nav>
          <div class="lcorner">
            <router-link class="home" to="/">LOGOHERE</router-link>
          </div>
      
          <div class="rcorner">
            <router-link class="reg" to="/alert">Alert</router-link>
            <router-link class="log" to="/login"><i class="el-icon-user-solid"></i></router-link>
          </div>
      </nav>
    </div>
    <div>
      <Lside />
      <Compon />
    </div>
  </div>
</template>

<script>
import Lside from './Lside'
import Compon from './Compon'

export default {
  name: 'Header',
  components: {
    Lside,
    Compon
  }
}
</script>

<style>

  /* * {
    margin: 0;
    padding: 0;
  } */

.top {
  background-color: #e5e5e5;
  padding-top: 30px;
  padding-bottom: 30px;
  overflow: auto;
}

.home, .reg, .log {
  padding: 5px;
}

.lcorner {
  float: left;
}

.rcorner {
  float: right;
}
</style>
