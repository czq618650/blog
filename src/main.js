import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import VueLazyload from 'vue-lazyload'
// 全局运用拦截器
import "@/util/axios.config"
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/css/index.css"
Vue.config.productionTip = false
Vue.use(ElementUI)
// 2.注册插件
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // 懒加载默认加载图片
  loading: 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png',
  // 加载失败后加载的图片
  error: 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png',
  attempt: 1
  // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
  // listenEvents: [ 'scroll' ]
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
