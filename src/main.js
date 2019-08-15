import Vue from 'vue'
import App from './App.vue'
import ProgressBar from 'vuejs-progress-bar'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Chartkick.use(Chart))
Vue.use(ProgressBar)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
