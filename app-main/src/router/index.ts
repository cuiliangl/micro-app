import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import _ from 'lodash'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main-home',
    component: () => import('../views/home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

/**
 *  问题： 在react应用中切换路由 再切换其他子应用时失败。报错
 *
 *  Error with push/replace State DOMException: Failed to execute 'replaceState' on 'History':
 *  A history state object with URL 'http://localhost:8023undefined/' cannot be created in a document with origin 'http://localhost:8023' and URL 'http://localhost:8023/app-react/test'.
 *
 *  解决历程：
 *  首先使用vue-router 跳转 失败，报以上错。
 *  不知道什么原因，然后使用原生qiankun 封装的原生js跳转 报一样的错误。于是打印每次跳转时路由的数据结构，发现在react中切换路由之后 currnet state 没有值。但是在切回vue其他子应用路由由vue-router接管以后，
 *  是需要根据history.state.current值的，所以在在导航首位中判断是否有current，没有就加上from.fullpath。
 *
 *
 */

//主应用使用的嵌套路由
router.beforeEach((to, from, next) => {
  // 手动修改history的state
  if (!history.state.current) {
    Object.assign(history.state, {
      current: from.fullPath
    })
  }

  next()
})

export default router
