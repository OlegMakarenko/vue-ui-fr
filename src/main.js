import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' 
//import VueTouch from 'vue-touch'
import ElementUI from 'element-ui'


import store from './store'
import routes from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter)
//Vue.use(VueTouch, {name: "v-touch"});
Vue.use(ElementUI)  

const router = new VueRouter({mode: 'history', routes});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
