import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Axios, VueAxios)
Vue.prototype.$http = Axios

new Vue({
  render: h => h(App),
}).$mount('#app')
