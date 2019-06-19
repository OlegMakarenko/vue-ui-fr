<template>
  <div id="app">
    <el-container v-if="!isLoggedIn" class="container">
      <Auth/>
    </el-container>
    <Header v-else/>
  </div>
</template>

<script>

import Auth from './Auth'
import Header from './components/template/Header'

export default {
  name: 'app',
  components: {
    Header,
    Auth
  },

  computed:{
    isLoggedIn(){
      return this.$store.getters.isLoggedIn;
    }
  }
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300ita‌​lic,400italic,500,500italic,700,700italic,900italic,900);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);

body {
  margin: 0;
  overflow: hidden;
  font-family: "Roboto";

  .app {
    height: 100vh;
    width: 100vw;

    .container{
      height: 100vh;
    }
  }
}

.noselect {
-webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                supported by Chrome and Opera */
}
</style>
