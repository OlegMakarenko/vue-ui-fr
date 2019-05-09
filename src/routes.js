import Logo from './components/Logo.vue'
import Alert from './components/Alert.vue'
import Login from './components/Login.vue'

const routes = [
    { path: '/', component: Logo },
    { path: '/alert', component: Alert },
    { path: '/login', component: Login }
];

export default routes;