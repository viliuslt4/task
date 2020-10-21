import Vue from 'vue'
import App from './App.vue'
import Routes from './router'
import VueRouter from 'vue-router'
import store from '@/store'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes: Routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

Vue.config.productionTip = false

new Vue({
  router:router,
  store,
  render: h => h(App),
}).$mount('#app')
