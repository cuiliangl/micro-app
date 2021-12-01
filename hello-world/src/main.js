import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './router'

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

let app = null

function render(props = {}) {
  const { container, routerBase } = props
  const router = createRouter({
    history: createWebHistory(
      window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL
    ),
    routes
  })

  app = createApp(App).use(router)
  app.mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('[vue] hello-world bootstraped')
}

export async function mount(props) {
  render(props)
}

export async function unmount() {
  app.unmount()
}
