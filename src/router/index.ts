import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'  // 重定向
        },
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/',
            component: () => import('@/pages/hospital/index.vue')
        },
    ],
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})