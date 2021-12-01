import { createApp } from 'vue'
import App from './App.vue'
import routes from './router'
import { createRouter, createWebHistory } from 'vue-router'
import {
  renderWithQiankun,
  qiankunWindow
} from 'vite-plugin-qiankun/dist/helper'

let app: any

function render(props: any = {}) {
  const { container, routerBase = '/app-vue' } = props
  const router = createRouter({
    routes,
    history: createWebHistory(routerBase)
  })

  app = createApp(App)
  app.use(router).mount(container ? container.querySelector('#app') : '#app')
}

qiankunWindow.customxxx = 'ssss'

if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  console.log('我正在作为子应用运行')

  renderWithQiankun({
    bootstrap() {
      console.log('app-vue: bootstrap')
    },
    mount(props) {
      console.log('vue-app: mount 作为子应用运行')

      render(props)
    },
    unmount() {
      console.log('vue-app: unmount')
      app.unmount()
    }
  })
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()

  console.log('独立运行')
}
