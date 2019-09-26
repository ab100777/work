import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import  VueResource  from 'vue-resource'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(axios, VueAxios, VueResource)

new Vue({
  render: h => h(App),
}).$mount('#app')
