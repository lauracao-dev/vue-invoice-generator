import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueClipboard from 'vue-clipboard2'
import store from './plugins/vuex.js'

Vue.config.productionTip = false
VueClipboard.config.autoSetContainer = true 
Vue.use(VueClipboard)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

