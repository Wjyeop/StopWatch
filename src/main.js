import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'  //부트스트랩 쓰기 위한 코드
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

// Import Bootstrap an BootstrapVue CSS files (order is important)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
