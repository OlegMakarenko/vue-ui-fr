import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' 
import ElementUI from 'element-ui'
import "./style/theme/index.css"
//import VueTouch from 'vue-touch'
// import "element-ui/lib/theme-chalk/index.css";
import locale from 'element-ui/lib/locale/lang/en'

import store from './store'
import routes from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter)
//Vue.use(VueTouch, {name: "v-touch"});
Vue.use(ElementUI, { locale })

const router = new VueRouter({mode: 'history', routes});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
