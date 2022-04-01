import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/indexScreen.vue'
import Second from '../components/secondScreen.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/details',
        name: 'details',
        component: Second,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
