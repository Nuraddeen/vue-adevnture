import { createRouter, createWebHistory } from 'vue-router'

import TasksList from "../views/TasksList.vue"
import Home from "../views/Home.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/my-tasks',
            name: 'tasks',
            component: TasksList
        }

    ]
})


export default router

