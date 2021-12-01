import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

function render(props = {}) {
  const { container, routerBase = '/app-react' } = props

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter basename={routerBase}>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    container
      ? container.querySelector('#root')
      : document.getElementById('root')
  )
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('react app bootstraped')
}

export async function mount(props) {
  render(props)
}

export async function unmount(props) {
  console.log('react 卸载了 ')
  ReactDOM.unmountComponentAtNode(
    props.container
      ? props.container.querySelector('#root')
      : document.getElementById('root')
  )
}
