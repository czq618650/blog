import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: ()=>import('../views/Home/home.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import('../views/Login/login.vue')
  },
  {
    path:"/register",
    name:"register",
    component:()=>import('../views/Register/Register.vue')
  },
  {
    path:"/battle",
    name:"battle",
    component:()=>import('../views/Battle/Battle.vue')
  },  {
    path:"/life",
    name:"life",
    component:()=>import('../views/Life/Life.vue')
  },  {
    path:"/interact",
    name:"interact",
    component:()=>import('../views/Interact/Interact.vue')
  },  {
    path:"/about",
    name:"about",
    component:()=>import('../views/About/About.vue')
  },  {
    path:"/record",
    name:"record",
    component:()=>import('../views/Record/Record.vue')
  },
  {
    path:"/write-life",
    name:"writelife",
    component:()=>import('../views/WriteLife/WriteLife.vue')
  },
  {
    path:"/write-blog",
    name:"writeblog",
    component:()=>import('../views/WriteBlog/WriteBlog.vue')
  },     
  {
    path:"/BlogDetails/:id",
    name:"BlogDetails",
    component:()=>import('../views/BlogDetails/BlogDetails.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
