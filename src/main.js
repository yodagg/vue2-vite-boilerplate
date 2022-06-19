import Vue from 'vue'
import router from './router/index.js'
import store from './store/index.js'
import i18n from './i18n/index.js'
import App from './App.vue'
import './styles/index.scss'

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
