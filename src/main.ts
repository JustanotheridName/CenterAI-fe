import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './plugins/vuei18n'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  i18n
}).$mount('#app')
