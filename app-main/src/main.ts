import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import apps from './micro-app'
import { registerMicroApps, addGlobalUncaughtErrorHandler } from 'qiankun'
import './actions'

// 注册微应用
registerMicroApps(apps)

// 全局的未捕获异常处理器
addGlobalUncaughtErrorHandler(event => {
  console.log(event)
})

createApp(App).use(router).mount('#app')
