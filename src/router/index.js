// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from "../pages/MSite/MSite.vue"
import Search from "../pages/Search/Search.vue"
import Order from "../pages/Order/Order.vue"
import Profile from "../pages/Profile/Profile.vue"
const originalPush = VueRouter.prototype.push
//声明使用插件
Vue.use(VueRouter)
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new VueRouter({
  routes:[
    {
      path: '/msite',
      component:MSite
    },
    {
      path: '/search',
      component:Search
    },
    {
      path: '/order',
      component:Order
    },
    {
      path: '/profile',
      component:Profile
    },
    {
      path: '/',
      redirect:'/msite'
    }
  ]
})
