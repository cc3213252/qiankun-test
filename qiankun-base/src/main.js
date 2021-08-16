import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import {registerMicroApps, start} from 'qiankun'

const apps = [
  {
    name: 'vueApp', // 应用名
    entry: "//localhost:10001", // 默认会加载这个html，解析里面的js动态的执行（子应用必须支持跨域）http可以不写
    container: '#vue', // 容器名
    activeRule: '/vue' // 激活的路径
  },
  {
    name: 'reactApp',
    entry: "//localhost:20000", // 默认会加载这个html，解析里面的js动态的执行（子应用必须支持跨域）
    container: '#react',
    activeRule: '/react',
    props: {a:1}
  }
]
registerMicroApps(apps); // 注册应用
start({
  prefetch: false // 取消预加载
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
