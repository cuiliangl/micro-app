<template>
  <div class="main">
    <header class="main-header">
      <h2>主应用头部区域</h2>
      <button @click="updatehandle">update age</button>
    </header>
    <div class="container">
      <nav class="nav">
        <p>主应用菜单栏</p>
        <br />
        <ul>
          <router-link to="/">主应用视图</router-link>
          <li
            v-for="{ activeRule, name } in microApps"
            :key="name"
            :class="{ active: current === activeRule }"
            @click="goto(activeRule)"
          >
            {{ name }}
          </li>
        </ul>
      </nav>
      <div class="main-content">
        <router-view />
        <div id="micro-container"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { start } from 'qiankun'
import microApps from './micro-app'
import actions from './actions'

console.log(actions)

const updatehandle = () => {
  actions.setGlobalState({
    userInfo: {
      name: 'mike',
      age: 45
    }
  })
}

const router = useRouter()
const current = ref('main-view')

const goto = (activeRule: string) => {
  router.push(activeRule)
  current.value = activeRule
}

onMounted(() => {
  start({
    sandbox: {
      strictStyleIsolation: true
    }
  })
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style scoped>
.main-header {
  padding: 20px 0;
  background-color: pink;
}
.container {
  display: flex;
}
.main-content {
  padding: 30px;
}
ul {
  list-style: none;
}
.nav ul {
  color: #fff;
  background-color: orange;
}
li {
  padding: 20px 30px;
}
.active {
  color: red;
}
</style>
