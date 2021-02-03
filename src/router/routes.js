
import { createWebHistory, createRouter } from 'vue-router';
import Layout from '../components/Layout.vue';
import Auth from '../components/Auth.vue';
import NotFound from '../components/NotFound.vue'
const routes = [
    {
     path: '/',
     name: 'home',
     component: Layout,
     meta: {
       title: "LogSnap | Bug Tracking"
     }
     },
     {
         path: '/login',
         name: 'login',
         component: Auth,
         meta: {
             title: "Log in | LogSnap"
         }
     },
     {
         path: '/signup',
         name: 'signup',
         component: Auth,
         meta: {
             title: "Sign up | LogSnap"
         }
     },
     {
         path: "/:pathMatch(.*)*",
         component: NotFound,
         meta: {
             title: "404 | Not Found"
         }
     }
]
const router =  createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'exact-active',
  routes,
})

export default router;