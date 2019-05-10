<template>
  <div>
    <div class="top">
      <nav>
          <div class="lcorner">
            <router-link class="home" to="/">LOGOHERE</router-link>
          </div>
      
          <div class="rcorner">
            <router-link class="reg" to="/alert">Alert</router-link>
            <router-link class="log" to="/login"><button class="btn-log">SignIN/UP</button></router-link>
          </div>
      </nav>
    </div>
    <div>
      <LRside />
      <Control />
      <Compon />
    </div>
  </div>
</template>

<script>
import Control from './Control'
import LRside from './LRside'
import Compon from './Compon'

export default {
  name: 'Header',
  components: {
    Control,
    LRside,
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
