import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"

Vue.config.productionTip = false
Vue.use(axios)

new Vue({
  render: h => h(App),
}).$mount('#app')
