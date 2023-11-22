import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$openAI = {};
router.beforeEach(function (to, from, next) {
  if (to.path === '/about') {
    window.$openAI && Object.keys(window.$openAI).length ? next() : next('/')
  } else {
    const routers =  router.options.routes && router.options.routes.length ? router.options.routes.map(r => r.path) : []
    routers.includes(to.path) ? next() : next(from.path)
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
