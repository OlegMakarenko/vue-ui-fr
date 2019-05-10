import Logo from './components/template/Logo.vue'
import Alert from './components/template/Alert.vue'
import Login from './components//template/Login.vue'

const routes = [
    { path: '/', component: Logo },
    { path: '/alert', component: Alert },
    { path: '/login', component: Login }
];

export default routes;