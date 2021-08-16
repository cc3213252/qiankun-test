import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

let instance = null

function render(){
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app');  // 这里是挂载到自己的html中， 基座会拿到这个挂载后的html，将其插入进去
}

// 设置动态public_path
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

// 不用qiankun框架时可以独立运行
if (!window.__POWERED_BY_QIANKUN__){
  render()
}
// 子组件的协议就ok了
export async function bootstrap(){}
export async function mount(props){
  console.log(props)
  render(props)
}
export async function unmount(){
  instance.$destroy()
}