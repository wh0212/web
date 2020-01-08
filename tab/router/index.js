import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=> import('../views/home/Home.vue')
const About = () => import('../views/about/About.vue')
const Cart = () => import('../views/cart/Shopp.vue')
const Profile = () => import('../views/profile/profile.vue')


Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
