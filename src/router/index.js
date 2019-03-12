import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/goods'
import Pinglun from '@/components/pinglun/pinglun'
import XiangQing from '@/components/xiangqing/xiangqing'
import GoodsList from '@/components/goodsList/goodsList'
// import { resolve } from 'url';

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      redirect: '/Goods',
      component: Goods
    },
    {
      path: '/Goods',
      name: 'Goods',
      component: Goods,
      children: [{
        path: '/GoodsList',
        name: 'GoodsList',
        component: GoodsList
      }]
    },
    {
      path: '/Pinglun',
      name: 'Pinglun',
      component: Pinglun
    },
    {
      path: '/XiangQing',
      name: 'XiangQing',
      component: XiangQing
    },
    {
      path: '/tinymce',
      name: 'tinymce',
      component: (resolve) => require(['@/components/themeSwitch'], resolve)
    }
  ]
})
