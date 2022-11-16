import { createRouter, createWebHashHistory } from "vue-router";
// import { Login, Home, Register } from '../subpages'
import Login from '../router/Login.vue'
import Home from '../router/Main.vue'
import Register from '../router/Register.vue'
import VueRouter from 'vue-router'



const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
            path: '/', redirect: '/home', component: Home
        },
        {
            path: '/login', name: 'login', component: Login
        },
        {
            path: '/register', name:'register', component: Register
        }
    ],
})

export default router