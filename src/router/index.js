import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Code from '../views/Code.vue'
import Cv from '../views/Cv.vue'
import Projet from '../views/Projet.vue'
import NotFound from '../views/NotFound.vue'
import Mentions from '../views/Mentions.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/projet',
    name: 'projet',
    component: Projet,
  },
  {
    path: '/code',
    name: 'code',
    component: Code
  },
  {
    path: '/cv',
    name: 'cv',
    component: Cv
  },
  {
    path: '/mentions',
    name: 'mentions',
    component: Mentions
  },
  { path: '/404', component: NotFound },  
  { path: '*', redirect: '/404' }, 
]

const router = new VueRouter({
/*   mode: 'history',
 */  routes
})

export default router
