const microApps = [
  {
    name: 'app-vue',
    entry: import.meta.env.VITE_APP_SUB_VUE as string,
    activeRule: '/app-vue'
  },
  {
    name: 'app-react',
    entry: import.meta.env.VITE_APP_SUB_REACT as string,
    activeRule: '/app-react'
  },
  {
    name: 'hello-word',
    entry: import.meta.env.VITE_APP_SUB_HELLO_WORLD as string,
    activeRule: '/hello-world'
  }
]

const apps = microApps.map(app => {
  return {
    ...app,
    container: '#micro-container',
    props: {
      routerBase: app.activeRule // 下发基础路由
    }
  }
})

export default apps
