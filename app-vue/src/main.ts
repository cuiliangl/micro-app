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
  app.use(router).mount(container || '#app')
}

if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  renderWithQiankun({
    bootstrap() {},
    mount(props) {
      render(props)
    },
    unmount() {
      app.unmount()
      app = null
    }
  })
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()

  console.log('独立运行')
}
